// TypeScript 고급 타입 학습 실습 - 학생용 실습 코드
// ================================================

console.log("=== TypeScript 고급 타입 학습 실습 ===\n");

// ================================================
// 1. 함수 타입 (Function Types)
// ================================================

/**
 * 함수 타입
 * - 매개변수와 반환값에 타입을 지정할 수 있음
 * - 선택적 매개변수(?), 기본값 매개변수, 나머지 매개변수 지원
 * - 함수 오버로드를 통해 다양한 시그니처 정의 가능
 */
console.log("--- 1-1. 기본 함수 타입 ---");

// TODO: add 함수를 정의하세요. 두 개의 number 매개변수를 받아 number를 반환하는 함수
function add(/* 여기에 매개변수 타입을 작성하세요 */): /* 여기에 반환 타입을 작성하세요 */ {
    /* 여기에 함수 내용을 작성하세요 */
}

// TODO: greet 함수를 정의하세요. string 매개변수 name을 받아 string을 반환하는 함수
function greet(/* 여기에 매개변수 타입을 작성하세요 */): /* 여기에 반환 타입을 작성하세요 */ {
    /* 여기에 함수 내용을 작성하세요 */
}

// TODO: logMessage 함수를 정의하세요. string 매개변수를 받고 반환값이 없는 함수 (void)
function logMessage(/* 여기에 매개변수 타입을 작성하세요 */): /* 여기에 반환 타입을 작성하세요 */ {
    /* 여기에 함수 내용을 작성하세요 */
}

console.log("덧셈 결과:", add(10, 20));
console.log("인사말:", greet("김철수"));
logMessage("함수 실행 완료");

/**
 * 선택적 매개변수와 기본값 매개변수
 * - 선택적 매개변수: 매개변수명 뒤에 ? 붙임
 * - 기본값 매개변수: 매개변수에 기본값 할당
 * - 나머지 매개변수: ...을 사용해 가변 인수 처리
 */
console.log("\n--- 1-2. 선택적/기본값/나머지 매개변수 ---");

// TODO: createUser 함수를 정의하세요. name은 필수, age는 선택적 매개변수
function createUser(/* 여기에 매개변수들을 작성하세요 */): string {
    /* 여기에 함수 내용을 작성하세요 */
}

// TODO: calculateDiscount 함수를 정의하세요. price는 필수, discountRate는 기본값 0.1
function calculateDiscount(/* 여기에 매개변수들을 작성하세요 */): number {
    /* 여기에 함수 내용을 작성하세요 */
}

// TODO: sum 함수를 정의하세요. 나머지 매개변수로 여러 숫자를 받아 합계 반환
function sum(/* 여기에 나머지 매개변수를 작성하세요 */): number {
    /* 여기에 함수 내용을 작성하세요 */
}

console.log("사용자 생성 (나이 있음):", createUser("이영희", 25));
console.log("사용자 생성 (나이 없음):", createUser("박민수"));
console.log("할인가 계산 (기본 할인율):", calculateDiscount(1000));
console.log("할인가 계산 (사용자 할인율):", calculateDiscount(1000, 0.2));
console.log("숫자 합계:", sum(1, 2, 3, 4, 5));

/**
 * 함수 타입 표현식
 * - 화살표 함수 형태로 함수 타입 정의
 * - 변수에 함수 타입을 할당하거나 매개변수로 전달할 때 사용
 */
console.log("\n--- 1-3. 함수 타입 표현식 ---");

// TODO: MathOperation 타입을 정의하세요. 두 개의 number를 받아 number를 반환하는 함수 타입
type MathOperation = /* 여기에 함수 타입을 작성하세요 */;

// TODO: multiply 변수를 MathOperation 타입으로 선언하고 곱셈 함수를 할당하세요
const multiply: /* 여기에 타입을 작성하세요 */ = /* 여기에 함수를 작성하세요 */;

