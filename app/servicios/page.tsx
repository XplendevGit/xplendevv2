import React from 'react'
import Header from '../components/Header_2'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Servicios from './Servicios'

type Props = {}

const page = (props: Props) => {
  return (
    <>

    <Header />

    <section className="" id="home">
       <Servicios />
      </section>
    
    <section className="" id="contact">
        <Contact/>
      </section>

    <Footer />
    
    </>
  )
}

export default page