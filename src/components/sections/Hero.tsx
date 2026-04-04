import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { Magnetic } from '@/components/ui/Magnetic';
import { useDevMode } from '@/contexts/DevModeContext';

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { isDevMode } = useDevMode();
  
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [terminalInput, setTerminalInput] = useState('');
  
  const handleTerminalSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = terminalInput.trim().toLowerCase();
      let response = '';
      if (cmd === 'help') response = 'cmds: help, about, projects, clear';
      else if (cmd === 'about') response = '> sys.load(profile) -> SUCCESS';
      else if (cmd === 'projects') response = '> sys.modules -> [ACTIVE]';
      else if (cmd === 'clear') { setTerminalHistory([]); setTerminalInput(''); return; }
      else if (cmd === '') return;
      else response = `Command not found: ${cmd}`;
      
      setTerminalHistory(prev => [...prev, `> ${cmd}`, response]);
      setTerminalInput('');
    }
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-start justify-center pt-32 pb-16 px-6 max-w-5xl mx-auto w-full relative">
      <AnimatePresence mode="wait">
        {!isDevMode ? (
          <motion.div
            key="visual"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <motion.div {...fadeUp(0)} className="inline-block px-3 py-1 mb-8 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-border">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 relative">
                  <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
                </span>
                Available for work
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-sans tracking-tight text-foreground max-w-4xl leading-[1.1] mb-6">
              <span className="inline-block transition-all duration-300 hover:tracking-wide hover:text-foreground/80 cursor-default">I build scalable systems.</span>
              <br/>
              <span className="inline-block transition-all duration-300 hover:tracking-[0.02em] hover:text-foreground/80 cursor-default">And design how they <span className="font-serif italic text-muted-foreground transition-colors duration-300 hover:text-foreground">feel</span>.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12">
              Fullstack developer & UI/UX designer focused on performance, architecture, and meaningful interaction.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex items-center gap-4 relative z-10">
              <Magnetic>
                <button 
                  onClick={() => scrollTo('about')}
                  className="bg-foreground text-background px-6 py-3 rounded-full font-medium active:scale-95 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                >
                  About me
                </button>
              </Magnetic>
              <Magnetic>
                <button 
                  onClick={() => scrollTo('work')}
                  className="bg-transparent text-foreground border border-border px-6 py-3 rounded-full font-medium hover:bg-muted/50 active:scale-[0.98] transition-all"
                >
                  Projects
                </button>
              </Magnetic>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="dev"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full flex justify-center mt-12"
          >
            <div className="font-mono text-dev-primary/90 text-sm md:text-base selection:bg-dev-primary/30 w-full max-w-3xl border border-dev-primary/30 bg-[#050505] p-6 rounded-lg shadow-dev-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
              
              <div className="relative z-10 space-y-1.5">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, ease: "linear" }} className="overflow-hidden whitespace-nowrap">{"> initializing vishwath.system..."}</motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>{"> mounting modules... OK"}</motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>{"> connecting to global_state... OK"}</motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }} className="text-dev-primary font-medium">{"> fullstack_engineer: active"}</motion.div>
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="pt-4 text-dev-soft">
                  {"System ready. Type 'help' to explore."}
                </motion.div>

                {terminalHistory.map((line, idx) => (
                   <div key={idx} className={line.startsWith('>') ? "text-dev-primary" : "text-dev-soft/70"}>
                     {line}
                   </div>
                ))}
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.7 }} className="flex items-center gap-2 pt-2">
                   <span className="text-dev-primary">{"> "}</span>
                   <input 
                     type="text" 
                     value={terminalInput}
                     onChange={(e) => setTerminalInput(e.target.value)}
                     onKeyDown={handleTerminalSubmit}
                     className="bg-transparent border-none outline-none text-dev-primary flex-1 caret-transparent"
                     autoFocus
                     spellCheck={false}
                   />
                   {!terminalInput && <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-4 bg-dev-primary" />}
                   {terminalInput && <div className="w-2 h-4 bg-dev-primary" style={{ marginLeft: `calc(${terminalInput.length}ch - 8px)` }}></div>}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
