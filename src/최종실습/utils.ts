import { Todo, Priority } from './types';

// 날짜 포맷팅 함수
export function formatDate(date: Date): string {
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// 우선순위 색상 반환 함수
export function getPriorityColor(priority: Priority): string {
  const colorMap: Record<Priority, string> = {
    [Priority.LOW]: '#22c55e',
    [Priority.MEDIUM]: '#f59e0b', 
    [Priority.HIGH]: '#ef4444'
  };
  return colorMap[priority];
}

// Todo 유효성 검사 함수
export function validateTodo(todo: Partial<Todo>): string[] {
  const errors: string[] = [];
  
  if (!todo.title || todo.title.trim().length === 0) {
    errors.push('제목은 필수입니다.');
  }
  
  if (todo.title && todo.title.length > 100) {
    errors.push('제목은 100자를 초과할 수 없습니다.');
  }
  
  if (todo.description && todo.description.length > 500) {
    errors.push('설명은 500자를 초과할 수 없습니다.');
  }
  
  if (todo.dueDate && todo.dueDate < new Date()) {
    errors.push('마감일은 현재 시간보다 이후여야 합니다.');
  }
  
  return errors;
}

// 제네릭을 활용한 배열 그룹화 함수
export function groupBy<T, K extends keyof T>(array: T[], key: K): Record<string, T[]> {
  return array.reduce((groups, item) => {
    const groupKey = String(item[key]);
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);
    return groups;
  }, {} as Record<string, T[]>);
}

// 디바운스 함수 (함수형 프로그래밍)
export function debounce<Args extends any[]>(
  func: (...args: Args) => void,
  delay: number
): (...args: Args) => void {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// Todo 텍스트 하이라이트 함수
export function highlightText(text: string, searchTerm: string): string {
  if (!searchTerm) return text;
  
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// 마감일까지 남은 일수 계산
export function getDaysUntilDue(dueDate: Date | null): number | null {
  if (!dueDate) return null;
  
  const today = new Date();
  const diffTime = dueDate.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Todo 필터 함수 타입 (고차 함수)
export type TodoFilterFunction = (todo: Todo) => boolean;

// 필터 함수 팩토리
export const createFilterFunctions = {
  byStatus: (completed: boolean): TodoFilterFunction => 
    (todo) => todo.completed === completed,
    
  byPriority: (priority: Priority): TodoFilterFunction => 
    (todo) => todo.priority === priority,
    
  byDueDate: (days: number): TodoFilterFunction => 
    (todo) => {
      if (!todo.dueDate) return false;
      const daysUntil = getDaysUntilDue(todo.dueDate);
      return daysUntil !== null && daysUntil <= days;
    },
    
  bySearchText: (searchText: string): TodoFilterFunction => 
    (todo) => {
      const search = searchText.toLowerCase();
      return todo.title.toLowerCase().includes(search) ||
             todo.description.toLowerCase().includes(search);
    }
};

// 여러 필터를 결합하는 함수
export function combineFilters(...filters: TodoFilterFunction[]): TodoFilterFunction {
  return (todo: Todo) => filters.every(filter => filter(todo));
}