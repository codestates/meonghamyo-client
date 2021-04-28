import React, { Component } from 'react';

class LoginModal extends Component {
    render(){
        const{ open, close } = this.props;
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
}

export default LoginModal;