// TODO: divide 변수를 MathOperation 타입으로 선언하고 나눗셈 함수를 할당하세요
const divide: /* 여기에 타입을 작성하세요 */ = /* 여기에 함수를 작성하세요 */;

// TODO: calculate 함수를 정의하세요. 두 숫자와 MathOperation 함수를 받아 결과 반환
function calculate(/* 여기에 매개변수들을 작성하세요 */): number {
    /* 여기에 함수 내용을 작성하세요 */
}

console.log("곱셈 결과:", calculate(8, 4, multiply));
console.log("나눗셈 결과:", calculate(8, 4, divide));

// ================================================
// 2. 타입 별칭 (Type Aliases)
// ================================================

/**
 * 타입 별칭
 * - type 키워드를 사용해 복잡한 타입에 이름을 부여
 * - 유니온 타입, 교차 타입 등 복합 타입을 간결하게 표현
 * - 코드 재사용성과 가독성 향상
 */
console.log("\n--- 2-1. 기본 타입 별칭 ---");

// TODO: UserID, UserAge, IsActive 타입 별칭을 정의하세요
type UserID = /* 여기에 타입을 작성하세요 */;
type UserAge = /* 여기에 타입을 작성하세요 */;
type IsActive = /* 여기에 타입을 작성하세요 */;

// TODO: 위에서 정의한 타입 별칭을 사용해 변수들을 선언하세요
let userId: /* 여기에 타입을 작성하세요 */ = /* 여기에 값을 작성하세요 */;
let userAge: /* 여기에 타입을 작성하세요 */ = /* 여기에 값을 작성하세요 */;
let isActive: /* 여기에 타입을 작성하세요 */ = /* 여기에 값을 작성하세요 */;

console.log("사용자 ID:", userId);
console.log("사용자 나이:", userAge);
console.log("활성 상태:", isActive);

/**
 * 객체 타입 별칭
 * - 복잡한 객체 구조를 타입 별칭으로 정의
 * - 인터페이스와 유사하지만 더 유연한 표현 가능
 */
console.log("\n--- 2-2. 객체 타입 별칭 ---");

// TODO: Point 타입을 정의하세요. x, y 속성을 가지는 객체 타입
type Point = {
    /* 여기에 객체 속성들을 작성하세요 */
};

// TODO: Rectangle 타입을 정의하세요. topLeft, bottomRight (Point 타입), color (선택적 속성)
type Rectangle = {
    /* 여기에 객체 속성들을 작성하세요 */
};

// TODO: Point 타입의 변수들을 선언하고 값을 할당하세요
let point1: /* 여기에 타입을 작성하세요 */ = /* 여기에 객체 값을 작성하세요 */;
let point2: /* 여기에 타입을 작성하세요 */ = /* 여기에 객체 값을 작성하세요 */;

// TODO: Rectangle 타입의 변수를 선언하고 값을 할당하세요
let rectangle: /* 여기에 타입을 작성하세요 */ = /* 여기에 객체 값을 작성하세요 */;

console.log("점 1:", point1);
console.log("점 2:", point2);
console.log("사각형:", rectangle);

/**
 * 유니온 타입과 교차 타입
 * - 유니온 타입 (|): 여러 타입 중 하나일 수 있음
 * - 교차 타입 (&): 여러 타입을 모두 만족해야 함
 */
console.log("\n--- 2-3. 유니온 타입과 교차 타입 ---");

// TODO: Status 유니온 타입을 정의하세요. "loading", "success", "error" 중 하나
type Status = /* 여기에 유니온 타입을 작성하세요 */;

// TODO: ID 유니온 타입을 정의하세요. string 또는 number
type ID = /* 여기에 유니온 타입을 작성하세요 */;

// TODO: handleResponse 함수를 정의하세요. Status 매개변수를 받아 적절한 메시지 반환
function handleResponse(/* 여기에 매개변수를 작성하세요 */): string {
    /* 여기에 switch 문을 작성하세요 */
}

