import React, { Component } from "react";
import "./css/WriteContent.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FaPlusCircle } from "react-icons/fa";
function WriteArea() {
   return (
      <form className="writeArea">
         <div>
            <label className="contentTitle">제목</label>
            <input
               className="borderTitle"
               placeholder="제목을 작성해주세요"
            ></input>
         </div>
         <div className="borderContentName">
            <label>내용</label>
         </div>
         <div className="borderContent">
            <CKEditor
               editor={ClassicEditor}
               data="내용을 입력해주세요"
               // placeholder를 사용하려면 config설정을 따로 해줘야 한다.
               onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log(data);
               }}
            />
         </div>
         <div className="addTagHeader">
            <label>태그 추가</label>
            <button>
               <FaPlusCircle></FaPlusCircle>
            </button>
         </div>

         <div className="boardButton">
            <input className="backButton" type="submit" value="목록으로" />
            <input className="writeButton" type="submit" value="작성 완료" />
         </div>
      </form>
   );
}

export default WriteArea;
