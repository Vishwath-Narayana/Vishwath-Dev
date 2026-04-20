import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { Magnetic } from '@/components/ui/Magnetic';
import heroImg from '@/assets/hero.png';

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-16 px-6 max-w-6xl mx-auto w-full relative">
      <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left">
          <motion.div {...fadeUp(0)} className="inline-block px-3 py-1 mb-8 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-border">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand relative">
                <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-75"></span>
              </span>
              Available for work
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-foreground max-w-4xl leading-[1.1] mb-6">
            <span className="inline-block transition-all duration-300 hover:tracking-wide hover:text-brand cursor-default">I build scalable systems.</span>
            <br/>
            <span className="inline-block transition-all duration-300 hover:tracking-[0.02em] hover:text-brand cursor-default">And design how they <span className="font-serif italic text-muted-foreground transition-colors duration-300 hover:text-brand">feel</span>.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-xl leading-relaxed mx-auto lg:mx-0">
            Fullstack developer & UI/UX designer focused on performance, architecture, and meaningful interaction.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Magnetic>
              <button 
                onClick={() => scrollTo('about')}
                className="bg-brand text-white px-8 py-4 rounded-full font-semibold active:scale-95 transition-all shadow-premium hover:shadow-[#0F6E56]/20 hover:bg-[#0F6E56] hover:brightness-110"
              >
                About me
              </button>
            </Magnetic>
            <Magnetic>
              <button 
                onClick={() => scrollTo('work')}
                className="bg-transparent text-foreground border-2 border-border px-8 py-4 rounded-full font-semibold hover:bg-[#0F6E56]/5 hover:border-[#0F6E56]/30 hover:text-[#0F6E56] active:scale-[0.98] transition-all"
              >
                Projects
              </button>
            </Magnetic>
          </motion.div>

          {/* Social Links & Contact Intro */}
          <motion.div {...fadeUp(0.4)} className="mt-16 flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <a href="https://github.com/Vishwath-Narayana" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors font-bold uppercase tracking-widest">Github</a>
              <a href="https://www.linkedin.com/in/vishwath-t-3563702a0/" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors font-bold uppercase tracking-widest">LinkedIn</a>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border/50"></div>
            <a href="mailto:vishwathnarayanathm19@gmail.com" className="hover:text-brand transition-colors font-bold lowercase tracking-tight border-b border-border/50 pb-0.5">
              vishwathnarayanathm19@gmail.com
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="flex-1 relative max-w-md lg:max-w-xl group"
        >
          <div className="absolute inset-0 bg-brand/10 blur-3xl rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10 p-4 bg-muted/30 backdrop-blur-sm border border-white/10 rounded-[3rem] shadow-premium transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-0">
            <img 
              src={heroImg} 
              alt="Vishwath Narayana" 
              className="w-full h-auto rounded-[2.5rem] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 shadow-soft"
            />
          </div>
          
          {/* Accent decoration */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand/5 rounded-full blur-2xl"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand/5 rounded-full blur-xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
