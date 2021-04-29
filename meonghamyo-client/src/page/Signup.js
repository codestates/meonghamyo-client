
import React from "react";
import "../component/css/Signup.css";
const Signup = () => {
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
        />
      </div>

      <div className="inputArea">
        <span>비밀번호</span>
        <input
          className="inputPassword"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
      </div>

      <div className="inputArea">
        <span>비밀번호 확인</span>
        <input
          className="inputPasswordCheck"
          type="password"
          placeholder="비밀번호를 한번 더 입력하세요"
        />
      </div>

      <div className="inputArea">
        <span>이름</span>
        <input
          className="inputName"
          type="text"
          placeholder="이름을 입력하세요"
        />
      </div>
      <div className="inputArea">
      <span>생년월일</span>
      </div>
      <div className="inputAreaBirth">
        <div className="birthInputs">
          <input className="inputYear" type="text" placeholder="년(4자)" />
          <select name="month" className="inputMonth">
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
          <input className="inputDay" placeholder="일"></input>
        </div>
      </div>

      <div className="inputArea">
        <span>닉네임</span>
        <input
          className="inputNickName"
          type="text"
          placeholder="닉네임을 입력하세요"
        />
      </div>
      <button className="signupBtn">가입하기</button>
    </div>
  );
};

export default Signup;

