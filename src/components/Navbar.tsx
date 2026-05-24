import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const mobileMenuVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 260, damping: 25 } },
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer Scroll Spy
  useEffect(() => {
    const sections = ['home', 'skills', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Center-screen viewport focus
      threshold: 0,
    };

    const observerCallbacks = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallbacks, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className={`fixed top-6 left-0 right-0 mx-auto z-50 w-[calc(100%-2rem)] max-w-4xl transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1a1a29]/80 backdrop-blur-xl border border-white/5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]'
            : 'bg-[#11111b]/85 backdrop-blur-xl border border-white/5 shadow-[0_16px_32px_-12px_rgba(0,0,0,0.25)]'
        } rounded-full`}
      >
        <div className="py-2.5 px-6 flex items-center justify-between">
          {/* Brand/Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-1.5 text-lg md:text-xl font-extrabold tracking-tight text-white transition-all hover:scale-[1.01]"
          >
            <motion.span whileHover={{ x: 1 }} transition={{ duration: 0.2 }}>
              Ahamed
            </motion.span>
            <span className="relative flex h-2 w-2">
              <motion.span
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="absolute inline-flex h-full w-full rounded-full bg-[#cf59e6]/40 opacity-75"
              />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#cf59e6]"></span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.slice(1);
                const isHovered = hoveredIndex === index;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative text-xs font-bold uppercase tracking-wider transition-colors py-2 px-4 rounded-full flex items-center justify-center ${
                      isActive ? 'text-[#cf59e6]' : 'text-[#c4c4c4] hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>

                    {/* Underline Indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="active-underline"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#cf59e6] rounded-full z-10"
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      />
                    )}

                    {/* Hover capsule slide highlight */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.span
                          layoutId="hover-pill"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: 'easeOut' }}
                          className="absolute inset-0 bg-[#cf59e6]/5 border border-[#cf59e6]/10 rounded-full z-0"
                        />
                      )}
                    </AnimatePresence>
                  </a>
                );
              })}
            </div>

            <div className="w-[1px] h-3.5 bg-[#292929]" />

            <motion.a
              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 15px rgba(207, 89, 230, 0.25)',
                backgroundColor: '#cf59e6',
                borderColor: '#cf59e6',
              }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-xs font-bold uppercase tracking-wider bg-[#1a1a29] text-white border border-[#292929] px-5 py-2.5 rounded-full transition-all shadow-sm flex items-center justify-center"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Menu Toggle with 3D Rotate Morph */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Floating Modern Mobile Menu Dropdown Card */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed top-24 left-0 right-0 mx-auto z-45 w-[calc(100%-2rem)] max-w-4xl bg-[#1a1a29]/98 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] md:hidden flex flex-col gap-5"
          >
            {/* Category Marker */}
            <div className="flex items-center justify-between border-b border-[#292929]/60 pb-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#cf59e6]/70">
                Menu Directory
              </span>
              <span className="text-[9px] font-mono text-[#8888aa]">
                AHAMED
              </span>
            </div>

            {/* Links */}
            <motion.div 
              variants={mobileMenuVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-2"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.a
                    key={item.name}
                    variants={mobileItemVariants}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative text-sm font-bold uppercase tracking-wider py-3 px-5 rounded-2xl transition-all flex items-center justify-between group/mob"
                    style={{
                      color: isActive ? '#cf59e6' : '#c4c4c4',
                      backgroundColor: isActive ? 'rgba(207, 89, 230, 0.05)' : 'transparent',
                    }}
                  >
                    <span>{item.name}</span>
                    {isActive ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#cf59e6]" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover/mob:bg-[#cf59e6]/50 transition-colors" />
                    )}
                  </motion.a>
                );
              })}
            </motion.div>

            <div className="h-[1px] bg-[#292929]/60 my-0.5" />

            {/* Contact Actions */}
            <div className="flex flex-col gap-4">
              <motion.a
                whileTap={{ scale: 0.98 }}
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center text-xs font-black uppercase tracking-widest bg-gradient-to-r from-[#cf59e6] to-[#8000ff] text-white py-3.5 rounded-2xl shadow-[0_4px_20px_rgba(128,0,255,0.25)] flex items-center justify-center gap-2 cursor-pointer"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



