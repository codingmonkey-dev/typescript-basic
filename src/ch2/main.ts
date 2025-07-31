// TypeScript 고급 타입 학습 실습 - 강사용 완성본
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

// 기본 함수 타입 정의
function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string): string {
    return `안녕하세요, ${name}님!`;
}

// 반환값이 없는 함수 (void)
function logMessage(message: string): void {
    console.log(`로그: ${message}`);
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

// 선택적 매개변수
function createUser(name: string, age?: number): string {
    if (age) {
        return `사용자: ${name}, 나이: ${age}`;
    }
    return `사용자: ${name}`;
}

// 기본값 매개변수
function calculateDiscount(price: number, discountRate: number = 0.1): number {
    return price * (1 - discountRate);
}

// 나머지 매개변수
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
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

// 함수 타입 표현식
type MathOperation = (x: number, y: number) => number;

const multiply: MathOperation = (x, y) => x * y;
const divide: MathOperation = (x, y) => x / y;

// 고차 함수 (함수를 매개변수로 받는 함수)
function calculate(a: number, b: number, operation: MathOperation): number {
    return operation(a, b);
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

// 기본 타입 별칭
type UserID = string;
type UserAge = number;
type IsActive = boolean;

let userId: UserID = "user123";
let userAge: UserAge = 28;
let isActive: IsActive = true;

console.log("사용자 ID:", userId);
console.log("사용자 나이:", userAge);
console.log("활성 상태:", isActive);

/**
 * 객체 타입 별칭
 * - 복잡한 객체 구조를 타입 별칭으로 정의
 * - 인터페이스와 유사하지만 더 유연한 표현 가능
 */
console.log("\n--- 2-2. 객체 타입 별칭 ---");

type Point = {
    x: number;
    y: number;
};

type Rectangle = {
    topLeft: Point;
    bottomRight: Point;
    color?: string;
};

let point1: Point = { x: 0, y: 0 };
let point2: Point = { x: 10, y: 10 };

let rectangle: Rectangle = {
    topLeft: point1,
    bottomRight: point2,
    color: "red"
};

console.log("점 1:", point1);
console.log("점 2:", point2);
console.log("사각형:", rectangle);

/**
 * 유니온 타입과 교차 타입
 * - 유니온 타입 (|): 여러 타입 중 하나일 수 있음
 * - 교차 타입 (&): 여러 타입을 모두 만족해야 함
 */
console.log("\n--- 2-3. 유니온 타입과 교차 타입 ---");

// 유니온 타입
type Status = "loading" | "success" | "error";
type ID = string | number;

function handleResponse(status: Status): string {
    switch (status) {
        case "loading":
            return "로딩 중...";
        case "success":
            return "성공!";
        case "error":
            return "오류 발생";
        default:
            return "알 수 없는 상태";
    }
}

function processId(id: ID): string {
    return `처리된 ID: ${id}`;
}

console.log("상태 처리:", handleResponse("success"));
console.log("문자열 ID 처리:", processId("abc123"));
console.log("숫자 ID 처리:", processId(12345));

// 교차 타입
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: string;
    department: string;
};

type EmployeePerson = Person & Employee;

let employee: EmployeePerson = {
    name: "김직원",
    age: 30,
    employeeId: "EMP001",
    department: "개발팀"
};

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

// 기본 제네릭 함수
function identity<T>(arg: T): T {
    return arg;
}

function getFirst<T>(array: T[]): T | undefined {
    return array.length > 0 ? array[0] : undefined;
}

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
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

interface Container<T> {
    value: T;
    getValue(): T;
    setValue(value: T): void;
}

class SimpleContainer<T> implements Container<T> {
    constructor(public value: T) {}

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}

let stringContainer = new SimpleContainer<string>("안녕하세요");
let numberContainer = new SimpleContainer<number>(100);

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

interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
    console.log(`길이: ${arg.length}`);
    return arg;
}

// keyof를 사용한 제약조건
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
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

class Car {
    // 속성 (필드)
    brand: string;
    model: string;
    year: number;
    private mileage: number = 0;

    // 생성자
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // 메서드
    getInfo(): string {
        return `${this.year} ${this.brand} ${this.model}`;
    }

    drive(distance: number): void {
        this.mileage += distance;
        console.log(`${distance}km 운전했습니다.`);
    }

    getMileage(): number {
        return this.mileage;
    }
}

let myCar = new Car("현대", "아반떼", 2023);
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

class BankAccount {
    readonly accountNumber: string;
    private balance: number;
    protected owner: string;

    constructor(accountNumber: string, owner: string, initialBalance: number = 0) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = initialBalance;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount}원 입금되었습니다. 잔액: ${this.balance}원`);
        }
    }

    public withdraw(amount: number): boolean {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${amount}원 출금되었습니다. 잔액: ${this.balance}원`);
            return true;
        } else {
            console.log("출금할 수 없습니다.");
            return false;
        }
    }

    public getBalance(): number {
        return this.balance;
    }

    public getOwner(): string {
        return this.owner;
    }
}

let account = new BankAccount("123-456-789", "김고객", 10000);
console.log("계좌 소유자:", account.getOwner());
console.log("계좌번호:", account.accountNumber);
account.deposit(5000);
account.withdraw(3000);
console.log("현재 잔액:", account.getBalance());
