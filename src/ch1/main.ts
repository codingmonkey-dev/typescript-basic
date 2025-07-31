// TypeScript 타입 학습 실습 - 강사용 완성본
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
let userName: string = "김철수";
let userEmail: string = 'user@example.com';
let welcomeMessage: string = `안녕하세요, ${userName}님!`;

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
let userAge: number = 25;
let productPrice: number = 19.99;
let hexValue: number = 0xff; // 16진수
let binaryValue: number = 0b1010; // 2진수

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
let isLoggedIn: boolean = true;
let hasPermission: boolean = false;
let isAdult: boolean = userAge >= 18;

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

// 문자열 배열
let fruits: string[] = ["사과", "바나나", "오렌지"];
let cities: Array<string> = ["서울", "부산", "대구"];

// 숫자 배열
let scores: number[] = [85, 92, 78, 96];
let temperatures: Array<number> = [25.5, 30.2, 18.7];

// 불린 배열
let checkboxStates: boolean[] = [true, false, true, false];

console.log("과일 목록:", fruits);
console.log("도시 목록:", cities);
console.log("점수 목록:", scores);
console.log("온도 목록:", temperatures);
console.log("체크박스 상태:", checkboxStates);

// 배열 메서드 사용 예시
fruits.push("포도");
console.log("과일 추가 후:", fruits);

let highScores: number[] = scores.filter(score => score >= 90);
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

// 객체 타입 인라인 정의
let user: { name: string; age: number; email: string } = {
    name: "이영희",
    age: 28,
    email: "younghee@example.com"
};

// 인터페이스를 사용한 객체 타입 정의
interface Product {
    readonly id: number;
    name: string;
    price: number;
    description?: string; // 선택적 속성
}

let laptop: Product = {
    id: 1,
    name: "맥북 프로",
    price: 2500000
};

let smartphone: Product = {
    id: 2,
    name: "아이폰",
    price: 1200000,
    description: "최신 스마트폰"
};

console.log("사용자 정보:", user);
console.log("노트북 정보:", laptop);
console.log("스마트폰 정보:", smartphone);

// 중첩 객체
interface Address {
    street: string;
    city: string;
    zipCode: string;
}

interface Customer {
    name: string;
    age: number;
    address: Address;
}

let customer: Customer = {
    name: "박민수",
    age: 35,
    address: {
        street: "강남대로 123",
        city: "서울",
        zipCode: "12345"
    }
};

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

let dynamicValue: any = "문자열";
console.log("초기값 (문자열):", dynamicValue);

dynamicValue = 42;
console.log("변경된 값 (숫자):", dynamicValue);

dynamicValue = true;
console.log("변경된 값 (불린):", dynamicValue);

dynamicValue = ["배열", "요소"];
console.log("변경된 값 (배열):", dynamicValue);

dynamicValue = { name: "객체", type: "any" };
console.log("변경된 값 (객체):", dynamicValue);

// any 타입의 위험성 예시
let riskyValue: any = "문자열";
// 런타임 에러가 발생할 수 있는 코드 (TypeScript에서 경고하지 않음)
// console.log(riskyValue.toUpperCase().length); // 문자열일 때는 정상 작동
// riskyValue = 123;
// console.log(riskyValue.toUpperCase().length); // 숫자일 때는 런타임 에러

// ================================================
// 5. 실습 예제
// ================================================

console.log("\n--- 5. 종합 실습 예제 ---");

// 학생 정보를 관리하는 시스템
interface Student {
    readonly studentId: number;
    name: string;
    age: number;
    grades: number[];
    isEnrolled: boolean;
    address?: Address;
}

let students: Student[] = [
    {
        studentId: 1001,
        name: "김학생",
        age: 20,
        grades: [85, 92, 78, 96],
        isEnrolled: true
    },
    {
        studentId: 1002,
        name: "이학생",
        age: 22,
        grades: [88, 94, 82, 90],
        isEnrolled: true,
        address: {
            street: "대학로 456",
            city: "서울",
            zipCode: "54321"
        }
    }
];

// 학생들의 평균 점수 계산
students.forEach(student => {
    let totalScore: number = student.grades.reduce((sum, grade) => sum + grade, 0);
    let averageScore: number = totalScore / student.grades.length;
    let message: string = `${student.name}의 평균 점수: ${averageScore.toFixed(2)}점`;
    
    console.log(message);
});

// 등록된 학생 수 확인
let enrolledStudents: Student[] = students.filter(student => student.isEnrolled);
console.log(`등록된 학생 수: ${enrolledStudents.length}명`);

console.log("\n=== 실습 완료 ===");