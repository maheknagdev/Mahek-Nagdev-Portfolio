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
              I'm a <strong>Master's student in Computer Science at Northeastern University</strong> with 
              2.5 years of professional experience as a Salesforce Developer and Consultant at Deloitte USI.
            </p>
            <p>
              My journey in technology has been driven by a passion for building <strong>scalable, efficient systems</strong> that 
              solve real-world problems. At Deloitte, I architected global Salesforce CPQ rollouts, 
              developed 23+ automation solutions, and led cross-functional teams across multiple international clients 
              in the US, France, and Belgium.
            </p>
            <p>
              Currently, I'm expanding my expertise in <strong>cloud computing</strong> and <strong>full-stack development</strong>, 
              with hands-on projects involving AWS services (Lambda, S3, DynamoDB), database design, and modern web frameworks. 
              I've successfully delivered projects ranging from genomics data processing pipelines to life-critical organ 
              donation management systems.
            </p>
            <p>
              I believe in writing <strong>clean, maintainable code</strong> and following best practices in software development. 
              My approach combines technical excellence with strong problem-solving skills, test-driven development, 
              and a commitment to delivering high-quality solutions that exceed expectations.
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