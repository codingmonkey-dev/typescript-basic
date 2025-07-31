// TypeScript 타입 학습 실습 - 학생용 실습 코드
// ================================================

console.log("=== TypeScript 타입 학습 실습 ===\n");

// ================================================
// 1. 원시 타입 (Primitive Types)
// ================================================

/**
 * string 타입
 * - 문자열을 나타내는 타입
 * - 작은따옴표(''), 큰따옴표(""), 백틱(``)으로 표현 가능
 * - 백틱을 사용하면 템플릿 리터럴(Template Literal) 사용 가능
 */
console.log("--- 1-1. string 타입 ---");
// TODO: userName 변수를 string 타입으로 선언하고 "김철수" 값을 할당하세요
let userName: /* 여기에 타입을 작성하세요 */ = /* 여기에 값을 작성하세요 */;

// TODO: userEmail 변수를 string 타입으로 선언하고 'user@example.com' 값을 할당하세요
let userEmail: /* 여기에 타입을 작성하세요 */ = /* 여기에 값을 작성하세요 */;

// TODO: welcomeMessage 변수를 string 타입으로 선언하고 템플릿 리터럴을 사용해 환영 메시지를 만드세요
let welcomeMessage: /* 여기에 타입을 작성하세요 */ = /* 여기에 템플릿 리터럴을 작성하세요 */;

console.log("사용자 이름:", userName);
console.log("사용자 이메일:", userEmail);
console.log("환영 메시지:", welcomeMessage);

/**
 * number 타입
 * - 정수와 실수 모두를 포함하는 숫자 타입
 * - JavaScript와 마찬가지로 64비트 부동소수점 숫자
 * - 16진수, 8진수, 2진수 표현도 가능
 */
console.log("\n--- 1-2. number 타입 ---");
// TODO: userAge 변수를 number 타입으로 선언하고 25 값을 할당하세요
let userAge: /* 여기에 타입을 작성하세요 */ = /* 여기에 값을 작성하세요 */;

// TODO: productPrice 변수를 number 타입으로 선언하고 19.99 값을 할당하세요
let productPrice: /* 여기에 타입을 작성하세요 */ = /* 여기에 값을 작성하세요 */;

// TODO: hexValue 변수를 number 타입으로 선언하고 16진수 값 0xff를 할당하세요
let hexValue: /* 여기에 타입을 작성하세요 */ = /* 여기에 16진수 값을 작성하세요 */;

// TODO: binaryValue 변수를 number 타입으로 선언하고 2진수 값 0b1010을 할당하세요
let binaryValue: /* 여기에 타입을 작성하세요 */ = /* 여기에 2진수 값을 작성하세요 */;

console.log("사용자 나이:", userAge);
console.log("상품 가격:", productPrice);
console.log("16진수 값:", hexValue);
console.log("2진수 값:", binaryValue);

/**
 * boolean 타입
 * - true 또는 false 값만 가질 수 있는 타입
 * - 조건문, 반복문 등에서 주로 사용
 */
console.log("\n--- 1-3. boolean 타입 ---");
// TODO: isLoggedIn 변수를 boolean 타입으로 선언하고 true 값을 할당하세요
let isLoggedIn: /* 여기에 타입을 작성하세요 */ = /* 여기에 값을 작성하세요 */;

// TODO: hasPermission 변수를 boolean 타입으로 선언하고 false 값을 할당하세요
let hasPermission: /* 여기에 타입을 작성하세요 */ = /* 여기에 값을 작성하세요 */;

// TODO: isAdult 변수를 boolean 타입으로 선언하고 userAge >= 18 조건식을 할당하세요
let isAdult: /* 여기에 타입을 작성하세요 */ = /* 여기에 조건식을 작성하세요 */;

console.log("로그인 상태:", isLoggedIn);
console.log("권한 여부:", hasPermission);
console.log("성인 여부:", isAdult);

// ================================================
// 2. 배열 타입 (Array Types)
// ================================================

/**
 * 배열 타입
 * - 같은 타입의 요소들을 순서대로 저장하는 타입
 * - Type[] 또는 Array<Type> 문법으로 선언
 * - 다양한 배열 메서드 사용 가능
 */
console.log("\n--- 2. 배열 타입 ---");

// TODO: fruits 변수를 문자열 배열 타입으로 선언하고 ["사과", "바나나", "오렌지"] 값을 할당하세요
let fruits: /* 여기에 문자열 배열 타입을 작성하세요 */ = /* 여기에 배열 값을 작성하세요 */;

// TODO: cities 변수를 Array<string> 문법으로 선언하고 ["서울", "부산", "대구"] 값을 할당하세요
let cities: /* 여기에 Array<string> 타입을 작성하세요 */ = /* 여기에 배열 값을 작성하세요 */;

// TODO: scores 변수를 숫자 배열 타입으로 선언하고 [85, 92, 78, 96] 값을 할당하세요
let scores: /* 여기에 숫자 배열 타입을 작성하세요 */ = /* 여기에 배열 값을 작성하세요 */;

// TODO: temperatures 변수를 Array<number> 문법으로 선언하고 [25.5, 30.2, 18.7] 값을 할당하세요
let temperatures: /* 여기에 Array<number> 타입을 작성하세요 */ = /* 여기에 배열 값을 작성하세요 */;

// TODO: checkboxStates 변수를 불린 배열 타입으로 선언하고 [true, false, true, false] 값을 할당하세요
let checkboxStates: /* 여기에 불린 배열 타입을 작성하세요 */ = /* 여기에 배열 값을 작성하세요 */;

