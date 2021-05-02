import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../component/css/ComunityList.css";
import fakedata from "../fakedata";
import Footer from "../component/Footer";
function ComunityList() {
   let counter = 0;
   return (
      <div>
         <h1 className="comunityBox">커뮤니티 게시판</h1>
         <div id="main">
            {/* <section className='comunityTable'>

                    </section> */}
            <table className="comunityTable">
               <tr>
                  <th className="contentIdx">번호</th>
                  <th className="contentTitle">제목</th>
                  <th className="createAt">작성일</th>
               </tr>
               {/* {fakedata.fakecontent} */}
               <tr>
                  <td className="cumunityCounter">{counter + 1}</td>
                  <td className="cumunityContent">
                     {fakedata.fakecontent.data[1].title}
                  </td>
                  <td className="cumunityCreatedAt">
                     {fakedata.fakecontent.data[1].createdAt}
                  </td>
               </tr>
            </table>
         </div>
         <div className="newContent">
            <Link to="/writepage">
               <button className="newContentBtn">새 글쓰기</button>
            </Link>
         </div>
         <div className="pagination">- 1 2 3 4 5 -</div>
         <Footer></Footer>
      </div>
   );
}

export default ComunityList;
