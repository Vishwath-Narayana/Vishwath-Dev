import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Methodology } from './components/sections/Methodology';
import { Work } from './components/sections/Work';
import { SystemData } from './components/sections/SystemData';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { CustomCursor } from './components/ui/CustomCursor';
import { useDevMode } from './contexts/DevModeContext';
import { useEffect } from 'react';

function App() {
  const { isDevMode } = useDevMode();
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`min-h-screen relative selection:bg-muted-foreground/20 transition-colors duration-500 overflow-x-hidden ${isDevMode ? 'bg-[#050505] text-[#00ff9f]' : 'bg-background text-foreground'}`}>
      <CustomCursor />
      
      <div className={`fixed inset-0 pointer-events-none opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] transition-opacity duration-500 z-0 ${isDevMode ? 'opacity-0' : 'opacity-[0.015]'}`}></div>
      <div className={`fixed inset-0 bg-[linear-gradient(to_right,rgba(0,255,159,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,159,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none transition-opacity duration-500 blur-[0.3px] z-0 ${isDevMode ? 'opacity-100' : 'opacity-0'}`}></div>
      
      <div className="relative z-10 w-full flex flex-col items-center">
        <Navbar />
        
        <main className="flex flex-col items-center justify-center w-full">
          <Hero />
          <About />
          <Work />
          <SystemData />
          <Methodology />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
