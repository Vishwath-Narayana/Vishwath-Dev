import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-start justify-center pt-32 pb-16 px-6 max-w-5xl mx-auto w-full relative">
      <motion.div {...fadeUp(0)} className="inline-block px-3 py-1 mb-8 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-border">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 relative">
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
          </span>
          Available for work
        </span>
      </motion.div>

      <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-sans tracking-tight text-foreground max-w-4xl leading-[1.1] mb-6">
        I design and build <span className="font-serif italic text-muted-foreground">thoughtful</span> digital experiences.
      </motion.h1>

      <motion.p {...fadeUp(0.2)} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12">
        Focused on clarity, performance, and meaningful interaction.
      </motion.p>

      <motion.div {...fadeUp(0.3)} className="flex items-center gap-4">
        <button 
          onClick={() => scrollTo('work')}
          className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
        >
          View Work
        </button>
        <button 
          onClick={() => scrollTo('contact')}
          className="bg-transparent text-foreground border border-border px-6 py-3 rounded-full font-medium hover:bg-muted/50 hover:scale-102 active:scale-[0.98] transition-all"
        >
          Contact Me
        </button>
      </motion.div>
    </section>
  );
}
