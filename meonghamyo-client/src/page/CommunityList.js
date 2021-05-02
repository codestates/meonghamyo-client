import React, { useEffect, useState } from 'react';
import '../component/css/CommunityList.css';
import fakedata from '../fakedata';
import Pagination from '../component/Pagination';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
axios.defaults.withCredentials = true;

function CommunityList() {
    // let counter = 0;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
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
                                <Link to={`/content/${post.id}`}>{post.title}</Link>
                            </div>
                            <div className='listCreatedAt'>{post.createdAt}</div>
                        </div>
                    ))}
                </section>
            </div>
            <div className='newContent'>
                <button className='newContentBtn'>
                    <Link to='/writepage'>새 글쓰기</Link>
                </button>
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