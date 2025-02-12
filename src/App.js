import React, { useEffect } from 'react'
import Header from './componets/Header'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './componets/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import AOS from 'aos'
import Footer from './componets/Footer.jsx'


export default function App() {

 

  return (
    <div>
       <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
       </BrowserRouter>
    </div>
  )
}
