import React from 'react'
import Header_2 from '../components/Header_2'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Membershipenterprise from './Membershipenterprise'

type Props = {}

const page = (props: Props) => {
  return (
    <>

    <Header_2/>

    <section className="" id="landing">
       <Membershipenterprise/>
      </section>

    <section className="" id="contact">
        <Contact/>
      </section>

    <Footer />

    </>
  )
}

export default page