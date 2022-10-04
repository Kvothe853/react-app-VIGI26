import "./Todos.css";
import { useState, useEffect } from "react";

const Todos = (props) => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) setTodos(todos);
  }, []);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (text) {
      setTodos((prevTodos) => [...prevTodos, text]);
      setText("");
      localStorage.setItem("todos", JSON.stringify([...todos, text]));
    }
  };

  return (
    <div className="todos-container">
      <div>You have {todos.length} Todos</div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <h3>{todo}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
