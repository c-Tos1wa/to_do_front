import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateNewTask from './pages/Add'



function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/add' element={<CreateNewTask />} />
      </Routes>
    
    </>
  );
}

export default App;
