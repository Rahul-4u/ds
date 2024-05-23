import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Demo from './pages/demo/Demo'
import Portfolio from './pages/potporlio/Portfolio'
import Contact from './pages/contact/Contact'
import Header from './pages/Header'


export default function App() {
  return (
    <div >
     <BrowserRouter>
      <Header/>
       <Routes>
        <Route index element ={<Home/>} />
        <Route path='about' element ={<About/>} />
        <Route path='demo' element ={<Demo/>} />
        <Route path='portfolio' element ={<Portfolio/>} />
        <Route path='contact' element ={<Contact/>} />
       </Routes>
     </BrowserRouter>
      
    </div>
  )
}
