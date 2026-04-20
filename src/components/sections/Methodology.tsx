import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

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
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto w-full relative z-10 flex flex-col gap-16 md:gap-24 bg-background">
      {/* PRINCIPLES */}
      <motion.div {...fadeUp(0)} className="w-full">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 inline-block border-b-2 border-[#0F6E56] pb-2">Principles</h2>
        </div>
        <div className="flex flex-col gap-4">
          {PRINCIPLES.map((principle, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12 p-6 rounded-xl hover:bg-[#E1F5EE]/30 transition-colors group">
              <span className="shrink-0 md:w-64 font-bold text-lg text-foreground group-hover:text-[#0F6E56] transition-colors uppercase tracking-tight">
                {principle.title}
              </span>
              <span className="text-lg leading-relaxed text-muted-foreground flex-1">
                {principle.description}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* THOUGHTS */}
      <motion.div {...fadeUp(0.1)} className="w-full">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 inline-block border-b-2 border-[#0F6E56] pb-2">Thoughts</h2>
        </div>
        <div className="flex flex-col gap-4">
          {THOUGHTS.map((thought, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12 p-6 rounded-xl hover:bg-[#E1F5EE]/30 transition-colors group">
              <span className="shrink-0 md:w-64 font-bold text-lg text-foreground group-hover:text-[#0F6E56] transition-colors uppercase tracking-tight">
                {thought.title}
              </span>
              <span className="text-lg leading-relaxed text-muted-foreground flex-1">
                {thought.description}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
