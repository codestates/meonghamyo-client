import React, { useState } from "react";
import "./css/WriteContent.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import TagsInput from "./TagsInput";
import "./css/TagsInput.css";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const WriteArea = () => {
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
   const [viewContent, setViewContent] = useState([]);

   //contentSelect(분양게시글, 커뮤니티게시글)
   const handleBoardChange = (event) => {
      setBoardName({ boardName: event.target.value });
   };
   //title데이터 가져오는 함수
   // const handleInputValue = (key) => (e) => {
   //    setTitle({ [key]: e.target.value });
   // };

   const getValue = (e) => {
      const { name, value } = e.target;
      setBoardContent({
         ...boardContent,
         [name]: value,
      });
      console.log(boardContent);
   };

   //태그
   const changeTagsHandler = (name, value) => {
      if (name === "tags") {
         setTags({ [name]: value });
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
            setErrors(() => {
               const prevErrors = "";
               return prevErrors;
            });
            //Submit form
            setViewContent(
               viewContent.concat({
                  ...img,
                  ...boardName,
                  ...boardContent,
                  ...tags,
               })
            );
            axios
               .post("https://localhost:4000/content/create", viewContent[0], {
                  withCredentials: true,
               })
               .then((res) => {
                  // history.push("/community");
               })
               .catch((err) => {
                  console.log(err);
               });
         } else {
            //Submit form
            setViewContent(
               viewContent.concat({
                  ...img,
                  ...boardName,
                  ...boardContent,
                  ...tags,
               })
            );
            console.log(viewContent[0]);
            axios
               .post("https://localhost:4000/content/create", viewContent[0], {
                  withCredentials: true,
               })
               .then((res) => {
                  // history.push("/community");
               })
               .catch((err) => {
                  console.log(err);
               });
         }
      }
   };
   const selectImage = (e) => {
      if (e.target.files !== null) {
         const fd = new FormData();
         fd.append("image", e.target.files[0]);
         console.log(fd);
         setImg({ img: fd });

         setImg(e.target.files[0]);

         // setImg(fd);
         // axios
         //    .post("https://localhost:4000/user/profileupload", fd)
         //    .then((res) => {
         //       console.log(res);
         //       setImg(res.data);
         //    });
      }
      // console.log("이건", e.target.files[0]);
   };

   return (
      <form className="writeArea" onSubmit={(e) => e.preventDefault()}>
         <div className="contentSelect">
            <label className="contentSelectTitle">게시글 선택</label>
            <select value={boardName.value} onChange={handleBoardChange}>
               <option name="parcelOutContent" value="parcelOutContent">
                  분양 게시글
               </option>
               <option name="communityContent" value="communityContent">
                  커뮤니티 게시글
               </option>
            </select>
         </div>
         <div>
            <label className="contentTitle">제목</label>
            <input
               className="borderTitle"
               type="text"
               name="title"
               placeholder="제목을 작성해주세요"
               onChange={getValue}
            ></input>
         </div>
         <div className="borderContentName">
            <label>내용</label>
         </div>
         <div className="borderContent" value="borderContent">
            <CKEditor
               editor={ClassicEditor}
               data="" //이곳에다 state값을 넣어줘서 계속 오류가 났음.
               onReady={(editor) => {
                  console.log("Editor is ready to use!", editor);
               }}
               // placeholder를 사용하려면 config설정을 따로 해줘야 한다.
               // config={{ ckfinder: { uploadUrl: "/uploads" } }}

               // onChange={(event, editor) => {
               //    handleChange(editor);
               // }}
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
            {/* {console.log(img)} */}
            {/* <img className="userImage" src={`https://localhost:4000/${img}`} /> */}

            {/* <img className="userImage" src={currentUser.img} /> */}
            {/* <button className="pictureBtn" onClick={}>사진 변경</button> */}
            <input
               type="file"
               accept="image/jpeg, image/jpg, image/png"
               onChange={selectImage}
            ></input>
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
         </div>
         <div className="alertError">{errors}</div>
         <div className="boardButton">
            <Link to="/community">
               <input className="backButton" type="submit" value="목록으로" />
            </Link>
            {/* <Link to="/"> */}
            <input
               className="writeButton"
               type="submit"
               value="작성 완료"
               onClick={submitHandler}
            />
            {/* </Link> */}
            {console.log(viewContent[0])}
         </div>
      </form>
   );
};

export default WriteArea;
