import React from 'react'
import { Whatsapp } from './components/btnWhatsapp/Whatsapp'
import { Navbar } from './components/navbar/Navbar'
import { Header } from './components/header/Header'
import { Services } from './components/services/Services'
import { Testimonials } from './components/testimonials/Testimonials'
import { Footer } from './components/footer/Footer'
import { Copyright } from './components/copyright/Copyright'

export const Landing = () => {
  return (
    <>
      <Whatsapp/>
      <Navbar/>
      <Header/>
      <Services/>
      <Testimonials/>
      <Footer/>
      <Copyright/>
    </>
  )
}
