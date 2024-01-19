import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import WorkerCreator from './Pages/WorkerCreator';

function App() {
  return (
  
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/nuevo-trabajador" element={<WorkerCreator/>} />
    </Routes>
  );
}

export default App;
