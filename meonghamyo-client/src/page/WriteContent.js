import React from "react";
import { useParams } from "react-router";
// import "../App.css";
import "../component/css/WriteContent.css";
import Footer from "../component/Footer";
import UpdateArea from "../component/UpdataArea";
import WriteArea from "../component/WriteArea";

function WriteContent() {
   let params = useParams();
   return (
      <div>
         <div className="writeContentHeader">게시글 작성</div>
         <hr className="borderHr" />
         {params.id?<UpdateArea />:<WriteArea />}
         <Footer></Footer>
      </div>
   );
}
export default WriteContent;
