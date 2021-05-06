import React from "react";
import Banner from "../component/Banner";
import PreSaleList from "../component/PreSaleList";

function MainPage() {
   return (
      <div className='parceloutListPage'>
         <Banner></Banner>
         {/* 처음에 PreSaleList 페이지를 보여주고, 태그를 눌렀을 때 TagPreSaleList를 보여주어야 한다.*/}
         <PreSaleList></PreSaleList>
      </div>
   );
}

export default MainPage;
