import React from 'react';
import TodoItem from './TodoItem'; // 방금 만든 TodoItem을 가져옵니다.

// 이 파일에서 사용할 타입들을 정의합니다.
interface Todo {
  id: number;
  text: string;
}

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
}

// TodoList 컴포넌트: props로 받은 todos 배열을 순회하며 TodoItem들을 렌더링합니다.
const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
};

export default TodoList;
