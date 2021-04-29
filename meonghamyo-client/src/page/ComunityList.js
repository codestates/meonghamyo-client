import React, { useEffect, useState } from 'react';
import '../component/css/ComunityList.css'

function ComunityList() {
        return(
            <div>
                <h1 className='comunityBox'>커뮤니티 게시판</h1>
                <div id='main'>
                    <table className='comunnityTable'>
                        <tr>
                            <th className='contentIdx'>번호</th>
                            <th className='contentTitle'>제목</th>
                            <th className='createAt'>작성일</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>이거</td>
                            <td >2021-04-28</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>이렇게</td>
                            <td>2021-04-27</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>만들면</td>
                            <td>2020-11-10</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>되나</td>
                            <td>2020-08-14</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>되나</td>
                            <td>2020-08-14</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>되나</td>
                            <td>2020-08-14</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>되나</td>
                            <td>2020-08-14</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>되나</td>
                            <td>2020-08-14</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>되나</td>
                            <td>2020-08-14</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>되나</td>
                            <td>2020-08-14</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>되나</td>
                            <td>2020-08-14</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>되나</td>
                            <td>2020-08-14</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>되나</td>
                            <td>2020-08-14</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>되나</td>
                            <td>2020-08-14</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>되나</td>
                            <td>2020-08-14</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>되나</td>
                            <td>2020-08-14</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>되나</td>
                            <td>2020-08-14</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>되나</td>
                            <td>2020-08-14</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>되나</td>
                            <td>2020-08-14</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>되나</td>
                            <td>2020-08-14</td>
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