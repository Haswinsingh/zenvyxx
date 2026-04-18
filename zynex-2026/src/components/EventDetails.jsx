import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Zap } from 'lucide-react';

const EventDetails = () => {
  const details = [
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Date of Execution",
      desc: "May 5th  , 2026",
    },
    {
      icon: <Clock className="w-8 h-8 text-secondary" />,
      title: "Duration",
      desc: "8 Hours Non-Stop",
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Venue",
      desc: "Sri Sairam Engineering College, Chennai",
    },
    {
      icon: <Zap className="w-8 h-8 text-secondary" />,
      title: "Energy Supply",
      desc: "Snacks are provided",
    }
  ];

  return (
    <section id="arena" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            EVENT <span className="text-primary">PROTOCOLS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-xl flex flex-col items-center text-center relative overflow-hidden group border border-white/5 hover:border-primary/50 transition-colors"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500"></div>

              <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-orbitron font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
