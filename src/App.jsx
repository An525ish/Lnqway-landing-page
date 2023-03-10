import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrolltoTop from './components/ScrolltoTop';
import './index.css'
// import Modes from './components/modes'


const App = () => {
  return (
    <div>
      {/* <Modes/> */}
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <ScrolltoTop/>
    </div>
  )
}

export default App