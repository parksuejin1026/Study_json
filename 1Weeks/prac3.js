// JSON 문자열로 받아온 문자열 다시 js 객체로 변환하기
// 역직렬화

const receivedData = '{"id" : 1, "status" : "active"}';

// 문자열을 다시 JS 객체로 변환
const userObj = JSON.parse(receivedData);

console.log("사용자 상태 : ", userObj.status);


