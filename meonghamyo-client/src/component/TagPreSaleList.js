import React, { useState, useEffect } from "react";
import "./css/PreSaleList.css";
import axios from "axios";
import Pagination from "./Pagination";
import TagPreSaleListItem from "./TagPreSaleListItem";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const TagPreSaleList = () => {
   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(4); //페이지당 나오는 아이템 갯수

   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
   //let params = useParams();
   //  let tag = params.tag;
   //  let stringTag = String(tag);
   //console.log(params);
   //console.log(tag);

   return (
      <div className="list">
         <header className="PreSaleListHeader">
            <div className="listName">태그 리스트</div>
         </header>
         <TagPreSaleListItem posts={currentPosts} loading={loading} />
         <div className="newContent">
            <Link className="newContentBtn" to="/writepage">
               새 글쓰기
            </Link>
         </div>
         <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
         />
      </div>
   );
};

export default TagPreSaleList;
