import React from "react";
import { AiOutlineComment } from "react-icons/ai";

const UserPostList = ({ listCheck, fakeContent, fakeComment, fakeUser }) => {
  return (
    <>
      {listCheck === true ? (
        fakeContent === null ? (
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
          <>
            <div className="userPostList">
              <span className="userId">{fakeUser.nickname}</span>
              <div className="userContent">{fakeContent.title}</div>
            </div>
            <hr></hr>
          </>
        )
      ) : fakeComment === null ? (
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
        <>
          <div className="userCommentList">
            <span className="userId">{fakeUser.nickname}</span>
            <div className="userContent">{fakeComment.content}</div>
          </div>
          <hr></hr>
        </>
      )}
    </>
  );
};

export default UserPostList;
