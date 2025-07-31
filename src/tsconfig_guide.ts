// TSConfig 초보자 가이드
// ================================================
// 이 파일은 tsconfig.json 설정에 대한 가이드입니다.
// 실제 프로젝트에서는 이 내용을 tsconfig.json 파일에 복사해서 사용하세요.
// ================================================

/**
 * tsconfig.json 파일은 TypeScript 프로젝트의 설정을 정의하는 파일입니다.
 * 프로젝트 루트 디렉토리에 위치하며, 컴파일러가 TypeScript 코드를 
 * JavaScript로 변환할 때 사용하는 규칙들을 정의합니다.
 */

// 실제 tsconfig.json 파일 내용 예시:
{
  // ================================================
  // 📁 파일 포함/제외 설정 (중요도: ⭐⭐⭐ 높음)
  // ================================================
  
  /**
   * include: 컴파일에 포함할 파일/폴더 패턴을 지정
   * - src 폴더의 모든 TypeScript 파일을 포함
   * - **는 모든 하위 폴더를 의미
   * - *는 모든 파일명을 의미
   */
  "include": [
    "src/**/*",        // src 폴더의 모든 파일
    "tests/**/*"       // tests 폴더의 모든 파일
  ],

  /**
   * exclude: 컴파일에서 제외할 파일/폴더를 지정
   * - node_modules는 기본적으로 제외되지만 명시적으로 적는 것이 좋음
   * - dist, build 등 빌드 결과물 폴더도 제외
   */
  "exclude": [
    "node_modules",    // 외부 라이브러리 폴더
    "dist",           // 빌드 결과물 폴더
    "build",          // 빌드 결과물 폴더
    "**/*.test.ts"    // 테스트 파일 제외 (선택사항)
  ],

  // ================================================
  // ⚙️ 컴파일러 옵션 (중요도: ⭐⭐⭐ 높음)
  // ================================================
  "compilerOptions": {
    
    // ================================================
    // 🎯 기본 컴파일 설정 (중요도: ⭐⭐⭐ 높음)
    // ================================================
    
    /**
     * target: 컴파일된 JavaScript의 ECMAScript 버전을 지정
     * - "ES5": 구형 브라우저 지원 (Internet Explorer 등)
     * - "ES2015" (ES6): 모던 브라우저 지원
     * - "ES2020", "ES2022": 최신 브라우저 지원
     * - "ESNext": 가장 최신 JavaScript 기능 사용
     */
    "target": "ES2020",

    /**
     * module: 모듈 시스템 지정
     * - "CommonJS": Node.js 환경 (require/module.exports)
     * - "ES2015", "ES6", "ESNext": 브라우저 환경 (import/export)
     * - "UMD": 브라우저와 Node.js 모두 지원
     */
    "module": "CommonJS",

    /**
     * lib: 사용할 JavaScript 라이브러리 정의 지정
     * - 브라우저 API나 최신 JavaScript 기능을 사용할 때 필요
     */
    "lib": [
      "ES2020",         // ES2020 JavaScript 기능
      "DOM",            // 브라우저 DOM API (document, window 등)
      "DOM.Iterable"    // DOM의 반복 가능한 객체들
    ],

    // ================================================
    // 📂 모듈 해석 설정 (중요도: ⭐⭐ 중간)
    // ================================================
    
    /**
     * moduleResolution: 모듈을 찾는 방식 지정
     * - "node": Node.js 방식 (권장)
     * - "classic": TypeScript 1.6 이전 방식 (사용 X)
     */
    "moduleResolution": "node",

    /**
     * baseUrl: 모듈 해석의 기준 디렉토리
     * - 절대 경로 import를 가능하게 함
     * - "src/utils/helper" 대신 "utils/helper"로 import 가능
     */
    "baseUrl": ".",
    
    /**
     * paths: 경로 매핑 설정
     * - 더 간편한 import 경로를 만들 수 있음
     * - "@/*"는 "src/*"로 매핑하는 일반적인 패턴
     */
    "paths": {
      "@/*": ["src/*"],           // @/components/Button -> src/components/Button
      "@components/*": ["src/components/*"],  // 컴포넌트 전용 경로
      "@utils/*": ["src/utils/*"] // 유틸리티 전용 경로
    },

    // ================================================
    // 📤 출력 설정 (중요도: ⭐⭐⭐ 높음)
    // ================================================
    
    /**
     * outDir: 컴파일된 JavaScript 파일이 저장될 디렉토리
     * - 소스 코드와 빌드 결과를 분리하기 위해 사용
     */
    "outDir": "./dist",

    /**
     * rootDir: 소스 파일들의 루트 디렉토리
     * - 출력 디렉토리 구조를 결정
     */
    "rootDir": "./src",

    /**
     * declaration: .d.ts 타입 정의 파일 생성 여부
     * - 라이브러리를 만들 때 필요
     * - 다른 프로젝트에서 타입 정보를 사용할 수 있게 함
     */
    "declaration": true,

    /**
     * declarationMap: .d.ts 파일의 소스맵 생성 여부
     * - 타입 정의 파일 디버깅에 도움
     */
    "declarationMap": true,

    /**
     * sourceMap: .js.map 소스맵 파일 생성 여부
     * - 디버깅 시 원본 TypeScript 코드를 볼 수 있게 함
     */
    "sourceMap": true,

    // ================================================
    // 🔒 타입 검사 설정 (중요도: ⭐⭐⭐ 높음)
    // ================================================
    
    /**
     * strict: 모든 엄격한 타입 검사 옵션 활성화
     * - TypeScript의 강력한 타입 검사 기능을 모두 사용
     * - 초보자에게는 어려울 수 있지만 권장됨
     */
    "strict": true,

    /**
     * noImplicitAny: any 타입 추론 금지
     * - 타입을 명시하지 않으면 에러 발생
     * - 타입 안정성 향상
     */
    "noImplicitAny": true,

    /**
     * strictNullChecks: null과 undefined 엄격 검사
     * - null/undefined 관련 에러를 미리 잡아줌
     */
    "strictNullChecks": true,

    /**
     * strictFunctionTypes: 함수 타입 엄격 검사
     * - 함수 매개변수의 타입을 더 엄격하게 검사
     */
    "strictFunctionTypes": true,

    // ================================================
    // ⚠️ 추가 검사 옵션 (중요도: ⭐⭐ 중간)
    // ================================================
    
    /**
     * noUnusedLocals: 사용하지 않는 지역 변수 경고
     * - 코드 품질 향상에 도움
     */
    "noUnusedLocals": true,

    /**
     * noUnusedParameters: 사용하지 않는 매개변수 경고
     * - 불필요한 매개변수를 찾아줌
     */
    "noUnusedParameters": true,

    /**
     * noImplicitReturns: 모든 코드 경로에서 값 반환 강제
     * - 함수가 항상 값을 반환하도록 보장
     */
    "noImplicitReturns": true,

    /**
     * noFallthroughCasesInSwitch: switch 문에서 break 누락 경고
     * - switch 문의 실수를 방지
     */
    "noFallthroughCasesInSwitch": true,

    // ================================================
    // 🌐 JavaScript 관련 설정 (중요도: ⭐ 낮음)
    // ================================================
    
    /**
     * allowJs: JavaScript 파일도 컴파일 허용
     * - .js 파일도 TypeScript 프로젝트에 포함 가능
     * - 점진적 마이그레이션에 유용
     */
    "allowJs": false,

    /**
     * checkJs: JavaScript 파일의 타입 검사
     * - .js 파일도 타입 에러를 검사
     */
    "checkJs": false,

    // ================================================
    // 🔧 고급 설정 (중요도: ⭐ 낮음)
    // ================================================
    
    /**
     * esModuleInterop: CommonJS와 ES 모듈 간 호환성 개선
     * - import * as React from 'react' 대신
     *   import React from 'react' 사용 가능
     */
    "esModuleInterop": true,

    /**
     * allowSyntheticDefaultImports: 기본 export가 없는 모듈의 default import 허용
     * - esModuleInterop과 함께 사용
     */
    "allowSyntheticDefaultImports": true,

    /**
     * forceConsistentCasingInFileNames: 파일명 대소문자 일관성 강제
     * - 대소문자를 구분하지 않는 파일 시스템에서 유용
     */
    "forceConsistentCasingInFileNames": true,

    /**
     * skipLibCheck: 라이브러리 파일(.d.ts) 타입 검사 생략
     * - 컴파일 속도 향상
     * - 외부 라이브러리의 타입 에러 무시
     */
    "skipLibCheck": true,

    /**
     * resolveJsonModule: JSON 파일을 모듈로 import 허용
     * - import data from './data.json' 가능
     */
    "resolveJsonModule": true,

    /**
     * experimentalDecorators: 데코레이터 문법 지원
     * - @Component, @Injectable 등 데코레이터 사용 시 필요
     * - Angular, NestJS 등에서 필요
     */
    "experimentalDecorators": false,

    /**
     * emitDecoratorMetadata: 데코레이터 메타데이터 생성
     * - 의존성 주입 등에 필요한 런타임 정보 생성
     */
    "emitDecoratorMetadata": false
  },

  // ================================================
  // 🎨 추가 설정 (중요도: ⭐ 낮음)
  // ================================================
  
  /**
   * ts-node: TypeScript를 직접 실행할 때 사용하는 설정
   * - 개발 중 ts-node로 TypeScript 파일을 바로 실행할 때 유용
   */
  "ts-node": {
    "esm": true,                    // ES 모듈 지원
    "experimentalSpecifierResolution": "node"  // Node.js 스타일 모듈 해석
  }
}

