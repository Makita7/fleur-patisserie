import './App.css'
import { useLocation, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.js'
import { useLanguage } from './components/LanguageContext.js';


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

  const { pathname } = useLocation();
  const { lang } = useLanguage();

  return (
    <>
      <NavMobile/>
      <NavWeb/>

      <ScrollToTop />

      <div key={ `${ pathname } - ${ lang }` } className='fade-in-out-animation'>
        <Routes>
          <Route path='/' element={ <Menu/> } />
          <Route path='/garden' element={ <Garden/> } />
          <Route path='/about' element={ <About/> } />
          <Route path='/visit' element={ <Visit/> } />
          <Route path='/reserve' element={ <Reserve/> } />
        </Routes>
      </div>

    <Footer/>
    </>
  )
}

export default App
