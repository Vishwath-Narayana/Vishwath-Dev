import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { Magnetic } from '@/components/ui/Magnetic';
import { ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 w-full relative z-10 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto">
      <motion.div {...fadeUp(0)} className="w-full">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 inline-block border-b-4 border-[#0F6E56] pb-4">Let's build something precise.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Open to full-time roles and meaningful collaborations.
          </p>
          <Magnetic>
            <a 
              href="mailto:vishwathnarayanathm19@gmail.com"
              className="inline-flex items-center gap-3 bg-brand text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-premium hover:shadow-[#0F6E56]/20 hover:bg-[#0F6E56] hover:brightness-110 active:scale-95"
            >
              Get in touch →
            </a>
          </Magnetic>
        </div>

        <div className="p-8 md:p-16 rounded-[2.5rem] bg-muted/30 border border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Contact Info</span>
              <div className="group">
                <a
                  href="mailto:vishwathnarayanathm19@gmail.com"
                  className="text-2xl md:text-4xl font-bold transition-all relative block text-foreground hover:text-brand"
                >
                  vishwathnarayanathm19@gmail.com
                  <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand transition-all group-hover:w-full rounded-full"></span>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Social Networks</span>
              <div className="flex gap-8">
                {[
                  { name: 'GitHub', url: 'https://github.com/Vishwath-Narayana' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vishwath-t-3563702a0/' },
                  { name: 'Twitter', url: 'https://twitter.com' }
                ].map((social) => (
                  <Magnetic key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg md:text-xl font-bold transition-all border-b-2 border-transparent text-foreground hover:text-brand hover:border-brand"
                    >
                      {social.name}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-border/10 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Vishwath Narayana. All rights reserved.</p>
            <div className="flex gap-6">
              <span>Built with React & Framer Motion</span>
            </div>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
}
