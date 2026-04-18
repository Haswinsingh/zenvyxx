import { motion } from 'framer-motion';
const About = () => {

  return (
    <section id="archives" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Illustration / Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
            style={{ perspective: 1000 }}
          >
            {/* Background elements */}
            <div className="absolute inset-[-15%] rounded-full bg-gradient-to-r from-blue-900/40 via-cyan-500/10 to-purple-600/20 blur-3xl animate-[pulse_4s_ease-in-out_infinite] z-0 pointer-events-none"></div>

            {/* Subtle grid animation overlay */}
            <div
              className="absolute inset-[-10%] z-0 mix-blend-screen opacity-30 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle at center, rgba(0, 245, 255, 0.15) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            ></div>

            {/* Floating Container */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative aspect-square max-w-sm lg:max-w-md mx-auto z-10"
            >
              {/* Radial glow directly behind the logo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 rounded-full blur-[40px] z-0 transition-all duration-500 group-hover:from-cyan-500/40 group-hover:to-purple-600/40"></div>

              {/* Glassmorphism Card Container */}
              <motion.div
                whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative w-full h-full rounded-[24px] p-[2px] bg-gradient-to-br from-cyan-400/40 via-transparent to-purple-500/40 hover:from-cyan-400/70 hover:to-purple-500/70 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-10 group transform-gpu cursor-pointer"
              >
                {/* Inner glass layer */}
                <div className="relative w-full h-full bg-black/40 backdrop-blur-[15px] rounded-[22px] p-2 shadow-[inset_0_0_20px_rgba(0,255,255,0.05)] overflow-hidden flex items-center justify-center border border-white/10">
                  {/* Gradient glow overlay that intensifies on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                  <img
                    src="/CODE CLUB LOGO (1).jpg"
                    alt="Code Club Architecture"
                    className="rounded-[16px] relative z-10 object-cover w-full h-full border border-white/5 shadow-[0_0_20px_rgba(0,245,255,0.1)] group-hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-500"
                  />

                  {/* Inner glow over image to blend with glass */}
                  <div className="absolute inset-0 z-10 pointer-events-none rounded-[16px] shadow-[inset_0_0_30px_rgba(0,0,0,0.6)]"></div>

                  {/* AI CORE ACTIVE badge */}
                  <div className="absolute top-5 left-5 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/40 flex items-center gap-2 z-20 shadow-[0_0_15px_rgba(0,245,255,0.3)] font-orbitron text-[10px] tracking-widest text-cyan-400 uppercase">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    AI Core Active
                  </div>

                  {/* SYSTEM ONLINE badge */}
                  <div className="absolute bottom-5 right-5 bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl border border-purple-500/40 flex items-center gap-3 z-20 shadow-[0_0_20px_rgba(168,85,247,0.3)] transform group-hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col items-end">
                      <p className="text-[9px] text-gray-400 font-orbitron tracking-widest uppercase mb-0.5">Status</p>
                      <p className="text-xs text-purple-300 font-orbitron font-bold tracking-wider uppercase">System Online</p>
                    </div>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <span className="text-secondary font-orbitron tracking-widest text-sm font-bold uppercase mb-2 block">Origin Identity</span>
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6">
              ABOUT <span className="text-primary">CODE CLUB</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg font-light">
              Code Club is a hub of innovation where developers, engineers, and creators come together to build the future. We focus on enhancing problem-solving, competitive programming, and real-world development skills through hands-on learning and technical challenges.

              From AI to web and app development, we empower students to explore, innovate, and grow. Through workshops, competitions, and impactful projects, we create opportunities that transform ideas into reality.

              Zenvyxx is our flagship platform — where creativity meets technology and innovation takes shape.

            </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
