import React, { useEffect, useState } from 'react';
import '../component/css/CommunityList.css';
import fakedata from '../fakedata';
import Pagination from '../component/Pagination';
import axios from 'axios';
import { Link } from 'react-router-dom';
axios.defaults.withCredentials = true;

function CommunityList() {
    let counter = 0;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
           setLoading(true);
           await axios.get("https://localhost:4000/content/communitypage")
           .then((result) => {
               setPosts(result.data.data[0].contentInfo);
           })
           setLoading(false);
        };
  
        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if(loading) {
        return <h2>Loading...</h2>
    }

    return(
        <div>
            <h1 className='communityBox'>커뮤니티 게시판</h1>
            <div id='main'>
                <section className='comunityTable'>
                    {currentPosts.map((post) => (
                        <div key={post.id} className='listItem'>
                            <div className='listWriter'>{post.userId}</div>
                            <div className='listTitle'>
                                <Link to={`/community/content/${post.id}`}>{post.title}</Link>
                            </div>
                            <div className='listCreatedAt'>{post.createdAt}</div>
                        </div>
                    ))}
                </section>
            </div>
            <div className='newContent'>
                {/* <Link to='/준혁님 주소 여기다 적기'>새 글쓰기</Link> */}
                <button className='newContentBtn'>새 글쓰기</button>
            </div>
            <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            />  
        </div>
    )
}

export default CommunityList;
// css 건드리기