
import Inicio from './components/Inicio'
import Header from './components/Header'
import HeroChatbot from './components/Hero/HeroChatbot'
import Membership from './components/Membership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PromocionEbook from './components/PromocionEbook'
import OurServices from './components/OurServices'
import HeroSection from './components/HeroSection'

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
        <HeroSection/>
      </section>

      <section className="" id="app">
        <HeroChatbot/>
      </section>

      <section className="" id="memberships">
        <Membership/>
      </section>

      <section className="" id="ebook">
        <PromocionEbook />
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
