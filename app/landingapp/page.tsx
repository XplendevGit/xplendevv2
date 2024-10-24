import Landingapp from '../landingapp/landingapp'
import Header_2 from '../components/Header_2'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import React from 'react'

export default function LandingAppHome(){
  return (
    <>

    <Header_2/>

    <section className="" id="landing">
       <Landingapp/>
      </section>

    <section className="" id="contact">
        <Contact/>
      </section>

    <Footer />

    </>
    
  )
}