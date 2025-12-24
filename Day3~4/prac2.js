const reponseJson = `{"status" : 200, "data" : "Success"}`;
const response = JSON.parse(reponseJson); // 역직렬화

// 조건문 활용하기
if (response.status === 200 && response.data !== null) {
    console.log("데이터를 성공적으로 가져왔습니다.");
} else {
    console.log("데이터에 문제가 발생했습니다.");
}

// 삼향 연산자 사용 (알림 메시지 만들기)
const alterMsg = response.status === 200 ? "정상 작동" : "오류 발생";
console.log(`시스템 상태 : ${alterMsg}`);
