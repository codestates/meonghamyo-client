import React, { Component } from "react";
// import "../App.css";
import "../component/css/WriteContent.css";
import Footer from "../component/Footer";
import WriteArea from "../component/WriteArea";

function WriteContent() {
   return (
      <div>
         <div className="writeContentHeader">게시글 작성</div>
         <hr className="borderHr" />
         <WriteArea />
         <footer>
            <Footer></Footer>
         </footer>
      </div>
   );
}
export default WriteContent;
