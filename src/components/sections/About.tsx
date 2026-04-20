import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export function About() {
  return (
    <section id="about" className="py-32 px-6 w-full relative z-10 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_40%] gap-16 md:gap-24 items-center">
          <motion.div 
            {...fadeUp(0)}
            className="flex flex-col gap-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4 inline-block border-b-2 border-[#0F6E56] pb-2">
                Identity
              </h2>
            </div>
            
            <div className="space-y-8 text-muted-foreground text-xl leading-relaxed max-w-xl">
              <p>
                I’m a full-stack developer and designer focused on building scalable, high-performance web applications. I work primarily with the <strong className="font-bold text-foreground">MERN stack</strong>, crafting systems that are both technically robust and visually intuitive.
              </p>
              <p>
                My approach blends the precision of software engineering with a deep focus on user experience. I believe that performance is a feature, and that the best systems are those that feel effortless to the user.
              </p>
              <p>
                When I’m not coding, I’m exploring typography, minimalist architecture, and the intersection of motion and software.
              </p>
            </div>
          </motion.div>

          <motion.div 
            {...fadeUp(0.1)}
            className="bg-white border-[0.5px] border-[#0F6E56] rounded-2xl p-8 shadow-sm flex flex-col"
          >
            {[
              { num: '2+', label: 'Years of building' },
              { num: '3', label: 'Production systems' },
              { num: '5+', label: 'Technologies mastered' },
              { num: '', label: 'Open to work', isStatus: true }
            ].map((stat, i) => (
              <div 
                key={i} 
                className={`py-6 flex flex-col gap-1 border-b-[0.5px] border-[#eee] last:border-0 last:pb-0 first:pt-0`}
              >
                {stat.isStatus ? (
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-[24px] font-semibold text-[#0F6E56]">
                       <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"></span>
                       <span>{stat.label}</span>
                    </div>
                    <span className="text-[13px] text-muted-foreground">Available now</span>
                  </div>
                ) : (
                  <>
                    <span className="text-[32px] font-semibold text-foreground leading-none">{stat.num}</span>
                    <span className="text-[13px] text-muted-foreground">{stat.label}</span>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
