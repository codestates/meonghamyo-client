import React from "react";
import "../Banner.css";
import banner from "../images/profile.jpeg";

function Banner() {
   return (
      <div className="Banner">
         <img src={banner} className="banner"></img>
      </div>
   );
}

export default Banner;
