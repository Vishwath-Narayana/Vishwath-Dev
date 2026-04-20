import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Methodology } from './components/sections/Methodology';
import { Work } from './components/sections/Work';
import { Capabilities, TechStack, EducationLanguages } from './components/sections/SystemData';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { CustomCursor } from './components/ui/CustomCursor';
import { FloatingContact } from './components/ui/FloatingContact';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-muted-foreground/20 transition-colors duration-500 overflow-x-hidden bg-background text-foreground">
      <CustomCursor />
      <FloatingContact />
      
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] transition-opacity duration-500 z-0"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center">
        <Navbar />
        
        <main className="flex flex-col items-center justify-center w-full">
          <Hero />
          <About />
          <Work />
          <Capabilities />
          <TechStack />
          <EducationLanguages />
          <Methodology />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
