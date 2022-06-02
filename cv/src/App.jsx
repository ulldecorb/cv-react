import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import CV from './constants/cv';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home cv={CV} />
              }
        />
      </Routes>
    </Router>
  );
}

export default App;
