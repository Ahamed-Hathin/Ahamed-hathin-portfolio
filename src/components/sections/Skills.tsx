import { motion } from 'framer-motion';
import { Code2, PenTool, Database } from 'lucide-react';
import { 
  SiReact, 
  SiJavascript, 
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiTailwindcss,
  SiMui,
  SiFramer, 
  SiFigma, 
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiPython,
  SiSupabase,
  SiCanva,
  SiGit,
  SiGithub,
  SiN8N
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Engineering',
    icon: Code2,
    items: [
      { name: 'React.js', Icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', Icon: SiCss, color: '#1572B6' },
      { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Material UI', Icon: SiMui, color: '#007FFF' },
      { name: 'Framer Motion', Icon: SiFramer, color: '#0055FF' },
    ],
  },
  {
    title: 'Backend Development & DB',
    icon: Database,
    items: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', Icon: SiExpress, color: '#ffffff' },
      { name: 'REST API', Icon: Code2, color: '#cf59e6' },
      { name: 'JWT Auth', Icon: SiJsonwebtokens, color: '#fb015b' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'Mongoose', Icon: Database, color: '#880000' },
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'Supabase', Icon: SiSupabase, color: '#3ECF8E' },
    ],
  },
  {
    title: 'Design & Tools',
    icon: PenTool,
    items: [
      { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
      { name: 'Canva', Icon: SiCanva, color: '#00C4CC' },
      { name: 'Framer', Icon: SiFramer, color: '#0055FF' },
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#ffffff' },
      { name: 'n8n', Icon: SiN8N, color: '#FF6C37' },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-[#c4c4c4] text-lg">
            A visual directory of core technologies, environments, and specialized tools I design and develop with.
          </p>
        </motion.div>

        {/* 3 Clean Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const CatIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                className="bg-[#1a1a29] border border-[#292929] rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:border-white/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#11111b] border border-[#292929] flex items-center justify-center text-[#cf59e6] shadow-sm">
                      <CatIcon size={20} strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Flex Container of Small Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.items.map((item) => {
                      const ItemIcon = item.Icon;
                      return (
                        <div
                          key={item.name}
                          className="group/pill inline-flex items-center gap-2 px-3 py-1.5 bg-[#11111b] border border-[#292929] rounded-full text-xs font-semibold text-[#c4c4c4] hover:bg-[#1a1a29] hover:border-[#cf59e6]/40 hover:text-white hover:shadow-[0_2px_10px_rgba(207,89,230,0.05)] transition-all duration-200 cursor-default"
                        >
                          <ItemIcon color={item.color} size={14} className="group-hover/pill:scale-110 transition-transform duration-200" />
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
