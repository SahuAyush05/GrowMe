// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Components/Signin';
import SecondPage from './Components/Second';

function App() {
  return (
    <Router>
      <div>
        <h1>User Information Form</h1>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/second-page" element={<SecondPage />} />
          {/* Redirect from="/" to="/form" is not needed with v6 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
