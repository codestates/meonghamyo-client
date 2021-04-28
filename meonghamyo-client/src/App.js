import './App.css';
// import './component/css/Nav.css'
import React from 'react';
// import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import ComunityList from './component/ComunityList.js';
import { AiOutlineMenu } from 'react-icons/ai';
import CategoryModal from './component/modal/CategoryModal';
import LoginModal from './component/modal/LoginModal'
import Signup from './component/Signup';


class App extends React.Component {
  state = {
    categoryModal: false,
    loginModal: false
  }
  openCategoryModal = () => {
    this.setState({ categoryModal: true });
  }
  closeCategoryModal = () => {
    this.setState({ categoryModal: false });
  }
  openLoginModal = () => {
    this.setState({ loginModal: true });
  }
  closeLoginModal = () => {
    this.setState({ loginModal: false });
  }
  render() {
    return (
    <div className="App">
      {/* <nav>
          <ul className='navContainer'>
              <li id='ham' onClick={this.openCategoryModal}>
                  <AiOutlineMenu />
              </li>
              <li id='navLogo'>MeongHaMyo</li>
              <li id='loginBlock' onClick={this.openLoginModal}>
                  로그인
              </li>
          </ul>
      </nav> */}
      <CategoryModal open={this.state.categoryModal} close={this.closeCategoryModal} />
      <LoginModal open={this.state.loginModal} close={this.closeLoginModal} />
      <Signup/>
    </div>
    );
  }
}

export default App;
