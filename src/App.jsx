
import { useState } from 'react'
import './App.css'

const profileImage =
  'img/pp.png'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'GitHub',
  'Responsive Design',
  'UI/UX Basics',
]

const projects = [
  {
    name: 'JavaScript Stopwatch',
    description:
      'A clean stopwatch app with start, pause, and reset controls. It was built to practice DOM manipulation, timing logic, and interactive UI behavior.',
    link: 'https://github.com/bibekshrestha77/StopWatch',
  },
  {
    name: 'Random Password Generator',
    description:
      'A password generator that creates strong random passwords based on selected length and character rules. This project focused on JavaScript logic and practical user experience.',
    link: 'https://github.com/bibekshrestha77/Random-Password-Generator',
  },
]

const socials = [
  { name: 'GitHub', url: 'https://github.com/bibekshrestha77' },
  { name: 'Facebook', url: 'https://www.facebook.com/bibek.shrestha.750554' },
  { name: 'Instagram', url: 'https://www.instagram.com/biibek.stha/' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bibek-shrestha-929348283/' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Bibek Shrestha</div>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Frontend Developer • BCA Student</p>
            <h1>Building useful digital experiences from the ground up.</h1>
            <p className="subtitle">
              I am Bibek Shrestha, a student learning web development with a focus on
              front-end design, user-friendly interfaces, and real-world problem solving.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#projects">
                View Projects
              </a>
              <a className="secondary-btn" href="#contact">
                Contact Me
              </a>
            </div>

            <ul className="mini-stats" aria-label="Quick stats">
              <li>
                <strong>2+</strong>
                <span>Projects</span>
              </li>
              <li>
                <strong>100%</strong>
                <span>Curious</span>
              </li>
              
            </ul>
          </div>

          <div className="profile-card" aria-label="Profile summary">
            <img className="avatar" src={profileImage} alt="Bibek Shrestha" />
            <div className="profile-body">
              <p className="profile-label">Currently learning</p>
              <h2>HTML, CSS, JavaScript & React</h2>
              <p>
                Passionate about building practical interfaces and improving my skills one
                project at a time.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="content-section">
          <p className="section-tag">About Me</p>
          <h2>Driven by learning and building.</h2>
          <p>
            Hi, I’m Bibek Shrestha. I am currently studying BCA and learning how to turn
            ideas into functional and visually appealing web experiences. I enjoy working
            on front-end projects, improving my coding skills, and understanding how good
            design and clean code work together.
          </p>
          <p>
            My goal is to keep growing as a developer, build meaningful projects, and take
            the next step toward internships and real industry experience.
          </p>
        </section>

        <section id="skills" className="content-section">
          <p className="section-tag">Skills</p>
          <div className="skill-list" aria-label="Technology skills">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section">
          <p className="section-tag">Featured Projects</p>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-badge">Project</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <p className="section-tag">Let’s Connect</p>
          <h2>Open to learning, collaboration, and internship opportunities.</h2>
          <p>
            I’m currently building my portfolio and looking for chances to grow through
            hands-on projects and internship experience.
          </p>

          <div className="social-links" aria-label="Social media links">
            {socials.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noreferrer">
                {social.name}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
