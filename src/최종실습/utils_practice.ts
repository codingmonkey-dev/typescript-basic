import { Todo, Priority } from './types';

// 1단계: 날짜 포맷팅 함수 구현하기
export function formatDate(date: Date): string {
  // Date 객체를 한국어 형식으로 포맷팅하여 반환하세요
  
}

// 2단계: 우선순위 색상 반환 함수
export function getPriorityColor(priority: Priority): string {
  // Record 타입을 사용하여 우선순위별 색상을 정의하고 반환하세요
  const colorMap: Record<Priority, string> = {
    // 여기에 각 우선순위별 색상을 정의하세요
    
  };
  
}

// 3단계: Todo 유효성 검사 함수
export function validateTodo(todo: Partial<Todo>): string[] {
  // 에러 메시지를 담을 배열을 선언하세요
  
  // title이 비어있는지 검사하세요
  
  // title 길이가 100자를 초과하는지 검사하세요
  
  // description 길이가 500자를 초과하는지 검사하세요
  
  // dueDate가 현재 시간보다 이전인지 검사하세요
  
  
}

// 4단계: 제네릭을 활용한 배열 그룹화 함수
export function groupBy<T, K extends keyof T>(array: T[], key: K): Record<string, T[]> {
  // reduce를 사용하여 배열을 key로 그룹화하세요
  
}

// 5단계: 디바운스 함수 (고급 타입 연습)
export function debounce<Args extends any[]>(
  func: (...args: Args) => void,
  delay: number
): (...args: Args) => void {
  // 타임아웃 ID를 저장할 변수를 선언하세요
  
  // 디바운스된 함수를 반환하세요
  
}

// 6단계: Todo 텍스트 하이라이트 함수
export function highlightText(text: string, searchTerm: string): string {
  // searchTerm이 없으면 원본 text를 반환하세요
  
  // 정규식을 사용하여 searchTerm을 <mark> 태그로 감싸세요
  
}

// 7단계: 마감일까지 남은 일수 계산
export function getDaysUntilDue(dueDate: Date | null): number | null {
  // dueDate가 null이면 null을 반환하세요
  
  // 현재 날짜와 마감일의 차이를 일수로 계산하여 반환하세요
  
}

// 8단계: 함수 타입 정의하기
export type TodoFilterFunction = // 여기에 함수 타입을 정의하세요

// 9단계: 객체 형태의 필터 함수 팩토리
export const createFilterFunctions = {
  // 완료 상태로 필터링하는 함수를 반환
  byStatus: (completed: boolean): TodoFilterFunction => 
    // 여기에 화살표 함수를 구현하세요
    
  // 우선순위로 필터링하는 함수를 반환  
  byPriority: (priority: Priority): TodoFilterFunction => 
    // 여기에 화살표 함수를 구현하세요
    
  // 마감일로 필터링하는 함수를 반환
  byDueDate: (days: number): TodoFilterFunction => 
    // 여기에 화살표 함수를 구현하세요 (getDaysUntilDue 함수 활용)
    
  // 검색어로 필터링하는 함수를 반환  
  bySearchText: (searchText: string): TodoFilterFunction => 
    // 여기에 화살표 함수를 구현하세요
    
};

// 10단계: 여러 필터를 결합하는 함수
export function combineFilters(...filters: TodoFilterFunction[]): TodoFilterFunction {
  // 모든 필터 조건을 만족하는 Todo만 통과시키는 함수를 반환하세요
  
}