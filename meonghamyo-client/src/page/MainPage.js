import React, { Component } from "react";
// import "../App.css";
import Navigation from "../component/Nav";
import Banner from "../component/Banner";
import PreSaleList from "../component/PreSaleList";
import Footer from "../component/Footer";

function MainPage() {
   return (
      <div>
         <header className="App-header">
            <Navigation></Navigation>
         </header>
         <Banner></Banner>
         <PreSaleList></PreSaleList>
         <footer>
            <Footer></Footer>
         </footer>
      </div>
   );
}

export default MainPage;