console.log("과일 목록:", fruits);
console.log("도시 목록:", cities);
console.log("점수 목록:", scores);
console.log("온도 목록:", temperatures);
console.log("체크박스 상태:", checkboxStates);

// 배열 메서드 사용 예시
// TODO: fruits 배열에 "포도"를 추가하세요
/* 여기에 코드를 작성하세요 */
console.log("과일 추가 후:", fruits);

// TODO: scores 배열에서 90점 이상인 점수만 필터링해서 highScores 변수에 할당하세요
let highScores: number[] = /* 여기에 filter 메서드를 사용한 코드를 작성하세요 */;
console.log("90점 이상 점수:", highScores);

// ================================================
// 3. 객체 타입 (Object Types)
// ================================================

/**
 * 객체 타입
 * - 여러 속성(property)을 가지는 복합 타입
 * - 인터페이스(interface) 또는 타입 별칭(type alias)으로 정의 가능
 * - 선택적 속성(?), 읽기 전용 속성(readonly) 사용 가능
 */
console.log("\n--- 3. 객체 타입 ---");

// TODO: user 변수의 타입을 { name: string; age: number; email: string } 형태로 선언하고
// { name: "이영희", age: 28, email: "younghee@example.com" } 값을 할당하세요
let user: /* 여기에 객체 타입을 작성하세요 */ = /* 여기에 객체 값을 작성하세요 */;

// TODO: Product 인터페이스를 정의하세요
// - readonly id: number
// - name: string
// - price: number
// - description?: string (선택적 속성)
interface Product {
    /* 여기에 인터페이스 속성들을 작성하세요 */
}

// TODO: laptop 변수를 Product 타입으로 선언하고 값을 할당하세요
// { id: 1, name: "맥북 프로", price: 2500000 }
let laptop: /* 여기에 타입을 작성하세요 */ = /* 여기에 객체 값을 작성하세요 */;

// TODO: smartphone 변수를 Product 타입으로 선언하고 값을 할당하세요
// { id: 2, name: "아이폰", price: 1200000, description: "최신 스마트폰" }
let smartphone: /* 여기에 타입을 작성하세요 */ = /* 여기에 객체 값을 작성하세요 */;

console.log("사용자 정보:", user);
console.log("노트북 정보:", laptop);
console.log("스마트폰 정보:", smartphone);

// 중첩 객체
// TODO: Address 인터페이스를 정의하세요
// - street: string
// - city: string
// - zipCode: string
interface Address {
    /* 여기에 인터페이스 속성들을 작성하세요 */
}

// TODO: Customer 인터페이스를 정의하세요
// - name: string
// - age: number
// - address: Address
interface Customer {
    /* 여기에 인터페이스 속성들을 작성하세요 */
}

// TODO: customer 변수를 Customer 타입으로 선언하고 값을 할당하세요
let customer: /* 여기에 타입을 작성하세요 */ = /* 여기에 객체 값을 작성하세요 */;

console.log("고객 정보:", customer);

// ================================================
// 4. any 타입
// ================================================

/**
 * any 타입
 * - 모든 타입을 허용하는 타입
 * - TypeScript의 타입 검사를 비활성화
 * - 가능한 한 사용을 피하는 것이 좋음 (타입 안정성 저하)
 * - 점진적 마이그레이션이나 외부 라이브러리 사용 시에만 제한적으로 사용
 */
console.log("\n--- 4. any 타입 ---");

// TODO: dynamicValue 변수를 any 타입으로 선언하고 "문자열" 값을 할당하세요
let dynamicValue: /* 여기에 타입을 작성하세요 */ = /* 여기에 값을 작성하세요 */;
console.log("초기값 (문자열):", dynamicValue);

// TODO: dynamicValue에 숫자 42를 할당하세요
/* 여기에 코드를 작성하세요 */
console.log("변경된 값 (숫자):", dynamicValue);

// TODO: dynamicValue에 불린 true를 할당하세요
/* 여기에 코드를 작성하세요 */
console.log("변경된 값 (불린):", dynamicValue);

// TODO: dynamicValue에 배열 ["배열", "요소"]를 할당하세요
/* 여기에 코드를 작성하세요 */
console.log("변경된 값 (배열):", dynamicValue);

// TODO: dynamicValue에 객체 { name: "객체", type: "any" }를 할당하세요
/* 여기에 코드를 작성하세요 */
console.log("변경된 값 (객체):", dynamicValue);

// ================================================
// 5. 실습 예제
// ================================================

console.log("\n--- 5. 종합 실습 예제 ---");

// 학생 정보를 관리하는 시스템
// TODO: Student 인터페이스를 정의하세요
// - readonly studentId: number
// - name: string
// - age: number
// - grades: number[]
// - isEnrolled: boolean
// - address?: Address (선택적 속성)
interface Student {
    /* 여기에 인터페이스 속성들을 작성하세요 */
}

// TODO: students 변수를 Student 배열 타입으로 선언하고 학생 데이터를 할당하세요
let students: /* 여기에 타입을 작성하세요 */ = [
    /* 여기에 학생 객체들을 작성하세요 */
];

// TODO: 학생들의 평균 점수를 계산하는 코드를 작성하세요
/* 여기에 forEach를 사용한 코드를 작성하세요 */

// TODO: 등록된 학생 수를 확인하는 코드를 작성하세요
let enrolledStudents: Student[] = /* 여기에 filter를 사용한 코드를 작성하세요 */;
console.log(`등록된 학생 수: ${enrolledStudents.length}명`);

console.log("\n=== 실습 완료 ===");