import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { FolderLock, MessageCircle, MousePointer2, Folder, File, Search, Send, User } from 'lucide-react';

const PROJECTS = [
  {
    id: "p1",
    title: "Role-Based File Sharing System",
    description:
      "A secure file management system enabling role-based access, controlled sharing, and scalable cloud storage.",
    mockupType: "file",
    techStack: {
      Frontend: "React, Tailwind",
      Backend: "Node.js, Express",
      Data: "MongoDB",
      Infra: "Cloudinary"
    },
    metrics: [
      "Role-based access control",
      "Secure file uploads & sharing",
      "Scalable cloud storage integration"
    ],
    details: {
      problem:
        "Traditional file sharing systems lack fine-grained access control and secure permission handling.",
      architecture:
        "Built a modular backend with authentication middleware and role-based authorization layers.",
      systemDesign:
        "Designed a permission-driven system allowing dynamic access control across users and resources.",
      performance:
        "Optimized file handling and API responses for smooth upload and retrieval operations.",
      uxDecisions:
        "Focused on simplicity and clarity to ensure users can manage files without friction.",
      impact:
        "Enabled secure collaboration with controlled access and improved usability."
    }
  },
  {
    id: "p2",
    title: "Real-Time Chat System",
    description:
      "A real-time messaging system supporting direct and group communication with low-latency updates.",
    mockupType: "chat",
    techStack: {
      Frontend: "React, Tailwind",
      Backend: "Node.js, Express",
      Data: "MongoDB",
      Infra: "Socket.io"
    },
    metrics: [
      "Real-time messaging",
      "Group & direct chats",
      "Low-latency communication"
    ],
    details: {
      problem:
        "Traditional messaging systems struggle with latency and inconsistent real-time updates.",
      architecture:
        "Implemented WebSocket-based communication using Socket.io for bidirectional data flow.",
      systemDesign:
        "Designed an event-driven system to handle message broadcasting and synchronization.",
      performance:
        "Ensured fast message delivery with efficient socket handling and minimal re-renders.",
      uxDecisions:
        "Built a smooth, responsive UI with subtle animations for a native-like experience.",
      impact:
        "Delivered seamless communication experience with reliable real-time updates."
    }
  },
  {
    id: "p3",
    title: "Developer Portfolio System",
    description:
      "An interactive portfolio system blending engineering and design through dynamic UI and motion-based interactions.",
    mockupType: "portfolio",
    techStack: {
      Frontend: "React, Tailwind",
      Backend: "—",
      Data: "—",
      Infra: "Framer Motion"
    },
    metrics: [
      "Dual-mode UI (Visual + SYS.DEV)",
      "Custom cursor interactions",
      "Motion-driven experience"
    ],
    details: {
      problem:
        "Traditional portfolios fail to showcase both technical depth and design thinking.",
      architecture:
        "Built a component-driven frontend with mode-based rendering logic.",
      systemDesign:
        "Implemented dual interfaces (visual and system mode) for different interaction styles.",
      performance:
        "Optimized animations and rendering for smooth, responsive interactions.",
      uxDecisions:
        "Focused on typography, spacing, and motion to create a distinctive experience.",
      impact:
        "Created a unique developer identity combining engineering and UI/UX design."
    }
  }
];

