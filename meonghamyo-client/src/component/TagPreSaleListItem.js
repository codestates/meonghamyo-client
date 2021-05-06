import React, { useState, useEffect } from "react";
import "./css/PreSaleListItem.css";
//import { useParams } from "react-router";
import "./css/PreSaleList.css";
//import axios from "axios";
//import { Link } from "react-router-dom";

const TagPreSaleListItem = ({ posts, loading }) => {
   // let params = useParams();
   // let tag = params.tag;
   // console.log(params);
   // console.log(tag);

   // useEffect(() => {
   //    const fetchData = async () => {
   //       await axios
   //          .get(`https://localhost:4000/taginfo/${tag}`)
   //          .then((res) => {
   //             console.log(res); //res.data[0]
   //          });
   //    };
   //    fetchData();
   // }, []);

   if (loading) {
      return <h2>Loading...</h2>;
   }
   return posts === null ? (
      <h2>해당 게시글의 내용이 비어있습니다.</h2>
   ) : (
      <div className="itemGroup">
         {console.log(posts)}
         {/*  {posts.map((post) => (
            <div key={post.id} className="item">
               
               <Link className="listLink" to={`/content/${post.id}`}>
                  <img
                     src={`https://localhost:4000/${post.img}`}
                     className="image"
                  />
                  <h4 className="itemTitle">{post.title}</h4>
               </Link>
               <hr />
               <h4>
                  {post.tags.map((tag) => (
                     <Link className="listLink" to={`/taginfo/${tag.tagName}`}>
                        <div className="tag" key={tag.tagContent.tagId}>
                           {tag.tagName}
                        </div>
                     </Link>
                  ))}
               </h4>
            </div>
                  ))}*/}
      </div>
   );
};

export default TagPreSaleListItem;
