import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
   <div className='w-full overflow-hidden'>
   <Header/>
   <About/>
   <Projects/>
   <Testimonial/>
   <Contact/>
   <Footer/>
     </div>
    </>
  )
}

export default App
