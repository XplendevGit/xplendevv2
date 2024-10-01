import React from 'react'
import Home from './Home'
import Header from '../components/Header_2'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function Obras(){
  return (
    <>

    <Header />

    <section className="" id="home">
       <Home />
      </section>
    
    <section className="" id="contact">
        <Contact/>
      </section>

    <Footer />
    
    </>
  )
}