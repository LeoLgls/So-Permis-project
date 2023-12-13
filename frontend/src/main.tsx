import React from 'react'
import ReactDOM from 'react-dom/client'
import Accueil from './views/Accueil/Accueil'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
