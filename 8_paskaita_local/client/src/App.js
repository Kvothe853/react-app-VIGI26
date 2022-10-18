import { Routes, Route } from 'react-router-dom';
import Pets from './pages/Pets/Pets';
import Health from './pages/Health/Health';
import Error from './pages/Error/Error';
import Medications from './pages/Medications/Metications';
import './App.css';

const App = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Pets />} />
      <Route path="/medications" element={<Medications />} />
      <Route path="/health/:id" element={<Health />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
