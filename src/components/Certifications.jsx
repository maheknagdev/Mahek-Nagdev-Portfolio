import { motion } from 'framer-motion'
import { Award, CheckCircle } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: "Salesforce Certified CPQ Specialist",
      issuer: "Salesforce",
      date: "2024",
      credentialId: "Active",
      icon: "☁️",
      color: "#8B1538"
    },
    {
      title: "Salesforce Certified Platform Developer I",
      issuer: "Salesforce",
      date: "2023",
      credentialId: "Active",
      icon: "💻",
      color: "#A3415B"
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      date: "2024",
      credentialId: "Active",
      icon: "🤖",
      color: "#D4A5B3"
    },
    {
      title: "Salesforce Certified App Builder",
      issuer: "Salesforce",
      date: "2023",
      credentialId: "Active",
      icon: "🏗️",
      color: "#410A15"
    },
    {
      title: "Salesforce Certified Administrator",
      issuer: "Salesforce",
      date: "2023",
      credentialId: "Active",
      icon: "⚙️",
      color: "#8B1538"
    }
  ]

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Professional Credentials</span>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-description">
            Industry-recognized certifications demonstrating expertise in Salesforce ecosystem
          </p>
        </motion.div>

        <div className="certifications-grid-221">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className={`cert-card ${index === 4 ? 'cert-card-centered' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="cert-icon" style={{ background: cert.color }}>
                {cert.icon}
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-meta">
                  <span className="cert-date">
                    <CheckCircle size={16} />
                    Issued {cert.date}
                  </span>
                  <span className="cert-status active">
                    {cert.credentialId}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications