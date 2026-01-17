import React from 'react';

// 이 파일에서 사용할 타입들을 정의합니다.
interface Todo {
  id: number;
  text: string;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
}

// TodoItem 컴포넌트: props를 받아 단일 할 일 항목을 렌더링합니다.
const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <li>
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
