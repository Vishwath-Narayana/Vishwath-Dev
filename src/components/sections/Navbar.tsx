import { motion } from 'framer-motion';
import { useDevMode } from '@/contexts/DevModeContext';

export function Navbar() {
  const { isDevMode, toggleDevMode } = useDevMode();
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <nav className={`pointer-events-auto flex items-center justify-between transition-all duration-300 w-full ${isDevMode ? 'px-6 py-2 bg-dev-dim/90 backdrop-blur-md border-b border-dev-primary/20 shadow-none' : 'max-w-5xl px-6 py-3 bg-white/70 backdrop-blur-md rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.02)]'}`}>
        <div className={`cursor-pointer ${isDevMode ? 'font-mono text-dev-primary tracking-tight text-xs md:text-sm' : 'font-serif text-xl tracking-tight text-foreground'}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {isDevMode ? 'vishwath.sys [mode: dev]' : 'vishwath.'}
        </div>
        <div className={`flex items-center gap-2 md:gap-6 ${isDevMode ? 'text-xs font-mono text-dev-soft' : 'text-sm font-medium text-foreground'}`}>
          <div className={`flex items-center gap-1 p-0.5 md:p-1 rounded-full border transition-colors ${isDevMode ? 'bg-[#000000] border-dev-primary/30 mr-1 md:mr-2' : 'bg-muted/50 border-border mr-1 md:mr-2'}`}>
            <button 
              onClick={() => isDevMode && toggleDevMode()}
              className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full transition-all text-[10px] md:text-xs font-sans ${!isDevMode ? 'bg-background shadow-sm text-foreground' : 'text-dev-soft/50 hover:text-dev-primary'}`}
            >
              Visual
            </button>
            <button 
              onClick={() => !isDevMode && toggleDevMode()}
              className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full transition-all text-[10px] md:text-xs font-mono font-medium tracking-tight ${isDevMode ? 'bg-dev-dim text-dev-primary shadow-[0_0_10px_rgba(0,255,159,0.2)]' : 'text-muted-foreground hover:text-foreground'}`}
            >
              SYS.DEV
            </button>
          </div>
          <button onClick={() => scrollTo('work')} className="hidden sm:block hover:opacity-60 transition-opacity">Projects</button>
          <button onClick={() => scrollTo('about')} className="hidden sm:block hover:opacity-60 transition-opacity">About</button>
          <button onClick={() => scrollTo('contact')} className="hidden sm:block hover:opacity-60 transition-opacity">Contact</button>
        </div>
      </nav>
    </motion.header>
  );
}
