import { TodoManager } from './todoManager';
import { Priority, TodoFilter } from './types';
import { 
  formatDate, 
  getPriorityColor, 
  validateTodo, 
  groupBy, 
  debounce,
  createFilterFunctions,
  combineFilters 
} from './utils';

// Todo 앱 메인 클래스
class TodoApp {
  private todoManager: TodoManager;

  constructor() {
    this.todoManager = new TodoManager();
    this.initializeApp();
  }

  private initializeApp(): void {
    console.log('🚀 Todo 앱을 시작합니다!');
    
    // 샘플 데이터 추가
    this.addSampleData();
    
    // 기본 사용법 데모
    this.demonstrateBasicUsage();
    
    // 고급 기능 데모
    this.demonstrateAdvancedFeatures();
  }

  private addSampleData(): void {
    console.log('\n📝 샘플 Todo 데이터 추가중...');
    
    this.todoManager.addTodo(
      '타입스크립트 공부하기', 
      'TypeScript 기초부터 고급까지 학습', 
      Priority.HIGH, 
      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7일 후
    );
    
    this.todoManager.addTodo(
      '프로젝트 계획 세우기', 
      'Todo 앱 개발 로드맵 작성', 
      Priority.MEDIUM,
      new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3일 후
    );
    
    this.todoManager.addTodo(
      '코드 리뷰하기', 
      '팀원들의 코드 리뷰 및 피드백', 
      Priority.LOW,
      null
    );

    console.log('✅ 샘플 데이터 추가 완료');
  }

  private demonstrateBasicUsage(): void {
    console.log('\n🔄 기본 기능 테스트');
    
    // 전체 Todo 조회
    const allTodos = this.todoManager.getTodos();
    console.log(`총 ${allTodos.length}개의 Todo가 있습니다.`);
    
    // Todo 완료 처리
    this.todoManager.toggleTodo(1);
    console.log('첫 번째 Todo를 완료했습니다.');
    
    // 통계 조회
    const stats = this.todoManager.getStats();
    console.log('📊 현재 통계:', stats);
    
    // Todo 업데이트
    this.todoManager.updateTodo(2, { 
      priority: Priority.HIGH,
      description: '긴급하게 처리해야 할 프로젝트 계획'
    });
    console.log('두 번째 Todo를 업데이트했습니다.');
  }

  private demonstrateAdvancedFeatures(): void {
    console.log('\n🚀 고급 기능 테스트');
    
    // 필터링 테스트
    const highPriorityFilter: TodoFilter = { priority: Priority.HIGH };
    const highPriorityTodos = this.todoManager.getTodos(highPriorityFilter);
    console.log(`높은 우선순위 Todo: ${highPriorityTodos.length}개`);
    
    // 우선순위별 그룹화
    const allTodos = this.todoManager.getTodos();
    const groupedByPriority = groupBy(allTodos, 'priority');
    console.log('📋 우선순위별 그룹화:', Object.keys(groupedByPriority));
    
    // 정렬 테스트
    const sortedByDate = this.todoManager.sortTodos('createdAt', false);
    console.log('📅 최신 순으로 정렬된 Todo들:');
    sortedByDate.forEach(todo => {
      console.log(`  - ${todo.title} (${formatDate(todo.createdAt)})`);
    });
    
    // 필터 함수 사용
    const urgentFilter = createFilterFunctions.byDueDate(3);
    const searchFilter = createFilterFunctions.bySearchText('타입스크립트');
    const combinedFilter = combineFilters(urgentFilter, searchFilter);
    
    const filteredTodos = allTodos.filter(combinedFilter);
    console.log(`조건에 맞는 Todo: ${filteredTodos.length}개`);
    
    // 유효성 검사 테스트
    const invalidTodo = { title: '', description: 'a'.repeat(600) };
    const errors = validateTodo(invalidTodo);
    if (errors.length > 0) {
      console.log('⚠️  유효성 검사 실패:', errors);
    }
    
    // 디바운스 함수 테스트
    const debouncedLog = debounce((message: string) => {
      console.log('디바운스된 메시지:', message);
    }, 300);
    
    debouncedLog('첫 번째 호출');
    debouncedLog('두 번째 호출');
    debouncedLog('세 번째 호출'); // 이것만 300ms 후에 실행됨
  }

  // 액션 디스패처 데모
  demonstrateActions(): void {
    console.log('\n🎬 액션 디스패처 테스트');
    
    this.todoManager.dispatch({
      type: 'ADD',
      payload: {
        title: '액션으로 추가된 Todo',
        description: 'dispatch 메서드를 통해 추가됨',
        priority: Priority.MEDIUM,
        completed: false,
        dueDate: null
      }
    });
    
    this.todoManager.dispatch({
      type: 'TOGGLE',
      payload: 1
    });
    
    console.log('액션 디스패처 테스트 완료');
  }

  // 앱 상태 출력
  printAppState(): void {
    console.log('\n📋 현재 앱 상태');
    console.log('='.repeat(40));
    
    const todos = this.todoManager.getTodos();
    todos.forEach(todo => {
      const dueText = todo.dueDate ? formatDate(todo.dueDate) : '마감일 없음';
      const statusIcon = todo.completed ? '✅' : '⏳';
      const priorityColor = getPriorityColor(todo.priority);
      
      console.log(`${statusIcon} ${todo.title}`);
      console.log(`   ${todo.description}`);
      console.log(`   우선순위: ${todo.priority} | 마감일: ${dueText}`);
      console.log(`   색상: ${priorityColor}`);
      console.log('');
    });
    
    const stats = this.todoManager.getStats();
    console.log('📊 통계 정보');
    console.log(`   전체: ${stats.total}개`);
    console.log(`   완료: ${stats.completed}개`);
    console.log(`   미완료: ${stats.pending}개`);
    console.log(`   높은 우선순위: ${stats.highPriority}개`);
  }
}

// 앱 실행
const app = new TodoApp();
app.demonstrateActions();
app.printAppState();