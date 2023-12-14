import React from 'react'
import ReactDOM from 'react-dom/client'
import Accueil from './views/Accueil/Accueil'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from "./utils/style/GlobalStyle.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)