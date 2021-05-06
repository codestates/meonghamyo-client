import React, { useState } from "react";
import "./css/PreSaleListItem.css";
import { Link } from "react-router-dom";
import axios from "axios";

const PreSaleListItem = ({ posts, loading }) => {
   // const [tag, setTag] = useState("");
   const [data, setData] = useState([]);
   const tagArray = data.slice(0);
   // const handleTag = (event) => {
   //    setTag(event.target.value);
   //    console.log(tag);
   // };

   const fetchTag = async (event) => {
      const tag = event.target.value;
      //console.log(tag);
      await axios
         .post("https://localhost:4000/content/taginfo", {
            tagName: tag,
         })
         .then((res) => {
            console.log(res.data.data[0].result); //res.data[0]
            setData(res.data.data[0].result);
         });
   };
   //fetchTag();
   console.log("데이터", Array.isArray(data));
   if (loading) {
      return <h2>Loading...</h2>;
   }
   return posts === null ? (
      <h2>해당 게시글의 내용이 비어있습니다.</h2>
   ) : data.length === 0 ? (
      <div className="itemGroup">
         {posts.map((post) => (
            <div key={post.id} className="item">
               <Link className="listLink" to={`/content/${post.id}`}>
                  {post.img === null ? (
                     <img
                        src={`https://dash-bootstrap-components.opensource.faculty.ai/static/images/placeholder286x180.png`}
                        className="image"
                     />
                  ) : (
                     <img
                        src={`https://localhost:4000/${post.img}`}
                        className="image"
                     />
                  )}
                  <h4 className="itemTitle">{post.title}</h4>
               </Link>
               <hr />
               <h4>
                  {post.tags.map((tag) => (
                     // <Link className="listLink" to={`/taginfo/${tag.tagName}`}>
                     <button
                        className="tag"
                        value={tag.tagName}
                        onClick={fetchTag}
                        key={tag.tagContent.tagId}
                     >
                        {tag.tagName}
                     </button>
                     // </Link>
                  ))}
               </h4>
            </div>
         ))}
      </div>
   ) : (
      <div className="itemGroup">
         {tagArray.map((post) =>
            post.map((tagItem) => (
               <div key={tagItem.id} className="item">
                  <Link className="listLink" to={`/content/${tagItem.id}`}>
                     <img
                        src={`https://localhost:4000/${tagItem.img}`}
                        className="image"
                     />
                     <h4 className="itemTitle">{tagItem.title}</h4>
                  </Link>
                  <hr />
                  <h4>
                     {tagItem.tags.map((tag) => (
                        <button
                           className="tag"
                           value={tag.tagName}
                           onClick={fetchTag}
                           key={tag.tagContent.tagId}
                        >
                           {tag.tagName}
                        </button>
                     ))}
                  </h4>
               </div>
            ))
         )}
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
