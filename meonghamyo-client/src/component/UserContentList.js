import React from 'react';

const UserContentList = ({currentUser, posts}) => {
    return (
        <div>
            <div className="userPostList">
              <span className="userId">{currentUser.nickname}</span>
              <div className="userContent">{posts.title}</div>
            </div>
            <hr></hr>
        </div>
    );
};

export default UserContentList;