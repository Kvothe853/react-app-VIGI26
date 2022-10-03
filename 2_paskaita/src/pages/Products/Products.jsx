import "./Products.css";
import { useState } from "react";
import Bar from "../../components/Bar/Bar";

const Products = (props) => {
  const [name, setName] = useState("Airidas");
  const [age, setAge] = useState(30);
  const [counter, setCounter] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [surname, setSurname] = useState("Smirnovas");
  const [activeDay, setActiveDay] = useState("");

  const [todos, setTodos] = useState(["Learn React"]);
  const [todoText, setTodoText] = useState("");

  const [colors, setColors] = useState(["red"]);
  const [colorText, setColorText] = useState("");

  const [boxWidth, setBoxWidth] = useState(50);
  const [boxHeight, setBoxHeight] = useState(50);
  const [boxColor, setBoxColor] = useState("black");

  // ---
  const [years, setYears] = useState(20);
  const [siblings, setSiblings] = useState(10);
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState("");
  const [barWidth, setBarWidth] = useState(60);

  const handleClick = () => {
    setName("Tomas");
    setAge(25);
    setCounter(counter + 1);
  };

  const transformSurname = () => {
    setSurname(surname === "Smirnovas" ? "Kazlauskas" : "Smirnovas");
  };

  const handleAddTodo = () => {
    if (todoText) {
      setTodos([...todos, todoText]);
      setTodoText("");
    }
  };

  const handleDeleteTodo = (todo) => {
    const element = todo.target.parentElement.textContent;
    const todoElement = element.substring(
      element.indexOf(" ") + 1,
      element.lastIndexOf(" ")
    );

    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo !== `${todoElement}`)
    );
  };

  // ---
  const getOlder = () => {
    setYears(years + 1);
  };
  const moreSiblings = () => {
    setSiblings(siblings + 1);
  };
  // ---
  const resetCounter = () => {
    setCount(0);
  };
  const increaseCounter = () => {
    setCount(count + 1);
  };
  const reduceCounter = () => {
    setCount(count - 1);
  };
  // ---
  const generateRandomNumber = () => {
    const randomNumber = Math.random();
    setRandomNumber(randomNumber);
  };
  // ---
  const increaseBarWidth = () => {
    setBarWidth(barWidth + 10);
  };
  const reduceBarWidth = () => {
    setBarWidth(barWidth - 10);
  };

  // colors todo
  const handleAddColor = () => {
    if (colorText) {
      setColors((prevColors) => [...prevColors, colorText]);
      setColorText("");
    }
  };

  // boxwidth
  const handleIncreaseBoxSize = () => {
    setBoxWidth((prevBoxWidth) => prevBoxWidth + 25);
    setBoxHeight((prevBoxHeight) => prevBoxHeight + 25);
    boxColor === "black" ? setBoxColor("grey") : setBoxColor("black");
  };

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <p>Products: {counter}</p>
      <button onClick={handleClick}>Click me</button>
      <div>
        <br />
        <br />

        <button onClick={() => setQuantity(100)}>100</button>
        <button onClick={() => setQuantity(200)}> 200</button>
        <button onClick={() => setQuantity(500)}>500</button>
        <h2>Kiekis: {quantity}</h2>
      </div>
      <div>
        <p onClick={() => transformSurname()}>{surname}</p>
      </div>
      <div className="weekdays">
        {weekDays.map((weekday, index) => (
          <span
            className={`weekday ${activeDay === weekday ? "active" : ""}`}
            onClick={() => setActiveDay(weekday)}
            key={index}
          >
            {weekday}
          </span>
        ))}
      </div>
      <div className="todo-list">
        <div>
          <input
            type="text"
            placeholder="Add New Todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          ></input>

          {/* Jeigu su componentu, tai button'e apsirasyti onclick */}
          <button className="add-todo-btn" onClick={handleAddTodo}>
            Add Todo
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              - {todo}{" "}
              <span onClick={(todo) => handleDeleteTodo(todo)}>&#10006;</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="siblings-container border">
        <h2>Today I am {years} Years of Age</h2>
        <h2>I have {siblings} siblings</h2>
        <div className="siblings-btns">
          <button onClick={() => getOlder()}>Get Older!</button>
          <button onClick={() => moreSiblings()}>More siblings!</button>
        </div>
      </div>
      <div className="counter-container border">
        <h2> Count value is: {count}</h2>
        <div className="counter-btns">
          <button onClick={() => resetCounter()}>Reset</button>
          <button onClick={() => increaseCounter()}>{`Plus (+)`}</button>
          <button onClick={() => reduceCounter()}>{`Minus (-)`}</button>
        </div>
      </div>
      <div className="randomNumber-container border">
        <h2>{randomNumber}</h2>
        <button onClick={() => generateRandomNumber()}>
          Generate random number!
        </button>
      </div>
      <div className="bar-size-container border">
        <div>{<Bar width={barWidth} />}</div>
        <div className="bars-btns">
          <button onClick={() => increaseBarWidth()}>Increase bar size</button>
          <button onClick={() => reduceBarWidth()}>Decrease bar size</button>
        </div>
      </div>
      <div className="border">
        <input
          type="text"
          className="todo-input"
          value={colorText}
          onChange={(e) => setColorText(e.target.value)}
        />
        <button onClick={handleAddColor}>Add new color</button>
        {colors.map((color, index) => (
          <div
            key={`${color}_${index}`}
            style={{
              backgroundColor: color,
              height: 40,
              width: 40,
            }}
          />
        ))}
      </div>
      <div className="border">
        <button onClick={handleIncreaseBoxSize} style={{ marginBottom: 20 }}>
          Increase box size
        </button>
        <div
          style={{
            backgroundColor: boxColor,
            width: boxWidth,
            height: boxHeight,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Products;
