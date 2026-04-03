import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { useDevMode } from '@/contexts/DevModeContext';

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
    },
    devInternals: {
      diagram: [
        "[Client (React)] ── wss ──> [Edge Gateway]",
        "                                │",
        "                                ├──> [Auth Service (JWT)]",
        "                                │",
        "                                └──> [Process Cluster (Node)]",
        "                                          │",
        "                                          ├──> [Redis Pub/Sub]",
        "                                          └──> [PostgreSQL DB]"
      ],
      logs: [
        "> init.sh --env=production",
        "> mounting volume /data/pg_13...",
        "> [OK] database connected (12ms)",
        "> starting websocket listeners on port 8080...",
        "> [OK] gateway active. listening for connections."
      ],
      services: [
        { name: "API Gateway", status: "Running" },
        { name: "PostgreSQL", status: "Connected" },
        { name: "Redis Cache", status: "Active" },
        { name: "Auth Cluster", status: "Running" }
      ]
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
    },
    devInternals: {
      diagram: [
        "[Client Dashboard] ── GQL ──> [Apollo Router (Edge)]",
        "                                   │",
        "         ┌─────────────────────────┼─────────────────────────┐",
        "         │                         │                         │",
        " [Pricing Service (Go)]   [Portfolio Service (Go)]   [History Service (Go)]",
        "         │                         │                         │",
        " [TimescaleDB Multi-node] ── <shared state> ────────> [Redis Ingestion Buffer]"
      ],
      logs: [
        "[system] allocating generic worker nodes...",
        "[router] loading supergraph schema...",
        "[OK] pricing service healthy (ping 4ms)",
        "[OK] portfolio service healthy (ping 3ms)",
        "[system] ready to accept high-frequency ingest"
      ],
      services: [
        { name: "Apollo Router", status: "Running" },
        { name: "Pricing Node", status: "Connected" },
        { name: "TimescaleDB", status: "Active" }
      ]
    }
  }
];

