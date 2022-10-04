import Todo from "../Todo/Todo";
import { useState, useEffect } from "react";

const TodoContainer = (props) => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) setTodos(todos);
  }, []);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoText) {
      setTodos((prevTodos) => [...prevTodos, todoText]);
      setTodoText("");
      localStorage.setItem("todos", JSON.stringify([...todos, todoText]));
    }
  };

  const handleDeleteTodo = (todo) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo !== todo));
    localStorage.setItem("todos", JSON.stringify([todos]));
  };

  return (
    <div className="todo-container">
      <h3>You have {todos.length} Todos</h3>
      <div className="todos">
        {todos.map((todo) => (
          <Todo deleteTodo={() => handleDeleteTodo(todo)}>{todo}</Todo>
        ))}
      </div>
      <form onSubmit={(e) => handleAddTodo(e)}>
        <input
          type="text"
          placeholder="Enter Item"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoContainer;
