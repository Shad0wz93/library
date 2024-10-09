import './App.css'
import Modal from './components/organismes/modal/Modal.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/*<Route path='/counter' element={<MyComponen/>} /> */}
      <Route path='/' element={<Modal title='Mon titre' content="test" bkColor='red' position='left'/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
