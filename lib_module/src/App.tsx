import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tabs from './components/organismes/Tabs'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Tabs pageCurrent='Ici' titles={["page1","page2"]}  links={["#","#"]} overView="red"/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
