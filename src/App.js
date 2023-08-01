import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './mycomponent/Home/Home';
import Navbar from './mycomponent/Header/Navbar';
import About from './mycomponent/About/About';
import Skill from './mycomponent/Skill/Skill';
import Work from './mycomponent/Work/Work';
import Contact from './mycomponent/Contact/Contact';
import Projects from './mycomponent/Projects/Projects';

const App = () => {
  return (
   
    
    <BrowserRouter>
      
      
    <Routes>
    <Route exact path="/" element={<>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Work/>
      <Contact/>

    </>} />
      <Route exact path="/projects" element={<Projects/>} />
    </Routes>
    </BrowserRouter>
   
    
  )
}

export default App