import axios from "axios";
import React, { useState } from "react";
import { FaUserAltSlash } from "react-icons/fa";
import LeaveModal from "../component/LeaveModal";
axios.defaults.withCredentials = true;
const UserInfoTable = ({ currentUser, userLogout, handleCurrentUser }) => {
  const [modifiedUserInfo, setmodifiedUserInfo] = useState({});
  const [isModify, setisModify] = useState(false);
  const [runLeave, setRunLeave] = useState(false);
  

  const pwdCheck = (value) => {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합

    if (!regExp.test(value)) {
      console.log("패스워드 불일치");
    } else {
      console.log("패스워드 일치");
      return regExp.test(value);
    }
  };

  const nameCheck = (value) => {
    var regExp = /^[가-힣]{2,4}$/;

    if (!regExp.test(value)) {
      console.log("이름 불일치");
    } else {
      console.log("이름 일치");
      return regExp.test(value);
    }
  };

  const nicknameCheck = (value) => {
    var regExp = /^[가-힣]{2,6}$/;

    if (!regExp.test(value)) {
      console.log("닉네임 불일치");
    } else {
      console.log("닉네임 일치");
      return regExp.test(value);
    }
  };

  const inputValue = (key) => (e) => {
    if (
      key === "password" ||
      (key === "newpassword" && pwdCheck(e.target.value)) ||
      (key === "newpasswordCheck" && pwdCheck(e.target.value)) ||
      (key === "name" && nameCheck(e.target.value)) ||
      (key === "nickname" && nicknameCheck(e.target.value))
    ) {
      let newmodifiedUserInfo = { ...modifiedUserInfo };
      newmodifiedUserInfo = { ...newmodifiedUserInfo, [key]: e.target.value };
      setmodifiedUserInfo(newmodifiedUserInfo);
    }
  };

  const onOffLeaveModal = () => {
    if (!runLeave) {
      setRunLeave(true);
    } else {
      setRunLeave(false);
    }
  };

  const handleUserInfo = () => {
    if (modifiedUserInfo.name && modifiedUserInfo.nickname) {
      axios
        .put("https://localhost:4000/mypage/userupdate", {
          name: modifiedUserInfo.name,
          birth: currentUser.birth,
          password: modifiedUserInfo.newpassword,
          nickname: modifiedUserInfo.nickname,
          img: currentUser.img,
        })
        .then((res) => {
          alert("회원 정보가 변경되었습니다.");
          return axios.get("https://localhost:4000/mypage/userinfo");
        })
        .catch((err) => err)
        .then((res) => {
          setisModify(false);
          handleCurrentUser(res.data.data[0].userInfo);
        });
    } else {
      console.log("입력이 충분하지 않습니다.");
    }
  };

  const handlePwd = () => {
    if (currentUser.password === modifiedUserInfo.password) {
      if (modifiedUserInfo.newpassword === modifiedUserInfo.newpasswordCheck) {
        axios
          .put("https://localhost:4000/mypage/userupdate", {
            name: currentUser.name,
            birth: currentUser.birth,
            password: modifiedUserInfo.newpassword,
            nickname: currentUser.nickname,
            img: currentUser.img,
          })
          .then((res) => {alert("비밀번호 변경 완료!")
          document.querySelector('.currentPwd').value = '';
          document.querySelector('.newPwd').value = '';
          document.querySelector('.newPwdCheck').value = '';
        
        });
      } else {
        alert("변경할 비밀번호들이 일치하지 않습니다");
      }
    } else {
      alert("현재 비밀번호가 일치하지 않습니다.");
    }
  };
  return (
    <>
      {isModify === true ? (
        currentUser === null ? (
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
                <td>{currentUser.email}</td>
              </tr>
              <tr>
                이름
                <td>
                  <input
                    className="inputName"
                    type="text"
                    onChange={inputValue("name")}
                  />
                </td>
              </tr>
              <tr>
                닉네임
                <td>
                  <input
                    className="inputNickName"
                    type="text"
                    onChange={inputValue("nickname")}
                  />
                </td>
              </tr>
              <tr>
                생년월일
                <td>{currentUser.birth}</td>
              </tr>
            </table>
          </>
        )
      ) : currentUser === null ? (
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
            <td>{currentUser.email} </td>
          </tr>
          <tr>
            이름
            <td>{currentUser.name} </td>
          </tr>
          <tr>
            닉네임
            <td>{currentUser.nickname} </td>
          </tr>
          <tr>
            비밀번호 변경
            <td>
              현재 비밀번호
              <input
                className="currentPwd"
                type="password"
                onChange={inputValue("password")}
              />
              {currentUser.password === modifiedUserInfo.password ? (
                <div className="accessDiv">비밀번호가 확인 되었습니다.</div>
              ) : (
                  null
              )}
              <br />
              <br />
              새 비밀번호
              <input
                className="newPwd"
                type="password"
                onChange={inputValue("newpassword")}
              />
              <br />
              <br />
              비밀번호 다시 입력
              <input
                className="newPwdCheck"
                type="password"
                onChange={inputValue("newpasswordCheck")}
              />
              {modifiedUserInfo.newpassword !== undefined && modifiedUserInfo.newpassword === modifiedUserInfo.newpasswordCheck ? 
                <div className="accessDiv">사용 가능한 비밀번호 입니다.</div>: null}
              <br />
              <br />
              <button className="userPwdModifyBtn" onClick={handlePwd}>
                비밀번호 변경
              </button>
            </td>
          </tr>
          <tr>
            생년월일
            <td>{currentUser.birth}</td>
          </tr>
        </table>
      )}
      <div className="modifyBtnDiv">
        {isModify ? (
          <>
            <button className="userModifyAccessBtn" onClick={handleUserInfo}>
              확인
            </button>
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
            <button className="userLeaveBtn" onClick={onOffLeaveModal}>
              회원 탈퇴
            </button>
            <LeaveModal
              open={runLeave}
              close={onOffLeaveModal}
              userLogout={userLogout}
            />
          </>
        )}
      </div>
    </>
  );
};

export default UserInfoTable;
