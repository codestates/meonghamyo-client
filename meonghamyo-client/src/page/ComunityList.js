import React, { useEffect, useState } from 'react';
import '../component/css/ComunityList.css';
import fakedata from '../fakedata';

function ComunityList() {
    let counter = 0;
        return(
            <div>
                <h1 className='comunityBox'>커뮤니티 게시판</h1>
                <div id='main'>
                    <table className='comunityTable'>
                        <tr>
                            <th className='contentIdx'>번호</th>
                            <th className='contentTitle'>제목</th>
                            <th className='createAt'>작성일</th>
                        </tr>
                        <tr>
                            <td className='cumunityCounter'>{counter+1}</td>
                            <td className='cumunityContent'>{fakedata.fakecontent.data[1].title}</td>
                            <td className='cumunityCreatedAt'>{fakedata.fakecontent.data[1].createdAt}</td>
                        </tr>
                    </table>
                </div>
                <div className='newContent'>
                    <button className='newContentBtn'>새 글쓰기</button>
                </div>
                <div className='pagination'>- 1 2 3 4 5 -</div>
            </div>
        )
}

export default ComunityList;