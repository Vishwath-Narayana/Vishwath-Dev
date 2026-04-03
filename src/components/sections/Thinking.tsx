import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

const THOUGHTS = [
  {
    title: "AI & future",
    desc: "How invisible intelligence will shape our daily tools."
  },
  {
    title: "Design clarity",
    desc: "Removing friction until only the essential remains."
  },
  {
    title: "Building fast systems",
    desc: "Performance as a foundational design feature."
  }
];

export function Thinking() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div {...fadeUp(0)} className="mb-10 text-center">
        <h2 className="text-xl font-medium text-foreground hover:tracking-wide transition-all duration-300 inline-block">What I think about</h2>
        <div className="w-10 h-[1px] bg-border mx-auto mt-4"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {THOUGHTS.map((thought, i) => (
          <motion.div 
            key={i}
            {...fadeUp(i * 0.1)}
            className="group relative p-6 rounded-2xl border border-border transition-colors duration-300 opacity-90 hover:opacity-100 overflow-hidden bg-card"
          >
            <div className="absolute inset-0 pointer-events-none glow-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]" />
            <div className="relative z-10">
              <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-all duration-300 inline-block group-hover:tracking-wide">{thought.title}</h3>
              <p className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">{thought.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
