const Footer = () => {
  return (
    <footer className="bg-[#050810] py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="flex items-center gap-2">
            <span className="text-xl font-orbitron font-bold tracking-widest text-gray-300">
              <span className="text-white">ZEN</span><span className="text-primary">VYXX</span>
            </span>
            <span className="text-xs text-gray-600 font-orbitron mt-1">© 2026 Zenvyxx. All Rights Reserved.</span>
          </div>

          <div className="flex gap-6 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-primary transition-colors">Protocol</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terminal</a>
            <a href="#" className="hover:text-primary transition-colors">Nodes</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
