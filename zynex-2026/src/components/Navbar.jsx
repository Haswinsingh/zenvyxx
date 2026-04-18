import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    if (!href.startsWith('#')) return;
    
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Arena', href: '#arena' },
    { name: 'Logistics', href: '#logistics' },
    { name: 'Archives', href: '#archives' },
    { name: 'Network', href: '#network' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-orbitron font-bold text-white tracking-widest"
        >
          <span className="text-white">ZEN</span><span className="text-primary">VYXX</span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-gray-300 hover:text-primary transition-colors font-medium text-sm tracking-wide"
            >
              {link.name}
            </motion.a>
          ))}
          <Link to="/register">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="px-6 py-2 bg-transparent text-primary neon-border hover:bg-primary/10 transition-all font-orbitron text-sm font-bold tracking-wider rounded-sm cursor-pointer"
            >
              REGISTER NOW
            </motion.button>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-primary transition-colors">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass absolute top-full left-0 w-full flex flex-col items-center py-6 space-y-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setIsOpen(false);
                handleNavClick(e, link.href);
              }}
              className="text-gray-300 hover:text-primary font-medium text-lg"
            >
              {link.name}
            </a>
          ))}
          <Link to="/register" onClick={() => setIsOpen(false)} className="w-[80%]">
            <button className="px-8 py-3 bg-primary/20 text-primary neon-border font-orbitron font-bold rounded-sm w-full cursor-pointer">
              REGISTER NOW
            </button>
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
