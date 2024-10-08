import './App.css'
import Modal from './components/organismes/modal/Modal.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/*<Route path='/counter' element={<MyComponen/>} /> */}
      <Route path='/' element={<Modal inContent="test"/>} />
        

      </Routes>
    </BrowserRouter>
  )
}

export default App
