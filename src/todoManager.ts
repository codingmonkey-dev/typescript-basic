import { Todo, TodoFilter, TodoStats, TodoAction, Priority } from './types';

export class TodoManager {
  private todos: Todo[] = [];
  private nextId: number = 1;

  // Todo 추가 메서드
  addTodo(title: string, description: string = '', priority: Priority = Priority.MEDIUM, dueDate: Date | null = null): Todo {
    const newTodo: Todo = {
      id: this.nextId++,
      title,
      description,
      completed: false,
      priority,
      dueDate,
      createdAt: new Date()
    };
    
    this.todos.push(newTodo);
    return newTodo;
  }

  // Todo 완료 상태 토글
  toggleTodo(id: number): boolean {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      return true;
    }
    return false;
  }

  // Todo 삭제
  deleteTodo(id: number): boolean {
    const index = this.todos.findIndex(t => t.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }

  // Todo 업데이트
  updateTodo(id: number, updates: Partial<Todo>): Todo | null {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      Object.assign(todo, updates);
      return todo;
    }
    return null;
  }

  // 필터링된 Todo 목록 조회
  getTodos(filter?: TodoFilter): Todo[] {
    let filteredTodos = [...this.todos];

    if (filter) {
      if (filter.status === 'completed') {
        filteredTodos = filteredTodos.filter(todo => todo.completed);
      } else if (filter.status === 'pending') {
        filteredTodos = filteredTodos.filter(todo => !todo.completed);
      }

      if (filter.priority) {
        filteredTodos = filteredTodos.filter(todo => todo.priority === filter.priority);
      }

      if (filter.searchText) {
        const searchLower = filter.searchText.toLowerCase();
        filteredTodos = filteredTodos.filter(todo => 
          todo.title.toLowerCase().includes(searchLower) ||
          todo.description.toLowerCase().includes(searchLower)
        );
      }
    }

    return filteredTodos;
  }

  // 통계 조회
  getStats(): TodoStats {
    const total = this.todos.length;
    const completed = this.todos.filter(t => t.completed).length;
    const pending = total - completed;
    const highPriority = this.todos.filter(t => t.priority === Priority.HIGH).length;

    return { total, completed, pending, highPriority };
  }

  // 제네릭을 활용한 정렬 메서드
  sortTodos<K extends keyof Todo>(key: K, ascending: boolean = true): Todo[] {
    return [...this.todos].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];
      
      // null 값 처리
      if (aValue === null && bValue === null) return 0;
      if (aValue === null) return ascending ? 1 : -1;
      if (bValue === null) return ascending ? -1 : 1;
      
      if (aValue < bValue) return ascending ? -1 : 1;
      if (aValue > bValue) return ascending ? 1 : -1;
      return 0;
    });
  }

  // 액션 디스패처
  dispatch(action: TodoAction): void {
    switch (action.type) {
      case 'ADD':
        this.addTodo(action.payload.title, action.payload.description, action.payload.priority, action.payload.dueDate);
        break;
      case 'TOGGLE':
        this.toggleTodo(action.payload);
        break;
      case 'DELETE':
        this.deleteTodo(action.payload);
        break;
      case 'UPDATE':
        this.updateTodo(action.payload.id, action.payload.updates);
        break;
    }
  }
}