// TODO: processId 함수를 정의하세요. ID 매개변수를 받아 처리된 ID 문자열 반환
function processId(/* 여기에 매개변수를 작성하세요 */): string {
    /* 여기에 함수 내용을 작성하세요 */
}

console.log("상태 처리:", handleResponse("success"));
console.log("문자열 ID 처리:", processId("abc123"));
console.log("숫자 ID 처리:", processId(12345));

// TODO: Person 타입을 정의하세요. name (string), age (number) 속성
type Person = {
    /* 여기에 속성들을 작성하세요 */
};

// TODO: Employee 타입을 정의하세요. employeeId (string), department (string) 속성
type Employee = {
    /* 여기에 속성들을 작성하세요 */
};

// TODO: EmployeePerson 교차 타입을 정의하세요. Person과 Employee를 모두 만족
type EmployeePerson = /* 여기에 교차 타입을 작성하세요 */;

// TODO: employee 변수를 EmployeePerson 타입으로 선언하고 값을 할당하세요
let employee: /* 여기에 타입을 작성하세요 */ = /* 여기에 객체 값을 작성하세요 */;

console.log("직원 정보:", employee);

// ================================================
// 3. 제네릭 (Generics)
// ================================================

/**
 * 제네릭
 * - 타입을 매개변수처럼 사용할 수 있게 해주는 기능
 * - 코드 재사용성을 높이고 타입 안정성 유지
 * - 함수, 인터페이스, 클래스에서 사용 가능
 * - 제약조건을 통해 특정 타입으로 제한 가능
 */
console.log("\n--- 3-1. 제네릭 함수 ---");

// TODO: identity 제네릭 함수를 정의하세요. 받은 인수를 그대로 반환
function identity</* 여기에 제네릭 타입 매개변수를 작성하세요 */>(/* 여기에 매개변수를 작성하세요 */): /* 여기에 반환 타입을 작성하세요 */ {
    /* 여기에 함수 내용을 작성하세요 */
}

// TODO: getFirst 제네릭 함수를 정의하세요. 배열의 첫 번째 요소를 반환 (없으면 undefined)
function getFirst</* 여기에 제네릭 타입 매개변수를 작성하세요 */>(/* 여기에 매개변수를 작성하세요 */): /* 여기에 반환 타입을 작성하세요 */ {
    /* 여기에 함수 내용을 작성하세요 */
}

// TODO: swap 제네릭 함수를 정의하세요. 튜플의 순서를 바꿔서 반환
function swap</* 여기에 제네릭 타입 매개변수들을 작성하세요 */>(/* 여기에 매개변수를 작성하세요 */): /* 여기에 반환 타입을 작성하세요 */ {
    /* 여기에 함수 내용을 작성하세요 */
}

console.log("문자열 identity:", identity("hello"));
console.log("숫자 identity:", identity(42));
console.log("배열 첫 번째 요소:", getFirst([1, 2, 3, 4, 5]));
console.log("튜플 교환:", swap(["hello", 123]));

/**
 * 제네릭 인터페이스
 * - 인터페이스에서 제네릭 타입 매개변수 사용
 * - 다양한 타입의 데이터 구조를 정의할 때 유용
 */
console.log("\n--- 3-2. 제네릭 인터페이스 ---");

// TODO: Container 제네릭 인터페이스를 정의하세요
interface Container</* 여기에 제네릭 타입 매개변수를 작성하세요 */> {
    /* 여기에 속성과 메서드들을 작성하세요 */
}

// TODO: SimpleContainer 클래스를 정의하세요. Container 인터페이스를 구현
class SimpleContainer</* 여기에 제네릭 타입 매개변수를 작성하세요 */> implements /* 여기에 구현할 인터페이스를 작성하세요 */ {
    constructor(/* 여기에 생성자 매개변수를 작성하세요 */) {
        /* 여기에 생성자 내용을 작성하세요 */
    }

    /* 여기에 인터페이스의 메서드들을 구현하세요 */
}

