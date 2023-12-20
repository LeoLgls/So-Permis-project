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
import Connexion from './views/Admin/Connexion'
import InterfaceAdminPage from './views/Admin/InterfaceAdminPage'
import NewsLetter from './views/Admin/NewsLetter'
import InterfaceAdminArticle from './views/Admin/InterfaceAdminArticle.tsx'
import Histoire from './views/HistoireSoPermis/Histoire.tsx'
import Cookies from "./views/Cookies/Cookies.tsx";
import RGPD from "./views/RGPD/RGPD.tsx";
import MentionLegales from "./views/MentionLegales/MentionLegales.tsx";
import AdminHeader from "./components/Header/adminHeader.tsx";
import ModifArticleForm from "./views/FormsAdmin/ModifArticleForm.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
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
        <Route path="/"           element={<Accueil/>}></Route>
        <Route path="/permis"     element={<Permis/>}></Route>
        <Route path="/code"       element={<CodeRoute/>}></Route>
        <Route path={"/histoire"} element={<Histoire />}></Route>

        <Route path="/contact"    element={<Contact />}></Route>

        <Route path="/cookies"    element={<Cookies />}></Route>
        <Route path="/mentionsLegales"    element={<MentionLegales />}></Route>
        <Route path="/rgpd"    element={<RGPD />}></Route>


        <Route path={"/forfait/:forfaitParam"}       element={<ForfaitView />}></Route>
        <Route path={"/article/:articleNumberParam"} element={<ArticlePage />}></Route>


        <Route path="/admin" element={<Connexion/>}></Route>
        <Route path="/admin/interfaceAdmin" element={<InterfaceAdminPage/>}></Route>
        <Route path="/admin/newsletter" element={<NewsLetter/>}></Route>
        <Route path='/admin/interfaceArticle' element={<InterfaceAdminArticle/>}></Route>
        <Route path="/admin/interfaceArticle/modifier-forfait/:id"  element={<ModifArticleForm/>} ></Route>


        <Route path="*" element={<Error/>}></Route>
      </Routes>

      {window.location.pathname.startsWith('/admin') ? (
        ""
      ) : (
        <Footer />
      )}


    </Router>
  </React.StrictMode>,
)
