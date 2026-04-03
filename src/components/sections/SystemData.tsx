import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { useDevMode } from '@/contexts/DevModeContext';

const TECH_STACK = {
  frontend: ['React','Tailwind', 'Framer Motion', 'GSAP', 'Three.js'],
  backend: ['Node.js', 'Express'],
  data: ['MongoDB'],
  tools: ['Git', 'GitHub', 'Docker', 'Framer', 'Figma', 'Miro']
};

const LANGUAGES = [
  { name: 'English', proficiency: 'Fluent' },
  { name: 'Telugu', proficiency: 'Native' },
  { name: 'Hindi',     proficiency: 'Conversational' },
];

const EDUCATION = [
  { term: '2023-present', degree: 'B.S. Computer Science', meta: 'Kakatiya Institute of Technology and Science, Warangal' },
  { term: '2021-2023', degree: 'Intermediate', meta: 'Narayana Junior College, Hyderabad(1st year),     SR Edu Center, Warangal (2nd year)',  },
  { term: '2021', degree: '10th', meta: 'Tejaswi High School, Hanamkonda' }
];

const CAPABILITIES = [
  'Architecting scalable, decoupled frontend applications.',
  'Building resilient microservices and edge-computing layers.',
  'Translating complex data flows into intuitive interactions.',
  'Optimizing rendering cycles and mitigating event-loop blocking.'
];

export function SystemData() {
  const { isDevMode } = useDevMode();

  return (
    <section id="system-data" className="py-24 px-6 max-w-5xl mx-auto w-full relative z-10">
      
      {/* Container spacing vertically mapped for exact narrative flow */}
      <div className="flex flex-col gap-20 md:gap-32 w-full">
        
        {/* CAPABILITIES */}
        <motion.div {...fadeUp(0.1)} className="w-full">
          {isDevMode ? (
            <h3 className="text-dev-soft font-mono text-sm border-b border-dev-primary/20 pb-2 mb-6 uppercase tracking-wider">{"> capabilities.run()"}</h3>
          ) : (
            <h3 className="text-2xl font-serif text-foreground mb-6">Capabilities</h3>
          )}
          <div className={isDevMode ? 'font-mono text-sm bg-[#050505] border border-dev-primary/30 p-6 rounded-xl shadow-[inset_0_0_20px_rgba(0,255,159,0.03)]' : ''}>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CAPABILITIES.map((cap, i) => (
                <li key={i} className={`flex gap-3 leading-relaxed ${isDevMode ? 'text-dev-primary/90' : 'text-muted-foreground text-base'}`}>
                  {isDevMode ? <span className="text-dev-soft/60 shrink-0">{"#>"}</span> : <span className="text-foreground shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-foreground/20" />}
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* TECH STACK */}
        <motion.div {...fadeUp(0.2)} className="w-full">
          {isDevMode ? (
            <h3 className="text-dev-soft font-mono text-sm border-b border-dev-primary/20 pb-2 mb-6 uppercase tracking-wider">{"> cat system.config"}</h3>
          ) : (
            <h3 className="text-2xl font-serif text-foreground mb-6">Tech Stack</h3>
          )}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 ${isDevMode ? 'font-mono text-sm shadow-[inset_0_0_20px_rgba(0,255,159,0.03)] bg-[#050505] border border-dev-primary/30 p-8 rounded-xl' : ''}`}>
            {Object.entries(TECH_STACK).map(([category, items]) => (
              <div key={category}>
                <h4 className={`mb-4 ${isDevMode ? 'text-dev-primary/80 lowercase border-b border-dev-primary/20 pb-2' : 'text-base font-medium text-foreground pb-2 border-b border-border'}`}>
                  {isDevMode ? `[${category}]` : category.charAt(0).toUpperCase() + category.slice(1)}
                </h4>
                <ul className="flex flex-col gap-3">
                  {items.map(item => (
                    <li key={item} className={isDevMode ? 'text-dev-primary/90' : 'text-muted-foreground text-sm'}>
                      {isDevMode ? `" ${item}"` : item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* EDUCATION & LANGUAGES GRID ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-8 justify-items-start">
            <motion.div {...fadeUp(0.4)} className="w-full">
              {isDevMode ? (
                <h3 className="text-dev-soft font-mono text-sm border-b border-dev-primary/20 pb-2 mb-6 uppercase tracking-wider">{"> system.init --education"}</h3>
              ) : (
                <h3 className="text-2xl font-serif text-foreground mb-6">Education</h3>
              )}
              <div className={`space-y-6 ${isDevMode ? 'font-mono text-sm bg-[#050505] border border-dev-primary/30 p-6 rounded-xl shadow-[inset_0_0_20px_rgba(0,255,159,0.03)]' : ''}`}>
                {EDUCATION.map(edu => (
                  <div key={edu.degree} className="flex flex-col gap-1.5 border-b border-border/40 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <span className={isDevMode ? 'text-dev-primary text-base' : 'text-foreground font-medium text-base'}>{edu.degree}</span>
                      <span className={isDevMode ? 'text-dev-soft/60' : 'text-muted-foreground text-xs bg-muted px-2 py-1 rounded'}>{edu.term}</span>
                    </div>
                    <span className={isDevMode ? 'text-dev-primary/70 text-xs' : 'text-muted-foreground text-sm'}>{isDevMode ? `module: ${edu.meta}` : edu.meta}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="w-full">
              {isDevMode ? (
                <h3 className="text-dev-soft font-mono text-sm border-b border-dev-primary/20 pb-2 mb-6 uppercase tracking-wider">{"> communication.load()"}</h3>
              ) : (
                <h3 className="text-2xl font-serif text-foreground mb-6">Languages</h3>
              )}
              <div className={`space-y-5 ${isDevMode ? 'font-mono text-sm bg-[#050505] border border-dev-primary/30 p-6 rounded-xl shadow-[inset_0_0_20px_rgba(0,255,159,0.03)]' : ''}`}>
                {LANGUAGES.map(lang => (
                  <div key={lang.name} className="flex justify-between items-center border-b border-border/40 pb-3 last:border-0 last:pb-0">
                    <span className={isDevMode ? 'text-dev-primary' : 'text-foreground font-medium text-base'}>{lang.name}</span>
                    <span className={isDevMode ? 'text-dev-soft/60 uppercase' : 'text-muted-foreground text-sm'}>{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
}
