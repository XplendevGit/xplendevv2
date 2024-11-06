
import Inicio from './components/Inicio'
import Header from './components/Header'
import Hero from './components/Hero'
import Design from './components/Design'
import Membership from './components/Membership'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
      <>
      <section className="" id="">
        <Header />
      </section>
      
      <section className="" id="inicio">
        <Inicio />
      </section>
      
      <section className="" id="hero">
        <Hero/>
      </section>

      <section className="" id="app">
        <Design/>
      </section>

      <section className="" id="memberships">
        <Membership/>
      </section>

      <section className="" id="contact">
        <Contact/>
      </section>

      <section className="footer">
        <Footer/>
      </section>
      </>

  )
}
