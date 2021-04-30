import React, { useState } from "react";
import fakedata from "../fakedata";
import "./css/LoginModal.css";
function LoginModal({ open, close, userLogin, handleAddUser }) {
  const [loginInputValue, setloginInputValue] = useState({}); // 홍

  const inputValue = (key) => (e) => {
    // 홍
    let newLoginInputValue = { ...loginInputValue };
    newLoginInputValue = { ...newLoginInputValue, [key]: e.target.value };
    setloginInputValue(newLoginInputValue);
  };
  const handleLogin = () => {
    // 홍
    let result = fakedata.fakeuser.data.filter((el) => {
      if (
        el.email === loginInputValue.email &&
        el.password === loginInputValue.password
      ) {
        return el;
      }
    });
    if (result.length !== 0) {
      userLogin();
      console.log("로그인 성공");
      handleAddUser(...result);
    } else {
      console.log("로그인 실패");
    }
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
                  ></input>
                </div>
              </div>
              <button className="loginBtn" onClick={handleLogin}>
                {" "}
                로그인{" "}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default LoginModal;
