import React, { useEffect, useState } from 'react';
import '../component/css/ContentPage.css';
import axios from 'axios';
import Footer from '../component/Footer';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';



function ContentPage(){
    let params = useParams();
    let id = params.id;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`https://localhost:4000/content/${id}`)
            .then((res) => {
                // console.log(res)
                setData(res.data.data[0]);
                setLoading(false);
            });
            
        };
        fetchData();
    }, [])

    function del() {
        axios.delete(`https://localhost:4000/content/${id}/delete`);
    };

    if(loading){
        return <h2>Loading...</h2>
    }
    return(
        <div className='contentPage'>
            <div className='titleBar'>
                {/* {console.log(data)} */}
                <div className='writer'>{'유저테이블에서 닉네임 가져오기'}</div>
                <h2 className='title'>{data.contentInfo.title}</h2>
                <div className='dateOfUpload'>{data.contentInfo.updatedAt}</div>
            </div>
            <div className='contentBox'>
                <img className='contentImg' src={data.contentInfo.img}/>
                <div className='contentWord'>
                    {data.contentInfo.contentBody}
                </div>
            </div>
            <div className='contentBtnBox'>
                <button className='contentBtn'>
                    {/*로그인이 되어있지 않은 경우, 경고나 모달 출력*/}
                    <Link onClick={del} to='/community'>삭제</Link>
                </button>
                <button className='contentBtn'>
                    <Link to={`/writepage`}>수정</Link>
                    {/* <Link to={`/writepage/${data.id}`}>수정</Link>
                    로그인이 되어있지 않은 경우, 경고나 모달 출력 */}
                </button>
                <button className='contentBtn'>
                    <Link to='/community'>글 목록 이동</Link>
                </button>
            </div>
            
            - 댓글 리스트 -
            {data.commentInfo.map((comment) => (
                <div className='commentBox'>
                    <div className='commentListNickname'>{comment.userId}유저join필요</div>
                    <div className='commentListBody'>{comment.commentBody}</div>
                    <div className='commentListCreatedAt'>{comment.createdAt}</div>
                </div>
            ))}
            <button id='newCommentBtn'>댓글작성</button>
            <div id='newCommentBox'>
                <textarea id='commentInput'></textarea>
                <button id='submitCommentBtn'>댓글 달기</button>
                {/* 로그인 정보에 따라 댓글작성 실행여부 결정. 혹은 아예 숨김처리 */}
            </div>
            
            <Footer />
        </div>
    )
}

export default ContentPage;