// import './App.css';
import "./component/css/Nav.css";
import React, { useState } from "react";
import { Switch, Route, Redirect, withRouter,Link } from "react-router-dom";
import ComunityList from "./page/ComunityList.js";
import ContentPage from "./page/ContentPage.js";
import { AiOutlineMenu } from "react-icons/ai";
import CategoryModal from "./component/CategoryModal";
import LoginModal from "./component/LoginModal";
import Mypage from "./page/Mypage";
import Signup from "./page/Signup";
import fakedata from "./fakedata";

function App() {
  const [categoryModal, setCategoryModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [fakeUser, setfakeUser] = useState(fakedata.fakeuser.data[0]);
  const [fakeContent, setfakeContent] = useState(fakedata.fakecontent.data[0]);
  const [fakeComment, setfakeComment] = useState(fakedata.fakecomment.data[0]);

  const openCategoryModal = () => {
    setCategoryModal(true);
  };
  const closeCategoryModal = () => {
    setCategoryModal(false);
  };
  const openLoginModal = () => {
    setLoginModal(true);
  };
  const closeLoginModal = () => {
    setLoginModal(false);
  };
  const handleAddUser = (submitUserInfo) => {
    console.log("바뀌기전",fakeUser)
    setfakeUser(submitUserInfo)
  }

  return (
    <div className="App">
      <nav>
        <ul className="navContainer">
          <li id="ham" onClick={openCategoryModal}>
            <AiOutlineMenu />
          </li>
          <li id="navLogo">MeongHaMyo</li>
          <li id="loginBlock" onClick={openLoginModal}>
            로그인
          </li>
          <Link id="signupBlock" to="/signup">회원가입</Link>
          
        </ul>
      </nav>

      <CategoryModal open={categoryModal} close={closeCategoryModal} />
      <LoginModal open={loginModal} close={closeLoginModal} />
      <Switch>
      <Route path="/mypage">
      <Mypage
        fakeUser={fakeUser}
        fakeContent={fakeContent}
        fakeComment={fakeComment} 
        />
      </Route>
      
      <Route path="/signup">
        <Signup fakeUser ={fakeUser}handleAddUser={handleAddUser}></Signup>
      </Route>
        </Switch>
    </div>
  );
}

export default App;
