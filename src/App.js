import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
     
    </Routes>
  </Router>
  );
}

export default App;
