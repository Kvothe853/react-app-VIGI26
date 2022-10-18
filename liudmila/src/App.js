import { Routes, Route } from "react-router-dom";
import Health from "./pages/Health/Health";
import Pets from "./pages/Pets/Pets";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pets />} exact />
      <Route path="/health/:id" element={<Health />} exact />
    </Routes>
  );
};
export default App;
