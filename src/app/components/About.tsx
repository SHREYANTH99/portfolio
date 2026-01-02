import { motion } from 'motion/react';
import { Code, Brain, Shield, Database, GraduationCap, Award } from 'lucide-react';

export function About() {
  const skills = [
    {
      icon: Code,
      title: 'Programming Languages',
      description: 'Strong foundation in modern programming languages and web technologies.',
      skills: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML/CSS']
    },
    {
      icon: Brain,
      title: 'AI/ML & Data Science',
      description: 'Expertise in machine learning, computer vision, and NLP applications.',
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'CNN']
    },
    {
      icon: Database,
      title: 'Tools & Frameworks',
      description: 'Proficient in databases, version control, and development environments.',
      skills: ['MySQL', 'DBMS', 'Git', 'VS Code']
    }
  ];

  const education = [
    {
      degree: 'B.E. in Computer Science and Engineering',
      institution: 'MVSR Engineering College',
      location: 'Hyderabad, India',
      period: 'Dec 2020 – Jun 2024',
      grade: 'CGPA: 7.7/10'
    },
    {
      degree: 'Intermediate, MPC',
      institution: 'Sri Chaitanya Junior College',
      location: 'Hyderabad, India',
      period: 'Jun 2018 – Apr 2020',
      grade: '96.4%'
    }
  ];

  const certifications = [
    'Machine Learning - Coursera (2023)',
    'Supervised ML: Regression & Classification - Stanford University (2023)',
    'Advanced Learning Algorithms - Stanford University (2023)',
    'Machine Learning Fundamentals - AWS Academy (2022)',
    'Database Management Systems - IIT Bombay (2022)',
    'Java Programming - IIT Bombay (2022)'
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">About Me</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Detail-oriented and highly motivated Computer Science and Engineering graduate with a solid foundation in full-stack development, machine learning, and cybersecurity. Demonstrated ability to apply data structures, algorithms, and modern programming languages to solve real-world problems through impactful academic projects.
          </p>
        </motion.div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-purple-500/20 p-8 rounded-xl hover:bg-white/10 hover:border-purple-500/40 transition-all"
            >
              <div className="w-14 h-14 bg-purple-600/30 border border-purple-400/50 rounded-lg flex items-center justify-center mb-6">
                <skill.icon className="w-7 h-7 text-purple-300" />
              </div>
              
              <h3 className="mb-3 text-white">{skill.title}</h3>
              <p className="text-slate-300 mb-4">{skill.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm text-purple-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-purple-300" />
            <h3 className="text-white">Education</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-purple-500/20 p-6 rounded-xl"
              >
                <h4 className="text-white mb-2">{edu.degree}</h4>
                <p className="text-purple-300 mb-2">{edu.institution}</p>
                <p className="text-slate-400 text-sm mb-1">{edu.location}</p>
                <p className="text-slate-400 text-sm mb-2">{edu.period}</p>
                <p className="text-purple-200">{edu.grade}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-purple-300" />
            <h3 className="text-white">Certifications</h3>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-300">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}