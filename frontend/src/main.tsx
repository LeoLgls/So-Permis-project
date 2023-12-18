import React from 'react'
import ReactDOM from 'react-dom/client'
import Accueil from './views/Accueil/Accueil'
import Permis from './views/Permis/Permis'
import Header from './components/Header/header'
import ScrollToTop from './utils/hooks/ScrollToTop'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import GlobalStyle from "./utils/style/GlobalStyle.tsx";
import CodeRoute from "./views/CodeRoute/CodeRoute.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop/>
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route path="/"       element={<Accueil/>}></Route>
        <Route path="/permis" element={<Permis/>}></Route>
        <Route path="/code"   element={<CodeRoute/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
