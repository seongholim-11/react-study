import React, { useState } from "react";

// Todo 항목의 타입을 정의합니다.
interface Todo {
  id: number;
  text: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  // 핸들러: 새 할 일 추가
  function handleAddTodo() {
    if (newTodo.trim() === '') return;
    setTodos(prevTodos => [...prevTodos, { id: Date.now(), text: newTodo }]);
    setNewTodo('');
  }

  // 핸들러: 할 일 삭제
  function handleDeleteTodo(id: number) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <h1>My To-Do List</h1>
      {/* 입력 폼 */}
      <div>
        <input 
          type="text" 
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={handleAddTodo}>추가</button>
      </div>

      {/* 할 일 목록 렌더링 */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
