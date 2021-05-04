import React, { useEffect, useState } from 'react';
import '../component/css/CommunityList.css';
import Pagination from '../component/Pagination';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
axios.defaults.withCredentials = true;

function CommunityList({ isLogined }) {
    // let counter = 0;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
           await axios.get("https://localhost:4000/content/communitypage")
           .then((result) => {
               console.log(result)
               setPosts(result.data.data[0].contentInfo);
           })
           setLoading(false);
        };
  
        fetchPosts();
    },[]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if(loading) {
        return <h2>Loading...</h2>
    }

    return(
        <div>
            <section className='sec1'>
            </section>
            <h1 className='communityHead'>커뮤니티 게시판</h1>
            <div id='main'>
                <div className='communityTable'>
                    <div className='listHead'>
                        <div className='firstList'>
                            <div className='listWriterHead'>작성자</div>
                            <div className='listTitleHead'>
                                제목
                            </div>
                            <div className='listCreatedAtHead'>작성날짜</div>
                        </div>
                    </div>
                    
                    {currentPosts.map((post) => (<>
                        <div key={post.id} className='listItem'>
                            <div className='listWriter'>{post.user.nickname}</div>
                            <div className='listTitle'>
                                <Link className='listLink' to={`/content/${post.id}`}>{post.title}</Link>
                            </div>
                            <div className='listCreatedAt'>{`${post.createdAt.slice(0,4)}/${post.createdAt.slice(5,7)}/${post.createdAt.slice(8,10)}`}</div>
                        </div>
                        <hr className='communityhr' />
                        </>
                    ))}
                </div>
            </div>
            <div className='newContent'>
                <Link className='newContentBtn' to='/writepage'>새 글쓰기</Link>
            </div>
            <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            />  
            <Footer />
        </div>
    )
}

export default CommunityList;
// css 건드리기