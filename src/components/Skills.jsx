import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Award, Zap, Terminal } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "APEX", "SQL", "HTML/CSS"]
    },
    {
      icon: <Terminal size={32} />,
      title: "Frameworks",
      skills: ["React.js", "Django", "Node.js", "Flask", "Lightning Web Components"]
    },
    {
      icon: <Database size={32} />,
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB"]
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud & DevOps",
      skills: ["AWS (Lambda, S3, DynamoDB)", "Salesforce Platform", "Azure DevOps", "Git/GitHub"]
    },
    {
      icon: <Zap size={32} />,
      title: "Tools & Practices",
      skills: ["Agile/Scrum", "Test-Driven Development", "CI/CD Pipelines", "JIRA", "Postman"]
    },
    {
      icon: <Award size={32} />,
      title: "Certifications",
      skills: ["Salesforce CPQ Specialist", "Platform Developer 1", "AI Associate", "App Builder", "Administrator"]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="section-subtitle">Technologies I work with</div>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-header">
                <div className="skill-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills