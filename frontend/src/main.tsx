import React from 'react'
import ReactDOM from 'react-dom/client'
import Accueil from './views/Accueil/Accueil'
import Header from './components/Header/header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import ArticleTest from './views/Article/ArticleTest'
import ContactPage from './views/Contact/Contact'
import Connexion from './views/Admin/Connexion'
import InterfaceAdminPage from './views/Admin/InterfaceAdminPage'
import NewsLetter from './views/Admin/NewsLetter'

import GlobalStyle from "./utils/style/GlobalStyle.tsx";
import InterfaceAdminArticle from './views/Admin/InterfaceAdminArticle.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
    <Router>
      <GlobalStyle/>
      
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/ArticleTest" element={<ArticleTest />}></Route>
        <Route path="/Contact" element={<ContactPage />}></Route>
        <Route path="/Admin" element={<Connexion/>}></Route>
        <Route path="/Admin/InterfaceAdmin" element={<InterfaceAdminPage/>}></Route>
        <Route path="/Admin/NewsLetter" element={<NewsLetter/>}></Route>
        <Route path='/Admin/InterfaceArticle' element={<InterfaceAdminArticle/>}></Route>
      </Routes>
    </Router>
    </ChakraProvider>
  </React.StrictMode>,
)
