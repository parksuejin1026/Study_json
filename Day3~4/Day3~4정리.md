### 📄 [Day 3-4 상세] 논리와 흐름 제어
```markdown
# 📅 Day 3-4: 판단과 흐름의 제어 (Logic & Flow Control)

## 🔍 심화 학습 (Deep Dive)
### 1. 엄격한 비교(`===`) vs 느슨한 비교(`==`)
- `==` (Abstract Equality): `"1" == 1` 결과는 `true`. (자바스크립트가 타입을 강제로 변환함)
- `===` (Strict Equality): `"1" === 1` 결과는 `false`. (타입까지 검사하므로 훨씬 안전함)
- **결론**: 실무에서는 99% `===`만 사용한다.

### 2. Truthy & Falsy (참 같은 값, 거짓 같은 값)
- 자바스크립트는 불리언이 아니더라도 조건문에서 `true/false`로 평가되는 값이 있다.
- **Falsy**: `false`, `0`, `""`(빈 문자열), `null`, `undefined`, `NaN`
- **Truthy**: 위 항목을 제외한 모든 것 (빈 배열 `[]`, 빈 객체 `{}`는 **True**임에 주의!)

## 🛠 실무 코드 패턴 (Code Patterns)

```javascript
// 1. 단락 평가 (Short-circuit Evaluation) 활용
// 데이터가 있을 때만 실행하고 싶을 때 유용함
const data = "Hello";
data && console.log("데이터가 존재합니다!");

// 2. 가독성 좋은 중첩 삼항 연산자
const userRole = "admin";
const accessLevel = 
  userRole === "admin" ? "전체 허용" :
  userRole === "editor" ? "수정 허용" : "읽기 전용";

console.log(`권한: ${accessLevel}`);