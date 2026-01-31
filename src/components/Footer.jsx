import { Heart, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">Mahek Nagdev</h3>
            <p className="footer-tagline">
              Building scalable solutions with passion and precision
            </p>
            <div className="footer-social">
              <a href="https://github.com/maheknagdev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mahek-nagdev-382a7b1b8/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:nagdev.mahek2310@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
              <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <ul className="footer-contact">
              <li>Boston, MA</li>
              <li><a href="mailto:nagdev.mahek2310@gmail.com">nagdev.mahek2310@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2024 Mahek Nagdev. Built with <Heart size={14} className="heart" /> using React & Framer Motion
          </p>
          <p className="footer-note">
            Seeking Summer 2026 Internships
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer