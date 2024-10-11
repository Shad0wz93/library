import React from 'react'
import './App.css'
import Modal from './components/organismes/modal/Modal'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from './components/molecules/card'

const link = 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/09/Pokemon-Ash-Feature-Image-1.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Card title='Mon titre' content="Ca c'est moi" srcImg={link} bkColor='green'/>} />
        

      </Routes>
    </BrowserRouter>
  )
}

export default App
