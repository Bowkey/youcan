
import FaqSection from "./mycomponents/FaqSection.jsx"
import Hero from "./mycomponents/Hero.jsx"
import NavBar from "./mycomponents/NavBar.jsx"
import Section from "./mycomponents/Section.jsx"
import SliderText from "./mycomponents/SliderText.jsx"
import Team from "./mycomponents/Team.jsx"
import Testimonials from "./mycomponents/Testimonials.jsx"
import Location from "./mycomponents/Location.jsx"
import Footer from "./mycomponents/Footer.jsx"

function App() {

  return (
    <>
    <NavBar />
    <div className="px-4">
      <main>
        <Hero />
      </main>
      <SliderText />
      <Section />
      <Testimonials />
      <Team />
      <FaqSection />
      <Location />
    </div>
      <Footer />
    </>
  )
}

export default App
