import React from 'react'
import ReactDOM from 'react-dom/client'
import Accueil from './views/Accueil/Accueil'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ArticleTest from './views/Article/ArticleTest'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/ArticleTest" element={<ArticleTest />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
