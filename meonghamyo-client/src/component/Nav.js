import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import CategoryModal from "../component/CategoryModal";
import LoginModal from "../component/LoginModal";
import { Link } from "react-router-dom";
function Nav({
  categoryModal,
  openCategoryModal,
  closeCategoryModal,
  loginModal,
  userLogout,
  openLoginModal,
  closeLoginModal,
  isLogined,
  userLogin,
  handleCurrentUser,
  currentUser,
}) {

  return (
    <div>
      <nav>
        <ul className="navContainer">
          <li id="ham" onClick={openCategoryModal}>
            <AiOutlineMenu />
          </li>
          <li id="navLogo">
            <Link className='logo' to='/'>
              <div className='logoImg'></div>멍하묘?
            </Link>
            </li>
          {isLogined && currentUser  ?  (
            <>
              <Link to="/mypage">
                <img className="profileImg" src={currentUser.img === null?
            'https://studyclix.blob.core.windows.net/static/content/file/avatars/b/b2a179c4-bae4-4eaa-ae2e-6a4b8b5f720a.png'
            :`https://localhost:4000/${currentUser.img}`} />
              </Link>
            </>
            // 홍  이미지 바꾼 부분
          ) : (
            <>
              <li id="loginBlock" onClick={openLoginModal}>
                로그인
              </li>
              <Link id="signupBlock" to="/signup">
                회원가입
              </Link>
            </>
          )}
        </ul>
      </nav>
      <CategoryModal open={categoryModal} close={closeCategoryModal} />
      {isLogined ? null : (
        <LoginModal
          open={loginModal}
          close={closeLoginModal}
          userLogin={userLogin}
          userLogout={userLogout}
          handleCurrentUser={handleCurrentUser}
          currentUser={currentUser}
        />
      )}
    </div>
  );
}

export default Nav;
