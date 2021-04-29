import React from "react";
import "./css/PreSaleListItem.css";
import image from "../image/profile.jpeg";

function PreSaleListItem() {
   return (
      <div className="itemGroup">
         <div>
            <div className="item">
               <img src={image} className="image"></img>
               <h4 className="itemTitle">강아지 분양합니다</h4>
               <hr />
               <h4>해시태그</h4>
            </div>
            <div className="item">
               <img src={image} className="image"></img>
               <h4 className="itemTitle">강아지 분양합니다</h4>
               <hr />
               <h4>해시태그</h4>
            </div>
         </div>
         <div>
            <div className="item">
               <img src={image} className="image"></img>
               <h4 className="itemTitle">강아지 분양합니다</h4>
               <hr />
               <h4>해시태그</h4>
            </div>
            <div className="item">
               <img src={image} className="image"></img>
               <h4 className="itemTitle">강아지 분양합니다</h4>
               <hr />
               <h4>해시태그</h4>
            </div>
         </div>
         <div>
            <div className="item">
               <img src={image} className="image"></img>
               <h4 className="itemTitle">강아지 분양합니다</h4>
               <hr />
               <h4>해시태그</h4>
            </div>
            <div className="item">
               <img src={image} className="image"></img>
               <h4 className="itemTitle">강아지 분양합니다</h4>
               <hr />
               <h4>해시태그</h4>
            </div>
         </div>
      </div>
   );
}

export default PreSaleListItem;
/* abc */
