import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<h1>This is the Search Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
