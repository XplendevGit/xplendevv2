import React from 'react'
import Header_3 from '../components/Header_3'
import Footer from '../components/Footer'
import Membershipbasic from './Membershipbasic'

type Props = {}

const page = (props: Props) => {
  return (
    <>

    <Header_3/>

    <section className="" id="landing">
       <Membershipbasic/>
      </section>

    <Footer />

    </>
  )
}

export default page