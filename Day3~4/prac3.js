// 예제 1

const myAge = "20";
const targetAge = 20;

// 데이터 타입까지 같은 지 비교할떄는 === 비교 연산자 사용
const isSame = (myAge === targetAge);
console.log(`결과 : ${isSame ? "완전 일치" : "불일치"}`);

// 예제 2

const temperature = 28;

// 문제 : 온도가 25도 이상이면 "에어컨 가동", 아니면 "에어컨 정지" 출력
if (temperature >= 25) {
    console.log("에어컨 가동");
} else {
    console.log("에어컨 정지");
}

// 예제 3
/**
 * 문제 : 입장 조건은 다음과 같다
 * 1. 티켓과 신분증이 모두 있거나 (AND)
 * 2. 혹은 VIP 맴버이거나 (OR)
 */

const hasTicket = true;
const hasIDCard = false;
const isVip = true;

const canEnter = (hasTicket && hasIDCard) || isVip;
console.log(`입장 가능 여부 : ${canEnter ? "가능 합니다." : "불가능 합니다."}`);

// 예제 4 

/**
 * 문제 : 점수에 따라 등급 결정하기
 * 90점 이상 : "우수"
 * 80점 이상 : "보통"
 * 그 외 : "노력필요"
 */

const score = 85;
const grade = score >= 90 ? "우수" : score >= 80 ? "보통" : "노력이 필요";
console.log(`당신의 성적은 ${grade}(이)입니다`);

// 예제 5

/**
 * 문제 : 
 * 1. 사용자가 로그인 상태(`isLogged')여야 함
 * 2. 포인트(`point`)가 null이 아니어야 함
 * 두 조건을 만족하면 "포인트 사용 가능", 아니면 "사용 불가" 출력
 */

const sercerResonse = `{"user" : "Gemini" , "isLogged" : true , "point" : null}`;
const data = JSON.parse(sercerResonse);

if (data.user && data.point !== null) {
    console.log("포인트 사용 가능");
} else {
    console.log("포인트 사용 불가능");
}