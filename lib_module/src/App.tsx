import './App.css'
//import Modal from './components/organismes/modal/Modal.tsx'
import Tabs from './components/organismes/Tabs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/*<Route path='/counter' element={<MyComponen/>} /> */}
      {/*<Route path='/' element={<Modal title='Mon titre' content="test" bkColor='red' position='left'/>} /> */}
      <Route path='/' element={<Tabs pageCurrent='Ici' titles={["page1","page2"]}  links={["#","#"]} overView="red"/>} /> 

      </Routes>
    </BrowserRouter>
  )
}

export default App
