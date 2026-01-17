import React, { useState, useEffect } from 'react';
import TodoList from './TodoList'; // 새로 만든 TodoList를 가져옵니다.

// App 컴포넌트에서만 사용할 Todo 타입.
// 만약 다른 파일에서도 쓴다면 별도 types.ts 파일로 분리하는 것이 좋습니다.
interface Todo {
  id: number;
  text: string;
}

// App 컴포넌트: 모든 상태와 핵심 로직을 관리하는 컨테이너 역할.
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  // 핸들러: 새 할 일 추가
  function handleAddTodo() {
    if (newTodo.trim() === '') return;
    setTodos(prev => [...prev, { id: Date.now(), text: newTodo }]);
    setNewTodo('');
  }

  // 핸들러: 할 일 삭제
  function handleDeleteTodo(id: number) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  // Side Effect: todos 배열이 바뀔 때마다 문서 제목 업데이트
  useEffect(() => {
    document.title = `할 일: ${todos.length}개`;
  }, [todos]);

  return (
    <div>
      <h1>My To-Do List</h1>
      <div>
        <input 
          type="text" 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={handleAddTodo}>추가</button>
      </div>

      {/* 렌더링 책임을 TodoList 컴포넌트에 위임합니다. */}
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
}

export default App;
