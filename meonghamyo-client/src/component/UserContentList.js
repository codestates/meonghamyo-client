import React from 'react';
import { Link } from 'react-router-dom';

const UserContentList = ({currentUser, posts, key}) => {
    return (
        <div>
            <div key ={key}className="userPostList">
              <span className="userId">{currentUser.nickname}</span>
              <div className="userContent">
                  <Link className="listLink" to={`/content/${posts.id}`}>{posts.title}</Link>
                  </div>
            </div>
            <hr></hr>
        </div>
    );
};

export default UserContentList;