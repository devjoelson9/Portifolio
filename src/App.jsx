import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import TechnologiesAndSkills from './components/sections/TechnologiesAndSkills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Particles from './components/ui/Particles';
import BackgroundGradient from './components/ui/BackgroundGradient';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors relative">
      <Particles />
      <BackgroundGradient />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <TechnologiesAndSkills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
