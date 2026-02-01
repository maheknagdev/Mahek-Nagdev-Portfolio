import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={28} />,
      label: "Email",
      value: "nagdev.mahek2310@gmail.com",
      link: "mailto:nagdev.mahek2310@gmail.com",
      color: "#7c212fff"
    },
    {
      icon: <Linkedin size={28} />,
      label: "LinkedIn",
      value: "mahek-nagdev",
      link: "https://www.linkedin.com/in/mahek-nagdev-382a7b1b8/",
      color: "#7c212fff"
    },
    {
      icon: <Github size={28} />,
      label: "GitHub",
      value: "mahekn23",
      link: "https://github.com/mahekn23",
      color: "#7c212fff"
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-subtitle">Let's build something amazing together</div>
        </motion.div>

        <motion.div
          className="contact-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="contact-text">
            I'm currently seeking <strong>Summer 2026 internship opportunities</strong> in Software Engineering, 
            Cloud Computing, and Full-Stack Development. Whether you have a question, want to collaborate 
            on a project, or just want to say hi, I'd love to hear from you!
          </p>
        </motion.div>

        <div className="contact-grid">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="contact-icon" style={{ backgroundColor: item.color }}>
                    {item.icon}
                  </div>
                  <h3>{item.label}</h3>
                  <p>{item.value}</p>
                </a>
              ) : (
                <>
                  <div className="contact-icon" style={{ backgroundColor: item.color }}>
                    {item.icon}
                  </div>
                  <h3>{item.label}</h3>
                  <p>{item.value}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="mailto:nagdev.mahek2310@gmail.com" className="btn btn-primary btn-large">
            <Mail size={20} />
            Send me an email
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact