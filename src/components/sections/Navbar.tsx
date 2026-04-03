import { motion } from 'framer-motion';

export function Navbar() {
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
      <nav className="pointer-events-auto flex items-center justify-between px-6 py-3 bg-white/70 backdrop-blur-md rounded-2xl w-full max-w-5xl transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
        <div className="font-serif text-xl tracking-tight text-foreground cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          workspace.
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-foreground">
          <button onClick={() => scrollTo('work')} className="hover:opacity-60 transition-opacity">Work</button>
          <button onClick={() => scrollTo('about')} className="hover:opacity-60 transition-opacity">About</button>
          <button onClick={() => scrollTo('contact')} className="hover:opacity-60 transition-opacity">Contact</button>
        </div>
      </nav>
    </motion.header>
  );
}
