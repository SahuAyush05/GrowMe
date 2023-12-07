// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SecondPage from './Components/Second';
import First from './Components/First';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<First/>} />
          <Route path="/second-page" element={<SecondPage/>} />
        </Routes>
    </Router>
  );
}

export default App;
