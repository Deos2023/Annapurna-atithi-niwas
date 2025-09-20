import React from 'react'
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import HomePage from './component/HomePage/Home'
import Footer from './component/footer/Footer'
import GalleryPage from './component/gallery/Gallery'
import LocationPage from './component/location/Location'
import FacilitiesPage from './component/facilities/Facilities'
import ScrollToTop from './component/ScrollToTop'
import ContactPage from './component/contact/Contact'
import WhatsAppFloat from './component/WhatsappFloat'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/rooms' element={<GalleryPage />} />
          <Route path='/location' element={<LocationPage />} />
          <Route path='/facilities' element={<FacilitiesPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <WhatsAppFloat/>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
