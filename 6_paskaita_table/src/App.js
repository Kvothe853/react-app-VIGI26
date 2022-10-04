import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Error from "./pages/Error/Error";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
