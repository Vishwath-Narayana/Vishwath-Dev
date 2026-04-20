import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { Layers, Cpu, Layout, Terminal } from 'lucide-react';

const TECH_CATALOG = [
  {
    title: 'Backend Engineering',
    skills: ['Node.js', 'Express.js', 'REST API', 'JWT', 'RBAC', 'Socket.IO', 'Pagination', 'Error Handling']
  },
  {
    title: 'Database & Data',
    skills: ['MongoDB', 'Mongoose', 'Schema Design', 'Indexing', 'Aggregation Pipelines', 'Data Modeling']
  },
  {
    title: 'Security',
    skills: ['bcrypt', 'express-validator', 'CORS', 'Helmet', 'Rate Limiting']
  },
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'Context API', 'React Router v6', 'Custom Hooks']
  },
  {
    title: 'Data Fetching',
    skills: ['TanStack Query', 'Caching', 'Mutations', 'Pagination']
  },
  {
    title: 'UI/UX',
    skills: ['TailwindCSS', 'shadcn/ui', 'Recharts', 'Skeleton Loaders', 'Toast Notifications', 'Debounced Search']
  },
  {
    title: 'Real-Time',
    skills: ['Socket.IO Client', 'Live UI Updates', 'Event-driven UI']
  },
  {
    title: 'DevOps',
    skills: ['MongoDB Atlas', 'Render', 'Vercel', 'Env Variables', 'Cross-domain Cookies']
  },
  {
    title: 'Engineering Concepts',
    skills: ['Full-stack Architecture', 'RESTful Design', 'Event-driven Systems', 'Caching Strategies', 'Production Debugging']
  }
];

const LANGUAGES = [
  { name: 'English', proficiency: 'Fluent' },
  { name: 'Telugu', proficiency: 'Native' },
  { name: 'Hindi',     proficiency: 'Conversational' },
];

const EDUCATION = [
  { term: '2023-present', degree: 'B.Tech Computer Science and Engineering', meta: 'Kakatiya Institute of Technology and Science, Warangal' },
  { term: '2021-2023', degree: 'Intermediate', meta: 'Narayana Junior College, Hyderabad(1st year), SR Edu Center, Warangal (2nd year)',  },
  { term: '2021', degree: '10th', meta: 'Tejaswi High School, Hanamkonda' }
];

const CAPABILITIES = [
  {
    title: 'Frontend Architecture',
    desc: 'Architecting scalable, decoupled frontend applications with modern frameworks.',
    icon: Layers
  },
  {
    title: 'System Engineering',
    desc: 'Building resilient microservices and edge-computing layers for global scale.',
    icon: Cpu
  },
  {
    title: 'UX/UI Systems',
    desc: 'Translating complex data flows into intuitive, motion-driven interactions.',
    icon: Layout
  },
  {
    title: 'Performance Ops',
    desc: 'Optimizing rendering cycles and mitigating event-loop blocking for speed.',
    icon: Terminal
  }
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-32 px-6 w-full relative z-10 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0.1)} className="w-full">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 inline-block border-b-2 border-[#0F6E56] pb-2">Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {CAPABILITIES.map((cap, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border transition-all duration-300 bg-card border-border hover:border-brand/20 hover:shadow-premium group flex flex-col h-full"
              >
                <div className="flex flex-col gap-4 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 border border-brand/10 flex items-center justify-center text-brand transition-colors group-hover:bg-brand group-hover:text-white shrink-0">
                    <cap.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-2">{cap.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TechStack() {
  return (
    <section id="tech-stack" className="py-32 px-6 w-full relative z-10 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0.2)} className="w-full">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 inline-block border-b-2 border-[#0F6E56] pb-2">Tech Stack</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {TECH_CATALOG.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -2 }}
                className={`p-5 rounded-xl border-[0.5px] border-border bg-white transition-all duration-300 hover:shadow-md flex flex-col gap-4 ${cat.title === 'Engineering Concepts' ? 'md:col-span-2' : ''}`}
              >
                <h4 className="text-[13px] font-semibold text-[#0F6E56] flex items-center gap-2 tracking-wider">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-2.5 py-1 rounded-[20px] text-[12px] font-medium transition-all duration-300 bg-[#E1F5EE] text-[#0A2540] border border-[#0F6E56]/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function EducationLanguages() {
  return (
    <section id="education-languages" className="py-32 px-6 w-full relative z-10 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            <motion.div {...fadeUp(0.4)} className="w-full">
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4 inline-block border-b-2 border-[#0F6E56] pb-2">Education</h2>
              </div>
              <div className="space-y-6">
                {EDUCATION.map(edu => (
                  <div key={edu.degree} className="flex flex-col gap-2 border-b border-border/40 pb-6 last:border-0 last:pb-0 group">
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-foreground font-bold text-lg group-hover:text-brand transition-colors">{edu.degree}</span>
                      <span className="text-muted-foreground text-xs font-bold uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-border/50 shadow-sm shrink-0">{edu.term}</span>
                    </div>
                    <span className="text-muted-foreground text-base">{edu.meta}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="w-full">
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4 inline-block border-b-2 border-[#0F6E56] pb-2">Languages</h2>
              </div>
              <div className="space-y-6">
                {LANGUAGES.map(lang => (
                  <div key={lang.name} className="flex justify-between items-center border-b border-border/40 pb-5 last:border-0 last:pb-0 group">
                    <span className="text-foreground font-bold text-xl group-hover:text-brand transition-colors">{lang.name}</span>
                    <span className="text-muted-foreground font-bold text-sm bg-white px-3 py-1 rounded-full border border-border/50 shadow-sm">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
