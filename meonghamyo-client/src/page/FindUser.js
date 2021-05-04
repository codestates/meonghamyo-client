import axios from "axios";
import { useState } from "react";
import '../component/css/FindUser.css'
axios.defaults.withCredentials = true;



function FindUser() {
    const [name, setName] = useState(null);
    const [birth, setBirth] = useState(null);
    const [email, setEmail] = useState(null);
    const [foundedEmail, setFoundedEmail] = useState(null);
    const [foundedPw, setFoundedPw] = useState(null);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
   
    async function emailFinder() {
        await axios.post('https://localhost:4000/user/findemail', {
            name: name,
            birth: birth
        }).then((res) => {
            console.log('이메일', res);
            setFoundedEmail(res.data.data[0].email);
        }).catch((err) => {
            setCheck1(true);
        })
    }
    
    async function pwFinder() {
        await axios.post('https://localhost:4000/user/findpassword', {
            email: email
        }).then((res) => {
            console.log('비번', res);
            setFoundedPw(res.data.data[0].password);
        }).catch((err) => {
            console.log(err.response)
            setCheck2(true);
        })
    }

    return(
        <div className='findUserInfo'>
            <h1>회원 정보 찾기</h1>
            <div className='findEmail'>
                <h3>이메일 찾기</h3>
                <div className='fbox'>
                    <input 
                    className='finputName' 
                    type='text' 
                    placeholder='이름을 입력하세요'
                    onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div className='fbox'>
                    <input className='finputBirth' 
                    type='text'
                    placeholder='생년월일을 입력하세요. 예: 2000-01-01' 
                    onChange={(e) => setBirth(e.target.value)} 
                    onKeyDown={(e) => {
                        if(e.key === 'Enter'){
                            emailFinder();
                        }
                    }}
                    />
                </div>
                <button className='findEmailBtn' onClick={emailFinder}> 이메일 찾기</button>
                {foundedEmail?<div className='yourEmail'>{name}님의 이메일 : {foundedEmail}</div>:null}
                {check1&&!foundedEmail?<div className='err'>'잘못된 정보입니다.'</div>:null}
            </div>
            <div className='findPw'>
                <h3>패스워드 찾기</h3>
                <div className='fbox'>
                    <input
                    className="finputEmail"
                    type="text"
                    placeholder="이메일을 입력하세요"
                    onChange={(e) => setEmail(e.target.value)} 
                    onKeyDown={(e) => {
                        if(e.key === 'Enter'){
                            pwFinder();
                        }
                    }}
                    />
                </div>
                <button className='findPwBtn' onClick={pwFinder}> 패스워드 찾기</button>
                {foundedPw?<div className='yourPw'>{email} 계정의 패스워드 : {foundedPw}</div>:null}
                {check2&&!foundedPw?<div className='err'>잘못된 이메일입니다.</div>:null}
            </div>
        </div>
    )
}

export default FindUser;