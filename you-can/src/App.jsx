import FaqSection from "./components/FaqSection.jsx"
import Hero from "./components/Hero.jsx"
import NavBar from "./components/NavBar.jsx"
import Section from "./components/Section.jsx"
import SliderText from "./components/SliderText.jsx"
import Team from "./components/Team.jsx"
import Testimonials from "./components/Testimonials.jsx"


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
    </div>
    </>
  )
}

export default App
