import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateNewTask from './pages/Add'
import SingleTask from './pages/SingleTask'
import UpdateTask from './pages/Update'



function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/add' element={<CreateNewTask />} />
          <Route path='/each/:id' element={<SingleTask />} />
          <Route path='/edited/:id' element={<UpdateTask />} />
      </Routes>
    
    </>
  );
}

export default App;
