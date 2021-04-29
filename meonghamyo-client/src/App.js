// import './App.css';
import './component/css/Nav.css'
import React, { useState } from 'react';
// import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import ComunityList from './page/ComunityList.js';
import ContentPage from './page/ContentPage.js'
import { AiOutlineMenu } from 'react-icons/ai';
import CategoryModal from './component/CategoryModal';
import LoginModal from './component/LoginModal'
import Mypage from './page/Mypage'
import Signup from './page/Signup'


function App(){
  const [categoryModal, setCategoryModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  
  const openCategoryModal = () => {
    setCategoryModal(true);
  }
  const closeCategoryModal = () => {
    setCategoryModal(false);
  }
  const openLoginModal = () => {
    setLoginModal(true);
  }
  const closeLoginModal = () => {
    setLoginModal(false);
  }

    return (
    <div className="App">
      <nav>
          <ul className='navContainer'>
              <li id='ham' onClick={openCategoryModal}>
                  <AiOutlineMenu />
              </li>
              <li id='navLogo'>MeongHaMyo</li>
              <li id='loginBlock' onClick={openLoginModal}>
                  로그인
              </li>
          </ul>
      </nav>

      <CategoryModal open={categoryModal} close={closeCategoryModal} />
      <LoginModal open={loginModal} close={closeLoginModal} />
      {/* <ComunityList /> */}
      {/* <ContentPage /> */}
      <Mypage />
      {/* <Signup /> */}

    </div>
    );
    
}

export default App;
