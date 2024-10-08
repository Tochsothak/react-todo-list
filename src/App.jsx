import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    "go to  the gym",
    "Eat more fruits and vege",
    "Pick the kid from school",
  ]);

  function handleAddTodos(newTodo) {
    const NewTodoList = [...todos, newTodo];
    setTodos(NewTodoList);
  }
  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} />
    </>
  );
}
