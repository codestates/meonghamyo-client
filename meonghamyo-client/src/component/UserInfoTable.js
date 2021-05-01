import React, { useState } from "react";
import { FaUserAltSlash } from "react-icons/fa";

const UserInfoTable = ({ fakeUser, modifyUserInfo, modifyUserPwd }) => {
  const [modifiedUserInfo, setmodifiedUserInfo] = useState({});
  const [isModify, setisModify] = useState(false);
  const inputValue = (key) => (e) => {
    let newmodifiedUserInfo = { ...modifiedUserInfo };
    newmodifiedUserInfo = { ...newmodifiedUserInfo, [key]: e.target.value };
    setmodifiedUserInfo(newmodifiedUserInfo);
  };

  const handleUserInfo = () => {
    if (modifiedUserInfo.name && modifiedUserInfo.nickname) {
      let modifyName = modifiedUserInfo.name;
      let modifyNickname = modifiedUserInfo.nickname;
      modifyUserInfo(modifyName, modifyNickname);
      setisModify(false);
    } else {
      console.log("입력이 충분하지 않습니다.");
    }
  };

  const handlePwd = () => {
    if (fakeUser.password === modifiedUserInfo.password) {
      if (modifiedUserInfo.newpassword === modifiedUserInfo.newpasswordCheck) {
        let modifyPwd = modifiedUserInfo.newpassword;
        modifyUserPwd(modifyPwd);
      } else {
        console.log("변경할 비밀번호 불일치");
      }
    } else {
      console.log("현재 비밀번호 불일치");
    }
  };
  return (
    <>
      {console.log(fakeUser)}
      {isModify === true ? (
        fakeUser === null ? (
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
                <td>{fakeUser.birth}</td>
              </tr>
            </table>
          </>
        )
      ) : fakeUser === null ? (
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
              <input
                className="currentPwd"
                type="password"
                onChange={inputValue("password")}
              />
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
              <br />
              <br />
              <button className="userPwdModifyBtn" onClick={handlePwd}>
                비밀번호 변경
              </button>
            </td>
          </tr>
          <tr>
            생년월일
            <td>{fakeUser.birth}</td>
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
            <button className="userLeaveBtn" onClick={() => {}}>
              회원 탈퇴
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default UserInfoTable;
