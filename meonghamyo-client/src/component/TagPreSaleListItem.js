import React from 'react';
import "./css/PreSaleListItem.css";

const TagPreSaleListItem = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
     }
     return posts === null ? (
        <h2>해당 게시글의 내용이 비어있습니다.</h2>
     ) : (
        <div className="itemGroup">
           {posts.map((post) => (
              <div key={post.id} className="item">
                 <img src={post.img} className="image" />
                 <h4 className="itemTitle">{post.title}</h4>
                 <hr />
                 <h4>
                 </h4>
              </div>
           ))}
        </div>
};

export default TagPreSaleListItem;