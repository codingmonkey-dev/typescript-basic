// Todo 앱의 기본 타입 정의

// 5단계: 열거형(Enum) 정의하기 (먼저 정의)
export enum Priority {
  // 여기에 LOW, MEDIUM, HIGH를 정의하세요
  
}

// 1단계: Todo 인터페이스 정의하기
export interface Todo {
  id: number;
  title: string;
  // 여기에 description 속성을 string 타입으로 추가하세요
  
  // 여기에 completed 속성을 boolean 타입으로 추가하세요
  
  // 여기에 priority 속성을 Priority 타입으로 추가하세요
  
  // 여기에 dueDate 속성을 Date | null 타입으로 추가하세요
  
  createdAt: Date;
}

// 2단계: 필터 인터페이스 정의하기
export interface TodoFilter {
  // 여기에 status 속성을 선택적으로 추가하세요 ('all' | 'completed' | 'pending')
  
  // 여기에 priority 속성을 선택적으로 추가하세요 (Priority 타입)
  
  // 여기에 searchText 속성을 선택적으로 추가하세요
  
}

// 3단계: 통계 인터페이스 정의하기
export interface TodoStats {
  // 여기에 필요한 속성들을 추가하세요
  
}

// 4단계: 액션 타입 정의하기 (유니온 타입 연습)
export type TodoAction = 
  // 여기에 ADD, TOGGLE, DELETE, UPDATE 액션들을 정의하세요