// TODO: SimpleContainer 인스턴스들을 생성하세요
let stringContainer = /* 여기에 문자열 컨테이너를 생성하세요 */;
let numberContainer = /* 여기에 숫자 컨테이너를 생성하세요 */;

console.log("문자열 컨테이너:", stringContainer.getValue());
console.log("숫자 컨테이너:", numberContainer.getValue());

stringContainer.setValue("새로운 값");
numberContainer.setValue(200);

console.log("변경된 문자열 컨테이너:", stringContainer.getValue());
console.log("변경된 숫자 컨테이너:", numberContainer.getValue());

/**
 * 제네릭 제약조건
 * - extends 키워드를 사용해 제네릭 타입에 제약조건 추가
 * - 특정 속성이나 메서드를 가진 타입으로만 제한
 */
console.log("\n--- 3-3. 제네릭 제약조건 ---");

// TODO: Lengthwise 인터페이스를 정의하세요. length 속성을 가지는 타입
interface Lengthwise {
    /* 여기에 속성을 작성하세요 */
}

// TODO: logLength 제네릭 함수를 정의하세요. Lengthwise를 상속하는 타입만 허용
function logLength</* 여기에 제약조건이 있는 제네릭 타입을 작성하세요 */>(/* 여기에 매개변수를 작성하세요 */): /* 여기에 반환 타입을 작성하세요 */ {
    /* 여기에 함수 내용을 작성하세요 */
}

// TODO: getProperty 제네릭 함수를 정의하세요. keyof를 사용한 제약조건
function getProperty</* 여기에 제네릭 타입들과 제약조건을 작성하세요 */>(/* 여기에 매개변수들을 작성하세요 */): /* 여기에 반환 타입을 작성하세요 */ {
    /* 여기에 함수 내용을 작성하세요 */
}

logLength("문자열");
logLength([1, 2, 3, 4]);
logLength({ length: 5, value: "test" });

let person = { name: "홍길동", age: 25, city: "서울" };
console.log("이름 속성:", getProperty(person, "name"));
console.log("나이 속성:", getProperty(person, "age"));

// ================================================
// 4. 클래스 (Classes)
// ================================================

/**
 * 클래스
 * - 객체지향 프로그래밍의 핵심 개념
 * - 속성과 메서드를 가지는 객체의 템플릿
 * - 생성자, 접근 제어자, 상속, 추상 클래스 지원
 * - TypeScript에서 강력한 타입 검사 제공
 */
console.log("\n--- 4-1. 기본 클래스 ---");

// TODO: Car 클래스를 정의하세요
class Car {
    // TODO: 속성들을 정의하세요 (brand, model, year, private mileage)
    /* 여기에 속성들을 작성하세요 */

    // TODO: 생성자를 정의하세요
    constructor(/* 여기에 생성자 매개변수들을 작성하세요 */) {
        /* 여기에 생성자 내용을 작성하세요 */
    }

    // TODO: getInfo 메서드를 정의하세요
    /* 여기에 메서드를 작성하세요 */

    // TODO: drive 메서드를 정의하세요
    /* 여기에 메서드를 작성하세요 */

    // TODO: getMileage 메서드를 정의하세요
    /* 여기에 메서드를 작성하세요 */
}

// TODO: Car 인스턴스를 생성하고 테스트하세요
let myCar = /* 여기에 Car 인스턴스를 생성하세요 */;
console.log("자동차 정보:", myCar.getInfo());
myCar.drive(100);
myCar.drive(50);
console.log("총 주행거리:", myCar.getMileage());

/**
 * 접근 제어자
 * - public: 어디서든 접근 가능 (기본값)
 * - private: 클래스 내부에서만 접근 가능
 * - protected: 클래스 내부와 상속받은 클래스에서 접근 가능
 * - readonly: 읽기 전용 속성
 */
console.log("\n--- 4-2. 접근 제어자 ---");

// TODO: BankAccount 클래스를 정의하세요
class BankAccount {
    // TODO: 속성들을 정의하세요 (readonly accountNumber, private balance, protected owner)
    /* 여기에 속성들을 작성하세요 */

