import React from 'react'
import ReactDOM from 'react-dom/client'
import Accueil from './views/Accueil/Accueil'
import Header from './components/Header/header'
import Permis from './views/Permis/Permis'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import ArticleTest from './views/Article/ArticleTest'
import ContactPage from './views/Contact/Contact'
import Connexion from './views/Admin/Connexion'
import InterfaceAdminPage from './views/Admin/InterfaceAdminPage'
import NewsLetter from './views/Admin/NewsLetter'

import InterfaceAdminArticle from './views/Admin/InterfaceAdminArticle.tsx'


import Footer from './components/Footer/footer'
import ScrollToTop from './utils/hooks/ScrollToTop'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from "./utils/style/GlobalStyle.tsx";
import CodeRoute from "./views/CodeRoute/CodeRoute.tsx";
import Error from "./views/Error/Error.tsx";
import ArticlePage from "./views/Article/Article.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
    <Router>
      <ScrollToTop/>
      <GlobalStyle/>
      <Header />
      <Routes>

        <Route path="/" element={<Accueil />}></Route>
        <Route path="/articleTest" element={<ArticleTest />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/admin" element={<Connexion/>}></Route>
        <Route path="/admin/interfaceAdmin" element={<InterfaceAdminPage/>}></Route>
        <Route path="/admin/newsletter" element={<NewsLetter/>}></Route>
        <Route path='/admin/interfaceArticle' element={<InterfaceAdminArticle/>}></Route>

        <Route path="/"       element={<Accueil/>}></Route>
        <Route path="/permis" element={<Permis/>}></Route>
        <Route path="/code"   element={<CodeRoute/>}></Route>
        <Route path={"/article/:articleNumberParam"} element={<ArticlePage />}></Route>
        <Route path="*"       element={<Error/>}></Route>

      </Routes>
      <Footer />

    </Router>
    </ChakraProvider>
  </React.StrictMode>,
)