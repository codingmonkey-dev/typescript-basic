// Todo 앱의 기본 타입 정의

// 우선순위 열거형 (먼저 정의)
export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
  dueDate: Date | null;
  createdAt: Date;
}

export interface TodoFilter {
  status?: 'all' | 'completed' | 'pending';
  priority?: Priority;
  searchText?: string;
}

export interface TodoStats {
  total: number;
  completed: number;
  pending: number;
  highPriority: number;
}

export type TodoAction = 
  | { type: 'ADD'; payload: Omit<Todo, 'id' | 'createdAt'> }
  | { type: 'TOGGLE'; payload: number }
  | { type: 'DELETE'; payload: number }
  | { type: 'UPDATE'; payload: { id: number; updates: Partial<Todo> } };