import { useState } from "react";
import TodoList from "./TodoList";

export default function TodoInput(props) {
  const { handleAddTodos } = props;
  const { todoValue, setTodoValue } = useState();
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter to do..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
        }}
      >
        Add
      </button>
    </header>
  );
}
