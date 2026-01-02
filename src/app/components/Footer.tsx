import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-purple-500/20 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4 text-white">SP.</div>
            <p className="text-slate-300">
              Computer Science Engineer passionate about AI/ML and building impactful solutions.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-slate-300 hover:text-purple-300 transition-colors">
                About
              </a>
              <a href="#projects" className="block text-slate-300 hover:text-purple-300 transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-slate-300 hover:text-purple-300 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/shreyanthpasunuri"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-400/50 flex items-center justify-center hover:bg-purple-500/30 transition-colors"
              >
                <Github className="w-5 h-5 text-purple-300" />
              </a>
              <a
                href="https://linkedin.com/in/shreyanth-pasunuri"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-400/50 flex items-center justify-center hover:bg-purple-500/30 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-purple-300" />
              </a>
              <a
                href="mailto:shreyanthpasunuri999@gmail.com"
                className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-400/50 flex items-center justify-center hover:bg-purple-500/30 transition-colors"
              >
                <Mail className="w-5 h-5 text-purple-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8 text-center text-slate-300">
          <p>© {new Date().getFullYear()} Shreyanth Pasunuri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}