# 🚀 TypeScript 프로젝트 셋팅 가이드

## 📋 준비사항 확인

### 1단계: Node.js 설치 확인
터미널(명령 프롬프트)을 열고 다음 명령어를 입력해주세요:

```bash
node --version
npm --version
```

**결과 예시:**
```
v18.17.0
9.6.7
```

> ❌ **만약 명령어가 인식되지 않는다면?**  
> [Node.js 공식 사이트](https://nodejs.org/)에서 LTS 버전을 다운로드하여 설치해주세요.

---

## 📁 프로젝트 폴더 생성

### 2단계: 작업 폴더 만들기
```bash
# 데스크톱에 프로젝트 폴더 생성
cd Desktop
mkdir typescript-todo-app
cd typescript-todo-app
```

### 3단계: 폴더 구조 확인
현재 위치가 올바른지 확인해주세요:
```bash
pwd
# 또는 Windows에서는
cd
```

---

## 📦 프로젝트 초기화

### 4단계: npm 프로젝트 초기화
```bash
npm init -y
```

**실행 결과:** `package.json` 파일이 생성됩니다.

### 5단계: package.json 내용 확인
```bash
# Windows
type package.json

# Mac/Linux  
cat package.json
```

---

## ⚙️ TypeScript 설치

### 6단계: TypeScript 전역 설치 (선택사항)
```bash
npm install -g typescript
```

### 7단계: 프로젝트에 TypeScript 설치
```bash
npm install --save-dev typescript @types/node ts-node
```

### 8단계: 추가 개발 도구 설치
```bash
npm install --save-dev rimraf
```

### 9단계: 설치 확인
```bash
npx tsc --version
```

**결과 예시:** `Version 5.2.2`

---

## 🔧 TypeScript 설정

### 10단계: tsconfig.json 생성
```bash
npx tsc --init
```

### 11단계: tsconfig.json 수정
생성된 `tsconfig.json` 파일을 다음 내용으로 **완전히 교체**해주세요:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs", 
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "sourceMap": true,
    "noImplicitAny": true,
    "noImplicitReturns": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

## 📁 폴더 구조 생성

### 12단계: src 폴더 생성
```bash
mkdir src
```

### 13단계: 기본 파일 생성
```bash
# Windows에서
echo. > src/types.ts
echo. > src/todoManager.ts  
echo. > src/utils.ts
echo. > src/main.ts

# Mac/Linux에서
touch src/types.ts
touch src/todoManager.ts
touch src/utils.ts  
touch src/main.ts
```

---

## 📜 package.json 스크립트 추가

### 14단계: package.json의 scripts 섹션 수정
`package.json` 파일을 열고 `"scripts"` 부분을 다음과 같이 수정해주세요:

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/main.js", 
    "dev": "ts-node src/main.ts",
    "watch": "tsc --watch",
    "clean": "rimraf dist"
  }
}
```

---

## 🧪 설정 테스트

### 15단계: 테스트 코드 작성
`src/main.ts` 파일에 다음 코드를 입력해주세요:

```typescript
console.log('🎉 TypeScript 설정 완료!');

// 타입 체크 테스트
const message: string = 'Hello TypeScript!';
const count: number = 42;
const isReady: boolean = true;

console.log(`메시지: ${message}`);
console.log(`숫자: ${count}`);  
console.log(`준비됨: ${isReady}`);

// 함수 타입 테스트
function greet(name: string): string {
  return `안녕하세요, ${name}님!`;  
}

console.log(greet('학생'));
```

### 16단계: 개발 모드로 실행
```bash
npm run dev
```

**예상 결과:**
```
🎉 TypeScript 설정 완료!
메시지: Hello TypeScript!
숫자: 42
준비됨: true
안녕하세요, 학생님!
```

### 17단계: 빌드 테스트
```bash
npm run build
```

### 18단계: dist 폴더 확인
```bash
# Windows
dir dist

# Mac/Linux
ls -la dist
```

`main.js` 파일이 생성되었는지 확인해주세요.

### 19단계: 빌드된 파일 실행
```bash
npm start
```

---

## 📂 최종 폴더 구조 확인

### 20단계: 전체 구조 확인
```bash
# Windows  
tree /f

# Mac/Linux
find . -name "node_modules" -prune -o -type f -print
```

**예상 구조:**
```
typescript-todo-app/
├── src/
│   ├── types.ts
│   ├── todoManager.ts
│   ├── utils.ts
│   └── main.ts
├── dist/
│   ├── main.js
│   └── main.js.map
├── node_modules/
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

## ✅ 설정 완료 체크리스트

다음 항목들이 모두 체크되었는지 확인해주세요:

- [ ] Node.js와 npm이 설치되어 있음
- [ ] 프로젝트 폴더가 생성됨  
- [ ] `package.json` 파일이 존재함
- [ ] TypeScript가 설치됨
- [ ] `tsconfig.json` 파일이 올바르게 설정됨
- [ ] `src/` 폴더와 기본 파일들이 생성됨
- [ ] `npm run dev` 명령어가 정상 실행됨
- [ ] `npm run build` 명령어가 정상 실행됨
- [ ] `dist/` 폴더에 JavaScript 파일이 생성됨

---

## 🔧 문제 해결

### 자주 발생하는 오류들

**1. `tsc: command not found`**
```bash
# 해결방법
npm install -g typescript
# 또는
npx tsc --version
```

**2. `ts-node: command not found`**  
```bash
# 해결방법
npm install --save-dev ts-node
```

**3. 모듈을 찾을 수 없다는 오류**
```bash
# 해결방법
npm install
```

**4. 권한 오류 (Mac/Linux)**
```bash
# 해결방법
sudo npm install -g typescript
```

---

## 🎯 다음 단계

설정이 완료되었다면, 이제 본격적인 TypeScript 코딩을 시작할 준비가 되었습니다!

1. **types.ts**: 기본 타입 정의 학습
2. **todoManager.ts**: 클래스와 메서드 구현
3. **utils.ts**: 함수와 제네릭 활용  
4. **main.ts**: 전체 앱 구현

**🎉 축하합니다! TypeScript 개발 환경 구축이 완료되었습니다!**