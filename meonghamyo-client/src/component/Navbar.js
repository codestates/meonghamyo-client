import React from "react";
import "./css/Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="Navbar">
        <a href="#" className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </a>
        <div> MeongHaMyo </div>
        <img
          className="profileImg"
          src="https://pbs.twimg.com/profile_images/1021436156347539456/TGv26B8O_400x400.jpg"
        />
      </div>
    </div>
  );
};

export default Navbar;
