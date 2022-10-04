import "./Todo.css";

const Todo = (props) => {
  return (
    <div className="todo">
      <div>{props.children}</div>
      <button onClick={props.deleteTodo}>&#10006;</button>
    </div>
  );
};

export default Todo;