// ================================================
// 📋 권장 설정 요약
// ================================================

/**
 * 🔰 초보자 권장 설정 (간단한 프로젝트용):
 * {
 *   "include": ["src/**/*"],
 *   "compilerOptions": {
 *     "target": "ES2020",
 *     "module": "CommonJS",
 *     "outDir": "./dist",
 *     "rootDir": "./src",
 *     "strict": true,
 *     "esModuleInterop": true,
 *     "skipLibCheck": true
 *   }
 * }
 */

/**
 * 🚀 실무 권장 설정 (중급 프로젝트용):
 * - 위의 초보자 설정에 추가로:
 * - "sourceMap": true (디버깅용)
 * - "declaration": true (라이브러리 제작 시)
 * - "noUnusedLocals": true (코드 품질)
 * - "noImplicitReturns": true (안정성)
 * - "baseUrl"과 "paths" (편의성)
 */

/**
 * 💡 팁:
 * 1. 처음에는 간단한 설정으로 시작하세요
 * 2. 프로젝트가 커지면서 필요한 설정을 점진적으로 추가하세요
 * 3. "strict": true는 처음엔 어렵지만 반드시 사용하는 것을 권장합니다
 * 4. IDE(VS Code 등)에서 자동완성과 에러 검사를 활용하세요
 * 5. 공식 문서를 참고하여 더 자세한 내용을 학습하세요
 */