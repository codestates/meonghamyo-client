import React from "react";
import "../PreSaleListItem.css";
function PreSaleListItem() {
   return (
      <div className="item">
         <FontAwesomeIcon icon={faBars} className="bars"></FontAwesomeIcon>
         <div className="title">Meonghamyo</div>
         <img src={profile} className="profile"></img>
      </div>
   );
}

export default PreSaleListItem;
