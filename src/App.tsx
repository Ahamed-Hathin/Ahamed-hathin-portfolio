import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ParticlesBackground } from './components/ParticlesBackground';
import { IntroScreen } from './components/IntroScreen';
import { useState } from 'react';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-[#11111b] text-white relative overflow-x-hidden">
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
      <CustomCursor />
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
