import React, { useState } from "react";
import "../component/css/Signup.css";
import fakedata from "../fakedata";
import axios from "axios";
import Footer from "../component/Footer";
import { useHistory } from "react-router-dom";
axios.defaults.withCredentials = true;
const Signup = () => {
  const [newUser, setnewUser] = useState({});
  const history = useHistory();

  const emailCheck = value => {
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!regExp.test(value)) {
      console.log("이메일 불일치");
    } else {
      console.log("이메일 일치");
      return regExp.test(value);
    }
  };

  const pwdCheck = value => {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합

    if (!regExp.test(value)) {
      console.log("패스워드 불일치");
    } else {
      console.log("패스워드 일치");
      return regExp.test(value);
    }
  };

  const nameCheck = value => {
    var regExp = /^[가-힣]{2,4}$/;

    if (!regExp.test(value)) {
      console.log("이름 불일치");
    } else {
      console.log("이름 일치");
      return regExp.test(value);
    }
  };

  const nicknameCheck = value => {
    var regExp = /^[가-힣]{2,6}$/;

    if (!regExp.test(value)) {
      console.log("닉네임 불일치");
    } else {
      console.log("닉네임 일치");
      return regExp.test(value);
    }
  };

  const yearCheck = value => {
    var regExp = /^[0-9]{4}$/;

    if (!regExp.test(value)) {
      console.log("년도 불일치");
    } else {
      console.log("년도 일치");
      return regExp.test(value);
    }
  };

  const dayCheck = value => {
    var regExp = /^([1-9]|1[1-9]|2[0-9]|3[01])$/;

    if (!regExp.test(value)) {
      console.log("일자 불일치");
    } else {
      console.log("일자 일치");
      return regExp.test(value);
    }
  };

  const handleSubmit = () => {
    let newUserInfo = { ...newUser };
    delete newUserInfo.passwordCheck;
    delete newUserInfo.year;
    delete newUserInfo.month;
    delete newUserInfo.day;

    axios.post("https://localhost:4000/user/signup", {
      ...newUserInfo,
    })
    .then(res =>{
      alert("회원가입에 성공하였습니다.")
      history.push('/')
    })
    .catch(err =>{
      alert("입력을 제대로 해주세요.")
    })
  };
  const handleInputValue = key => e => {
    if (
      (key === "email" && emailCheck(e.target.value)) ||
      (key === "password" && pwdCheck(e.target.value)) ||
      (key === "passwordCheck" && pwdCheck(e.target.value)) ||
      (key === "name" && nameCheck(e.target.value)) ||
      (key === "nickname" && nicknameCheck(e.target.value)) ||
      (key === "year" && yearCheck(e.target.value)) ||
      (key === "month") ||
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
      <p> 모든 항목을 반드시 입력 해주세요 </p>
      <div className="inputArea">
        <span>이메일</span>
        <input
          className="inputEmail"
          type="text"
          placeholder="이메일을 입력하세요"
          onChange={handleInputValue("email")}
        />
      </div>

      <div className="inputArea">
        <span>비밀번호</span>
        <input
          className="inputPassword"
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleInputValue("password")}
        />
      </div>

      <div className="inputArea">
        <span>비밀번호 확인</span>
        <input
          className="inputPasswordCheck"
          type="password"
          placeholder="비밀번호를 한번 더 입력하세요"
          onChange={handleInputValue("passwordCheck")}
        />
      </div>

      <div className="inputArea">
        <span>이름</span>
        <input
          className="inputName"
          type="text"
          placeholder="이름을 입력하세요"
          onChange={handleInputValue("name")}
        />
      </div>
      <div className="inputArea">
        <span>생년월일</span>
      </div>
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
        </div>
      </div>

      <div className="inputArea">
        <span>닉네임</span>
        <input
          className="inputNickName"
          type="text"
          placeholder="닉네임을 입력하세요"
          onChange={handleInputValue("nickname")}
        />
      </div>
      <button className="signupBtn" onClick={handleSubmit}>
        가입하기
      </button>
      {console.log(newUser)}
      <Footer />
    </div>
  );
};

export default Signup;
