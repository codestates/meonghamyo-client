import React from "react";
import "../component/css/ContentPage.css";
import fakedata from "../fakedata";
import Footer from "../component/Footer";
function NewContent() {
   return (
      <div className="contentPage">
         <div className="titleBar">
            <div className="writer">{fakedata.fakeuser.data[1].nickname}</div>
            <h2 className="title">{fakedata.fakecontent.data[1].title}</h2>
            <div className="dateOfUpload">
               {fakedata.fakecontent.data[1].createdAt}
            </div>
         </div>
         <div className="contentBox">
            <img
               className="contentImg"
               src={fakedata.fakecontent.data[1].img}
            />
            <div className="contentWord">
               {fakedata.fakecontent.data[1].content}
            </div>
         </div>
         <div className="contentBtnBox">
            <button className="contentBtn">삭제</button>
            <button className="contentBtn">수정</button>
            <button className="contentBtn">글 목록 이동</button>
         </div>
         <div className="commentBox">
            - 댓글 리스트 -
            <table className="commentTable">
               <tr>
                  <th className="commentNickName">닉네임</th>
                  <th className="commentWord">댓글</th>
                  <th className="commentCreateAt">작성일</th>
               </tr>
               <tr>
                  <td className="tdNickName">
                     {fakedata.fakeuser.data[1].nickname}
                  </td>
                  <td className="tdComment">
                     {fakedata.fakecomment.data[1].content}
                  </td>
                  <td className="tdCreatedAt">
                     {fakedata.fakecomment.data[1].createdAt}
                  </td>
               </tr>
               <tr>
                  <td className="tdNickName">나르</td>
                  <td className="tdComment">슈슈파가</td>
                  <td className="tdCreatedAt">2021-04-27</td>
               </tr>
               <tr>
                  <td className="tdNickName">포돌이</td>
                  <td className="tdComment">잡았다 요놈</td>
                  <td className="tdCreatedAt">2021-04-25</td>
               </tr>
            </table>
            <div className="pagination">- 1 2 3 4 5 -</div>
         </div>
         <Footer></Footer>
      </div>
   );
}

export default NewContent;
