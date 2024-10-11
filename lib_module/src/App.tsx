import React from 'react'
import './App.css'
import Modal from './components/organismes/modal/Modal'
import CheckBox from './components/atoms/Checkbox'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BreadCrumbs from './components/molecules/breadcrumbs'

const link = 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/09/Pokemon-Ash-Feature-Image-1.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={
        <BreadCrumbs listOnglet={["test","test","testq"]} listLien={["","",""]} bkColor='red'/>} />
        

      </Routes>
    </BrowserRouter>
  )
}

export default App
