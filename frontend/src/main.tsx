import React from 'react'
import ReactDOM from 'react-dom/client'
import Accueil from './views/Accueil/Accueil'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import ArticleTest from './views/Article/ArticleTest'
import ContactPage from './views/Contact/Contact'
import Connexion from './views/Admin/Connexion'
import InterfaceAdminPage from './views/Admin/InterfaceAdminPage'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/ArticleTest" element={<ArticleTest />}></Route>
        <Route path="/Contact" element={<ContactPage />}></Route>
        <Route path="/Admin" element={<Connexion/>}></Route>
        <Route path="/Admin/InterfaceAdmin" element={<InterfaceAdminPage/>}></Route>
      </Routes>
    </Router>
    </ChakraProvider>
  </React.StrictMode>,
)
