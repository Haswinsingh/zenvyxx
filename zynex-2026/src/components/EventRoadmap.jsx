import { motion } from "framer-motion";
import { Terminal, Brain, Radio, Cpu, Trophy, Zap } from "lucide-react";

const events = [
  {
    phase: "Phase 0",
    title: "Registration Protocol Initiation",
    description: "Participant onboarding and team registration.",
    date: "26 Apr - 1 May 2026",
    time: "8:00 AM - 8:00 PM",
    icon: Terminal
  },
  {
    phase: "Round 1",
    title: "Neural Aptitude Assessment",
    description: "A technical quiz evaluating analytical and problem-solving skills.",
    date: "3 May 2026",
    time: "6:00 PM",
    icon: Brain
  },
  {
    phase: "Announcement",
    title: "Phase I Qualification Broadcast",
    description: "Announcement of shortlisted teams from Round 1.",
    date: "4 May 2026",
    time: "8:00 PM",
    icon: Radio
  },
  {
    phase: "Round 2",
    title: "Quantum Project Nexus",
    description: "Teams select problem statements and submit innovative project proposals.",
    date: "4 May - 9 May 2026",
    time: "9 May 2026, 12:00 PM",
    icon: Cpu
  },
  {
    phase: "Announcement",
    title: "Phase II Elite Selection",
    description: "Announcement of teams shortlisted for the final round.",
    date: "10 May 2026",
    time: "8:00 PM",
    icon: Trophy
  },
  {
    phase: "Final Round",
    title: "Quantum Execution Arena",
    description: "Offline hackathon where shortlisted teams build and present real-time solutions.",
    date: "12 May 2026",
    time: "9:00 AM – 4:00 PM",
    icon: Zap,
    isFinal: true
  }
];

export default function EventRoadmap() {
  return (
    <section className="py-24 bg-background relative overflow-hidden scroll-mt-24" id="logistics">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-orbitron tracking-widest text-sm font-bold uppercase mb-2 block">
            Your Journey Through Zenvyxx
          </span>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            EVENT <span className="text-primary">ROADMAP</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 -translate-x-1/2 shadow-[0_0_10px_rgba(0,245,255,0.5)]" />

          <div className="space-y-12">
            {events.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;
              const isFinal = event.isFinal;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center justify-between relative ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Desktop Connectors */}
                  <div className={`hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full z-10 -translate-x-1/2 -translate-y-1/2 ${isFinal ? "shadow-[0_0_20px_rgba(0,245,255,1)] scale-150 bg-primary" : "shadow-[0_0_15px_rgba(0,245,255,1)]"}`} />

                  <div className={`w-full md:w-5/12 ${isEven ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                    <div className={`bg-white/5 backdrop-blur-md border p-6 rounded-xl transition-all duration-300 group relative overflow-hidden ${isFinal ? "border-primary/60 shadow-[0_0_30px_rgba(0,245,255,0.3)] hover:shadow-[0_0_50px_rgba(0,245,255,0.6)]" : "border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,245,255,0.15)]"}`}>
                      {/* Decorative corner glow */}
                      <div className={`absolute top-0 ${isEven ? "right-0" : "left-0"} w-24 h-24 bg-primary/20 blur-[40px] rounded-full group-hover:bg-primary/30 transition-colors`} />

                      <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:justify-end" : ""}`}>
                        {/* Mobile Icon (always left aligned) */}
                        <div className="md:hidden p-2 bg-primary/10 rounded-lg text-primary">
                          <Icon size={20} />
                        </div>
                        {/* Desktop Icon Layout */}
                        {isEven ? null : (
                          <div className="hidden md:block p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                            <Icon size={20} />
                          </div>
                        )}
                        {isFinal ? (
                          <span className="text-cyan-300 font-orbitron text-xs font-bold uppercase tracking-widest px-3 py-1 bg-cyan-500/20 border border-cyan-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                            Offline Hackathon
                          </span>
                        ) : (
                          <span className="text-secondary font-orbitron text-xs font-bold uppercase tracking-widest px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full">
                            {event.phase}
                          </span>
                        )}
                        {isEven ? (
                          <div className="hidden md:block p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                            <Icon size={20} />
                          </div>
                        ) : null}
                      </div>

                      <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>

                      <p className="text-gray-400 text-sm font-light mb-4 leading-relaxed">
                        {event.description}
                      </p>

                      <div className={`flex flex-col gap-1 text-sm font-medium ${isEven ? "md:items-end" : "md:items-start"}`}>
                        <div className="flex items-center gap-2 text-gray-300">
                          <span className="text-primary/70">{`>`} Date:</span> {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <span className="text-primary/70">{`>`} Time:</span> {event.time}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for opposite side */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
