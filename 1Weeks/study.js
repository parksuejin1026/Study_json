// 데이터
const user = {
    name: "Hong Gil Dong",
    age: 20,
    isStudent: true,
    hobbis: ["coding", "reading"]
};

// 출력
console.log("실행 시작 ...")
console.log("이름 : ", user.name)
console.log("나이 : ", user.age)
if (user.isStudent) {
    console.log("학생입니다.")
} else {
    console.log("학생이 아닙니다.")
}
console.log("취미 : ", user.hobbis)

// 조건문 연습
const myAge = 20;
const isAdult = myAge >= 19;

if (isAdult) {
    console.log("성인입니다.")
} else {
    console.log("청소년입니다.")
}