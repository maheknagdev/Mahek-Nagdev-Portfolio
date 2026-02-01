import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, TrendingUp, Award, Users, Code } from 'lucide-react'
import { useState } from 'react'

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)

  const experiences = [
    {
      role: "Salesforce Developer",
      company: "Deloitte USI",
      location: "Mumbai, India",
      period: "January 2023 - August 2025",
      duration: "2 years 8 months",
      type: "Full-time",
      logo: "💼",
      color: "#8B1538",
      positions: [
        { title: "Consultant", period: "June 2025 - August 2025" },
        { title: "Analyst", period: "January 2023 - May 2025" }
      ],
      description: "Architected global Salesforce solutions and led cross-functional teams across multiple international clients",
      achievements: [
        {
          text: "Architected and delivered global Salesforce CPQ rollout as SME worth €50M across 5 business units serving 500+ users",
          icon: <TrendingUp size={18} />,
          metric: "€50M value"
        },
        {
          text: "Developed 23+ automation solutions using Apex triggers, Flows, and Lightning Web Components, reducing manual processing by 30%",
          icon: <Code size={18} />,
          metric: "30% efficiency"
        },
        {
          text: "Led cross-functional agile teams across 3 major clients (US, France, Belgium) achieving 35% efficiency improvement in quote-to-cash cycles",
          icon: <Users size={18} />,
          metric: "35% faster"
        },
        {
          text: "Delivered 10+ production releases with 95%+ test coverage, maintaining zero critical defects and defect density <0.5%",
          icon: <Award size={18} />,
          metric: "95%+ coverage"
        },
        {
          text: "Received 3 Deloitte USI awards for excellence in Sales, Service, and CPQ delivery",
          icon: <Award size={18} />,
          metric: "3 awards"
        },
        {
          text: "Earned 5 Salesforce certifications (CPQ Specialist, Platform Developer 1, AI Associate, App Builder, Administrator)",
          icon: <Award size={18} />,
          metric: "5 certifications"
        }
      ],
      skills: ["Salesforce CPQ", "APEX", "Lightning Web Components", "Agile/Scrum", "CI/CD", "Test-Driven Development", "Python", "React.js"],
      highlights: {
        impact: "€50M Project Value",
        efficiency: "35% improvement",
        recognition: "3 Deloitte Awards"
      }
    },
    {
      role: "Web Technologies Intern",
      company: "Intellect Select Pvt. Ltd.",
      location: "Bengaluru, India",
      period: "September 2022 - January 2023",
      duration: "5 months",
      type: "Internship",
      logo: "🚀",
      color: "#A3415B",
      description: "Developed scalable backend solutions and optimized data pipelines",
      achievements: [
        {
          text: "Implemented 10+ PostgreSQL stored functions processing 50K+ JSON records daily",
          icon: <Code size={18} />,
          metric: "50K+ records"
        },
        {
          text: "Developed RESTful Django APIs integrating 5+ data sources, reducing query latency by 40%",
          icon: <TrendingUp size={18} />,
          metric: "40% faster"
        },
        {
          text: "Automated data transformations reducing pipeline execution time by 45%",
          icon: <Code size={18} />,
          metric: "45% reduction"
        }
      ],
      skills: ["Django", "PostgreSQL", "REST API", "Python", "Data Processing"],
      highlights: {
        performance: "45% faster pipelines",
        scale: "50K+ daily records",
        optimization: "40% latency reduction"
      }
    },
    {
      role: "Backend Developer Intern",
      company: "Auto-DL",
      location: "Mumbai, India",
      period: "June 2021 - August 2021",
      duration: "3 months",
      type: "Internship",
      logo: "⚡",
      color: "#D4A5B3",
      description: "Built modular Python backend and authentication systems",
      achievements: [
        {
          text: "Architected modular Python backend using OOP principles, improving code reusability by 60%",
          icon: <Code size={18} />,
          metric: "60% reusability"
        },
        {
          text: "Implemented secure OTP-based authentication system serving 500+ users",
          icon: <Users size={18} />,
          metric: "500+ users"
        },
        {
          text: "Achieved 98% test coverage with zero critical bugs in production",
          icon: <Award size={18} />,
          metric: "98% coverage"
        }
      ],
      skills: ["Python", "OOP", "Authentication", "Testing", "Backend Development"],
      highlights: {
        quality: "98% test coverage",
        architecture: "60% code reusability",
        users: "500+ active users"
      }
    }
  ]

  return (
    <section id="experience" className="experience-new">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Career Journey</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-description">
            2.5+ years of experience in Salesforce development, cloud computing, and full-stack engineering
          </p>
        </motion.div>

        <div className="experience-container">
          {/* Company Tabs - Left Side */}
          <motion.div 
            className="experience-tabs"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`experience-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
                style={{ '--tab-color': exp.color }}
              >
                <div className="tab-logo">{exp.logo}</div>
                <div className="tab-info">
                  <h4>{exp.company}</h4>
                  <span>{exp.duration}</span>
                </div>
                {activeTab === index && <div className="tab-indicator" />}
              </button>
            ))}
          </motion.div>

          {/* Experience Details - Right Side */}
          <motion.div 
            className="experience-details"
            key={activeTab}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="experience-header">
              <div>
                <h3>{experiences[activeTab].role}</h3>
                
                {/* Sub-positions for combined roles */}
                {experiences[activeTab].positions && (
                  <div className="sub-positions">
                    {experiences[activeTab].positions.map((pos, idx) => (
                      <span key={idx} className="sub-position">
                        {pos.title} <span className="sub-period">({pos.period})</span>
                        {idx < experiences[activeTab].positions.length - 1 && <span className="separator">—</span>}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="experience-meta">
                  <span className="meta-item">
                    <Briefcase size={16} />
                    {experiences[activeTab].company}
                  </span>
                  <span className="meta-item">
                    <MapPin size={16} />
                    {experiences[activeTab].location}
                  </span>
                  <span className="meta-item">
                    <Calendar size={16} />
                    {experiences[activeTab].period}
                  </span>
                </div>
                <span className="type-badge-new" style={{ background: experiences[activeTab].color }}>
                  {experiences[activeTab].type}
                </span>
              </div>
            </div>

            <p className="experience-description">{experiences[activeTab].description}</p>

            {/* Key Highlights */}
            <div className="experience-highlights">
              {Object.entries(experiences[activeTab].highlights).map(([key, value]) => (
                <div key={key} className="highlight-box">
                  <span className="highlight-label">{key}</span>
                  <span className="highlight-value">{value}</span>
                </div>
              ))}
            </div>

            {/* Achievements - Single Box with Bulleted List */}
            <div className="achievements-new">
              <h4>Key Achievements</h4>
              <div className="achievements-single-box">
                <ul className="achievements-list">
                  {experiences[activeTab].achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <div className="achievement-bullet-icon" style={{ background: experiences[activeTab].color }}>
                        {achievement.icon}
                      </div>
                      <div className="achievement-text">
                        {achievement.text}
                        <span className="achievement-metric-inline">{achievement.metric}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Skills Used */}
            <div className="experience-skills">
              <h4>Technologies & Skills</h4>
              <div className="skills-tags">
                {experiences[activeTab].skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag-exp">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience