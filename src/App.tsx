import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Pages
import Menu from './pages/Menu'
import Garden from './pages/Garden'
import About from './pages/About.jsx'
import Visit from './pages/Visit.jsx'
import Reserve from './pages/Reserve.jsx'

//Components
import NavMobile from './components/NavMobile'


function App() {


  return (
    <BrowserRouter >
      <NavMobile/>
      <Routes>
        <Route path='/' element={ <Menu/> } />
        <Route path='/garden' element={ <Garden/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/visit' element={ <Visit/> } />
        <Route path='/reserve' element={ <Reserve/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
