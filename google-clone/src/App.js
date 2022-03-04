import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/store" element={<Home />} />
        <Route path="/gmail" element={<Home />} />
        <Route path="/images" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
