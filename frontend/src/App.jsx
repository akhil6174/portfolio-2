import LoadingScreen from './components/LoadingScreen.jsx'
import ScrollProgressBar from './components/ScrollProgressBar.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import BackToTop from './components/BackToTop.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Research from './components/Research.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import ResumeSection from './components/ResumeSection.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <LoadingScreen />
      <ScrollProgressBar />
      <CursorGlow />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Research />
        <Projects />
        <Achievements />
        <ResumeSection />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
