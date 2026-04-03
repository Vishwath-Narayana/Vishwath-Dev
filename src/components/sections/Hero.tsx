import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { Magnetic } from '@/components/ui/Magnetic';

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
            onClick={() => scrollTo('work')}
            className="bg-foreground text-background px-6 py-3 rounded-full font-medium active:scale-95 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
          >
            View Systems
          </button>
        </Magnetic>
        <Magnetic>
          <button 
            onClick={() => scrollTo('work')}
            className="bg-transparent text-foreground border border-border px-6 py-3 rounded-full font-medium hover:bg-muted/50 active:scale-[0.98] transition-all"
          >
            Explore Work
          </button>
        </Magnetic>
      </motion.div>
    </section>
  );
}
