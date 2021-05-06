import React, { useState } from "react";
import "../component/css/Signup.css";
import fakedata from "../fakedata";
import axios from "axios";
import Footer from "../component/Footer";
import { useHistory } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
axios.defaults.withCredentials = true;
const Signup = () => {
   const [newUser, setnewUser] = useState({});
   const [emailSwitch, setemailSwitch] = useState(true);
   const [pwdSwitch, setpwdSwitch] = useState(true);
   const [pwdCheckSwitch, setpwdCheckSwitch] = useState(true);
   const [nameSwitch, setnameSwitch] = useState(true);
   const [nicknameSwitch, setnicknameSwitch] = useState(true);
   const [daySwitch, setdaySwitch] = useState(true);
   const [yearSwitch, setyearSwitch] = useState(true);
   const history = useHistory();

   const emailCheck = (value) => {
      var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

      if (!regExp.test(value)) {
         console.log("이메일 불일치");
         setemailSwitch(false);
      } else {
         console.log("이메일 일치");
         setemailSwitch(true);
         return regExp.test(value);
      }
   };

   const pwdCheck = (value) => {
      var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합

      if (!regExp.test(value)) {
         console.log("패스워드 불일치");
         setpwdSwitch(false);
      } else {
         console.log("패스워드 일치");
         setpwdSwitch(true);
         return regExp.test(value);
      }
   };

   const pwdcCheck = (value) => {
      var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합

      if (!regExp.test(value)) {
         console.log("패스워드 불일치");
         setpwdCheckSwitch(false);
      } else {
         console.log("패스워드 일치");
         setpwdCheckSwitch(true);
         return regExp.test(value);
      }
   };

   const nameCheck = (value) => {
      var regExp = /^[가-힣]{2,4}$/;

      if (!regExp.test(value)) {
         console.log("이름 불일치");
         setnameSwitch(false);
      } else {
         console.log("이름 일치");
         setnameSwitch(true);
         return regExp.test(value);
      }
   };

   const nicknameCheck = (value) => {
      var regExp = /^[가-힣]{2,6}$/;

      if (!regExp.test(value)) {
         console.log("닉네임 불일치");
         setnicknameSwitch(false);
      } else {
         console.log("닉네임 일치");
         setnicknameSwitch(true);
         return regExp.test(value);
      }
   };

   const yearCheck = (value) => {
      var regExp = /^[0-9]{4}$/;

      if (!regExp.test(value)) {
         setyearSwitch(false);
         console.log("년도 불일치");
      } else {
         console.log("년도 일치");
         setyearSwitch(true);
         return regExp.test(value);
      }
   };

   const dayCheck = (value) => {
      var regExp = /^([1-9]|1[1-9]|2[0-9]|3[01])$/;

      if (!regExp.test(value)) {
         console.log("일자 불일치");
         setdaySwitch(false);
      } else {
         console.log("일자 일치");
         setdaySwitch(true);
         return regExp.test(value);
      }
   };

   const handleSubmit = () => {
      let newUserInfo = { ...newUser };
      delete newUserInfo.passwordCheck;
      delete newUserInfo.year;
      delete newUserInfo.month;
      delete newUserInfo.day;

      axios
         .post("https://localhost:4000/user/signup", {
            ...newUserInfo,
         })
         .then((res) => {
            alert("회원가입에 성공하였습니다.");
            history.push("/");
         })
         .catch((err) => {
            alert("입력을 제대로 해주세요.");
         });
   };
   const handleInputValue = (key) => (e) => {
      if (
         (key === "email" && emailCheck(e.target.value)) ||
         (key === "password" && pwdCheck(e.target.value)) ||
         (key === "passwordCheck" && pwdcCheck(e.target.value)) ||
         (key === "name" && nameCheck(e.target.value)) ||
         (key === "nickname" && nicknameCheck(e.target.value)) ||
         (key === "year" && yearCheck(e.target.value)) ||
         key === "month" ||
         (key === "day" && dayCheck(e.target.value))
      ) {
         let newUserCopy = { ...newUser };
         newUserCopy = { ...newUserCopy, [key]: e.target.value };
         if (newUserCopy.year && newUserCopy.month && newUserCopy.day) {
            newUserCopy = {
               ...newUserCopy,
               birth: `${newUserCopy.year}/${newUserCopy.month}/${newUserCopy.day}`,
            };
         }
         setnewUser(newUserCopy);
      }
   };
   return (
      <div className="signupForm">
         <h1>회원 가입</h1>
         <p className="signUpPtag"> 모든 항목을 반드시 입력 해주세요 </p>
         <div className="inputArea">
            <div className="inputAndName">
               <span id="spanEmail">이메일</span>
               <input
                  className="inputEmail"
                  type="text"
                  placeholder="이메일을 입력하세요"
                  onChange={handleInputValue("email")}
               />
               {emailSwitch ? null : (
                  <div className="errorEmail">
                     이메일을 올바르게 입력해주세요.
                  </div>
               )}
            </div>
            {emailSwitch && newUser.email ? <FcCheckmark size="35" /> : null}
         </div>
         <div className="inputArea">
            <div className="inputAndName">
               <span id="spanPwd">비밀번호</span>
               <input
                  className="inputPassword"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  onChange={handleInputValue("password")}
               />
               {pwdSwitch ? null : (
                  <div className="errorPwd">
                     영문,숫자를 조합하여 8자리 이상 만들어주세요.
                  </div>
               )}
               {pwdSwitch && newUser.password ? (
                  <div className="accessDiv">사용 가능한 비밀번호 입니다.</div>
               ) : null}
            </div>
            {pwdSwitch && newUser.password ? <FcCheckmark size="35" /> : null}
         </div>

         <div className="inputArea">
            <div className="inputAndName">
               <span id="spanPwdCheck">비밀번호 확인</span>
               <input
                  className="inputPasswordCheck"
                  type="password"
                  placeholder="비밀번호를 한번 더 입력하세요"
                  onChange={handleInputValue("passwordCheck")}
               />
               {newUser.passwordCheck !== null &&
               newUser.password === newUser.passwordCheck ? null : (
                  <div className="errorPwdCheck">비밀번호가 틀립니다.</div>
               )}
            </div>
            {pwdCheckSwitch && newUser.passwordCheck ? (
               <FcCheckmark size="35" />
            ) : null}
         </div>

         <div className="inputArea">
            <div className="inputAndName">
               <span id="spanName">이름</span>
               <input
                  className="inputName"
                  type="text"
                  placeholder="이름을 입력하세요"
                  onChange={handleInputValue("name")}
               />
               {nameSwitch ? null : (
                  <div className="errorName">이름이 올바르지 않습니다.</div>
               )}
            </div>
            {nameSwitch && newUser.name ? <FcCheckmark size="35" /> : null}
         </div>
         <div className={"inputArea2"}>
            <div className="inputAndName">
               <span id="spanBirth">생년월일</span>
               <div className="inputAreaBirth">
                  <div className="birthInputs">
                     <input
                        className="inputYear"
                        type="text"
                        placeholder="년(4자)"
                        onChange={handleInputValue("year")}
                     />
                     <select
                        name="month"
                        className="inputMonth"
                        onChange={handleInputValue("month")}
                     >
                        <option value="">월</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                     </select>
                     <input
                        className="inputDay"
                        placeholder="일"
                        onChange={handleInputValue("day")}
                     ></input>
                     {newUser.birth && newUser.day ? (
                        <FcCheckmark size="35" />
                     ) : null}
                  </div>
               </div>
            </div>
         </div>

         <div className="inputArea">
            <div className="inputAndName">
               <span id="spanNickname">닉네임</span>
               <input
                  className="inputNickName"
                  type="text"
                  placeholder="닉네임을 입력하세요"
                  onChange={handleInputValue("nickname")}
               />
               {nicknameSwitch ? null : (
                  <div className="errorNickname">한글만 입력 가능합니다.</div>
               )}
            </div>
            {nicknameSwitch && newUser.nickname ? (
               <FcCheckmark size="35" />
            ) : null}
         </div>
         <button className="signupBtn" onClick={handleSubmit}>
            가입하기
         </button>
      </div>
   );
};

export default Signup;
