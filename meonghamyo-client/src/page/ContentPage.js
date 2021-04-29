import React from 'react';
import '../component/css/ContentPage.css'

function NewContent(){
    return(
        <div className='contentPage'>
            <div className='titleBar'>
                <div className='writer'>작성자</div>
                <h2 className='title'>게시물 제목</h2>
                <div className='dateOfUpload'>업로드 날짜</div>
            </div>
            <div className='contentBox'>
                <img className='contentImg' src='https://source.unsplash.com/Tn8DLxwuDMA/300x400'/>
                <div className='contentWord'>
                    내용 야옹
                </div>
            </div>
            <div className='contentBtnBox'>
                <button className='contentBtn'>삭제</button>
                <button className='contentBtn'>수정</button>
                <button className='contentBtn'>글 목록 이동</button>
            </div>
            <div className='commentBox'>
                - 댓글 리스트 -
                <table className='commentTable'>
                    <tr>
                        <th className='commentNickName'>닉네임</th>
                        <th className='commentWord'>댓글</th>
                        <th className='commentCreateAt'>작성일</th>
                    </tr>
                    <tr>
                        <td className='tdNickName'>엄준식</td>
                        <td className='tdComment'>귀여운 고양이다</td>
                        <td className='tdCreatedAt'>2021-04-28</td>
                    </tr>
                    <tr>
                        <td className='tdNickName'>나르</td>
                        <td className='tdComment'>슈슈파가</td>
                        <td className='tdCreatedAt'>2021-04-27</td>
                    </tr>
                    <tr>
                        <td className='tdNickName'>포돌이</td>
                        <td className='tdComment'>잡았다 요놈</td>
                        <td className='tdCreatedAt'>2021-04-25</td>
                    </tr>
                </table>
                <div className='pagination'>- 1 2 3 4 5 -</div>
            </div>
        </div>
    )
}

export default NewContent;