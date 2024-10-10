import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Toggle from './components/atoms/toggle'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Toggle form='carre' color='green'/>} />
        

      </Routes>
    </BrowserRouter>
  )
}

export default App
