import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Multimodal Content Moderation System',
      description: 'Built a real-time moderation tool using Python, NLP, and CNN models to detect unsafe content in both text and images. Achieved 85–90% detection accuracy, improving platform safety for over 1M+ daily users.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMG1hY2hpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjY4MzI1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Python', 'NLP', 'CNN', 'Computer Vision', 'AI/ML'],
      details: [
        'Integrated sentiment analysis, NER, and image classification',
        'Detected NSFW, nudity, and violence content',
        '85-90% detection accuracy'
      ]
    },
    {
      title: 'Pixel Semantic Segmentation for Cancer Detection',
      description: 'Developed a semantic segmentation model to classify pixels in histopathological images and detect cancerous regions. Achieved 85% accuracy using convolutional neural networks (CNNs).',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW1hZ2luZ3xlbnwxfHx8fDE3NjY4MzI1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Computer Vision', 'Deep Learning', 'CNN', 'Python', 'Medical AI'],
      details: [
        'Labeled images using supervised learning',
        'Evaluated on tissue-level datasets',
        '85% accuracy during testing'
      ]
    }
  ];

  const internships = [
    {
      title: 'AI/ML Virtual Internship',
      organization: 'AICTE',
      description: 'Gained hands-on experience in artificial intelligence and machine learning concepts, working on practical AI/ML projects and applications.'
    },
    {
      title: 'Cybersecurity Virtual Internship',
      organization: 'AICTE',
      description: 'Developed skills in cybersecurity principles, threat analysis, and security best practices through virtual training programs.'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">Academic Projects</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Impactful projects demonstrating expertise in AI/ML, computer vision, and deep learning. 
            Each project showcases problem-solving skills and technical proficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:bg-white/10 hover:border-purple-500/40 transition-all group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="mb-2 text-white">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  {project.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 mb-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-400 text-sm">{detail}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm text-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Internships Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-white mb-8 text-center">Internships</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-purple-500/20 p-6 rounded-xl hover:bg-white/10 hover:border-purple-500/40 transition-all"
              >
                <h4 className="text-white mb-2">{internship.title}</h4>
                <p className="text-purple-300 mb-3">{internship.organization}</p>
                <p className="text-slate-300">{internship.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}