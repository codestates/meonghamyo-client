import React from 'react';
import './css/LoginModal.css'

function LoginModal({ open, close }) {    
    return(
        <div>
            {open? (
            <div id='loginModal' className='modal'>
                <div className='loginBlock'>
                    <span className='close' onClick={close}>&times;</span>
                    <div className='loginInfo'>
                        유저 정보 내놔
                        <div>이메일<input></input></div>
                        <div>비밀번호<input></input></div>
                    </div> 
                </div>
            </div>
            ):null}
        </div>
    )    
}

export default LoginModal;
