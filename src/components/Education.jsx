import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award as AwardIcon } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Northeastern University",
      location: "Boston, MA",
      period: "September 2025 - Expected Graduation 2027",
      gpa: "GPA: 3.7/4.0 (Fall 2025)",
      logo: "🎓",
      color: "#8B1538",
      courses: [
        "Artificial Intelligence",
        "Programming Design Paradigm",
        "Database Management Systems",
        "Algorithms"
      ],
      achievements: [
        "Built a full-stack transplant management system using Django and MySQL",
        "Developed a Java calendar management system with Swing GUI implementing MVC architecture"
      ]
    },
    {
      degree: "Bachelor of Engineering in Computers",
      school: "Vivekanand Education Society's Institute of Technology",
      location: "Mumbai, India",
      period: "August 2018 - August 2022",
      gpa: "CGPA: 8.94/10",
      logo: "🎓",
      color: "#A3415B",
      courses: [
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Software Engineering",
        "Computer Graphics"
      ],
      achievements: [
        "Won Best Technical Paper at ICEAT 2022",
        "Part of Technical Society Council",
        "Ranker in Communication Skills"
      ]
    }
  ]

  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Academic Background</span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Learning</span>
          </h2>
          <p className="section-description">
            My academic journey in computer science and engineering
          </p>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="edu-header">
                <div className="edu-logo" style={{ background: edu.color }}>
                  {edu.logo}
                </div>
                <div className="edu-title">
                  <h3>{edu.degree}</h3>
                  <p className="edu-school">{edu.school}</p>
                </div>
              </div>

              <div className="edu-meta">
                <span className="edu-meta-item">
                  <MapPin size={16} />
                  {edu.location}
                </span>
                <span className="edu-meta-item">
                  <Calendar size={16} />
                  {edu.period}
                </span>
              </div>

              <div className="edu-gpa">
                <AwardIcon size={20} />
                <span>{edu.gpa}</span>
              </div>

              <div className="edu-section">
                <h4>Key Coursework</h4>
                <div className="edu-tags">
                  {edu.courses.map((course, idx) => (
                    <span key={idx} className="edu-tag">{course}</span>
                  ))}
                </div>
              </div>

              <div className="edu-section">
                <h4>Highlights</h4>
                <ul className="edu-achievements">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education