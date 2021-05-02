import React, { useState } from "react";
import "./css/WriteContent.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import TagsInput from "./TagsInput";
import "./css/TagsInput.css";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const WriteArea = () => {
   const [boardName, setBoardName] = useState({
      boardName: "parcelOutContent",
   });
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const [img, setImg] = useState("");
   const [tags, setTags] = useState([]);
   const [errors, setErrors] = useState("");
   const [viewContent, setViewContent] = useState([]);

   //contentSelect(분양게시글, 커뮤니티게시글)
   const handleChange = (event) => {
      setBoardName({ boardName: event.target.value });
   };
   //title,content,img
   const handleInputValue = (key) => (e) => {
      setTitle({ [key]: e.target.value });
   };

   //태그
   const changeTagsHandler = (name, value) => {
      if (name === "tags") {
         setTags({ [name]: value });
      }
   };
   //데이터 보내기 (오류검사)
   //데이터 추가로 날짜, 작성자 닉네임,
   const submitHandler = () => {
      if (
         tags.length === 0 ||
         title.length === 0 ||
         title === "" ||
         title.borderTitle === ""
      ) {
         //title이 빈값일 때(타이핑 하다가 내용 다 없애고 보낼때 에러메시지가 안나온다.) "" 이렇게 보내주고 있다. ===> (해결) 글을 썻다 지웠다해도 객체의 키값이 존재하기 때문에 예외처리에서 벗어났었다.
         setErrors("빈 작성란을 채워주세요");
      } else {
         if (errors) {
            setErrors(() => {
               const prevErrors = "";
               return prevErrors;
            });
         } else {
            //Submit form
            setViewContent(
               viewContent.concat({
                  ...boardName,
                  ...title,
                  ...content,
                  ...tags,
               })
            );
         }
      }
   };

   //서버 통신
   // const submitContent = () => {
   //    if (
   //       tags.length === 0 ||
   //       title.length === 0 ||
   //       title === "" ||
   //       title.borderTitle === ""
   //    ) {
   //       //title이 빈값일 때(타이핑 하다가 내용 다 없애고 보낼때 에러메시지가 안나온다.) "" 이렇게 보내주고 있다.
   //       setErrors("빈 작성란을 채워주세요");
   //    } else {
   //       if (errors) {
   //          setErrors(() => {
   //             const prevErrors = "";
   //             return prevErrors;
   //          }).then(() => {
   //             axios
   //                .post("/https://meonghamyo.com/content/create", {
   //                   title: viewContent[0].borderTitle,
   //                   boardName: viewContent[0].boardName,
   //                   content: viewContent[0].content,
   //                   tags: viewContent[0].tags,
   //                })
   //                .then(() => {
   //                   alert("게시글을 작성하셨습니다");
   //                });
   //          });
   //       } else {
   //          axios
   //             .post("/https://meonghamyo.com/content/create", {
   //                title: viewContent[0].borderTitle,
   //                boardName: viewContent[0].boardName,
   //                content: viewContent[0].content,
   //                tags: viewContent[0].tags,
   //             })
   //             .then(() => {
   //                alert("게시글을 작성하셨습니다");
   //             });
   //       }
   //    }
   // };

   //이미지 넣는법 코드 실험
   // function MyCustomUploadAdapterPlugin(editor) {
   //    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
   //       return new UploadAdapter(loader);
   //    };
   // }
   // ClassicEditor.create(document.querySelector("#editor"), {
   //    extraPlugins: [MyCustomUploadAdapterPlugin],
   // }).catch((error) => {
   //    console.log(error);
   // });

   return (
      <form className="writeArea" onSubmit={(e) => e.preventDefault()}>
         <div className="contentSelect">
            <label className="contentSelectTitle">게시글 선택</label>
            <select value={boardName.value} onChange={handleChange}>
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
               name="borderTitle"
               placeholder="제목을 작성해주세요"
               onChange={handleInputValue("borderTitle")}
            ></input>
         </div>
         <div className="borderContentName">
            <label>내용</label>
         </div>
         <div className="borderContent" value="borderContent">
            <CKEditor
               editor={ClassicEditor}
               data="내용을 입력해주세요"
               // placeholder를 사용하려면 config설정을 따로 해줘야 한다.
               config={{ ckfinder: { uploadUrl: "/uploads" } }}
               onChange={(event, editor) => {
                  const data = editor.getData();
                  // console.log(data);
                  setContent({ ...content, content: data });
                  console.log(content);
               }}
            />
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
            <Link to="/comunity">
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
