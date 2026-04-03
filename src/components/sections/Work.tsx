import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

const PROJECTS = [
  {
    id: "p1",
    title: "AI Interaction Engine",
    description: "A fullstack system designed to handle real-time data processing and intuitive user interaction.",
    techStack: {
      Frontend: "React, Tailwind",
      Backend: "Node.js, Express",
      Data: "PostgreSQL, Redis",
      Infra: "AWS ECS"
    },
    metrics: [
      "Handles 5k+ concurrent users",
      "Sub-100ms response time",
      "10M+ events processed daily"
    ],
    details: {
      problem: "Traditional interfaces broke under the weight of real-time multi-agent streaming.",
      architecture: "Event-driven architecture utilizing WebSocket connections and Redis pub/sub.",
      systemDesign: "Decoupled UI from processing logic using an intermediary state machine.",
      performance: "Optimized rendering via virtualization and aggressive data caching.",
      uxDecisions: "Adopted a canvas layout to prevent vertical scrolling fatigue during heavy data flow.",
      impact: "Increased user retention by 40% and removed interaction bottlenecks."
    }
  },
  {
    id: "p2",
    title: "Real-time Financial Data System",
    description: "A scalable, clean dashboard architecture mapping high-frequency trading data.",
    techStack: {
      Frontend: "React, Recharts",
      Backend: "Go",
      Data: "TimescaleDB",
      Infra: "Cloudflare Workers"
    },
    metrics: [
      "Reduced load time by 40%",
      "0% downtime during market opens",
      "Optimized API response by 60%"
    ],
    details: {
      problem: "Financial dashboards are overwhelmingly cluttered with unnecessary synchronous data fetches blocking the main thread.",
      architecture: "GraphQL federation pulling from microservices, served via Edge workers.",
      systemDesign: "Created a layered data-fetching queue ensuring priority metrics render first.",
      performance: "Heavy use of Web Workers to offload calculation logic from the UI thread.",
      uxDecisions: "Focused on progressive disclosure, showing absolute essential metrics immediately.",
      impact: "User satisfaction rose to 4.8/5, praising the clean aesthetic and instant feel."
    }
  }
];

export function Work() {
  return (
    <section id="work" className="py-24 px-6 max-w-5xl mx-auto w-full relative">
      <div className="absolute inset-0 pointer-events-none glow-overlay opacity-50 rounded-3xl" />
      <motion.div {...fadeUp(0)} className="mb-12 relative z-10">
        <h2 className="text-3xl font-serif text-foreground mb-4 w-fit hover:tracking-wide transition-all duration-300">Systems I've built</h2>
        <p className="text-muted-foreground max-w-xl hover:text-foreground transition-colors duration-300">Production-focused applications combining engineering and design thinking.</p>
      </motion.div>
      <div className="flex flex-col gap-6 relative z-10">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      {...fadeUp(index * 0.1)}
      className="relative rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 overflow-hidden group opacity-85 hover:opacity-100"
    >
      <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015]" />
      <div className="absolute inset-0 bg-muted/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 pointer-events-none glow-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]" />
      
      <div className="relative z-10 p-6 md:p-8">
        <div 
          className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl font-medium text-foreground mb-2 transition-colors group-hover:text-primary">{project.title}</h3>
            <p className="text-muted-foreground mb-6 transition-colors group-hover:text-foreground leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm mb-6">
              {Object.entries(project.techStack).map(([layer, tech]) => (
                <div key={layer}>
                  <span className="text-muted-foreground mr-2">{layer}</span>
                  <span className="font-medium text-foreground">{tech as string}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.metrics.map((metric: string, i: number) => (
                <span key={i} className="text-xs font-medium bg-muted text-foreground px-3 py-1.5 rounded-full border border-border shadow-sm">
                  {metric}
                </span>
              ))}
            </div>
          </div>

          <div className="text-sm font-medium text-muted-foreground flex items-center gap-1 shrink-0 mt-4 lg:mt-0 transition-opacity hover:opacity-70 bg-card/80 p-2 rounded-full border border-border/50 shadow-sm backdrop-blur-sm self-start">
            {isOpen ? "Close module system" : "Expand module system"} 
            <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="inline-block ml-1">
              ↓
            </motion.span>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, filter: 'blur(4px)' }}
              animate={{ height: "auto", opacity: 1, filter: 'blur(0px)' }}
              exit={{ height: 0, opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-8 mt-8 border-t border-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">1. Problem</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.details.problem}</p>
                 </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">2. Architecture</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.details.architecture}</p>
                 </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">3. System Design</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.details.systemDesign}</p>
                 </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">4. Performance</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.details.performance}</p>
                 </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">5. UX Decisions</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.details.uxDecisions}</p>
                 </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">6. Impact</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.details.impact}</p>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
