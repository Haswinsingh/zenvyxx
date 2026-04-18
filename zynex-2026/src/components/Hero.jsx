import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2026-05-01T12:00:00+05:30").getTime();

    // Call immediately to avoid 1s delay
    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsClosed(true);
        return true; // indicates completed
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
        setIsClosed(false);
        return false;
      }
    };

    if (calculateTime()) return;

    const interval = setInterval(() => {
      if (calculateTime()) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mask-image-b" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest bg-primary/10 text-primary border border-primary/30 uppercase mb-6 inline-block">
            System Initialization Sequence
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black tracking-tighter mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <span className="text-white">ZEN</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">VYXX</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
            Innovate.<span className="text-primary"> Build.</span> Secure.<span className="text-secondary"> Transform.</span>
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex gap-4 md:gap-8 my-12"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className={`flex flex-col items-center glass-card p-4 md:p-6 w-20 md:w-28 rounded-lg relative overflow-hidden group transition-all duration-300 ${isClosed ? 'border-red-500/30 bg-red-900/10 shadow-[0_0_15px_rgba(255,0,0,0.2)]' : ''}`}>
              <div className={`absolute top-0 left-0 w-full h-1 transition-colors ${isClosed ? 'bg-red-500/50 group-hover:bg-red-500' : 'bg-primary/50 group-hover:bg-primary'}`} />
              <span className={`text-3xl md:text-5xl font-orbitron font-bold mb-2 transition-colors ${isClosed ? 'text-red-400 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]' : 'text-white drop-shadow-[0_0_8px_rgba(0,245,255,0.4)]'}`}>
                {value < 10 ? `0${value}` : value}
              </span>
              <span className={`text-xs md:text-sm uppercase tracking-widest ${isClosed ? 'text-red-300/70' : 'text-gray-400'}`}>{unit}</span>
            </div>
          ))}
        </motion.div>

        {isClosed ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="group relative px-8 py-4 bg-transparent font-orbitron font-bold tracking-widest uppercase overflow-hidden mt-4 inline-block cursor-not-allowed opacity-90"
          >
            <div className="absolute inset-0 w-full h-full border-2 border-red-500 bg-red-500/10 shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300" />
            <span className="relative z-10 text-red-500 drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]">
              Registration Closed
            </span>
          </motion.div>
        ) : (
          <Link to="/register">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="group relative px-8 py-4 bg-transparent font-orbitron font-bold tracking-widest uppercase overflow-hidden mt-4 inline-block cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full border-2 border-primary group-hover:bg-primary/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,245,255,0.5)]" />
              <div className="absolute -left-[100%] top-0 w-full h-full bg-gradient-to-r from-transparent via-primary/40 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out" />
              <span className="relative z-10 text-primary group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]">
                Initialize Registration
              </span>
            </motion.div>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
