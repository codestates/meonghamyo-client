import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import CategoryModal from '../component/CategoryModal';
import LoginModal from '../component/LoginModal';

function Nav({ categoryModal,openCategoryModal, closeCategoryModal,
     loginModal,openLoginModal, closeLoginModal,
    isLogined, userLogin }) {
    return (
        <div>
            <nav>
                <ul className='navContainer'>
                    <li id='ham' onClick={openCategoryModal}>
                    <AiOutlineMenu />
                    </li>
                    <li id='navLogo'>MeongHaMyo</li>
                    {isLogined?<div className='profileImg'>사진</div>:<li id='loginBlock' onClick={openLoginModal}>
                        로그인
                    </li>}
                </ul>
            </nav>
            <CategoryModal open={categoryModal} close={closeCategoryModal} />
            {isLogined?null
            :<LoginModal open={loginModal} close={closeLoginModal} isLogined={userLogin}/>}
        </div>
    )
}

export default Nav;