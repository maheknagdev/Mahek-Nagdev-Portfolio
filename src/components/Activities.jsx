import { motion } from 'framer-motion'
import { Users, Lightbulb, Code, BookOpen } from 'lucide-react'

const Activities = () => {
  const activities = [
    {
      role: "Project lead",
      organization: "B.E. Final Year Project",
      period: "2021 - 2022",
      description: "Led a major technical project in my university where our solution won the best technical paper award",
      icon: <BookOpen size={32} />,
      color: "#D4A5B3",
      highlights: [
        "Led a group of 4",
        "Responsible for presentations",
        "Designed an efficient solution to make a useful impact on the agricultural industry"
      ]
    },
    {
      role: "Technical Society Council Member",
      organization: "VESIT Computer Engineering Department",
      period: "2020 - 2022",
      description: "Led technical initiatives and organized coding competitions, workshops, and tech talks for 200+ students",
      icon: <Users size={32} />,
      color: "#8B1538",
      highlights: [
        "Organized 5+ technical workshops",
        "Coordinated annual tech fest",
        "Mentored 20+ juniors in coding"
      ]
    },
    {
      role: "Technical Roadshow Participant",
      organization: "IEEE - VESIT",
      period: "2019 - 2020",
      description: "Participated in a technical proposal competition, built innovative solutions under time constraints",
      icon: <Code size={32} />,
      color: "#A3415B",
      highlights: [
        "Built a model solution 24-48 hours",
        "Presented in front of a panel",
        "Collaborated with diverse teams"
      ]
    },
    {
      role: "Open Source Contributor",
      organization: "GitHub Community",
      period: "2020 - Present",
      description: "Contribute to open-source projects and maintain personal repositories showcasing various technologies",
      icon: <Lightbulb size={32} />,
      color: "#410A15",
      highlights: [
        "5+ public repositories",
        "Active in tech forums"
      ]
    }
  ]

  return (
    <section id="activities" className="activities-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Beyond Work</span>
          <h2 className="section-title">
            Leadership & <span className="gradient-text">Activities</span>
          </h2>
          <p className="section-description">
            Community involvement, leadership roles, and extracurricular contributions
          </p>
        </motion.div>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="activity-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="activity-header">
                <div className="activity-icon" style={{ background: activity.color }}>
                  {activity.icon}
                </div>
                <div className="activity-title">
                  <h3>{activity.role}</h3>
                  <p className="activity-org">{activity.organization}</p>
                  <span className="activity-period">{activity.period}</span>
                </div>
              </div>
              <p className="activity-description">{activity.description}</p>
              <div className="activity-highlights">
                {activity.highlights.map((highlight, idx) => (
                  <span key={idx} className="activity-highlight">
                    ✓ {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities