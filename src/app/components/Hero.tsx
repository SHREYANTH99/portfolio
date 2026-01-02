import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-purple-400 mb-4"
          >
            Hello, I'm
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-white"
          >
            Shreyanth Pasunuri
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-purple-300 mb-6"
          >
            Full Stack Developer | AI/ML Enthusiast
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-slate-300 mb-6 max-w-lg"
          >
            Detail-oriented Computer Science graduate with expertise in full-stack development and machine learning. Passionate about leveraging AI/ML to solve real-world problems and create impactful solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-3 mb-6"
          >
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="w-4 h-4 text-purple-400" />
              <span>+91-9392162512</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a href="#projects" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="border-2 border-purple-500 text-purple-300 px-8 py-3 rounded-lg hover:bg-purple-500/20 transition-colors">
              Contact Me
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4"
          >
            <a href="https://github.com/shreyanthpasunuri" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/30 transition-colors">
              <Github className="w-5 h-5 text-purple-300" />
            </a>
            <a href="https://linkedin.com/in/shreyanth-pasunuri" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/30 transition-colors">
              <Linkedin className="w-5 h-5 text-purple-300" />
            </a>
            <a href="mailto:shreyanthpasunuri999@gmail.com" className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/30 transition-colors">
              <Mail className="w-5 h-5 text-purple-300" />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/50">
            <img
              src="https://images.unsplash.com/photo-1555066931-78c471f0d4ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwY29kaW5nJTIwbGFwdG9wfGVufDF8fHx8MTc2NzI3Mjg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Coding workspace"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600 rounded-full opacity-30 blur-2xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-30 blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
}