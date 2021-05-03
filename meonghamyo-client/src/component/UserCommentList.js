import React from 'react';

const UserCommentList = ({currentUser,comments}) => {
    return (
        <div>
                      <div className="userCommentList">
            <span className="userId">{currentUser.nickname}</span>
            <div className="userContent">{comments.commentBody}</div>
          </div>
          <hr></hr>
        </div>
    );
};

export default UserCommentList;