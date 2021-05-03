import axios from "axios";
import React, { useState } from "react";
import fakedata from "../fakedata";
import "./css/LoginModal.css";
axios.defaults.withCredentials = true;
function LoginModal({ open, close, userLogin, handleCurrentUser }) {
  const [loginInputValue, setloginInputValue] = useState({}); // 홍

  const inputValue = (key) => (e) => {
    // 홍
    let newLoginInputValue = { ...loginInputValue };
    newLoginInputValue = { ...newLoginInputValue, [key]: e.target.value };
    setloginInputValue(newLoginInputValue);
  };
  const handleLogin = () => {
    axios
      .post("https://localhost:4000/user/login", {
        ...loginInputValue,
      })
      .then((res) => {
        userLogin()
        return axios.get("https://localhost:4000/mypage/userinfo")
      })
      .catch(err=>err)
      .then(res => handleCurrentUser(res.data.data[0].userInfo))
      .catch(err=>err)
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
