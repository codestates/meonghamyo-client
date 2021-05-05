import { useEffect, useState } from 'react';
import '../component/css/ContentPage.css';
import axios from 'axios';
import Footer from '../component/Footer';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import reactHtmlParser from 'react-html-parser';
axios.defaults.withCredentials = true;


function ContentPage({ isLogined }){
    let params = useParams();
    let id = params.id;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [writeComment, setWriteComment] = useState(false);
    const [comment, setComment] = useState('');
    const [loginedUser, setLoginedUser] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`https://localhost:4000/content/${id}`)
            .then((res) => {
                // console.log(res)
                setData(res.data.data[0]);
                setLoading(false);
            })
        };
        const isSame = async () => {
            await axios.get('https://localhost:4000/mypage/userinfo')
            .then((res) => {
                // console.log(res)
                setLoginedUser(res.data.data[0].userInfo.id);
            })
        }
        fetchData();
        isSame();
    },[comment])

    function newComment(){
        setWriteComment(true);
    };
    async function postComment(){
        await axios.post(`https://localhost:4000/content/${id}/commentcreate`,{
        commentBody:comment
        }).then((res) => {
            document.querySelector('#commentInput').value = '';
            setComment('');
        })
    }
    async function deleteComment(commentId){
        await axios.delete(`https://localhost:4000/content/${id}/${commentId}/commentdelete`)
        .then((go) => { 
            // 댓글 삭제
            axios.get(`https://localhost:4000/content/${id}`)
            .then((res) => {
                // console.log(res)
                setData(res.data.data[0]);
                setLoading(false);
            })
        })
    }

    function del() {
        axios.delete(`https://localhost:4000/content/${id}/delete`).then((res) => {
            alert('게시물을 삭제했습니다')
        })
    };

    if(loading){
        return <h2>Loading...</h2>
    }
    return(
        <div>
            <section className='consec'>
            </section>
        <div className='contentPage'>
            <div className='titleBar'>
                <div className='writer'>{data.userContentInfo.nickname}</div>
                <h2 className='title'>{data.contentInfo.title}</h2>
                <div className='dateOfUpload'>{`${data.contentInfo.updatedAt.slice(0,4)}/${data.contentInfo.updatedAt.slice(5,7)}/${data.contentInfo.updatedAt.slice(8,10)}`}</div>
            </div>
            <div className='contentBox'>
                <img className='contentImg' src={`https://localhost:4000/${data.contentInfo.img}`}/>
                <div className='contentWord'>
                    {reactHtmlParser(data.contentInfo.contentBody)}
                </div>
                <div className='contentTags'>
                    {data.contentInfo.tags.map((tag) => (<div className='contentTag'>#{tag}</div>))}
                </div>
            </div>
            <div className='contentBtnBox'>
                {(data.contentInfo.userId === loginedUser)?
                <button>
                    <div className='contentBtn' onClick={del}>삭제</div>
                </button>
                :null}
                {(data.contentInfo.userId === loginedUser)?
                <button >
                    <Link className='contentBtn' to={`/writepage`}>수정</Link>
                </button>
                :null}
                <button >
                    {(data.contentInfo.boardName==='communityContent')?
                    <Link className='contentBtn' to='/community'>글 목록 이동</Link>
                    :<Link className='contentBtn' to='/parselout'>글 목록 이동</Link>}
                </button>
            </div>
            <div className='commentSection'>
                <div className='nameOfSection'>댓글 목록</div> 
            <hr className='contentPageHr' />
                {data.commentInfo.map((comment) => (
                    <div className='commentBox'>
                        <div className='commentListInfo'>
                            <div className='commentListNickname'>{comment.userName}</div>
                            <div className='commentListCreatedAt'>{`${comment.createdAt.slice(0,4)}/${comment.createdAt.slice(5,7)}/${comment.createdAt.slice(8,10)}`}</div>
                            {(comment.userId === loginedUser)?
                            <span className="close2" onClick={() => deleteComment(comment.id)}>
                                &times;
                            </span>
                          :null}
                        </div>
                        <div className='commentListBody'>{comment.commentBody}</div>
                    </div>
                ))}
                {isLogined?
                <button id='newCommentBtn' onClick={newComment}>댓글작성</button>
                :null}
                {writeComment?
                    (<div id='newCommentBox'>
                        <textarea id='commentInput' onChange={(e) =>{setComment(e.target.value)}} onKeyPress={
                        (e) => {
                            if(e.key === 'Enter') {
                                postComment();
                            }
                        }
                    }></textarea>
                        <button id='submitCommentBtn' onClick={postComment}>댓글 달기</button>
                    </div>):null
                }
            </div>
            <Footer />
        </div>
        </div>
    )
}

export default ContentPage;