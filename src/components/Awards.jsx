import { motion } from 'framer-motion'
import { Award, Trophy, Star } from 'lucide-react'

const Awards = () => {
  const awards = [
    {
      title: "Excellence in Sales Delivery",
      organization: "Deloitte USI",
      date: "2024",
      description: "Recognized for outstanding performance in Salesforce Sales Cloud implementation and client satisfaction",
      icon: <Trophy size={32} />,
      color: "#8B1538"
    },
    {
      title: "Excellence in Service Delivery",
      organization: "Deloitte USI",
      date: "2024",
      description: "Awarded for exceptional work in Service Cloud optimization and support excellence",
      icon: <Star size={32} />,
      color: "#A3415B"
    },
    {
      title: "Excellence in CPQ Delivery",
      organization: "Deloitte USI",
      date: "2025",
      description: "Honored for architecting and delivering €50M global CPQ rollout across 5 business units",
      icon: <Award size={32} />,
      color: "#D4A5B3"
    },
    {
      title: "Best Technical Paper",
      organization: "ICEAT 2022 Conference",
      date: "2022",
      description: "Won Best Technical Paper for 'Krushi Vikas' - ML-powered agriculture platform with 99% crop prediction accuracy",
      icon: <Award size={32} />,
      color: "#410A15"
    }
  ]

  return (
    <section id="awards" className="awards-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Recognition</span>
          <h2 className="section-title">
            Awards & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-description">
            Recognition for excellence in professional delivery and academic research
          </p>
        </motion.div>

        <div className="awards-grid">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="award-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="award-icon-wrapper" style={{ background: award.color }}>
                {award.icon}
              </div>
              <div className="award-content">
                <h3>{award.title}</h3>
                <p className="award-org">{award.organization}</p>
                <span className="award-date">{award.date}</span>
                <p className="award-description">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards