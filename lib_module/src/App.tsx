import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BreadCrumbs from './components/molecules/breadcrumbs'
import React from 'react'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<BreadCrumbs listOnglet={["test","test","testq"]} listLien={["","",""]} bkColor='red'/>} />
        

      </Routes>
    </BrowserRouter>
  )
}

export default App
