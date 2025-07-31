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

// 1단계: Todo 앱 메인 클래스 정의하기
class TodoApp {
  // TodoManager 타입의 private 속성을 선언하세요
  

  constructor() {
    // TodoManager 인스턴스를 생성하여 할당하세요
    
    this.initializeApp();
  }

  private initializeApp(): void {
    console.log('🚀 Todo 앱을 시작합니다!');
    
    // 메서드들을 호출하세요
    
  }

  // 2단계: 샘플 데이터 추가 메서드
  private addSampleData(): void {
    console.log('\n📝 샘플 Todo 데이터 추가중...');
    
    // 첫 번째 Todo를 추가하세요 (높은 우선순위, 7일 후 마감)
    
    
    // 두 번째 Todo를 추가하세요 (보통 우선순위, 3일 후 마감)
    
    
    // 세 번째 Todo를 추가하세요 (낮은 우선순위, 마감일 없음)
    

    console.log('✅ 샘플 데이터 추가 완료');
  }

  // 3단계: 기본 기능 테스트 메서드
  private demonstrateBasicUsage(): void {
    console.log('\n🔄 기본 기능 테스트');
    
    // 전체 Todo 목록을 조회하고 개수를 출력하세요
    
    
    // 첫 번째 Todo를 완료 처리하세요
    
    
    // 통계를 조회하고 출력하세요
    
    
    // 두 번째 Todo를 업데이트하세요 (우선순위와 설명 변경)
    
  }

  // 4단계: 고급 기능 테스트 메서드
  private demonstrateAdvancedFeatures(): void {
    console.log('\n🚀 고급 기능 테스트');
    
    // 높은 우선순위 Todo만 필터링하세요
    
    
    // 모든 Todo를 우선순위별로 그룹화하세요
    
    
    // Todo를 생성일 기준으로 최신 순으로 정렬하세요
    
    
    // 여러 필터를 조합하여 사용하세요
    
    
    // 유효성 검사를 테스트하세요
    
    
    // 디바운스 함수를 테스트하세요
    
  }

  // 5단계: 액션 디스패처 데모 메서드
  demonstrateActions(): void {
    console.log('\n🎬 액션 디스패처 테스트');
    
    // ADD 액션을 디스패치하세요
    
    
    // TOGGLE 액션을 디스패치하세요
    
    
    console.log('액션 디스패처 테스트 완료');
  }

  // 6단계: 앱 상태 출력 메서드
  printAppState(): void {
    console.log('\n📋 현재 앱 상태');
    console.log('='.repeat(40));
    
    // 모든 Todo를 조회하세요
    
    
    // 각 Todo의 정보를 형식화하여 출력하세요
    
    
    // 통계 정보를 출력하세요
    
  }
}

// 7단계: 앱 인스턴스 생성 및 실행
// TodoApp 인스턴스를 생성하세요

// demonstrateActions 메서드를 호출하세요

// printAppState 메서드를 호출하세요