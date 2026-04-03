import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

const PROJECTS = [
  {
    id: "p1",
    title: "AI Operating System",
    description: "A comprehensive interface for next-gen artificial intelligence interactions.",
    tags: ["React", "TypeScript", "AI", "Framer Motion"],
    details: {
      problem: "Traditional AI interfaces felt like chat bots rather than integrated workspaces.",
      approach: "Designed a canvas-based layout where blocks of AI text act as movable widgets.",
      solution: "Implemented an infinite canvas with React Flow and real-time collaboration features.",
      impact: "Increased user retention by 40% and improved task completion speed."
    }
  },
  {
    id: "p2",
    title: "Modern Finance Dashboard",
    description: "A minimal, clean dashboard for managing personal finances and investments.",
    tags: ["Next.js", "Tailwind CSS", "Recharts"],
    details: {
      problem: "Financial dashboards are overwhelmingly cluttered with unnecessary data points.",
      approach: "Focused on progressive disclosure, showing only absolute essential metrics first.",
      solution: "Created a layered interface where detailed stats only appear on interaction.",
      impact: "User satisfaction score rose to 4.8/5, praising the clean aesthetic."
    }
  }
];

export function Work() {
  return (
    <section id="work" className="py-24 px-6 max-w-5xl mx-auto w-full relative">
      <div className="absolute inset-0 pointer-events-none glow-overlay opacity-50 rounded-3xl" />
      <motion.div {...fadeUp(0)} className="mb-12 relative z-10">
        <h2 className="text-3xl font-serif text-foreground mb-4 w-fit hover:tracking-wide transition-all duration-300">Systems I've built</h2>
        <p className="text-muted-foreground max-w-xl hover:text-foreground transition-colors duration-300">A collection of projects focused on intuitive interfaces and robust functionality.</p>
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
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <h3 className="text-xl font-medium text-foreground mb-2 transition-colors group-hover:text-primary">{project.title}</h3>
            <p className="text-muted-foreground mb-4 transition-colors group-hover:text-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span key={tag} className="text-xs font-medium bg-muted text-muted-foreground px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="text-sm font-medium text-muted-foreground flex items-center gap-1 shrink-0 mt-4 md:mt-0 transition-opacity hover:opacity-70">
            {isOpen ? "Close module" : "Expand module"} 
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
              <div className="pt-8 mt-8 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">Problem</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.details.problem}</p>
                 </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">Approach</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.details.approach}</p>
                 </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.details.solution}</p>
                 </div>
                 <div>
                    <h4 className="font-semibold text-foreground mb-2">Impact</h4>
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
