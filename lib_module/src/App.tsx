import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tabs from './components/organismes/Tabs'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Tabs titles={["titre1","titre2"]}  listContent={["Test1","test2"]} color="blue"/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
