// import './App.css';
import "./component/css/Nav.css";
import React, { useState } from "react";
import { Switch, Route, Redirect, withRouter, Link } from "react-router-dom";
import MainPage from "./page/MainPage"
import CommunityList from "./page/CommunityList.js";
import ContentPage from "./page/ContentPage.js";
import Mypage from "./page/Mypage";
import Signup from "./page/Signup";
import fakedata from "./fakedata";
import Nav from "./component/Nav";
import axios from "axios";
// import WriteContent from "./page/WriteContent"

function App() {
  const [currentUser, setcurrentUser] = useState(null); // 홍
  const [fakeContent, setfakeContent] = useState(null); // 홍
  const [fakeComment, setfakeComment] = useState(null); // 홍
  const [categoryModal, setCategoryModal] = useState(false); // 덕
  const [loginModal, setLoginModal] = useState(false); // 덕
  const [isLogined, setIsLogined] = useState(false); // 덕
  const openCategoryModal = () => {
    // 덕
    setCategoryModal(true);
  };
  const closeCategoryModal = () => {
    // 덕
    setCategoryModal(false);
  };
  const openLoginModal = () => {
    // 덕
    setLoginModal(true);
  };
  const closeLoginModal = () => {
    // 덕
    setLoginModal(false);
  };
  const handleCurrentUser = (userInfo) => {
    // 홍
    setcurrentUser(userInfo);
  };
  
  const userLogin = () => {
    // 덕
    setIsLogined(true);
  };

  const userLogout = () => {
    //홍
    setIsLogined(false);
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/mypage">
          <Mypage
            currentUser={currentUser}
            fakeContent={fakeContent}
            fakeComment={fakeComment}
            userLogout={userLogout}
            closeLoginModal={closeLoginModal}
          />
        </Route>

        <Route path="/signup">
          <Signup currentUser={currentUser} handleCurrentUser={handleCurrentUser}></Signup>
        </Route>

        <Route exact path="/community">  
          <CommunityList />
        </Route>

        <Route path="/community/content/">
            <ContentPage />
        </Route>

        <Route path='/'>
          <MainPage />
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
        userLogin={userLogin}
        handleCurrentUser={handleCurrentUser}
        currentUser={currentUser}
      />
    </div>
  );

}

export default App;
