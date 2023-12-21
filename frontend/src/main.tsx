import React from 'react'
import ReactDOM from 'react-dom/client'
import Accueil from './views/Accueil/Accueil'
import Permis from './views/Permis/Permis'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import ScrollToTop from './utils/hooks/ScrollToTop'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from "./utils/style/GlobalStyle.tsx";
import CodeRoute from "./views/CodeRoute/CodeRoute.tsx";
import Error from "./views/Error/Error.tsx";
import ArticlePage from "./views/Article/Article.tsx";
import ForfaitView from "./views/Forfait/Forfait.tsx";
import Contact from './views/Contact/Contact'

import Connexion            from './views/Admin/Connexion'

import NewsLetter           from './views/Admin/NewsLetter'

import ForfaitAdmin         from './views/Admin/ForfaitInterface.tsx'
import ModifForfaitForm     from './views/FormsAdmin/ModifForfaitForm.tsx';

import ArticleAdmin         from './views/Admin/ArticleInterface.tsx'
import ModifArticleForm     from './views/FormsAdmin/ModifArticleForm.tsx'


import Histoire from './views/HistoireSoPermis/Histoire.tsx'
import Cookies from "./views/Cookies/Cookies.tsx";
import RGPD from "./views/RGPD/RGPD.tsx";
import MentionLegales from "./views/MentionLegales/MentionLegales.tsx";
import AdminHeader from "./components/Header/adminHeader.tsx";
import AnimatedPage from "./components/Animation/AnimPage.tsx";
import { AuthProvider, useAuth } from './utils/hooks/AuthContext.tsx'




function App() {

  const { user } = useAuth();

  return(
  <React.StrictMode>
    <Router>
      <ScrollToTop/>
      <GlobalStyle/>
      {window.location.pathname.startsWith('/admin') ? (
        <AdminHeader />
      ) : (
        <Header />
      )}
      <Routes>
        <Route path="/"           element={<AnimatedPage><Accueil/></AnimatedPage>}></Route>
        <Route path="/permis"     element={<AnimatedPage><Permis/></AnimatedPage>}></Route>
        <Route path="/code"       element={<AnimatedPage><CodeRoute/></AnimatedPage>}></Route>
        <Route path={"/histoire"} element={<AnimatedPage><Histoire /></AnimatedPage>}></Route>

        <Route path="/contact"    element={<AnimatedPage><Contact /></AnimatedPage>}></Route>

        <Route path="/cookies"    element={<AnimatedPage><Cookies /></AnimatedPage>}></Route>
        <Route path="/mentionsLegales"    element={<AnimatedPage><MentionLegales /></AnimatedPage>}></Route>
        <Route path="/rgpd"    element={<AnimatedPage><RGPD /></AnimatedPage>}></Route>


        <Route path={"/forfait/:forfaitParam"}       element={<AnimatedPage><ForfaitView /></AnimatedPage>}></Route>
        <Route path={"/article/:articleNumberParam"} element={<AnimatedPage><ArticlePage /></AnimatedPage>}></Route>


        {user ? (
          <>
          <Route path="/admin/newsletter" element={<NewsLetter/>}></Route>

          <Route path='/admin/forfait' element={<ForfaitAdmin/>}></Route>
          <Route path="/admin/forfait/modifier-forfait/:id"  element={<ModifForfaitForm/>} ></Route>

          <Route path="/admin/article" element={<ArticleAdmin/>}></Route>
          <Route path="/admin/article/modifier-article/:id" element={<ModifArticleForm/>}></Route>
        </>
        ):(
          <Route path="/admin" element={<Connexion/>}></Route>
        )}





        <Route path="*" element={<Error/>}></Route>
      </Routes>

    </Router>
  </React.StrictMode>

)}

ReactDOM.createRoot(document.getElementById('root')!).render(<AuthProvider><App/></AuthProvider>);


