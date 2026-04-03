import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { Magnetic } from '@/components/ui/Magnetic';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto w-full text-center hover:cursor-crosshair">
      <motion.div 
        {...fadeUp(0)}
        className="bg-card border border-border rounded-[2.5rem] p-12 md:p-24 shadow-[0_10px_30px_rgba(0,0,0,0.02)] relative overflow-hidden group"
      >
        <div className="absolute inset-0 pointer-events-none glow-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-sans tracking-tight text-foreground mb-12">
            Let's build something <span className="font-serif italic text-muted-foreground hover:text-foreground hover:tracking-wide transition-all duration-300">meaningful</span>.
          </h2>
          
          <Magnetic className="mt-8">
            <a 
              href="mailto:hello@example.com"
              className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-medium shadow-[0_10px_30px_rgba(0,0,0,0.04)] active:scale-95 transition-transform"
            >
              hello@example.com
            </a>
          </Magnetic>
        </div>
      </motion.div>
      
      <motion.div {...fadeUp(0.2)} className="mt-24 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-4">
        <div>© {new Date().getFullYear()} Workspace. All rights reserved.</div>
        <div className="flex gap-6 relative z-10">
          <Magnetic><a href="#" className="hover:text-foreground transition-colors p-2">Twitter</a></Magnetic>
          <Magnetic><a href="#" className="hover:text-foreground transition-colors p-2">GitHub</a></Magnetic>
          <Magnetic><a href="#" className="hover:text-foreground transition-colors p-2">LinkedIn</a></Magnetic>
        </div>
      </motion.div>
    </section>
  );
}
