import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import heroImg from '@/assets/hero.png';

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeUp(0)} className="order-2 lg:order-1">
          <h2 className="text-3xl font-serif text-foreground mb-6">A bit about me</h2>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I am a digital artisan passionate about creating software that feels natural and intuitive. 
              My background is a blend of computer science and human-computer interaction, allowing me 
              to approach problems with both a technical and empathetic lens.
            </p>
            <p>
              My philosophy is simple: <strong className="font-medium text-foreground">clarity over cleverness.</strong> I believe the best 
              interfaces are the ones you don't even notice. They adapt to how you think, rather 
              than forcing you to adapt to how they work.
            </p>
            <p>
              When I'm not building for the web, you can find me exploring typography, 
              minimalist architecture, or optimizing my personal workspace for deep work.
            </p>
          </div>
        </motion.div>

        <motion.div 
          {...fadeUp(0.2)} 
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 relative group cursor-crosshair">
            <div className="absolute inset-0 bg-muted rounded-[2rem] rotate-3 transition-transform group-hover:rotate-6 duration-500"></div>
            <img 
              src={heroImg} 
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover border border-border shadow-[0_10px_30px_rgba(0,0,0,0.04)] rounded-[2rem] -rotate-3 transition-transform group-hover:rotate-0 duration-500 z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
