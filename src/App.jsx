import { useState } from 'react'
import './App.css'
import  Header  from './components/header'
import { Hero } from './pages/hero'
import AboutUs from './pages/aboutMe'
import { Why } from './pages/why'
import { PageStat } from './pages/pageStat'
import { Menu } from './pages/menu'
import { Testimonial } from './pages/testimonial'
import { Event } from './pages/event'
import { Chefs } from './pages/chefs'
import { Book } from './pages/book'
import Gallery from './pages/gallery'
import { Contact } from './pages/contact'
import { Footer } from './components/footer'
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import SmoothScrollButton from './components/smoothScrollButton'


function App() {
  

  return (
    <div>
    <SmoothScrollButton/>   
     <div className="  w-full">
   <Header/>
    <Hero/>
    <AboutUs />
    <Why/>
    <PageStat/>
    <Menu/>
    <Testimonial/>
    <Event/>
    <Chefs/>
    <Book/> 
    <Gallery/>
    <Contact/>
    <Footer/>
  </div>
  </div>
  )
}

export default App
