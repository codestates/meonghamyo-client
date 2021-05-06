import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import fakedata from "../fakedata";
import "./css/LoginModal.css";
axios.defaults.withCredentials = true;
function LoginModal({ open, close, userLogin, userLogout, handleCurrentUser }) {
  const [loginInputValue, setloginInputValue] = useState({}); // 홍

  const inputValue = (key) => (e) => {
    // 홍
    let newLoginInputValue = { ...loginInputValue };
    newLoginInputValue = { ...newLoginInputValue, [key]: e.target.value };
    setloginInputValue(newLoginInputValue);
  };
  const handleLogin = () => {
    if(Object.keys(loginInputValue).length <= 1){
      alert('모두 입력해주세요.');
      return;
    }
    axios
      .post("https://localhost:4000/user/login", {
        ...loginInputValue,
      })
      .then((res) => {
        userLogin();
        sessionStorage.setItem('sessionId', res.data.data[0].userInfo.id)
        return axios.get("https://localhost:4000/mypage/userinfo")
      })
      .catch(err=>{
        console.log('잘못된 로그인요청', err);
        alert('이메일과 비밀번호를 확인하세요');
      })
      .then(res => {
        handleCurrentUser(res.data.data[0].userInfo)})
      .catch((err)=>{
        userLogout();
        sessionStorage.removeItem("sessionId");
      })
  };
  return (
    <div>
      {open ? (
        <div id="loginModal" className="modal">
          <div className="loginBlock">
            <span className="close" onClick={close}>
              &times;
            </span>
            <div className="loginInfo">
              <div className="emailAndPw">
                <div className="emailInputBlock">
                  이메일
                  <input
                    className="loginId"
                    type="text"
                    onChange={inputValue("email")}
                  ></input>
                </div>
                <div className="pwInputBlock">
                  비밀번호
                  <input
                    className="loginPassword"
                    type="password"
                    onChange={inputValue("password")}
                    onKeyPress={(e) => {
                        if(e.key === 'Enter'){
                          handleLogin();
                        }
                      }
                    }
                  ></input>
                </div>
              </div>
              <button className="loginBtn" onClick={handleLogin}>
                {" "}
                로그인{" "}
              </button>
            </div>
            <Link className='findUserLink' onClick={close} to='/finduser'>
              <div className='findUserLink'>이메일 / 패스워드 찾기</div>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default LoginModal;
