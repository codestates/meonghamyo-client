import React from "react";
import "./css/PreSaleList.css";
import PreSaleListItem from "./PreSaleListItem";
// import { Link } from "react-router-dom";
function PreSaleList() {
   return (
      <div className="list">
         <header className="PreSaleListHeader">
            <div className="listName">분양 리스트</div>
         </header>
         <PreSaleListItem></PreSaleListItem>
         <div className="ButtonList">
            <button className="buttonList">리스트 더보기</button>
         </div>
      </div>
   );
}

export default PreSaleList;
/* abc */
