import { useState } from 'react'

const skills = [
  { icon: '</>', name: 'HTML & CSS', type: 'Web fundamentals' },
  { icon: 'JS', name: 'JavaScript', type: 'Programming' },
  { icon: '⚛', name: 'React', type: 'Frontend' },
  { icon: '⌘', name: 'Git & GitHub', type: 'Version control' },
  { icon: 'C', name: 'C / C++', type: 'Programming' },
  { icon: '▤', name: 'Problem solving', type: 'Core skill' },
]

const projects = [
  {
    number: '01',
    title: 'Personal Portfolio Website',
    category: 'WEB DEVELOPMENT',
    description: 'A responsive personal website to introduce myself, highlight my skills, and showcase selected projects.',
    tags: ['React', 'Vite', 'CSS'],
    link: '',
  },
  {
    number: '02',
    title: 'Student Project',
    category: 'ACADEMIC PROJECT',
    description: 'Replace this card with a real school project. Describe the problem, what you built, and the tools you used.',
    tags: ['Add technology', 'Add language'],
    link: '',
  },
  {
    number: '03',
    title: 'Hardware / Embedded Project',
    category: 'COMPUTER ENGINEERING',
    description: 'Add an electronics, microcontroller, or hardware project here when you are ready to feature one.',
    tags: ['Add hardware', 'Add tools'],
    link: '',
  },
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const githubUrl = 'https://github.com/Ursua_JakeAllen'

  const copyGithub = async () => {
    try {
      await navigator.clipboard.writeText(githubUrl)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.open(githubUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Jake Ursua home">
          <span className="brand-mark">J<span>.</span></span>
          <span className="brand-name">JAKE URSUA<span className="brand-dot">/</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub <Arrow diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> COMPUTER ENGINEERING STUDENT</div>
            <h1>Building ideas<br />into <span className="gradient-text">something real.</span></h1>
            <p className="hero-intro">
              Hi, I’m <strong>Jake Allen C. Ursua</strong> — a Computer Engineering student
              passionate about technology, programming, and building useful projects.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <Arrow /></a>
              <a className="button button-ghost" href="#contact">Get in touch <Arrow diagonal /></a>
            </div>
            <div className="hero-meta">
              <span><span className="meta-icon">⌁</span> Curious by nature</span>
              <span><span className="meta-icon">⌘</span> Learning by building</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Decorative code card">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="card-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span className="mono">jake.js</span>
                <span className="card-top-icon">⌘</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="line-number">01</span><span className="code-purple">const</span>&nbsp; <span className="code-blue">developer</span> = {'{'}</div>
                <div className="code-line indent"><span className="code-cyan">name</span>: <span className="code-green">'Jake Ursua'</span>,</div>
                <div className="code-line indent"><span className="code-cyan">field</span>: <span className="code-green">'Computer Engineering'</span>,</div>
                <div className="code-line indent"><span className="code-cyan">interests</span>: [</div>
                <div className="code-line indent-more"><span className="code-green">'software'</span>,</div>
                <div className="code-line indent-more"><span className="code-green">'hardware'</span>,</div>
                <div className="code-line indent-more"><span className="code-green">'problem solving'</span></div>
                <div className="code-line indent">],</div>
                <div className="code-line indent"><span className="code-cyan">mindset</span>: <span className="code-green">'always learning'</span></div>
                <div className="code-line">{'}'};</div>
                <div className="code-line code-comment">// turning curiosity into projects</div>
                <div className="code-cursor" />
              </div>
              <div className="card-footer"><span className="footer-pulse" /> OPEN TO LEARNING & COLLABORATION</div>
            </div>
            <div className="floating-chip chip-top"><span>✳</span> Creative thinking</div>
            <div className="floating-chip chip-bottom"><span>⌘</span> Code · Learn · Repeat</div>
            <div className="visual-index">01 <span>/</span> 04</div>
          </div>
          <a href="#about" className="scroll-cue"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <span>INTERESTED IN</span>
            <p>Software Development <b>✳</b> Web Technology <b>✳</b> Computer Hardware <b>✳</b> Continuous Learning</p>
          </div>
        </section>

        <section className="content-section section-wrap" id="about">
          <div className="section-heading">
            <span className="section-kicker">01 — ABOUT ME</span>
            <h2>A little about <span className="gradient-text">who I am.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-lead">
              <p className="large-copy">I’m interested in how technology works — from the code behind an application to the hardware that powers it.</p>
              <p className="body-copy">As a Computer Engineering student, I’m developing my skills through practice, coursework, and personal projects. I enjoy exploring new tools, learning how systems fit together, and finding practical ways to solve problems.</p>
              <p className="body-copy">This portfolio is a growing collection of my learning journey. I’ll continue adding projects and skills as I gain experience.</p>
            </div>
            <div className="about-details">
              <div className="detail-row"><span className="detail-label">CURRENT ROLE</span><span>Student</span></div>
              <div className="detail-row"><span className="detail-label">FIELD</span><span>Computer Engineering</span></div>
              <div className="detail-row"><span className="detail-label">FOCUS</span><span>Software & Technology</span></div>
              <div className="detail-row"><span className="detail-label">APPROACH</span><span>Learn by doing</span></div>
              <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">Visit my GitHub profile <Arrow diagonal /></a>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="skills">
          <div className="section-heading">
            <span className="section-kicker">02 — SKILLS & INTERESTS</span>
            <h2>Tools I’m exploring<span className="gradient-text">.</span></h2>
            <p className="section-description">A starting list of technologies and skills. Edit these to match what you have actually learned and used.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article className="skill-card" key={skill.name}>
                <div className="skill-card-top"><span className="skill-icon">{skill.icon}</span><span className="skill-number">0{index + 1}</span></div>
                <h3>{skill.name}</h3>
                <p>{skill.type}</p>
              </article>
            ))}
          </div>
          <p className="small-note"><span>✳</span> Skill cards are editable examples — remove anything you have not started learning yet.</p>
        </section>

        <section className="content-section projects-section" id="projects">
          <div className="section-wrap">
            <div className="section-heading projects-heading">
              <span className="section-kicker">03 — SELECTED PROJECTS</span>
              <h2>Things I’m <span className="gradient-text">working on.</span></h2>
              <p className="section-description">Replace the sample cards with your real school work, experiments, and personal builds.</p>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-visual">
                    <span className="project-number">{project.number} / PROJECT</span>
                    <div className="project-art">
                      {project.number === '01' ? <div className="art-browser"><div className="art-browser-top"><i /><i /><i /></div><div className="art-browser-lines"><b /><b /><b /><em /></div></div> :
                        project.number === '02' ? <div className="art-circuit"><span>+</span><i /><i /><i /><b>IDEA</b></div> :
                          <div className="art-chip"><span>CPU</span><i /><i /><i /><i /></div>}
                    </div>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    {project.link ? <a className="text-link" href={project.link} target="_blank" rel="noreferrer">View project <Arrow diagonal /></a> :
                      <span className="project-placeholder">ADD YOUR PROJECT LINK</span>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <span className="section-kicker">04 — CONTACT</span>
          <div className="contact-layout">
            <div>
              <h2>Have an idea?<br /><span className="gradient-text">Let’s connect.</span></h2>
              <p className="body-copy">I’m always interested in learning, sharing ideas, and connecting with people who enjoy building things with technology.</p>
            </div>
            <div className="contact-card">
              <div className="contact-card-label">FIND ME ONLINE</div>
              <a className="contact-link" href={githubUrl} target="_blank" rel="noreferrer"><span className="contact-icon">GH</span><span><b>GitHub</b><small>Ursua_JakeAllen</small></span><Arrow diagonal /></a>
              <button className="contact-link copy-button" type="button" onClick={copyGithub}><span className="contact-icon">↗</span><span><b>{copied ? 'Copied!' : 'Copy GitHub profile'}</b><small>{copied ? 'Link copied to clipboard' : 'Copy profile link'}</small></span><Arrow /></button>
              <p className="contact-hint">Add your public email and other social links here when you are ready.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">J<span>.</span></span><span className="brand-name">JAKE URSUA<span className="brand-dot">/</span></span></a>
        <p>Designed & built with curiosity.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Jake Allen C. Ursua</span><span>Made with React + Vite</span></div>
      </footer>
    </div>
  )
}

export default App
