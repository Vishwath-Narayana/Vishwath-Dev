import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { Magnetic } from '@/components/ui/Magnetic';
import { useDevMode } from '@/contexts/DevModeContext';

export function Contact() {
  const { isDevMode } = useDevMode();

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto w-full relative z-10">
      <motion.div {...fadeUp(0)} className="w-full">
        {isDevMode ? (
          <h3 className="text-dev-soft font-mono text-sm border-b border-dev-primary/20 pb-2 mb-6 uppercase tracking-wider">{"> system.exit"}</h3>
        ) : (
          <h3 className="text-2xl font-serif text-foreground mb-6">Exit</h3>
        )}

        <div className={`space-y-6 ${isDevMode ? 'font-mono text-sm bg-[#050505] border border-dev-primary/30 p-8 rounded-xl shadow-[inset_0_0_20px_rgba(0,255,159,0.03)]' : ''}`}>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <span className={isDevMode ? 'text-dev-primary/60 w-24' : 'text-muted-foreground w-24'}>status:</span>
              <span className={isDevMode ? 'text-dev-primary/90' : 'text-foreground font-medium'}>open to opportunities and collaborations</span>
            </div>
            <div className="flex gap-4">
              <span className={isDevMode ? 'text-dev-primary/60 w-24' : 'text-muted-foreground w-24'}>contact:</span>
              <Magnetic>
                <a
                  href="mailto:vishwathnarayanathm19@gmail.com"
                  className={isDevMode ? 'text-dev-primary hover:text-white transition-colors underline decoration-dev-primary/30 underline-offset-4' : 'text-foreground hover:text-primary transition-colors underline underline-offset-4'}
                >
                  vishwathnarayanathm19@gmail.com
                </a>
              </Magnetic>
            </div>
          </div>

          {isDevMode && <div className="w-full h-px bg-dev-primary/20 my-4" />}
          {!isDevMode && <div className="w-full h-px bg-border my-6" />}

          <div className="flex gap-4 items-center">
            <span className={isDevMode ? 'text-dev-primary/60 w-24 shrink-0' : 'text-muted-foreground w-24 shrink-0'}>links:</span>
            <div className="flex gap-6">
              <Magnetic>
                <a
                  href="https://github.com/Vishwath-Narayana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${isDevMode ? 'text-dev-primary/80 hover:text-white' : 'text-foreground hover:text-primary'}`}
                >
                  github
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://www.linkedin.com/in/vishwath-t-3563702a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${isDevMode ? 'text-dev-primary/80 hover:text-white' : 'text-foreground hover:text-primary'}`}
                >
                  linkedin
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