    // TODO: 생성자를 정의하세요
    constructor(/* 여기에 생성자 매개변수들을 작성하세요 */) {
        /* 여기에 생성자 내용을 작성하세요 */
    }

    // TODO: deposit 메서드를 정의하세요 (public)
    /* 여기에 메서드를 작성하세요 */

    // TODO: withdraw 메서드를 정의하세요 (public)
    /* 여기에 메서드를 작성하세요 */

    // TODO: getBalance 메서드를 정의하세요 (public)
    /* 여기에 메서드를 작성하세요 */

    // TODO: getOwner 메서드를 정의하세요 (public)
    /* 여기에 메서드를 작성하세요 */
}

// TODO: BankAccount 인스턴스를 생성하고 테스트하세요
let account = /* 여기에 BankAccount 인스턴스를 생성하세요 */;
console.log("계좌 소유자:", account.getOwner());
console.log("계좌번호:", account.accountNumber);
account.deposit(5000);
account.withdraw(3000);
console.log("현재 잔액:", account.getBalance());

// ================================================
// 5. 종합 실습 예제
// ================================================

console.log("\n--- 5. 종합 실습 예제 ---");

/**
 * 간단한 도서 관리 시스템
 * - 제네릭을 활용한 데이터 처리
 * - 타입 별칭으로 복잡한 타입 정의
 * - 함수 타입을 활용한 콜백 처리
 */

// TODO: 타입 별칭들을 정의하세요
type BookId = /* 여기에 타입을 작성하세요 */;
type BookGenre = /* 여기에 유니온 타입을 작성하세요 (예: "fiction" | "science" | "history") */;

type Book = {
    /* 여기에 Book 타입의 속성들을 작성하세요 (id, title, author, genre, year) */
};

// TODO: 제네릭 함수들을 정의하세요
// 배열에서 조건에 맞는 항목들을 필터링하는 제네릭 함수
function filterItems</* 여기에 제네릭 타입을 작성하세요 */>(
    /* 여기에 매개변수들을 작성하세요 (items 배열, predicate 함수) */
): /* 여기에 반환 타입을 작성하세요 */ {
    /* 여기에 함수 내용을 작성하세요 */
}

// 배열에서 특정 속성으로 그룹화하는 제네릭 함수
function groupBy</* 여기에 제네릭 타입들을 작성하세요 */>(
    /* 여기에 매개변수들을 작성하세요 (items 배열, keySelector 함수) */
): /* 여기에 반환 타입을 작성하세요 */ {
    /* 여기에 함수 내용을 작성하세요 */
}

// TODO: 함수 타입들을 정의하세요
type SearchCallback<T> = /* 여기에 함수 타입을 작성하세요 (결과 배열을 받는 콜백) */;

// TODO: 도서 검색 함수를 구현하세요
function searchBooks(
    /* 여기에 매개변수들을 작성하세요 (books 배열, query 문자열, callback) */
): void {
    /* 여기에 함수 내용을 작성하세요 */
}

// TODO: 실습 실행 함수를 구현하세요
function runBookDemo(): void {
    console.log("=== 도서 관리 시스템 데모 ===");

    // TODO: 도서 데이터 생성
    const books: Book[] = [
        /* 여기에 도서 객체들을 작성하세요 */
    ];

    // TODO: 장르별 도서 그룹화
    /* 여기에 groupBy 함수를 사용해 장르별로 그룹화하는 코드를 작성하세요 */

    // TODO: 최근 도서 필터링 (2020년 이후)
    /* 여기에 filterItems 함수를 사용해 최근 도서를 필터링하는 코드를 작성하세요 */

    // TODO: 도서 검색 (제목 검색)
    /* 여기에 searchBooks 함수를 사용해 도서를 검색하는 코드를 작성하세요 */
}

// TODO: 데모 실행
/* 여기에 runBookDemo 함수를 호출하는 코드를 작성하세요 */

console.log("\n=== 실습 완료 ===");