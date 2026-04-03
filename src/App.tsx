import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Methodology } from './components/sections/Methodology';
import { Work } from './components/sections/Work';
import { About } from './components/sections/About';
import { Thinking } from './components/sections/Thinking';
import { Contact } from './components/sections/Contact';
import { DevModeProvider } from './contexts/DevModeContext';
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
    <DevModeProvider>
      <div className="min-h-screen bg-background relative selection:bg-muted-foreground/20">
        {/* Subtle background grain or gradient (optional touch) */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        
        <Navbar />
        
        <main className="flex flex-col items-center justify-center w-full">
          <Hero />
          <Methodology />
          <Work />
          <About />
          <Thinking />
          <Contact />
        </main>
      </div>
    </DevModeProvider>
  );
}

export default App;
