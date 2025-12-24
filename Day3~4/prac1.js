/*
    비교 연산자
    a === b : 값과 데이터 타입이 모두 같아야 true
    a == b : 값이 같아야 true

    a !== b : 값과 데이터 타입이 모두 다르면 true
    a != b : 값이 다르면 true

    && : 논리곱 (AND) 모든 조건이 참이여야 true
    || : 논리합 (OR) 하나라도 참이면 true
    ! : 논리부정 (NOT)
*/

// 조건문 : if-else와 삼향 연산자
const score = 85;

if (score >= 90) {
    console.log("A");
} else {
    console.log("B");
}

const grade = score >= 90 ? "A" : "B";
console.log(grade);