import React from 'react';
import { Link } from 'react-router-dom';


const UserCommentList = ({currentUser,comments}) => {
    return (
        <div>
                      <div className="userCommentList">
            <span className="userId">{currentUser.nickname}</span>
            <div className="userContent">
            <Link className="listLink" to={`/content/${comments.contentId}`}>{comments.commentBody}</Link>
            </div>
          </div>
          <hr></hr>
        </div>
    );
};

export default UserCommentList;