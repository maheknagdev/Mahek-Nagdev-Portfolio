import { motion } from 'framer-motion'
import { Github, Award, ArrowUpRight, Code, Database, Cloud, Zap } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Variant Flow",
      subtitle: "AWS Genomics Data Pipeline",
      description: "Serverless genomics data processing pipeline using AWS Lambda, S3, DynamoDB, and API Gateway to process large VCF files, extract genetic variants, and visualize clinical insights through interactive React dashboard.",
      longDescription: "Building a complete serverless architecture for processing genomic variant data at scale. Implementing automated classification algorithms and real-time analytics dashboard for clinical insights.",
      tags: ["AWS Lambda", "S3", "DynamoDB", "API Gateway", "React", "Python"],
      github: "https://github.com/maheknagdev/variantflow",
      icon: <Cloud size={32} />,
      color: "#8B1538",
      metrics: [
        { label: "Processing Speed", value: "5x faster", icon: <Zap size={16} /> },
        { label: "Accuracy", value: "95%+", icon: <Database size={16} /> },
        { label: "Serverless", value: "100%", icon: <Cloud size={16} /> }
      ],
      category: "Cloud & AI",
      status: "Ongoing"
    },
    {
      id: 2,
      title: "Life Link",
      subtitle: "Organ Donation Management Platform",
      description: "Full-stack transplant management system using Django and MySQL with 18 normalized tables, 4 stored procedures, 6 triggers, and multi-criteria matching algorithms.",
      longDescription: "Engineered a life-critical system for organ donation matching. Implemented complex matching algorithms achieving 95%+ compatibility accuracy with real-time patient data processing.",
      tags: ["Django", "MySQL", "React", "REST API", "PostgreSQL"],
      github: "https://github.com/maheknagdev/lifelink",
      icon: <Database size={32} />,
      color: "#A3415B",
      metrics: [
        { label: "Match Accuracy", value: "95%+", icon: <Database size={16} /> },
        { label: "DB Tables", value: "18", icon: <Code size={16} /> },
        { label: "API Endpoints", value: "25+", icon: <Zap size={16} /> }
      ],
      category: "Full Stack"
    },
    {
      id: 3,
      title: "Event Master",
      subtitle: "Advanced Calendar System",
      description: "Java calendar application with Swing GUI implementing MVC architecture, featuring timezone-aware event handling and complex recurring series.",
      longDescription: "Developed a sophisticated calendar management system with support for multiple interaction modes and complex event scheduling patterns.",
      tags: ["Java", "Swing", "MVC", "JUnit", "Design Patterns"],
      github: "https://github.com/maheknagdev/eventmaster",
      icon: <Code size={32} />,
      color: "#D4A5B3",
      metrics: [
        { label: "Test Coverage", value: "95%", icon: <Code size={16} /> },
        { label: "Design Patterns", value: "5+", icon: <Database size={16} /> }
      ],
      category: "Desktop App"
    },
    {
      id: 4,
      title: "Krushi Vikas",
      subtitle: "Agriculture ML Platform",
      description: "Django + ML platform with crop prediction (99% accuracy), plant disease detection (95%), tool rentals, and climate updates.",
      longDescription: "Won Best Technical Paper at ICEAT 2022. Integrated machine learning models for agricultural decision support with real-time weather data.",
      tags: ["Machine Learning", "Django", "Computer Vision", "Python", "TensorFlow"],
      github: "https://github.com/maheknagdev/krushivikas",
      icon: <Zap size={32} />,
      color: "#410A15",
      metrics: [
        { label: "Crop Prediction", value: "99%", icon: <Zap size={16} /> },
        { label: "Disease Detection", value: "95%", icon: <Database size={16} /> }
      ],
      category: "Machine Learning",
      award: "Best Technical Paper - ICEAT 2022"
    }
  ]

  const categories = ["All", "Cloud & AI", "Full Stack", "Desktop App", "Machine Learning"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="projects-new">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-description">
            Showcase of my recent work in cloud computing, full-stack development, and machine learning
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - 2 Columns */}
        <div className="projects-grid-simple">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card-simple"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Icon Header */}
              <div className="project-icon-header" style={{ background: project.color }}>
                {project.icon}
              </div>

              {/* Badges */}
              <div className="project-badges">
                <span className="category-badge">{project.category}</span>
                {project.status && (
                  <span className="status-badge">{project.status}</span>
                )}
              </div>

              {project.award && (
                <div className="project-award-simple">
                  <Award size={14} />
                  <span>{project.award}</span>
                </div>
              )}

              {/* Content */}
              <div className="project-content-simple">
                <div className="project-header-simple">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-subtitle-simple">{project.subtitle}</p>
                  </div>
                </div>

                <p className="project-description-simple">
                  {hoveredProject === project.id ? project.longDescription : project.description}
                </p>

                {/* Metrics */}
                <div className="project-metrics-simple">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="metric-simple">
                      <span className="metric-icon-simple">{metric.icon}</span>
                      <div>
                        <div className="metric-value-simple">{metric.value}</div>
                        <div className="metric-label-simple">{metric.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="project-tech-simple">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag-simple">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <motion.div 
                className="project-hover-effect"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>Want to see more of my work?</p>
          <a href="https://github.com/maheknagdev" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Github size={20} />
            View All on GitHub
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects