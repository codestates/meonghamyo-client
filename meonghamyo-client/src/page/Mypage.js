import React, { useState } from "react";
import "../component/css/Mypage.css";
import { AiOutlineComment } from 'react-icons/ai';
const Mypage = (props) => {
  const [isModify, setisModify] = useState(false);
  const [listCheck, setlistCheck] = useState(true);

  const userPostList = () => {
    if (listCheck) {
      return (
        <>
          <div className="userPostList">
            <span className="userId">hide on bush</span>
            <div className="userContent">안녕하세요 분양 어쩌구 저쩌구</div>
          </div>
          <hr></hr>
          <div className="userPostList">
            <span className="userId">hide on bush</span>
            <div className="userContent">안녕하세요 프로젝트 입니다</div>
          </div>
          <hr></hr>
        </>
      );
    } else {
      return (
        <>
          <h1 style={{ color: "#9a9a9a" }}>
             아직 작성한 댓글이 없습니다.
          </h1>
          <h1 style={{ color: "#9a9a9a" }}>댓글을 작성해보세요 !</h1>
          <AiOutlineComment style={{ color: "#9a9a9a" }} size="80"/> 
        </>
      );
    }
  };
  const userInfoTable = () => {
    if (isModify) {
      return (
        <>
          <table className="userInfoTable">
            <tr>
              아이디(이메일)
              <td>tes123213t@gmail.com </td>
            </tr>
            <tr>
              이름
              <td>
                <input className="inputName" type="text" />
              </td>
            </tr>
            <tr>
              닉네임
              <td>
                <input className="inputNickName" type="text" />
              </td>
            </tr>
            <tr>
              생년월일
              <td>2021/04/28</td>
            </tr>
          </table>
        </>
      );
    } else {
      return (
        <table className="userInfoTable">
          <tr>
            아이디(이메일)
            <td>test@gmail.com </td>
          </tr>
          <tr>
            이름
            <td>카밀 </td>
          </tr>
          <tr>
            닉네임
            <td>hide on bush </td>
          </tr>
          <tr>
            비밀번호 변경
            <td>
              현재 비밀번호
              <input className="currentPwd" type="password" />
              <br />
              <br />
              새 비밀번호
              <input className="newPwd" type="password" />
              <br />
              <br />
              비밀번호 다시 입력
              <input className="newPwdCheck" type="password" />
              <br />
              <br />
              <button className="userPwdModifyBtn">비밀번호 변경</button>
            </td>
          </tr>
          <tr>
            생년월일
            <td>2021/04/28</td>
          </tr>
        </table>
      );
    }
  };
  return (
    <div>
      <h1 className="mypageTitle">회원정보</h1>
      <hr></hr>
      <div className="userInfoArea">
        <div className="pictureArea">
          <img
            className="userImage"
            src="https://pbs.twimg.com/profile_images/1021436156347539456/TGv26B8O_400x400.jpg"
          />
          <button className="pictureBtn">사진 변경</button>
        </div>
        {userInfoTable()}
      </div>
      <div className="modifyBtnDiv">
        {isModify ? (
          <>
            <button className="userModifyAccessBtn">확인</button>
            <button className="userModifyCancelBtn" onClick={()=>{setisModify(false)}}>취소</button>
          </>
        ) : (
          <>
            <button className="userModifyBtn" onClick={()=>{setisModify(true)}}>
              회원정보 수정
            </button>
            <button className="userLeaveBtn" onClick={()=>{}}>회원 탈퇴</button>
          </>
        )}
        {/* <button className="userModifyBtn" onClick={modifyToggle}>
          회원정보 수정
        </button>
        <button className="userLeaveBtn">회원 탈퇴</button> */}
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
        {userPostList()}
      </div>

      <button className="logoutBtn">로그아웃</button>
    </div>
  );
};

export default Mypage;
