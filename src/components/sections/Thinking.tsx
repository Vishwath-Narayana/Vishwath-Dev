import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { useDevMode } from '@/contexts/DevModeContext';

const THOUGHTS = [
  {
    title: "Designing for invisible intelligence",
    desc: "How AI interactions should integrate seamlessly into workflows without feeling bolted-on."
  },
  {
    title: "Reducing friction to essentials",
    desc: "Applying systemic constraint to strip away the non-essential layers of the UI."
  },
  {
    title: "Performance as UX",
    desc: "Why sub-100ms response times fundamentally change how users perceive interaction."
  }
];

export function Thinking() {
  const { isDevMode } = useDevMode();

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto w-full relative">
      <motion.div {...fadeUp(0)} className={`mb-10 text-center ${isDevMode ? 'text-left md:text-center' : ''}`}>
        <h2 className={`transition-all duration-300 inline-block ${isDevMode ? 'font-mono text-green-500 text-xl tracking-tight' : 'text-xl font-medium text-foreground hover:tracking-wide'}`}>
          {isDevMode ? '> tail -f logs/notes.log' : 'What I think about'}
        </h2>
        <div className={`mx-auto mt-4 transition-all duration-300 ${isDevMode ? 'w-full h-px bg-green-900/30' : 'w-10 h-[1px] bg-border'}`}></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {THOUGHTS.map((thought, i) => (
          <motion.div 
            key={i}
            {...fadeUp(i * 0.1)}
            className={`group relative p-6 rounded-2xl border transition-colors duration-300 opacity-90 hover:opacity-100 overflow-hidden ${isDevMode ? 'bg-[#050505] border-green-900/30' : 'border-border bg-card'}`}
          >
            {!isDevMode && <div className="absolute inset-0 pointer-events-none glow-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]" />}
            <div className="relative z-10">
              <h3 className={`mb-2 transition-all duration-300 inline-block ${isDevMode ? 'font-mono text-green-400 text-sm' : 'font-serif text-lg text-foreground group-hover:text-primary group-hover:tracking-wide'}`}>
                {isDevMode ? `[note] ${thought.title.toLowerCase().replace(/ /g, '_')}` : thought.title}
              </h3>
              <p className={`transition-colors ${isDevMode ? 'font-mono text-green-500/70 text-xs pl-2 border-l border-green-900/40' : 'text-sm text-muted-foreground group-hover:text-foreground'}`}>
                {isDevMode ? `>> ${thought.desc}` : thought.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
