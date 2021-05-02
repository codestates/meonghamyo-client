import React, { useState } from "react";
import "../component/css/Mypage.css";
import { useHistory } from "react-router-dom";
import UserInfoTable from "../component/UserInfoTable";
import UserPostList from "../component/UserPostList";
import axios from "axios";
import Footer from "../component/Footer";

const Mypage = ({
  currentUser,
  fakeContent,
  fakeComment,
  userLogout,
  closeLoginModal,

}) => {
  
  const [listCheck, setlistCheck] = useState(true);
  const history = useHistory();

  const handleLogout = () => {
    

    axios.post('https://localhost:4000/mypage/logout')
    .then(res => {
      userLogout(); 
      closeLoginModal();
      history.push("/");
    })
  };

  return currentUser === null ? (
    <div>
      currentUser가 Null 일 경우 에러 떠서 보기싫어가지고 일단 임시로 이걸 열어
      놨습니다!
    </div>
  ) : (
    <div>
      <h1 className="mypageTitle">회원정보</h1>
      <hr></hr>
      <div className="userInfoArea">
        <div className="pictureArea">
          <img className="userImage" src={currentUser.img} />
          <button className="pictureBtn">사진 변경</button>
        </div>
        <UserInfoTable
          currentUser={currentUser}
        />
      </div>
      <div className="postList">
        <h1>내가 쓴 글 리스트</h1>
        <div className="listBtnDiv">
          <button
            className="userPostListBtn"
            onClick={() => {
              setlistCheck(true);
            }}
          >
            게시글
          </button>
          <button
            className="userCommentListBtn"
            onClick={() => {
              setlistCheck(false);
            }}
          >
            댓글
          </button>
        </div>
        <UserPostList
          listCheck={listCheck}
          fakeContent={fakeContent}
          fakeComment={fakeComment}
          currentUser={currentUser}
        />
      </div>

      <button className="logoutBtn" onClick={handleLogout}>
        로그아웃
      </button>
      <Footer />
    </div>
  );
};

export default Mypage;
