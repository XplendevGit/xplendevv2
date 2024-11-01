import React from 'react'
import Header_2 from '../components/Header_2'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Acercade from './Acercade'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <section className="" id="">
      <Header_2 />
    </section>
    
    <section className="" id="inicio">
      <Acercade />
    </section>

    <section className="" id="contact">
      <Contact/>
    </section>

    <section className="">
      <Footer/>
    </section>
    </>
  )
}

export default page