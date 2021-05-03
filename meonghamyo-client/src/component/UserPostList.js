import React from "react";
import { AiOutlineComment } from "react-icons/ai";
import UserCommentList from "./UserCommentList";
import UserContentList from "./UserContentList";

const UserPostList = ({ listCheck, currentComment, fakeComment, currentUser, currentPost }) => {
  return (
    <>
      {listCheck === true ? (
        currentPost.length === 0 ? (
          <>
            <h1 className="h1PostComment" style={{ color: "#9a9a9a" }}>
              아직 작성한 게시물이 없습니다.
            </h1>
            <h1 className="h1PostComment" style={{ color: "#9a9a9a" }}>
              게시물을 작성해보세요 !
            </h1>
            <AiOutlineComment
              className="iconPostComment"
              style={{ color: "#9a9a9a" }}
              size="80"
            />
          </>
        ) : (
             
          currentPost.map(el => {
            return <UserContentList currentUser={currentUser} posts={el}/>
          })
        )
      ) : currentComment.length === 0 ? (
        <>
          <h1 className="h1PostComment" style={{ color: "#9a9a9a" }}>
            아직 작성한 댓글이 없습니다.
          </h1>
          <h1 className="h1PostComment" style={{ color: "#9a9a9a" }}>
            댓글을 작성해보세요 !
          </h1>
          <AiOutlineComment
            className="iconPostComment"
            style={{ color: "#9a9a9a" }}
            size="80"
          />
        </>
      ) : (
        currentComment.map(el => {
          return <UserCommentList currentUser={currentUser} comments={el}/>
        })
      )}
    </>
  );
};

export default UserPostList;
