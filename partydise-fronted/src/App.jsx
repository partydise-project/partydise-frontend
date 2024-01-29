import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import WorkerCreator from './Pages/WorkerCreator';
import ReenactorCreator from './Pages/reenactorCreator';

function App() {
  return (
  
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/trabajadores" element={<WorkerCreator/>} />
      <Route path='/recreadores'element={<ReenactorCreator/>}/>
    </Routes>
  );
}

export default App;
