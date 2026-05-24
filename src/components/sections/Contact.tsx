import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const formContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const formItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-[#c4c4c4] max-w-2xl text-lg">
            Have a project in mind or looking for a frontend engineer? Let's discuss how I can help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:hello@example.com"
                className="flex items-center gap-4 text-xl font-medium text-white hover:text-[#cf59e6] transition-colors"
              >
                <div className="w-12 h-12 bg-[#1a1a29] rounded-full flex items-center justify-center border border-[#292929] transition-colors hover:border-[#cf59e6] shadow-[0_2px_15px_rgba(0,0,0,0.15)]">
                  <Mail size={20} />
                </div>
                ahamedhaden.r@gmail.com
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/in/r-ahamed-haden-r-477274387/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-xl font-medium text-white hover:text-[#cf59e6] transition-colors"
              >
                <div className="w-12 h-12 bg-[#1a1a29] rounded-full flex items-center justify-center border border-[#292929] transition-colors hover:border-[#cf59e6] shadow-[0_2px_15px_rgba(0,0,0,0.15)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
                LinkedIn Profile
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/Ahamed-Hathin?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-xl font-medium text-white hover:text-[#cf59e6] transition-colors"
              >
                <div className="w-12 h-12 bg-[#1a1a29] rounded-full flex items-center justify-center border border-[#292929] transition-colors hover:border-[#cf59e6] shadow-[0_2px_15px_rgba(0,0,0,0.15)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </div>
                GitHub Profile
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            variants={formContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.div variants={formItem} className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-[#c4c4c4]">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-[#1a1a29] border border-[#292929] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf59e6] focus:border-transparent transition-all text-white placeholder-white/30"
                placeholder="John Doe"
              />
            </motion.div>
            <motion.div variants={formItem} className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[#c4c4c4]">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-[#1a1a29] border border-[#292929] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf59e6] focus:border-transparent transition-all text-white placeholder-white/30"
                placeholder="john@example.com"
              />
            </motion.div>
            <motion.div variants={formItem} className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-[#c4c4c4]">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-[#1a1a29] border border-[#292929] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#cf59e6] focus:border-transparent transition-all text-white placeholder-white/30 resize-none"
                placeholder="Tell me about your project..."
              />
            </motion.div>
            <motion.button
              variants={formItem}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8000ff] text-white rounded-xl font-medium hover:bg-[#cf59e6] shadow-[0_4px_20px_rgba(128,0,255,0.25)] hover:shadow-[0_4px_20px_rgba(207,89,230,0.3)] transition-all duration-300 cursor-pointer"
            >
              Send Message
              <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
