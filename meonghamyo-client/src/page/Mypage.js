import React, { useEffect, useState } from "react";
import "../component/css/Mypage.css";
import { useHistory } from "react-router-dom";
import UserInfoTable from "../component/UserInfoTable";
import UserPostList from "../component/UserPostList";
import axios from "axios";
import Footer from "../component/Footer";
axios.defaults.withCredentials = true;
const Mypage = ({
   currentUser,
   fakeContent,
   fakeComment,
   userLogout,
   closeLoginModal,
}) => {
   const [listCheck, setlistCheck] = useState(true);
   const [currentPost, setcurrentPost] = useState([]);
   const [currentComment, setcurrentComment] = useState([]);
   const [currentPic, setcurrentPic] = useState("");
   const history = useHistory();

   useEffect(() => {
      const postData = async () => {
         await axios
            .get("https://localhost:4000/mypage/usercontent")
            .then((res) => {
               let newCurrentPost = [...currentPost];
               newCurrentPost = [
                  ...newCurrentPost,
                  ...res.data.data[0].userContents,
               ];
               setcurrentPost(newCurrentPost);
            });
      };
      postData();
   }, []);

   useEffect(() => {
      const commentData = async () => {
         await axios
            .get("https://localhost:4000/mypage/usercomment")
            .then((res) => {
               let newCurrentComment = [...currentComment];
               newCurrentComment = [
                  ...newCurrentComment,
                  ...res.data.data[0].userConmments,
               ];
               setcurrentComment(newCurrentComment);
            });
      };
      commentData();
   }, []);

   const handleLogout = () => {
      axios.post("https://localhost:4000/mypage/logout").then((res) => {
         userLogout();
         closeLoginModal();
         history.push("/");
      });
   };

   const selectImage = (e) => {
      if (e.target.files !== null) {
         const fd = new FormData();

         fd.append("image", e.target.files[0]);
         console.log(fd);

         axios
            .post("https://localhost:4000/user/profileupload", fd)
            .then((res) => {
               console.log(res);
               setcurrentPic(res.data);
            });
      }
      console.log("이건", e.target.files);
   };

   return currentUser === null ? (
      <div>
         currentUser가 Null 일 경우 에러 떠서 보기싫어가지고 일단 임시로 이걸
         열어 놨습니다!
      </div>
   ) : (
      <div>
         <h1 className="mypageTitle">회원정보</h1>
         <hr></hr>
         <div className="userInfoArea">
            <div className="pictureArea">
               {currentPic.length === 0 ? (
                  <img className="userImage" src={currentUser.img} />
               ) : (
                  <img
                     className="userImage"
                     src={`https://localhost:4000/${currentPic}`}
                  />
               )}
               {/* <img className="userImage" src={currentUser.img} /> */}
               {/* <button className="pictureBtn" onClick={}>사진 변경</button> */}
               <input
                  type="file"
                  accept="image/jpeg, image/jpg, image/png"
                  onChange={selectImage}
               ></input>
            </div>
            <UserInfoTable
               currentUser={currentUser}
               closeLoginModal={closeLoginModal}
               userLogout={userLogout}
            />
         </div>
         <div className="postList">
            <h1>내가 쓴 글 리스트</h1>
            <div className="listBtnDiv">
               <button
                  className="userPostListBtn"
                  onClick={() => {
                     setlistCheck(true);
                  }}
               >
                  게시글
               </button>
               <button
                  className="userCommentListBtn"
                  onClick={() => {
                     setlistCheck(false);
                  }}
               >
                  댓글
               </button>
            </div>
            <UserPostList
               listCheck={listCheck}
               fakeContent={fakeContent}
               fakeComment={fakeComment}
               currentUser={currentUser}
               currentPost={currentPost}
               currentComment={currentComment}
            />
         </div>
         <button className="logoutBtn" onClick={handleLogout}>
            로그아웃
         </button>
         <Footer />
      </div>
   );
};

export default Mypage;
