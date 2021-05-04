import axios from "axios";
import React, { useState } from "react";
import { FaUserAltSlash } from "react-icons/fa";
import LeaveModal from "../component/LeaveModal";
axios.defaults.withCredentials = true;
const UserInfoTable = ({ currentUser,userLogout,handleCurrentUser}) => {
  const [modifiedUserInfo, setmodifiedUserInfo] = useState({});
  const [isModify, setisModify] = useState(false);
  const [runLeave, setRunLeave] = useState(false);
  const inputValue = (key) => (e) => {
    let newmodifiedUserInfo = { ...modifiedUserInfo };
    newmodifiedUserInfo = { ...newmodifiedUserInfo, [key]: e.target.value };
    setmodifiedUserInfo(newmodifiedUserInfo);
  };

  const onOffLeaveModal = () => {
    if(!runLeave){
      setRunLeave(true);
    } else {
      setRunLeave(false);
    }
  };

  const handleUserInfo = () => {
    if (modifiedUserInfo.name && modifiedUserInfo.nickname) {
      axios.put('https://localhost:4000/mypage/userupdate',{
        name : modifiedUserInfo.name,
        birth : currentUser.birth,
        password : modifiedUserInfo.newpassword,
        nickname : modifiedUserInfo.nickname,
        img : currentUser.img
      })
      .then(res => {
        alert('회원 정보가 변경되었습니다.')
        return axios.get("https://localhost:4000/mypage/userinfo")
        
      })
      .catch(err=>err)
      .then(res =>{
        setisModify(false)
        handleCurrentUser(res.data.data[0].userInfo)
      })

    } else {
      console.log("입력이 충분하지 않습니다.");
    }
  };

  const handlePwd = () => {
    if (currentUser.password === modifiedUserInfo.password) {
      if (modifiedUserInfo.newpassword === modifiedUserInfo.newpasswordCheck) {
        axios.put('https://localhost:4000/mypage/userupdate',{
          name : currentUser.name,
          birth : currentUser.birth,
          password : modifiedUserInfo.newpassword,
          nickname : currentUser.nickname,
          img : currentUser.img
        })
        .then(res => alert('비밀번호 변경 완료!'))
      } else {
        console.log("변경할 비밀번호 불일치");
      }
    } else {
      console.log("현재 비밀번호 불일치");
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
            <LeaveModal open={runLeave} close={onOffLeaveModal} userLogout={userLogout} />
          </>
        )}
      </div>
    </>
  );
};

export default UserInfoTable;