export function Work() {
  const { isDevMode } = useDevMode();

  return (
    <section id="work" className="py-24 px-6 max-w-5xl mx-auto w-full relative">
      <div className="absolute inset-0 pointer-events-none glow-overlay opacity-50 rounded-3xl" />
      <motion.div {...fadeUp(0)} className="mb-16 md:mb-20 relative z-10 w-full">
        {isDevMode ? (
          <div>
            <h2 className="text-dev-primary font-mono text-xl md:text-2xl tracking-tight mb-8 w-fit drop-shadow-[0_0_8px_rgba(0,255,159,0.3)]">{"> systems.list()"}</h2>
            <p className="text-dev-soft/80 font-mono text-sm max-w-xl leading-relaxed">
              Production-focused applications combining engineering and design thinking.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-serif text-foreground mb-4 w-fit hover:tracking-wide transition-all duration-300">Systems I've built</h2>
            <p className="text-muted-foreground max-w-xl hover:text-foreground transition-colors duration-300 leading-relaxed">
              Production-focused applications combining engineering and design thinking.
            </p>
          </div>
        )}
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
  const { isDevMode } = useDevMode();

  return (
    <motion.div 
      {...fadeUp(index * 0.1)}
      className={`relative rounded-2xl border transition-all duration-300 hover:-translate-y-1 overflow-hidden group opacity-85 hover:opacity-100 ${isDevMode ? 'bg-[#050505] border-dev-primary/30 shadow-[0_0_0_1px_rgba(0,255,159,0.1),0_10px_40px_rgba(0,255,159,0.05)] hover:shadow-[0_0_0_1px_rgba(0,255,159,0.3),0_10px_40px_rgba(0,255,159,0.15)] hover:border-dev-primary/60' : 'bg-card border-border'}`}
    >
      <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015]" />
      {!isDevMode && <div className="absolute inset-0 bg-muted/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />}
      {isDevMode && <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0005_1px,transparent_1px),linear-gradient(to_bottom,#00ff0005_1px,transparent_1px)] bg-[size:48px_48px] opacity-100" />}
      <div className="absolute inset-0 pointer-events-none glow-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]" />
      
      <div className="relative z-10 p-6 md:p-8">
        <div 
          className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="max-w-2xl">
            <h3 className={`text-2xl font-medium mb-2 transition-colors duration-300 ${isDevMode ? 'text-dev-primary font-mono tracking-tight group-hover:text-white drop-shadow-[0_0_8px_rgba(0,255,159,0.5)]' : 'text-foreground group-hover:text-primary'}`}>
              {isDevMode ? `<${project.title.replace(/\s+/g, '')} />` : project.title}
            </h3>
            <p className={`mb-6 transition-colors leading-relaxed ${isDevMode ? 'text-dev-soft font-mono text-sm opacity-80' : 'text-muted-foreground group-hover:text-foreground'}`}>
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm mb-6">
              {Object.entries(project.techStack).map(([layer, tech]) => (
                <div key={layer}>
                  <span className={`${isDevMode ? (layer === 'Frontend' ? 'text-dev-soft/70' : layer === 'Backend' ? 'text-dev-primary/90' : 'text-[#aaffcc]/60') + ' font-mono' : 'text-muted-foreground'} mr-2`}>
                    {isDevMode ? `[${layer.toLowerCase()}]` : layer}
                  </span>
                  <span className={`font-medium ${isDevMode ? 'text-dev-primary font-mono text-xs' : 'text-foreground'}`}>
                    {tech as string}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.metrics.map((metric: string, i: number) => (
                <span key={i} className={`text-xs font-medium px-3 py-1.5 rounded-full border shadow-sm ${isDevMode ? 'bg-[#050505] text-green-300 border-green-900/50 font-mono' : 'bg-muted text-foreground border-border'}`}>
                  {isDevMode ? `> ${metric}` : metric}
                </span>
              ))}
            </div>
          </div>

          <div className={`text-sm font-medium flex items-center gap-1 shrink-0 mt-4 lg:mt-0 transition-opacity hover:opacity-70 p-2 rounded-full border shadow-sm backdrop-blur-sm self-start ${isDevMode ? 'bg-[#050505] text-green-500 border-green-900/50 font-mono' : 'bg-card/80 text-muted-foreground border-border/50'}`}>
            {isOpen ? (isDevMode ? "collapse_sys()" : "Close module system") : (isDevMode ? "expand_sys()" : "Expand module system")} 
            <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="inline-block ml-1">
              ↓
            </motion.span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isOpen && !isDevMode && (
            <motion.div
              key="visual-mode"
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

          {isOpen && isDevMode && (
            <motion.div
              key="dev-mode"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-8 mt-8 border-t border-dev-primary/20 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-mono text-dev-primary/80">
                
                {/* System Logs */}
                <div className="bg-[#050505] border border-dev-primary/30 p-4 rounded-xl shadow-[inset_0_0_20px_rgba(0,255,159,0.03)]">
                  <h4 className="text-xs text-dev-soft mb-3 uppercase tracking-wider border-b border-dev-primary/20 pb-2">_system.stdout</h4>
                  <div className="space-y-1.5 text-xs opacity-80">
                    {project.devInternals.logs.map((log: string, idx: number) => (
                       <motion.div 
                         key={idx} 
                         initial={{ opacity: 0, x: -5 }} 
                         animate={{ opacity: 1, x: 0 }} 
                         transition={{ delay: idx * 0.1 }}
                       >
                         {log}
                       </motion.div>
                    ))}
                    <motion.div 
                       animate={{ opacity: [0, 1, 0] }} 
                       transition={{ repeat: Infinity, duration: 1 }}
                       className="inline-block w-2 h-3 bg-green-500 mt-1"
                    />
                  </div>
                </div>

                {/* Architecture Graph */}
                <div className="bg-[#050505] border border-dev-primary/30 p-4 rounded-xl shadow-[inset_0_0_20px_rgba(0,255,159,0.03)] overflow-x-auto">
                  <h4 className="text-xs text-dev-soft mb-3 uppercase tracking-wider border-b border-dev-primary/20 pb-2">_architecture.graph</h4>
                  <pre className="text-[10px] leading-relaxed text-dev-soft opacity-80">
                    {project.devInternals.diagram.join('\n')}
                  </pre>
                </div>

                {/* System Status Indicators */}
                <div className="bg-[#050505] border border-green-900/40 p-4 rounded-xl shadow-inner md:col-span-2">
                  <h4 className="text-xs text-green-600 mb-4 uppercase tracking-wider border-b border-green-900/30 pb-2">_service.status</h4>
                  <div className="flex flex-wrap gap-8">
                    {project.devInternals.services.map((service: any, idx: number) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${service.status === 'Running' || service.status === 'Connected' || service.status === 'Active' ? 'bg-green-400' : 'bg-green-700'}`}></span>
                          <span className={`relative inline-flex rounded-full h-2 w-2 ${service.status === 'Running' || service.status === 'Connected' || service.status === 'Active' ? 'bg-green-500' : 'bg-green-800'}`}></span>
                        </span>
                        <span className="text-xs uppercase text-green-500">{service.name}</span>
                        <span className="text-[10px] text-green-600/70 border border-green-900/50 px-1.5 py-0.5 rounded opacity-80">[{service.status}]</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
