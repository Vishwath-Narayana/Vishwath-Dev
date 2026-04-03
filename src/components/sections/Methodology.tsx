import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { useDevMode } from '@/contexts/DevModeContext';

const PRINCIPLES = [
  {
    title: "clarity > cleverness",
    description: "Systems should communicate purpose instantly. Interfaces are the visual map to underlying architectures."
  },
  {
    title: "performance is a feature",
    description: "Speed is foundational. Optimized queries and minimal bundles are just as important as layout."
  },
  {
    title: "systems must scale cleanly",
    description: "As complexity grows, the interface must abstract it gracefully without breaking usability."
  }
];

const THOUGHTS = [
  {
    title: "designing for invisible intelligence",
    description: "AI interactions should integrate seamlessly without feeling bolted-on."
  },
  {
    title: "reducing friction to essentials",
    description: "Applying systemic constraint to strip away the non-essential layers of the UI."
  }
];

export function Methodology() {
  const { isDevMode } = useDevMode();

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto w-full relative z-10 flex flex-col gap-16 md:gap-24">
      {/* PRINCIPLES */}
      <motion.div {...fadeUp(0)} className="w-full">
        {isDevMode ? (
          <h3 className="text-dev-soft font-mono text-sm border-b border-dev-primary/20 pb-2 mb-6 uppercase tracking-wider">{"> system.principles"}</h3>
        ) : (
          <h3 className="text-2xl font-serif text-foreground mb-6">Principles</h3>
        )}
        <div className={`flex flex-col gap-6 ${isDevMode ? 'font-mono text-sm bg-[#050505] border border-dev-primary/30 p-8 rounded-xl shadow-[inset_0_0_20px_rgba(0,255,159,0.03)]' : ''}`}>
          {PRINCIPLES.map((principle, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
              <span className={`shrink-0 md:w-64 font-medium ${isDevMode ? 'text-dev-primary/90' : 'text-foreground'}`}>
                {isDevMode ? `→ ${principle.title}` : principle.title}
              </span>
              <span className={`${isDevMode ? 'text-dev-primary/60' : 'text-muted-foreground'}`}>
                {principle.description}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* THOUGHTS */}
      <motion.div {...fadeUp(0.1)} className="w-full">
        {isDevMode ? (
          <h3 className="text-dev-soft font-mono text-sm border-b border-dev-primary/20 pb-2 mb-6 uppercase tracking-wider">{"> system.thoughts"}</h3>
        ) : (
          <h3 className="text-2xl font-serif text-foreground mb-6">Thoughts</h3>
        )}
        <div className={`flex flex-col gap-6 ${isDevMode ? 'font-mono text-sm bg-[#050505] border border-dev-primary/30 p-8 rounded-xl shadow-[inset_0_0_20px_rgba(0,255,159,0.03)]' : ''}`}>
          {THOUGHTS.map((thought, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
              <span className={`shrink-0 md:w-64 font-medium ${isDevMode ? 'text-dev-primary/90' : 'text-foreground'}`}>
                {isDevMode ? `→ ${thought.title}` : thought.title}
              </span>
              <span className={`${isDevMode ? 'text-dev-primary/60' : 'text-muted-foreground'}`}>
                {thought.description}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
