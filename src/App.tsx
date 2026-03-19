import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanguageProvider from './components/LanguageContext.js';
import ScrollToTop from './components/ScrollToTop.js'
import { CSSTransition, TransitionGroup } from "react-transition-group"


// Pages
import Menu from './pages/Menu.js'
import Garden from './pages/Garden.js'
import About from './pages/About.js'
import Visit from './pages/Visit.js'
import Reserve from './pages/Reserve.js'

//Components
import NavMobile from './components/NavMobile.js'
import NavWeb from './components/NavWeb.js'
import Footer from './components/Footer.js'


function App() {

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <LanguageProvider>
          <BrowserRouter>
            <NavMobile/>
            <NavWeb/>
            <ScrollToTop />
            <div className="page">
              <Routes>
                <Route path='/' element={ <Menu/> } />
                <Route path='/garden' element={ <Garden/> } />
                <Route path='/about' element={ <About/> } />
                <Route path='/visit' element={ <Visit/> } />
                <Route path='/reserve' element={ <Reserve/> } />
              </Routes>
            </div>
          </BrowserRouter>
          <Footer/>
        </LanguageProvider>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default App
