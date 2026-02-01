import { motion } from 'framer-motion'
import { Code, Cloud, Database, Zap } from 'lucide-react'

const About = () => {
  const expertise = [
    {
      icon: <Cloud size={32} />,
      title: "Salesforce Development",
      description: "Expert in Salesforce CPQ, APEX, Lightning Web Components, and enterprise-scale implementations. 5 Salesforce certifications and €50M+ project delivery."
    },
    {
      icon: <Code size={32} />,
      title: "Full-Stack Engineering",
      description: "Proficient in building scalable applications with React, Django, Node.js, and modern web technologies. Strong focus on clean architecture and maintainable code."
    },
    {
      icon: <Database size={32} />,
      title: "Cloud & Database Systems",
      description: "Hands-on experience with AWS (Lambda, S3, DynamoDB), MySQL, PostgreSQL, and MongoDB. Expertise in designing efficient data pipelines and architectures."
    },
    {
      icon: <Zap size={32} />,
      title: "Agile Delivery",
      description: "Led cross-functional teams across international clients using Agile/Scrum methodologies. Strong track record in CI/CD, test-driven development, and DevOps practices."
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Introduction</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-description">
            Passionate software engineer with expertise in enterprise solutions and cloud technologies
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="lead">
              MS CS student at Northeastern with 2.5 years at Deloitte USI, where I architected global Salesforce CPQ rollouts and led international teams. Currently expanding expertise in cloud computing and full-stack development through AWS projects, passionate about building scalable systems with clean code and TDD practices.
            </p>
          </motion.div>

          <motion.div 
            className="about-expertise"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="expertise-title">What I Do Best</h3>
            <div className="expertise-grid">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  className="expertise-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="expertise-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About