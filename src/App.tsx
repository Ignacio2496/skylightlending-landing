import './App.css'
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Layouts/HomePage';
import ContacUs from './Layouts/ContacUs';
import OurStory from './Layouts/OurStory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact US" element={<ContacUs />} />
        <Route path="/Our Story" element={<OurStory />} />
      </Routes>
    </Router>
  );
}

export default App
