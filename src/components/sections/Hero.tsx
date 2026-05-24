import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const renderJelloText = (text: string) => {
  return text.split('').map((char, idx) => {
    if (char === ' ') return <span key={idx} className="inline-block">&nbsp;</span>;
    return (
      <span
        key={idx}
        className="jello-hover-effect text-transparent"
      >
        {char}
      </span>
    );
  });
};

const renderJelloTextWhite = (text: string) => {
  return text.split('').map((char, idx) => {
    if (char === ' ') return <span key={idx} className="inline-block">&nbsp;</span>;
    return (
      <span
        key={idx}
        className="jello-hover-effect-white text-white"
      >
        {char}
      </span>
    );
  });
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-12 bg-transparent text-white overflow-hidden"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      {/* Premium Giant Asymmetric Breathing Blob (right side) */}
      <div className="blob pointer-events-none z-0" />
      
      {/* Soft Cyan Ambient Glow (left side) */}
      <div className="absolute top-[30%] left-[-10%] w-[450px] h-[450px] rounded-full bg-[#6bc5f8]/4 blur-[120px] pointer-events-none z-0" />

      {/* Core Hero Content Container (Left-Aligned Full-Width) */}
      <div className="max-w-4xl mx-auto w-full relative z-20 text-left flex flex-col items-start">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 flex flex-col items-start text-left w-full"
        >
          {/* Centered Top Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#cf59e6]/5 border border-[#cf59e6]/10 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#cf59e6] animate-pulse" />
            <span className="text-xs font-semibold text-[#cf59e6] tracking-wide uppercase select-none font-mono">
              MERN STACK DEVELOPER
            </span>
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] select-none"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-mono text-[#c4c4c4]/80 block mb-4 font-semibold tracking-wider">
                Hello(); I'm
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-wide mb-3">
                <span className="shifting-gradient-text inline-block">
                  {renderJelloText("Ahamed.")}
                </span>
              </span>
              <span className="block text-3xl sm:text-5xl md:text-6xl font-serif-display font-bold tracking-wide text-white normal-case mt-4 leading-tight">
                {renderJelloTextWhite("MERN Stack Developer")}
              </span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm md:text-base text-white max-w-2xl leading-relaxed font-light font-sans"
          >
            Motivated MERN Stack Developer with internship and freelancing experience in building real-time web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in REST API development, UI/UX architecture, and modern web technologies. Familiar with current AI technologies, workflow automation, and AI-assisted development tools, with a passion for building scalable digital solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="pt-4"
          >
            <a href="#projects" className="cssbuttons-io-button select-none decoration-none">
              View Work
              <div className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
