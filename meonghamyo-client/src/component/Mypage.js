import React from "react";
import "./css/Mypage.css";
const Mypage = () => {
  return (
    <div>
      <div className="userInfoArea">
        <div className="pictureArea">
          <img
            className="userImage"
            src="https://pbs.twimg.com/profile_images/1021436156347539456/TGv26B8O_400x400.jpg"
          />
          <button className="pictureBtn">사진 변경</button>
        </div>
        <div className="userInfoText">
          <div>아이디 : altanis1223@gmail.com</div>
          <div>이름 : 홍윤기</div>
          <div>닉네임 : Altanis7</div>
          <div>생년월일 : 2021/04/28</div>
        </div>
      </div>
      <div className="btnDiv">
        <button className="userModifyBtn">회원정보 수정</button>
        <button className="userLeaveBtn">회원 탈퇴</button>
      </div>
      <div className="postList">
        <div>내가 쓴 글 리스트</div>
        <div className="userPostList">
          <span className="userId">Altanis7</span>
          <div className="userContent">안녕하세요 분양 어쩌구 저쩌구</div>
        </div>
        <div className="userPostList">
          <span className="userId">Altanis7</span>
          <div className="userContent">안녕하세요 프로젝트 입니다</div>
        </div>
      </div>

      <button className="logoutBtn">로그아웃</button>
    </div>
  );
};

export default Mypage;
