import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import CV from './constants/cv';
import Home from './components/Home';
import Minimal from './components/Minimal';

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
        <Route
          path="/minimal"
          element={
            <Minimal cv={CV} />
              }
        />
      </Routes>
    </Router>
  );
}

export default App;
