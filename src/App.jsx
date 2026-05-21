import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Gallery from './components/Gallery'
import Section6 from './components/Section6'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-miyabi-night text-white relative">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Stats />
        <Skills />
        <Gallery />
        <Section6 />
      </main>
      <Footer />
    </div>
  )
}
