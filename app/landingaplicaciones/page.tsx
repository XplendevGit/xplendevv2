import React from 'react'
import Header from './Header'
import Footer from '../components/Footer'
import AndroidAppLandingPage from './AndroidAppLandingPage'
import HeroSection from "./HeroSection"

type Props = {}

const page = (props: Props) => {
  return (
    <>

    <Header/>

    <section className="" id="portada">
       <AndroidAppLandingPage/>
    </section>

    <section className="" id="hero">
       <HeroSection/>
    </section>

    <Footer />

    </>
  )
}

export default page