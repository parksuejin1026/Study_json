// Boolean 여부에 따른 동적 문자열 출력

const isPassed = true;

const score = 86;

// 조건 ? 참일 때 : 거짓일 때 (삼항연산자)
const message = isPassed ? "합격" : "불합격";

console.log(`시험 점수 : ${score}, 시험 결과 : ${message}`);

