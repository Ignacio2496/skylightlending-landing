import './App.css'
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Layouts/HomePage';
import ContacUs from './Layouts/ContacUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contactos" element={<ContacUs />} />
      </Routes>
    </Router>
  );
}

export default App
