const fakeuser = {
    data : [
        {
            "id": 1,
            "email": "test@gmail.com",
            "password": "12345",
            "name": "김코딩",
            "nickname": "댕댕이",
            "birth": "2030/04/30",
            "chatBox": "chatBox",   
            "createdAt": "2020/04/28",
            "updatedAt": "updated time",
        },
        {
            "id": 2,
            "email": "TTTTTEST@gmail.com",
            "password": "0000",
            "name": "박해커",
            "nickname": "개냥이",
            "birth": "2077/01/01",
            "chatBox": "야옹야옹야옹야옹야옹야옹",   
            "createdAt": "2020/04/30",
            "updatedAt": "updated time 2",
        },
    ]
    

}

const fakecontent = {
    data : [
        {
            "id": 1,
            "userId": 1,
            "boardcode": 1,
            "title": "안녕하세요? 테스트 데이터 입니다.",
            "img": "https://opgg-com-image.akamaized.net/attach/images/20200531064223.1202297.jpg",   
            "content": "이건 게시글 내용 입니다 !",    
            "createdAt": "2019/01/01",
            "updatedAt": "updated time",
        },
        {
            "id": 2,
            "userId": 2,
            "boardcode": 2,
            "title": "안녕하세요? 보더코드 2테스트 데이터 입니다.",
            "img": 'https://source.unsplash.com/Tn8DLxwuDMA/300x400',   
            "content": "게시글 내용 ver.2 입니다 !",    
            "createdAt": "2021/10/24",
            "updatedAt": "updated time ver.2",
        },
    ]
}

const fakecomment = {
    data : [
        {
            "id": 1,
            "contentId" : 1,
            "userId" : 1,
            "content" : "이것 댓글입니다", 
        },
        {
            "id": 2,
            "contentId" : 2,
            "userId" : 2,
            "content" : "박씨 댓글입니다", 
        },
    ]
        
}


export default{
    fakeuser,
    fakecontent,
    fakecomment
}