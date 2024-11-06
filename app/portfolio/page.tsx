import React from 'react'
import Portfolio from './Portfolio'
import Header from '../components/Header_2'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Hero from './Hero'
import Recomendations from './Recomendations'
import Membership from '../components/Membership'

export default function Obras(){
  return (
    <>

    <Header />

    <section className="" id="home">
       <Portfolio />
      </section>

      <section className="" id="hero">
       <Hero />
      </section>

      <section className="" id="recomendations">
       <Recomendations />
      </section>

      <section className="" id="memberships">
        <Membership/>
      </section>
    
    <section className="" id="contact">
        <Contact/>
      </section>

    <Footer />
    
    </>
  )
}