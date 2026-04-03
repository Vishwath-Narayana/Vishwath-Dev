import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

const PRINCIPLES = [
  {
    title: "I design for clarity before complexity",
    description: "Systems should communicate purpose instantly. UI isn't just aesthetic; it's the visual interface to the underlying architecture."
  },
  {
    title: "Performance is part of user experience",
    description: "Speed is a foundational feature. Optimized queries, caching layers, and minimal bundles are just as important as the layout."
  },
  {
    title: "Systems should scale without breaking usability",
    description: "As complexity grows, the interface must abstract it gracefully. Good engineering prevents the UI from becoming unmanageable."
  }
];

export function Methodology() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto w-full relative">
      <motion.div {...fadeUp(0)} className="mb-12 relative z-10">
        <h2 className="text-3xl font-serif text-foreground mb-4 w-fit hover:tracking-wide transition-all duration-300">How I build systems</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {PRINCIPLES.map((principle, i) => (
          <motion.div 
            key={i}
            {...fadeUp(i * 0.1)}
            className="group relative p-8 rounded-2xl border border-border transition-colors duration-300 opacity-85 hover:opacity-100 overflow-hidden bg-card"
          >
            <div className="absolute inset-0 pointer-events-none glow-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]" />
            <div className="relative z-10">
              <h3 className="font-medium text-lg leading-snug text-foreground mb-4 transition-colors group-hover:text-primary">{principle.title}</h3>
              <p className="text-sm text-muted-foreground transition-colors group-hover:text-foreground leading-relaxed">{principle.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
