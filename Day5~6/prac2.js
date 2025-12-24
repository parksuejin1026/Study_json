// 문제 : 두 숫자를 곱한 결과를 반환하는 화살표 함수를 작성
const mult = (a, b) => {
    const result = a * b;
    return `${a}와 ${b}를 곱한 결과는 ${result}입니다.`;
};

console.log(mult(10, 5));

// 문제 : 이름을 입력받아 인사말을 출력하되, 이름이 없으면 "손님"으로 출력

const greet = (name = "손님") => {
    return `안녕하세요, ${name}님!`;
};

console.log(greet("철수"));
console.log(greet());

// 문제 : 점수를 입력받아 60점 이상이면 "PASS", 미만이면 "FAIL"을 반환

const checkPass = (score) => {
    if (score >= 60) {
        return `점수 ${score}점! 합격입니다!`;
    } else {
        return `점수 ${score}점.. 불합격입니다.. 다음에 다시 도전해보세요!`;
    }
};

console.log(checkPass(76));
console.log(checkPass(45));

// 문제 : 이름과 나이를 받아 유저 객체를 생성해주는 함수 생성

const makeUser = (name, age) => {
    user = {
        userName : name,
        userAge : age,
        isAdult : age >= 19 ? true : false
    };
    return `${user.userName}님의 정보를 생성했습니다! 나이 : ${user.userAge}, 성인여부 : ${user.isAdult ? "성인" : "미성년자"}`;
};

console.log(makeUser("박수진", 24));

/**
 * 문제 : 주문 정보를 받아 세금이 포함된 최종 가격을 계산하고,
 * 이를 JSON 문자열로 변환하여 반환하는 함수를 만드세요
 */

const finalizeOrder = (item, price) => {
    const taxRate = 0.1;
    const finalPrice = price * (1 + taxRate);

    const orderReceipt = {
        product : item,
        originalPrice : price,
        totalWithTax : finalPrice,
        orderDate : new Date().toLocaleDateString() // 현재 날짜
    };

    return `
=== 주문 영수증 ===
주문 한 상품 : ${item}
세전 가격 : ${price}원
세후 가격 : ${finalPrice.toFixed(2)}원
주문 날짜 : ${orderReceipt.orderDate}
            `
            JSON.stringify(orderReceipt);
};

console.log(finalizeOrder("LG그램 노트북", 1500000));  