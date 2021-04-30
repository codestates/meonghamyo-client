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
import Nav from './component/Nav';

function App() {
  const [fakeUser, setfakeUser] = useState(fakedata.fakeuser.data[0]);
  const [fakeContent, setfakeContent] = useState(fakedata.fakecontent.data[0]);
  const [fakeComment, setfakeComment] = useState(fakedata.fakecomment.data[0]);
  const [categoryModal, setCategoryModal] = useState(false); // 덕
  const [loginModal, setLoginModal] = useState(false);  // 덕
  const [isLogined, setIsLogined] = useState(false);  // 덕
  const openCategoryModal = () => { // 덕
    setCategoryModal(true);
  }
  const closeCategoryModal = () => { // 덕
    setCategoryModal(false);
  }
  const openLoginModal = () => { // 덕
    setLoginModal(true);
  }
  const closeLoginModal = () => { // 덕
    setLoginModal(false);
  };
  const handleAddUser = (submitUserInfo) => {
    console.log("바뀌기전",fakeUser)
    setfakeUser(submitUserInfo)
  }
  const userLogin = () => { // 덕
    setIsLogined(true);
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
      <Nav 
      categoryModal={categoryModal} 
      openCategoryModal={openCategoryModal} 
      closeCategoryModal={closeCategoryModal} 
      loginModal={loginModal} 
      openLoginModal={openLoginModal} 
      closeLoginModal={closeLoginModal} 
      isLogined={isLogined} 
      userLogin={userLogin} />
     
      {/* <ComunityList /> */}
      <ContentPage />
      {/* <Mypage /> */}
      {/* <Signup /> */}

    </div>
  );
}

export default App;
