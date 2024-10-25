import React from 'react'
import Header_2 from '../components/Header_2'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Membershippremium from './Membershippremium'

type Props = {}

const page = (props: Props) => {
  return (
    <>

    <Header_2/>

    <section className="" id="landing">
       <Membershippremium/>
      </section>

    <section className="" id="contact">
        <Contact/>
      </section>

    <Footer />

    </>
  )
}

export default page