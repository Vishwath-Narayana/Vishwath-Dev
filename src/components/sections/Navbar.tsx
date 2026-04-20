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
      <nav className="pointer-events-auto flex items-center justify-between transition-all duration-300 w-full max-w-6xl px-8 py-4 bg-white/80 backdrop-blur-xl rounded-full border border-border/50 shadow-soft">
        <div className="cursor-pointer font-sans font-bold text-2xl tracking-tighter text-foreground group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="flex items-center gap-1 group-hover:text-brand transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-brand"></span>
            vishwath.
          </span>
        </div>
        <div className="flex items-center gap-8 text-sm font-bold text-foreground">
          <button onClick={() => scrollTo('about')} className="hidden sm:block hover:text-brand transition-colors">About</button>
          <button onClick={() => scrollTo('work')} className="hidden sm:block hover:text-brand transition-colors">Projects</button>
          <button onClick={() => scrollTo('contact')} className="hidden sm:block hover:text-brand transition-colors">Contact</button>
        </div>
      </nav>
    </motion.header>
  );
}
