// 직렬화하기

const laptop = {
    brand: "Apple",
    model: "MacBook",
    price: 2000000
};

// 객체를 JSON 문자열로 변환 (직렬화) JSON 문자열은 다른 언어에 전달할 때 사용
const laptopStr = JSON.stringify(laptop);

console.log("변환된 데이터 : ", laptopStr);
console.log("변환된 데이터의 타입 : ", typeof (laptopStr));

