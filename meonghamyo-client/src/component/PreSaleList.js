import React, { useState, useEffect } from "react";
import "./css/PreSaleList.css";
import PreSaleListItem from "./PreSaleListItem";
import axios from "axios";
import Pagination from "./Pagination";
// import { Link } from "react-router-dom";

const PreSaleList = () => {
   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(4); //페이지당 나오는 아이템 갯수

   useEffect(() => {
      const fetchPosts = async () => {
         setLoading(true);
         await axios
            .get("https://localhost:4000/content/parceloutpage")
            .then((res) => {
               console.log(res.data.data[0].contentInfo); //객체
               //console.log(res.data);
               //console.log(res.data.data[0].contentInfo[0]);
               setPosts(res.data.data[0].contentInfo); //배열
            });
         setLoading(false);
      };
      fetchPosts();
   }, []);

   //Get current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = posts
      // .toString()
      .slice(indexOfFirstPost, indexOfLastPost);

   //Change page
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
   return (
      <div className="list">
         <header className="PreSaleListHeader">
            <div className="listName">분양 리스트</div>
            {/* {console.log(posts.title)} */}
         </header>
         {/* <PreSaleListItem posts={posts} loading={loading} /> */}
         <PreSaleListItem posts={currentPosts} loading={loading} />
         <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
         />
      </div>
   );
};

export default PreSaleList;
