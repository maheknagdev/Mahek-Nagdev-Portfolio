import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, ExternalLink } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          {/* Left Side - Text Content */}
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="hero-greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hello,
            </motion.span>
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I am <span className="gradient-text">Mahek</span>
            </motion.h1>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Delivering efficient, scalable solutions to transform your tech vision into reality. <br/>
              MS CS Student @ Northeastern University. <br/>
              Former Consultant @ Deloitte USI.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <button onClick={scrollToContact} className="btn btn-primary">
                <Mail size={18} />
                Hire Me
              </button>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <ExternalLink size={18} />
                View Resume
                </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-image-wrapper">
              <div className="image-main">
                <img 
                  src="/headshot.png" 
                  alt="Mahek Nagdev"
                />
              </div>
              <div className="image-decoration-1"></div>
              <div className="image-decoration-2"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section Below */}
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="stat">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat">
            <span className="stat-number">5</span>
            <span className="stat-label">Certifications</span>
          </div>
          <div className="stat">
            <span className="stat-number">3</span>
            <span className="stat-label">Awards Received</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero