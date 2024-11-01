import React from 'react'
import Header_3 from '../components/Header_3'
import Footer from '../components/Footer'
import Membershipenterprise from './Membershipenterprise'

type Props = {}

const page = (props: Props) => {
  return (
    <>

    <Header_3/>

    <section className="" id="landing">
       <Membershipenterprise/>
      </section>

    <Footer />

    </>
  )
}

export default page