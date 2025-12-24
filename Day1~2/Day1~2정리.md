# 📅 Day 1-2: 데이터의 저장과 이동 (Variables & JSON Deep Dive)

## 🔍 심화 학습 (Deep Dive)
### 1. `const` vs `let` - 무엇을 먼저 쓸까?
- **규칙**: 기본적으로 모든 변수는 `const`로 선언한다.
- **이유**: 값이 변하지 않는다는 확신이 있어야 코드의 예측 가능성이 높아지고 버그가 줄어들기 때문 (Immutable by default).
- **예외**: `for` 루프의 인덱스 변수나, 합계를 구하는 누적값 등 '재할당'이 필수적인 경우에만 `let`을 사용한다.

### 2. JSON의 존재 이유 (Serialization)
- **Problem**: 자바스크립트 객체(`{}`)는 컴퓨터 메모리에 저장된 '주소'일 뿐이라서 전선을 타고 날아갈 수 없다.
- **Solution**: 객체를 누구나 읽을 수 있는 '텍스트(JSON 문자열)'로 일렬로 늘어뜨리는 과정(직렬화)이 필요하다.

## 🛠 실무 코드 패턴 (Code Patterns)

```javascript
// 1. 객체 생성 (Object in Memory)
const userProfile = {
  id: "student_01",
  tags: ["javascript", "beginner"],
  isActive: true
};

// 2. 직렬화 (Serialization) - "택배 포장"
// 두 번째 인자 null, 세 번째 인자 2를 넣으면 예쁘게 들여쓰기된 JSON이 나옵니다.
const prettyJson = JSON.stringify(userProfile, null, 2);

// 3. 역직렬화 (Deserialization) - "포장 해제"
try {
  const recoveredData = JSON.parse(prettyJson);
  console.log(recoveredData.id); // "student_01" (성공)
} catch (error) {
  console.error("잘못된 JSON 형식입니다!");
}