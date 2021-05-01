import React from "react";
import "./css/Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
   }
   return (
      <nav>
         <ul className="pagination">
            {pageNumbers.map((number) => (
               <li key={number} className="pageItem">
                  <a
                     onClick={() => paginate(number)}
                     href="#"
                     className="pageLink"
                  >
                     {number}
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
};
export default Pagination;
