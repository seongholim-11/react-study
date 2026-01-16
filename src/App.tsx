import React, { useState } from "react";

// 타입/인터페이스 이름은 대문자로 시작하는 것이 컨벤션입니다. (todo -> Todo)
interface Todo {
  id: number;
  text: string;
}

function App() {
  // useState에 제네릭으로 타입을 명시해줍니다.
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  function handleAddTodo() {
    // 아무것도 입력 안했을 때 추가되지 않도록 방어 로직 추가 (선택사항이었지만 좋은 습관입니다)
    if (newTodo.trim() === '') {
      return; 
    }

    const todoToAdd: Todo = {
      id: Date.now(),
      text: newTodo,
    };

    // 불변성을 지키며 새로운 배열로 상태 업데이트
    setTodos(prevTodos => [...prevTodos, todoToAdd]);
    setNewTodo(''); // 입력창 비우기
  }

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

      {/* 할 일 목록을 렌더링하는 부분 */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
