import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./css/LeaveModal.css";
axios.defaults.withCredentials = true;
function LeaveModal({ open, close, userLogout }) {
  const history = useHistory();

  const handleLeave = () => {
    axios.delete("https://localhost:4000/mypage/userdelete").then((res) => {
      alert('회원 탈퇴가 완료되었습니다.')
      userLogout();
      close();
      history.push("/");
    });
  };
  return (
    <div>
      {open ? (
        <div id="leaveModal" className="modal">
          <div className="leaveBlock">
            <span className="close" onClick={close}>
              &times;
            </span>
            <div>정말 탈퇴하시겠습니까?</div>
            <button className="okBtn" onClick={handleLeave}>
              확인
            </button>
            <button className="okBtn" onClick={close}>
              취소
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default LeaveModal;
