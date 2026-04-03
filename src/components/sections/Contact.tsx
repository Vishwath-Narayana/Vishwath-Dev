import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto w-full text-center">
      <motion.div 
        {...fadeUp(0)}
        className="bg-card border border-border rounded-[2.5rem] p-12 md:p-24 shadow-[0_10px_30px_rgba(0,0,0,0.02)] relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-32 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <h2 className="text-4xl md:text-5xl font-sans tracking-tight text-foreground mb-6">
          Let's build something <span className="font-serif italic text-muted-foreground">meaningful</span>.
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Currently open for new opportunities and interesting collaborations. Feel free to reach out.
        </p>
        
        <motion.a 
          href="mailto:hello@example.com"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-medium shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-shadow"
        >
          hello@example.com
        </motion.a>
      </motion.div>
      
      <motion.div {...fadeUp(0.2)} className="mt-24 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-4">
        <div>© {new Date().getFullYear()} Workspace. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </motion.div>
    </section>
  );
}
