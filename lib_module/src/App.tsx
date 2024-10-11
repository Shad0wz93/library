import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CheckBox from './components/atoms/Checkbox'
import React from 'react'



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<CheckBox titleBox="test" listChek={["test","test1","test2"]} bkColor='red'/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
