import React from "react";
import "./css/PreSaleListItem.css";

const PreSaleListItem = ({ posts, loading }) => {
   console.log(posts);
   if (loading) {
      return <h2>Loading...</h2>;
   }
   return posts === null ? (
      <h2>해당 게시글의 내용이 비어있습니다.</h2>
   ) : (
      <div className="itemGroup">
         {posts.map((post) => (
            <div key={post.id} className="item">
               <img src={post.img} className="image" />
               <h4 className="itemTitle">{post.title}</h4>
               <hr />
               <h4>
                  {/* {posts.tags.map((tag) => (
                     <div className="tag" key={tag}>
                        {tag}
                     </div>
                  ))} */}
               </h4>
            </div>
         ))}
      </div>
   );
};

export default PreSaleListItem;
// <ul className="list-group mb-4">
//    {posts.map((post) => (
//       <li key={post.id} className="list-group-item">
//          {post.title}
//       </li>
//    ))}
// </ul>;

//       <div className="itemGroup">
//          <div>
//             <div className="item">
//                <img
//                   src="https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjlfMzcg/MDAxNTUzODI3OTU3NTg1.geQ7whX1F1DWXBeARbVmBfuqZWp_Db152hko56ZQneIg.5fjMBtfCJeBPcwr1CIndT4qQGbepVcgI9skIDJkEDq8g.JPEG.petianbooks/%EA%B0%95%EC%95%84%EC%A7%80_%EA%B0%B8%EC%9A%B0%EB%9A%B1.jpg?type=w800
// "
//                   className="image"
//                ></img>
//                <h4 className="itemTitle">강아지 분양합니다</h4>
//                <hr />
//                <h4>해시태그</h4>
//             </div>
//             <div className="item">
//                <img
//                   src="https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjlfMzcg/MDAxNTUzODI3OTU3NTg1.geQ7whX1F1DWXBeARbVmBfuqZWp_Db152hko56ZQneIg.5fjMBtfCJeBPcwr1CIndT4qQGbepVcgI9skIDJkEDq8g.JPEG.petianbooks/%EA%B0%95%EC%95%84%EC%A7%80_%EA%B0%B8%EC%9A%B0%EB%9A%B1.jpg?type=w800"
//                   className="image"
//                ></img>
//                <h4 className="itemTitle">강아지 분양합니다</h4>
//                <hr />
//                <h4>해시태그</h4>
//             </div>
//          </div>
//          <div>
//             <div className="item">
//                <img
//                   src="https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjlfMzcg/MDAxNTUzODI3OTU3NTg1.geQ7whX1F1DWXBeARbVmBfuqZWp_Db152hko56ZQneIg.5fjMBtfCJeBPcwr1CIndT4qQGbepVcgI9skIDJkEDq8g.JPEG.petianbooks/%EA%B0%95%EC%95%84%EC%A7%80_%EA%B0%B8%EC%9A%B0%EB%9A%B1.jpg?type=w800"
//                   className="image"
//                ></img>
//                <h4 className="itemTitle">강아지 분양합니다</h4>
//                <hr />
//                <h4>해시태그</h4>
//             </div>
//             <div className="item">
//                <img
//                   src="https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjlfMzcg/MDAxNTUzODI3OTU3NTg1.geQ7whX1F1DWXBeARbVmBfuqZWp_Db152hko56ZQneIg.5fjMBtfCJeBPcwr1CIndT4qQGbepVcgI9skIDJkEDq8g.JPEG.petianbooks/%EA%B0%95%EC%95%84%EC%A7%80_%EA%B0%B8%EC%9A%B0%EB%9A%B1.jpg?type=w800
// "
//                   className="image"
//                ></img>
//                <h4 className="itemTitle">강아지 분양합니다</h4>
//                <hr />
//                <h4>해시태그</h4>
//             </div>
//          </div>
//          <div>
//             <div className="item">
//                <img
//                   src="https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjlfMzcg/MDAxNTUzODI3OTU3NTg1.geQ7whX1F1DWXBeARbVmBfuqZWp_Db152hko56ZQneIg.5fjMBtfCJeBPcwr1CIndT4qQGbepVcgI9skIDJkEDq8g.JPEG.petianbooks/%EA%B0%95%EC%95%84%EC%A7%80_%EA%B0%B8%EC%9A%B0%EB%9A%B1.jpg?type=w800"
//                   className="image"
//                ></img>
//                <h4 className="itemTitle">강아지 분양합니다</h4>
//                <hr />
//                <h4>해시태그</h4>
//             </div>
//             <div className="item">
//                <img
//                   src="https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjlfMzcg/MDAxNTUzODI3OTU3NTg1.geQ7whX1F1DWXBeARbVmBfuqZWp_Db152hko56ZQneIg.5fjMBtfCJeBPcwr1CIndT4qQGbepVcgI9skIDJkEDq8g.JPEG.petianbooks/%EA%B0%95%EC%95%84%EC%A7%80_%EA%B0%B8%EC%9A%B0%EB%9A%B1.jpg?type=w800"
//                   className="image"
//                ></img>
//                <h4 className="itemTitle">강아지 분양합니다</h4>
//                <hr />
//                <h4>해시태그</h4>
//             </div>
//          </div>
//       </div>
