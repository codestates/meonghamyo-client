import React, { useEffect, useState } from "react";
import "./css/WriteContent.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import TagsInput from "./TagsInput";
import "./css/TagsInput.css";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const UpdateArea = () => {

   let params = useParams();
   console.log(params.id);
   let id = params.id;

   const [boardName, setBoardName] = useState({
      boardName: "parcelOutContent",
   });
   //const [title, setTitle] = useState("");
   const [boardContent, setBoardContent] = useState({
      title: "",
      contentBody: "",
   });
   const [img, setImg] = useState("");
   const [tags, setTags] = useState([]);
   const [errors, setErrors] = useState("");
   const [data, setData] = useState(null);
   const [loading, setLoading] =useState(true);

   useEffect(() => {
      const fetchData = async () => {
          await axios.get(`https://localhost:4000/content/${id}`)
          .then((res) => {
              console.log(res)
              setData(res.data.data[0]);
              setLoading(false);
              setBoardName({boardName: res.data.data[0].contentInfo.boardName })
          })
      };
      fetchData();
  },[])



   //contentSelect(분양게시글, 커뮤니티게시글)
   const handleBoardChange = (event) => {
      setBoardName({ boardName: event.target.value });
      //console.log(boardName);
   };

   //input 값 넣기
   const getValue = (e) => {
      const { name, value } = e.target;
      setBoardContent({
         ...boardContent,
         [name]: value,
      });
      //console.log(boardContent);
   };

   //태그
   const changeTagsHandler = (name, value) => {
      if (name === "tags") {
         setTags({ tagName: value });
      }
   };
   const history = useHistory();

   //데이터 보내기 (오류검사)
   //데이터 추가로 날짜, 작성자 닉네임,
   const submitHandler = () => {
      if (
         boardContent.title.length === 0 ||
         boardContent.title === "" ||
         boardContent.title.title === ""
      ) {
         //title이 빈값일 때(타이핑 하다가 내용 다 없애고 보낼때 에러메시지가 안나온다.) "" 이렇게 보내주고 있다. ===> (해결) 글을 썻다 지웠다해도 객체의 키값이 존재하기 때문에 예외처리에서 벗어났었다.
         setErrors("빈 작성란을 채워주세요");
      } else {
         if (errors) {
            setErrors("");
            axios
               .put(
                  `https://localhost:4000/content/${id}/update`,
                  { ...img, ...boardName, ...boardContent, ...tags },
                  {
                     withCredentials: true,
                  }
               )
               // sendTag()
               .then((res) => {
                  console.log(res);
                  if(data.contentInfo.boardName === 'parcelOutContent'){
                     history.push("/parcelout")
                  } else {
                     history.push("/community");
                  } 
               })
               .catch((err) => {
                  console.log(err.response);
               });
         } else {
            axios
               .put(
                  `https://localhost:4000/content/${id}/update`,
                  { ...img, ...boardName, ...boardContent, ...tags },
                  {
                     withCredentials: true,
                  }
               )
               .then((res) => {
                  console.log(res);
                  console.log("문자열:", tags);
                  if(data.contentInfo.boardName === 'parcelOutContent'){
                     history.push("/parcelout")
                  } else {
                     history.push("/community");
                  } 
               })
               .catch((err) => {
                  console.log(err.response);
               });
         }
      }
   };
   //이미지 URL주소를 받기 위한 과정.
   const selectImage = (e) => {
      if (e.target.files !== null) {
         const fd = new FormData();
         fd.append("image", e.target.files[0]);
         axios
            .post("https://localhost:4000/content/profileupload", fd)
            .then((res) => {
               console.log(res);
               setImg({ img: res.data });
            });
      }
   };

   if(loading){
      return <h2>Loading...</h2>
   }

   
   return (
      <form className="writeArea" onSubmit={(e) => e.preventDefault()}>
         <div className="contentSelect">
            <label className="contentSelectTitle">게시글 선택</label>
            <select onChange={handleBoardChange} name="boardName">
               {data.contentInfo.boardName==='parcelOutContent'?
               (<>
               <option value="parcelOutContent">분양 게시글</option>
               <option value="communityContent">커뮤니티 게시글</option>
               </>)
               :
               (<>
                  <option value="communityContent">커뮤니티 게시글</option>
                  <option value="parcelOutContent">분양 게시글</option>
               </>)
               }
            </select>
         </div>
         <div>
            <label className="contentTitle">제목</label>
            <input
               className="borderTitle"
               type="text"
               name="title"
               placeholder={data.contentInfo.title}
               onChange={getValue}
            ></input>
         </div>
         <div className="borderContentName">
            <label>내용</label>
         </div>
         <div className="borderContent" value="borderContent">
            <CKEditor
               editor={ClassicEditor}
               data={data.contentInfo.contentBody} //이곳에다 state값을 넣어줘서 계속 오류가 났음.
               onReady={(editor) => {
                  console.log("Editor is ready to use!", editor);
               }}
               onChange={(event, editor) => {
                  const data = editor.getData();
                  setBoardContent({ ...boardContent, contentBody: data });
                  console.log(boardContent);
               }}
               onBlur={(event, editor) => {
                  console.log("Blur", editor);
               }}
               onFocus={(event, editor) => {
                  console.log("Focus", editor);
               }}
            />
         </div>
         <div className="pictureArea">
            <input
               type="file"
               accept="image/jpeg, image/jpg, image/png"
               onChange={selectImage}
            ></input>
            새로운 사진을 업로드하세요
         </div>
         <div className="addTagHeader">
            <TagsInput
               label="태그"
               id="tags"
               name="tags"
               placeholder="Add tag"
               onChange={changeTagsHandler}
               defaultTags={tags}
            />
            새로운 태그를 입력하세요
         </div>
         <div className="alertError">{errors}</div>
         <div className="boardButton">
            {data.contentInfo.boardName==='parcelOutContent'?
            <Link to="/parcelout">
            <input className="backButton" type="submit" value="목록으로" />
            </Link>:
            <Link to="/community">
            <input className="backButton" type="submit" value="목록으로" />
            </Link>}
            
            <input
               className="writeButton"
               type="submit"
               value="작성 완료"
               onClick={submitHandler}
            />
          
            {console.log(tags)}
         </div>
      </form>
   );
};

export default UpdateArea;