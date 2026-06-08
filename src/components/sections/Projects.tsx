import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

const projects = [
  {
    title: 'Cafe 1 - Modern Café Experience',
    category: 'MERN FULLSTACK',
    description: 'Built a MERN-based cafe application with responsive UI, dynamic order menus, REST APIs, and Firebase Cloud Messaging (FCM) notifications to admin.',
    image: '/images/cafe_experience.png',
    tech: ['React.js', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    liveUrl: 'https://cafe-1-s9u7.onrender.com/',
    githubUrl: 'https://github.com/Ahamed-Hathin?tab=repositories',
  },
  {
    title: 'Servix - Service Management',
    category: 'BACKEND ARCHITECTURE',
    description: 'A robust service-based platform built to handle complex service requests and management, with scalability, REST APIs, and MongoDB clean architecture.',
    image: '/images/servix_management.png',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
    liveUrl: 'https://servix-server.onrender.com/',
    githubUrl: 'https://github.com/Ahamed-Hathin?tab=repositories',
  },
  {
    title: 'Faras Trading Platform',
    category: 'FRONTEND DEVELOPMENT',
    description: 'A clean and professional trading landing page with dynamic elements, smooth scroll animations, and CSS3 layouts optimized for user conversion.',
    image: '/images/faras_trading.png',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    liveUrl: 'https://faras-trading.vercel.app/',
    githubUrl: 'https://github.com/Ahamed-Hathin?tab=repositories',
  },
  {
    title: 'VARIT 2K26 Symposium',
    category: 'LEADERSHIP & FRONTEND',
    description: 'Official website for the college symposium. Led the development team to create a scalable platform for registrations and event management.',
    image: '/images/varit_symposium.jpg',
    tech: ['Bootstrap', 'Team Lead', 'UI/UX', 'Vercel'],
    liveUrl: 'https://varit-2k26.vercel.app/',
    githubUrl: 'https://github.com/Ahamed-Hathin?tab=repositories',
  },
  {
    title: 'Royal Arabian Restaurant',
    category: 'FREELANCE FRONTEND',
    description: 'A freelance website for a restaurant featuring an interactive menu, gallery highlights, and jQuery/AOS scrolling transitions.',
    image: '/images/project2_new.png',
    tech: ['jQuery', 'AOS', 'CSS3', 'Netlify'],
    liveUrl: 'https://royal-arabian-manaparai.netlify.app/',
    githubUrl: 'https://github.com/Ahamed-Hathin?tab=repositories',
  },
  {
    title: 'Weather Forecast App',
    category: 'FRONTEND API INTEGRATION',
    description: 'Real-time weather data visualization using a public API. Clean, minimal design with Bootstrap styling and accurate data rendering.',
    image: '/images/project3_new.png',
    tech: ['React.js', 'Weather API', 'Bootstrap', 'Vercel'],
    liveUrl: 'https://weather-gilt-six-36.vercel.app/',
    githubUrl: 'https://github.com/Ahamed-Hathin?tab=repositories',
  },
];

const getTechBadgeStyles = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes('react') || t.includes('typescript') || t.includes('zustand') || t.includes('redux')) {
    return 'border-cyan-500/20 text-cyan-400 bg-cyan-950/10 group-hover:border-cyan-500/40';
  }
  if (t.includes('node') || t.includes('express') || t.includes('mongodb') || t.includes('api')) {
    return 'border-emerald-500/20 text-emerald-400 bg-emerald-950/10 group-hover:border-emerald-500/40';
  }
  if (t.includes('next.js') || t.includes('nextjs')) {
    return 'border-white/20 text-white bg-white/5 group-hover:border-white/40';
  }
  if (t.includes('tailwind') || t.includes('css') || t.includes('html') || t.includes('jquery')) {
    return 'border-[#6bc5f8]/20 text-[#6bc5f8] bg-[#6bc5f8]/5 group-hover:border-[#6bc5f8]/40';
  }
  if (t.includes('motion') || t.includes('stripe') || t.includes('bootstrap') || t.includes('symposium')) {
    return 'border-[#cf59e6]/20 text-[#cf59e6] bg-[#cf59e6]/5 group-hover:border-[#cf59e6]/40';
  }
  if (t.includes('firebase') || t.includes('aos') || t.includes('weather')) {
    return 'border-amber-500/20 text-amber-400 bg-amber-950/10 group-hover:border-amber-500/40';
  }
  return 'border-[#292929] text-[#c4c4c4] bg-[#11111b] group-hover:border-[#cf59e6]/20';
};

export function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Cursor coordinate trackers for mouse position
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  // Create dampening springs to smooth rotations
  const rotateX = useSpring(useTransform(y, [0, 1], [7, -7]), { damping: 25, stiffness: 220 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-7, 7]), { damping: 25, stiffness: 220 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable tilt physics on screens smaller than 1024px for frictionless mobile/tablet scrolling
    if (window.innerWidth < 1024) return;

    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const relativeX = (e.clientX - rect.left) / width;
    const relativeY = (e.clientY - rect.top) / height;
    
    x.set(relativeX);
    y.set(relativeY);
    
    cardRef.current.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
      className="group relative bg-[#1a1a29]/40 backdrop-blur-md border border-[#292929] hover:border-[#cf59e6]/25 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 flex flex-col justify-between h-full overflow-hidden"
    >
      {/* Giant cyber outlines backing */}
      <div className="absolute -top-3 -right-2 text-8xl font-mono font-black select-none pointer-events-none z-0">
        <span className="text-stroke-outline">
          0{index + 1}
        </span>
      </div>

      {/* High-Performance Cursor Radial Glow backdrop */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(350px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(207, 89, 230, 0.07), transparent 80%)`
        }}
      />

      <div className="space-y-5 relative z-10 pointer-events-none">
        {/* Dynamic Media Frame (No Aspect-Ratio Crop & No Black Bars) */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/5 pointer-events-auto">
          <motion.img
            src={project.image}
            alt={project.title}
            style={{
              x: useSpring(useTransform(x, [0, 1], [-8, 8]), { damping: 25, stiffness: 220 }),
              y: useSpring(useTransform(y, [0, 1], [-8, 8]), { damping: 25, stiffness: 220 }),
            }}
            className="w-full h-auto object-cover transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11111b]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Project Meta Info */}
        <div className="space-y-2 pointer-events-auto">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#cf59e6]">
            {project.category}
          </span>
          <h3 className="text-xl font-extrabold text-white leading-tight tracking-tight group-hover:text-[#cf59e6] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-[#c4c4c4] leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      {/* Tech Stack & Active Navigation links */}
      <div className="mt-6 space-y-5 relative z-10 pointer-events-auto">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1.5 text-[9px] font-bold tracking-wider uppercase rounded-full border transition-all duration-300 ${getTechBadgeStyles(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-4 border-t border-[#292929]/60">
          <motion.a
            whileHover={{ scale: 1.02, x: 2 }}
            whileTap={{ scale: 0.98 }}
            href={project.liveUrl}
            className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#cf59e6] transition-colors py-1 cursor-pointer"
          >
            <span>Live Demo</span>
            <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02, x: 2 }}
            whileTap={{ scale: 0.98 }}
            href={project.githubUrl}
            className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c4c4c4] hover:text-white transition-colors py-1 cursor-pointer"
          >
            <SiGithub size={13} />
            <span>Source</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Selected Works
          </h2>
          <p className="text-[#c4c4c4] text-lg">
            A curated collection of web applications demonstrating visual precision, fluid interaction design, and robust code.
          </p>
        </motion.div>

        {/* 3D Bento-Style Cyber Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