export function Work() {
  return (
    <section id="work" className="py-24 px-6 max-w-5xl mx-auto w-full relative">
      <div className="absolute inset-0 pointer-events-none glow-overlay opacity-50 rounded-3xl" />
      <motion.div {...fadeUp(0)} className="mb-20 relative z-10 w-full">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 inline-block border-b-2 border-[#0F6E56] pb-2">Selected Systems</h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mt-4">
            Production-focused applications combining engineering and design thinking.
          </p>
        </div>
      </motion.div>
      <div className="flex flex-col gap-8 relative z-10">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function MockupUI({ type }: { type: string }) {
  if (type === 'file') {
    return (
      <div className="w-full h-full bg-[#0A2540] text-white/90 p-4 font-sans text-[10px] flex gap-3">
        {/* Sidebar */}
        <div className="w-24 border-r border-white/10 pr-3 flex flex-col gap-2">
          <div className="font-bold text-teal-400 mb-1 opacity-70">STORAGE</div>
          <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded"><Folder size={12} className="text-teal-400" /> Documents</div>
          <div className="flex items-center gap-2 p-1.5 opacity-60"><Folder size={12} /> Images</div>
          <div className="flex items-center gap-2 p-1.5 opacity-60"><Folder size={12} /> Shared</div>
        </div>
        {/* Main */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded w-32 border border-white/5">
              <Search size={10} className="opacity-50" />
              <span className="opacity-40 italic">Search files...</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">VN</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
             {[1,2,3,4].map(i => (
               <div key={i} className="bg-white/5 border border-white/10 p-2 rounded flex items-center gap-2 group-hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded bg-teal-500/10 flex items-center justify-center">
                    <File size={14} className="text-teal-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">report_v0{i}.pdf</span>
                    <span className="opacity-40 text-[8px]">1.2 MB</span>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    );
  }
  
  if (type === 'chat') {
    return (
      <div className="w-full h-full bg-[#1A1040] text-white/90 p-4 font-sans text-[10px] flex gap-3">
        {/* Sidebar */}
        <div className="w-20 border-r border-white/10 pr-2 flex flex-col gap-2">
          <div className="flex items-center gap-2 p-1.5 bg-purple-500/20 rounded border border-purple-500/20"><div className="w-3 h-3 rounded-full bg-purple-400" /> General</div>
          <div className="flex items-center gap-2 p-1.5 opacity-40"><div className="w-3 h-3 rounded-full bg-white/20" /> Design</div>
          <div className="flex items-center gap-2 p-1.5 opacity-40"><div className="w-3 h-3 rounded-full bg-white/20" /> Engineering</div>
        </div>
        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex flex-col gap-3 py-1">
             <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0"><User size={10} /></div>
                <div className="bg-white/5 p-2 rounded-2xl rounded-tl-none max-w-[120px] leading-relaxed border border-white/5">
                  Hey, did you check the latest system logs for the file service?
                </div>
             </div>
             <div className="flex gap-2 flex-row-reverse">
                <div className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0">VN</div>
                <div className="bg-purple-600/30 p-2 rounded-2xl rounded-tr-none max-w-[120px] leading-relaxed border border-purple-500/20">
                  Just pulled them. Everything looks green except some latencies on AWS-East.
                </div>
             </div>
             <div className="text-[8px] opacity-40 italic mt-auto flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
                Sarah is typing...
             </div>
          </div>
          <div className="mt-2 flex gap-2">
             <div className="flex-1 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 opacity-40 italic">Type a message...</div>
             <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shrink-0"><Send size={12} /></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'portfolio') {
    return (
      <div className="w-full h-full bg-[#111111] text-white/90 p-3 font-sans text-[10px] flex flex-col gap-4 overflow-hidden">
        {/* Nav */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <div className="font-bold flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-teal-500" /> vishwath.</div>
          <div className="flex gap-3 opacity-60">
             <span>About</span>
             <span>Work</span>
             <span className="text-teal-400">Contact</span>
          </div>
        </div>
        {/* Hero Mini */}
        <div className="text-center py-2 px-4 border border-white/5 rounded-xl bg-white/[0.02]">
           <div className="font-bold text-sm mb-1">Crafting scaling infra.</div>
           <p className="opacity-40 text-[8px]">Software engineer & system architect.</p>
        </div>
        {/* Project Grid Mini */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          {[1,2,3,4].map(i => (
            <div key={i} className="aspect-video bg-white/[0.05] rounded-lg border border-white/[0.05] flex flex-col justify-end p-2 pb-1.5">
               <div className="h-1 w-8 bg-teal-500/40 rounded-full mb-1"></div>
               <div className="h-1.5 w-12 bg-white/20 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      {...fadeUp(index * 0.1)}
      className="relative rounded-2xl border transition-all duration-300 hover:-translate-y-[2px] overflow-hidden group bg-card border-border hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
    >
      <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015]" />
      
      {/* Visual Preview Area */}
      <div className="w-full aspect-[16/9] bg-muted relative overflow-hidden border-b border-border transition-transform duration-700 group-hover:scale-[1.005]">
        {/* Browser Frame Mockup */}
        <div className="absolute inset-0 flex flex-col">
          <div className="h-8 bg-muted/80 backdrop-blur-md border-b border-border flex items-center px-4 gap-1.5 z-20">
            <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
            <div className="flex-1 mx-4 bg-background/50 h-5 rounded-md border border-border flex items-center px-2">
               <div className="w-2 h-2 rounded-full bg-teal-500/30 mr-2"></div>
               <div className="w-24 h-1 bg-border/50 rounded-full"></div>
            </div>
          </div>
          <div className="flex-1 relative overflow-hidden z-10 transition-transform duration-500 group-hover:scale-105">
             <MockupUI type={project.mockupType} />
          </div>
        </div>
      </div>

      <div className="relative z-20 p-6 md:p-10 bg-card">
        <div 
          className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0F6E56] transition-all relative">
                System Module {index + 1}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0F6E56]/30 rounded-full"></span>
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-4 transition-colors duration-300 text-foreground group-hover:text-brand">
              {project.title}
            </h3>
            <p className="mb-8 text-lg leading-relaxed max-w-[520px] text-muted-foreground group-hover:text-foreground/90">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm mb-8">
              {Object.entries(project.techStack).map(([layer, tech]) => (
                <div key={layer} className="flex flex-col gap-1">
                  <span className="text-muted-foreground font-semibold text-[10px] uppercase tracking-wider">
                    {layer}
                  </span>
                  <span className="font-medium text-foreground">
                    {tech as string}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.metrics.map((metric: string, i: number) => (
                <span key={i} className="text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-300 bg-[#E1F5EE] text-[#0F6E56] border-[#0F6E56]/30 hover:bg-[#D1EFE4]">
                  {metric}
                </span>
              ))}
            </div>
          </div>

          <div className="text-sm font-semibold flex items-center gap-2 shrink-0 lg:mt-0 transition-all hover:opacity-100 p-3 px-5 rounded-full border shadow-soft self-start bg-background text-muted-foreground border-border hover:border-brand hover:text-brand">
            {isOpen ? "Fold analysis" : "View breakdown"} 
            <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="inline-block">
              ↓
            </motion.span>
          </div>
        </div>

        <AnimatePresence mode="wait">
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
