// import './App.css';
import "./component/css/Nav.css";
import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, withRouter, Link } from "react-router-dom";
import MainPage from "./page/MainPage";
import CommunityList from "./page/CommunityList.js";
import ContentPage from "./page/ContentPage.js";
import Mypage from "./page/Mypage";
import Signup from "./page/Signup";
import Nav from "./component/Nav";
import WriteContent from "./page/WriteContent";
import HomePage from "./page/HomePage";
import FindUser from "./page/FindUser";
import axios from "axios";

function App() {
  const [currentUser, setcurrentUser] = useState(null); // 홍
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

  useEffect(()=>{
    if(sessionStorage.length!==0){
      axios.get("https://localhost:4000/mypage/userinfo")
      .then(res => {
        handleCurrentUser(res.data.data[0].userInfo)
        setIsLogined(true)
      })
      
    }
  },[])
  return (
    <div className="App">
      <Switch>
        <Route path="/mypage">
          <Mypage
            currentUser={currentUser}
            userLogout={userLogout}
            closeLoginModal={closeLoginModal}
            handleCurrentUser={handleCurrentUser}
          />
        </Route>
      
        <Route path="/signup">
          <Signup
            currentUser={currentUser}
            handleCurrentUser={handleCurrentUser}
          ></Signup>
        </Route>

        <Route path="/finduser">
          <FindUser />
        </Route>  

        <Route exact path="/community">
          <CommunityList isLogined={isLogined} />
        </Route>

        <Route exact path="/parcelout">
          <MainPage />
        </Route>

        <Route path="/content/:id">
            <ContentPage isLogined={isLogined} />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/writepage">
          <WriteContent />
        </Route>

        <Route path="/writepage/:id">
          <WriteContent />
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
        userLogout={userLogout}
        handleCurrentUser={handleCurrentUser}
        currentUser={currentUser}
        
      />
    </div>
  );
}

export default App;
