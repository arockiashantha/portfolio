import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import CoreSkills from './components/CoreSkills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import Loader from './components/Loader.jsx'
import NotFound from './components/NotFound.jsx'
import useTheme from './hooks/useTheme.js'

function Home({ theme, toggleTheme }) {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <CoreSkills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])
  if (loading) return <Loader />
  return (
    <Routes>
      <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
