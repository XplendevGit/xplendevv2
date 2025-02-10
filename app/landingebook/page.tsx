import React from 'react'
import Header from '../components/Header_3'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import LandingEbook from './LandingEbook'

type Props = {}

const page = (props: Props) => {
  return (
    <>

    <Header />

    <section className="" id="ebook">
           <LandingEbook />
    </section>

    <Footer />
    
    </>
  )
}

export default page