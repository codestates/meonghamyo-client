import axios from "axios";
import React, { useState } from "react";
import "./css/LeaveModal.css";
function LeaveModal({ open, close }) {

  return (
    <div>
      {open ? (
        <div id="leaveModal" className="modal">
          <div className="leaveBlock">
            <span className="close" onClick={close}>
              &times;
            </span>
            <div>정말 탈퇴하시겠습니까?</div>
              <button className="okBtn" >
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
