import React, { useState } from "react";
import "../component/css/Mypage.css";
import { AiOutlineComment } from "react-icons/ai";
import { FaUserAltSlash } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Mypage = ({
  fakeUser,
  fakeContent,
  fakeComment,
  userLogout,
  closeLoginModal,
}) => {
  const [isModify, setisModify] = useState(false);
  const [listCheck, setlistCheck] = useState(true);
  const history = useHistory();
  const handleLogout = () => {
    userLogout();
    closeLoginModal();
    history.push("/");
  };

  const userPostList = () => {
    if (listCheck) {
      return fakeContent === null ? (
        <>
          <h1 className="h1PostComment" style={{ color: "#9a9a9a" }}>
            아직 작성한 게시물이 없습니다.
          </h1>
          <h1 className="h1PostComment" style={{ color: "#9a9a9a" }}>
            게시물을 작성해보세요 !
          </h1>
          <AiOutlineComment
            className="iconPostComment"
            style={{ color: "#9a9a9a" }}
            size="80"
          />
        </>
      ) : (
        <>
          <div className="userPostList">
            <span className="userId">{fakeUser.nickname}</span>
            <div className="userContent">{fakeContent.title}</div>
          </div>
          <hr></hr>
        </>
      );
    } else {
      return fakeComment === null ? (
        <>
          <h1 className="h1PostComment" style={{ color: "#9a9a9a" }}>
            아직 작성한 댓글이 없습니다.
          </h1>
          <h1 className="h1PostComment" style={{ color: "#9a9a9a" }}>
            댓글을 작성해보세요 !
          </h1>
          <AiOutlineComment
            className="iconPostComment"
            style={{ color: "#9a9a9a" }}
            size="80"
          />
        </>
      ) : (
        <>
          <div className="userCommentList">
            <span className="userId">{fakeUser.nickname}</span>
            <div className="userContent">{fakeComment.content}</div>
          </div>
          <hr></hr>
        </>
      );
    }
  };
  const userInfoTable = () => {
    if (isModify) {
      return fakeUser === null ? (
        <>
          <FaUserAltSlash
            style={{ color: "#9a9a9a", marginLeft: "200" }}
            size="80"
          />
          <div className="userNotFound"> 회원정보가 존재하지 않습니다</div>
        </>
      ) : (
        <>
          <table className="userInfoTable">
            <tr>
              아이디(이메일)
              <td>{fakeUser.email}</td>
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
              <td>{fakeUser.birth}</td>
            </tr>
          </table>
        </>
      );
    } else {
      return fakeUser === null ? (
        <>
          <FaUserAltSlash
            style={{ color: "#9a9a9a", marginLeft: "200" }}
            size="80"
          />
          <div className="userNotFound"> 회원정보가 존재하지 않습니다</div>
        </>
      ) : (
        <table className="userInfoTable">
          <tr>
            아이디(이메일)
            <td>{fakeUser.email} </td>
          </tr>
          <tr>
            이름
            <td>{fakeUser.name} </td>
          </tr>
          <tr>
            닉네임
            <td>{fakeUser.nickname} </td>
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
            <td>{fakeUser.birth}</td>
          </tr>
        </table>
      );
    }
  };
  return fakeUser === null ? (
    <div>
      FakeUser가 Null 일 경우 에러 떠서 보기싫어가지고 일단 임시로 이걸 열어
      놨습니다!
    </div>
  ) : (
    <div>
      <h1 className="mypageTitle">회원정보</h1>
      <hr></hr>
      <div className="userInfoArea">
        <div className="pictureArea">
          <img className="userImage" src={fakeUser.image} />
          <button className="pictureBtn">사진 변경</button>
        </div>
        {userInfoTable()}
      </div>
      <div className="modifyBtnDiv">
        {isModify ? (
          <>
            <button className="userModifyAccessBtn">확인</button>
            <button
              className="userModifyCancelBtn"
              onClick={() => {
                setisModify(false);
              }}
            >
              취소
            </button>
          </>
        ) : (
          <>
            <button
              className="userModifyBtn"
              onClick={() => {
                setisModify(true);
              }}
            >
              회원정보 수정
            </button>
            <button className="userLeaveBtn" onClick={() => {}}>
              회원 탈퇴
            </button>
          </>
        )}
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

      <button className="logoutBtn" onClick={handleLogout}>
        로그아웃
      </button>
    </div>
  );
};

export default Mypage;
