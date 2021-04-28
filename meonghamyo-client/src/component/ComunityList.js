import React from 'react';

class ComunityList extends React.Component{
    render(){
        return(
            <div>
                <div id='main'>
                    hello world
                    <table border='1'>
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
                    </table>
                </div>
                
            </div>
        )
    }
}

export default ComunityList;