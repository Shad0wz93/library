import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Alert
import {type, message, autoClose, autoCloseTime} from './components/molecules/alert/Alert_data';
import Alert from './components/molecules/alert/Alert';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Rediriger la racine vers /carousel */}
        {/*<Route path="/" element={<Navigate to="/carousel" replace />} /> */}

        <Route path="/" element={<Navigate to="/alert" replace />} />

        {/* Route pour l'alerte */}
        <Route path='/alert' element={<Alert type={type} message={message} autoClose={autoClose} autoCloseTime={autoCloseTime} />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
