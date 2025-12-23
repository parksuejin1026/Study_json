// 2025-12-23 총정리

const coffee = {
    name: "Americano",
    price: 2500,
    isIce: true
};

// 직렬화하기 (배달하는 느낌으로 쓰기)

const orderCoffee = JSON.stringify(coffee);

// 역직렬화하기 (배달 받는 느낌으로 쓰가)

const deliveredCoffee = JSON.parse(orderCoffee);

// 조건에 따른 최종 출력

const message = deliveredCoffee.isIce ? "ice" : "hot";
console.log(`
    주문하신 ${message} ${deliveredCoffee.name} 배달왔습니다.
    가격은 ${deliveredCoffee.price}원입니다.`)