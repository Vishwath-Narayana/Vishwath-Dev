import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import heroImg from '@/assets/hero.png';
import { useDevMode } from '@/contexts/DevModeContext';

export function About() {
  const { isDevMode } = useDevMode();
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeUp(0)} className={`order-2 lg:order-1 ${isDevMode ? 'bg-[#050505] p-6 lg:p-8 rounded-xl border border-green-900/30' : ''}`}>
          <h2 className={`mb-2 transition-all duration-300 ${isDevMode ? 'font-mono text-dev-primary text-xl tracking-tight' : 'text-3xl font-serif text-foreground'}`}>
            {isDevMode ? '> whoami' : 'Identity'}
          </h2>
          {isDevMode && <p className="text-dev-dim font-mono text-xs uppercase mb-6 tracking-wider">system.identity</p>}

          {isDevMode ? (
            <div className="space-y-4 font-mono text-green-500/80 text-sm">
              <p className="pl-4 border-l border-green-900/50">{`[status] digital artisan. combining computer science + hci.`}</p>
              <p className="pl-4 border-l border-green-900/50">{`[philosophy] clarity > complexity. interfaces must adapt implicitly.`}</p>
              <p className="pl-4 border-l border-green-900/50">{`[idle] exploring typography, minimalist architecture, deep work.`}</p>
            </div>
          ) : (
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I’m a full-stack developer and designer focused on building scalable, high-performance web applications. I work primarily with the MERN stack, crafting systems that are both technically robust and visually intuitive.
              </p>

              <p>
                My approach blends engineering with design — creating interfaces that feel seamless, responsive, and purposeful. I care deeply about <strong className="font-medium text-foreground">clarity, performance, and meaningful interaction</strong> in every product I build.
              </p>

              <p>
                I’m constantly exploring new technologies and refining my process to solve real-world problems with simplicity and precision.
              </p>
            </div>
          )}
        </motion.div>

        <motion.div
          {...fadeUp(0.2)}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className={`w-64 h-64 md:w-80 md:h-80 relative group cursor-crosshair transition-all duration-300 ${isDevMode ? 'grayscale contrast-125 sepia brightness-75 hue-rotate-90' : ''}`}>
            <div className={`absolute inset-0 rounded-[2rem] rotate-3 transition-transform group-hover:rotate-6 duration-500 ${isDevMode ? 'bg-[#050505] border border-green-900/50' : 'bg-muted'}`}></div>
            <img
              src={heroImg}
              alt="Profile"
              className={`absolute inset-0 w-full h-full object-cover rounded-[2rem] -rotate-3 transition-transform group-hover:rotate-0 duration-500 z-10 ${isDevMode ? 'border border-green-500/50 opacity-80 mix-blend-screen mix-blend-plus-lighter' : 'border border-border shadow-[0_10px_30px_rgba(0,0,0,0.04)]'}`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
