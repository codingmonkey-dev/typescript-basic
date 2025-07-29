import { Todo, TodoFilter, TodoStats, TodoAction, Priority } from './types';

export class TodoManager {
  // 1단계: 클래스 속성 정의하기
  private todos: Todo[] = [];
  // 여기에 nextId 속성을 number 타입으로 추가하세요 (초기값: 1)
  

  // 2단계: Todo 추가 메서드 구현하기
  addTodo(title: string, description: string = '', priority: Priority = Priority.MEDIUM, dueDate: Date | null = null): Todo {
    // 새로운 Todo 객체를 생성하세요
    const newTodo: Todo = {
      // 여기에 Todo 객체의 속성들을 채우세요
      
    };
    
    // todos 배열에 새 Todo를 추가하고 반환하세요
    
  }

  // 3단계: Todo 완료 상태 토글 메서드
  toggleTodo(id: number): boolean {
    // id로 todo를 찾아서 completed 상태를 토글하세요
    
  }

  // 4단계: Todo 삭제 메서드
  deleteTodo(id: number): boolean {
    // id로 todo를 찾아서 삭제하세요
    
  }

  // 5단계: Todo 업데이트 메서드
  updateTodo(id: number, updates: Partial<Todo>): Todo | null {
    // id로 todo를 찾아서 updates로 업데이트하세요
    
  }

  // 6단계: 필터링된 Todo 목록 조회 메서드
  getTodos(filter?: TodoFilter): Todo[] {
    // filter 조건에 따라 todo 목록을 필터링하여 반환하세요
    
  }

  // 7단계: 통계 조회 메서드
  getStats(): TodoStats {
    // todo 목록의 통계를 계산하여 반환하세요
    
  }

  // 8단계: 제네릭을 활용한 정렬 메서드
  sortTodos<K extends keyof Todo>(key: K, ascending: boolean = true): Todo[] {
    // key를 기준으로 todo 목록을 정렬하여 반환하세요
    
  }

  // 9단계: 액션 디스패처 (switch 문 연습)
  dispatch(action: TodoAction): void {
    // action.type에 따라 적절한 메서드를 호출하세요
    
  }
}