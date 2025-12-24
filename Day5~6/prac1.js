// 함수 선언하기

// 파이썬의 def와 비슷한 선언 방식

function calculateTotal(price, count) {
    return price * count;
};

console.log(calculateTotal(10000, 2));

// 화살표 함수 자바 스크립트에선 이걸 많이 씀 숙련해야됨

const add = (a, b) => {
    return a + b;
};

console.log(add(1, 2));

const mult = (a, b) => a * b; // return 생략도 가능 대신 함수가 한줄일때만

console.log(mult(1, 2));

// 할인 계산 시스템

const getDiscountMessage = (price, rate) => {
    const discountedPrice = price * (1 - rate);

    return `최종 결제 금액은 ${discountedPrice}원입니다.`;
};
const message = getDiscountMessage(10000, 0.1);
console.log(message);
