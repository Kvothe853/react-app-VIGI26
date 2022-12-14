import "./App.css";
import { Routes, Route } from "react-router-dom";
import Todos from "../src/pages/Todos/Todos";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} exact />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
