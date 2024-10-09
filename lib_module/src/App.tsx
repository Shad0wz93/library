import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BreadCrumbs from './components/molecules/breadcrumbs'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<BreadCrumbs listOnglet={["test","test"]} listLien={["",""]} bkColor='green'/>} />
        

      </Routes>
    </BrowserRouter>
  )
}

export default App
