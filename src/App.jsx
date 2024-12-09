import { useState, useEffect } from "react";
import TodoInput from "./components/Todoinput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("list");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos)); // Load todos from localStorage
    }
  }, []);

  function handleAddTodo(newTodo) {
    if (newTodo.trim() === "") return;
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    localStorage.setItem("list", JSON.stringify((newTodoList)))
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
    localStorage.setItem("list", JSON.stringify((newTodoList)))
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }
  
  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
