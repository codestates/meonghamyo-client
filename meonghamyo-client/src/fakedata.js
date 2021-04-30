const fakeuser = {
    "id": 0,
    "email": "test@gmail.com",
    "password": "12345",
    "name": "김코딩",
    "nickname": "댕댕이",
    "birth": "2030/04/30",
    "chatBox": "chatBox",   
    "createdAt": "2020/04/28",
    "updatedAt": "updated time",

}

const fakecontent = {
        "id": 1,
        "userId": 0,
        "boardcode": 1,
        "title": "안녕하세요? 테스트 데이터 입니다.",
        "img": "https://opgg-com-image.akamaized.net/attach/images/20200531064223.1202297.jpg",   
        "content": "이건 게시글 내용 입니다 !",    
        "createdAt": "2019/01/01",
        "updatedAt": "updated time",
       
}

const fakecomment = {
        "id": 1,
        "contentId" : 1,
        "userId" : 0,
        "content" : "이것 댓글입니다", 
}


export default{
    fakeuser,
    fakecontent,
    fakecomment
}