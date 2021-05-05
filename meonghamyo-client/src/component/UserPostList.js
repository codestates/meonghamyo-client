import React from "react";
import { AiOutlineComment } from "react-icons/ai";
import Pagination from "./Pagination";
import UserCommentList from "./UserCommentList";
import UserContentList from "./UserContentList";

const UserPostList = ({
  listCheck,
  currentComment,
  currentUser,
  currentPost,
  postPerPage,
  totalPosts,
  paginate,
  nowPosts,
  nowComments,
  totalComments,
  commentPerPage
}) => {
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
              style={{ color: "#9a9a9a", marginLeft: "290" }}
              size="80"
            />
          </>
        ) : (
          <>
          {nowPosts.map((el) => (
            <UserContentList currentUser={currentUser} posts={el} key={el.id} />
          ))}

          <Pagination
          postsPerPage={postPerPage}
          totalPosts={totalPosts}
          paginate={paginate}
          />
          </>
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
            style={{ color: "#9a9a9a", marginLeft: "290" }}
            size="80"
          />
        </>
      ) : (
        <>
        {nowComments.map((el) => (
          <UserCommentList currentUser={currentUser} comments={el} key={el.id} />
        ))}
                  <Pagination
          postsPerPage={commentPerPage}
          totalPosts={totalComments}
          paginate={paginate}
          />
        </>
      )}
    </>
  );
};

export default UserPostList;
