import React from 'react';
import './css/LoginModal.css'

function LoginModal({ open, close, isLogined }) {    
    return(
        <div>
            {open? (
            <div id='loginModal' className='modal'>
                <div className='loginBlock'>
                    <span className='close' onClick={close}>&times;</span>
                    <div className='loginInfo'>
                        <div className='emailAndPw'>
                            <div className='emailInputBlock'>
                                이메일
                                <input></input>
                            </div>
                            <div className='pwInputBlock'>
                                비밀번호
                                <input></input>
                            </div>
                        </div>
                        <button className='loginBtn' onClick={isLogined}> 로그인 </button>
                    </div>
                </div>
            </div>
            ):null}
        </div>
    )    
}

export default LoginModal;
