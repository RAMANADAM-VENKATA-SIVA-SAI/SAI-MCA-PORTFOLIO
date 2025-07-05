"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ChevronDown,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  Award,
  Code,
  Briefcase,
  User,
  Download,
  ExternalLink,
} from "lucide-react"

// Personal Information
const PERSONAL_INFO = {
  name: "Ramanadam Venkata Siva Sai",
  title: "Computer Science Graduate | Python Developer | Data Analyst",
  email: "sairamanadam.mca@gmail.com",
  phone: "+91 9908881764",
  location: "Ipurupalem, Chirala, Andhra Pradesh",
  resumeLink: "https://drive.google.com/file/d/1EevWyA6U0CXI9vpB26pJcZo5u_aNP07X/view?usp=drivesdk",
  linkedin: "https://www.linkedin.com/in/venkata-siva-sai-ramanadam-6915692aa/",
  github: "https://github.com/RAMANADAM-VENKATA-SIVA-SAI",
}

// Navigation Menu Items
const NAVIGATION_ITEMS = ["About", "Education", "Skills", "Certificates", "Projects", "Experience", "Contact"]

// Education Data
const EDUCATION_DATA = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Mohan Babu University, Tirupati, AP",
    year: "2024 - 2026",
    status: "Pursuing",
    grade: "",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ih1O9x2p0rhXqI0mkaLgb7f9iZk2Z3.png",
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "Chaitanya Bharathi Degree College, Chirala, AP",
    year: "2021 - 2024",
    status: "Completed",
    grade: "CGPA: 9.02",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cbdc-qEeP90BL3RfhnrHaKmSXmJf7uPnJ8q.png",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Medhavi Junior College, Chirala, AP",
    year: "2019 - 2021",
    status: "Completed",
    grade: "Percentage: 70.6%",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sri%20medha%20clg.jpg-2FwlCz9Rgg7sozF9PtGhpQDcmSJpIl.jpeg",
  },
  {
    degree: "SSC (10th Grade)",
    institution: "Teja High School, Ipurupalem, Chirala, AP",
    year: "2018 - 2019",
    status: "Completed",
    grade: "CGPA: 8.3",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teja.jpg-98PeNdgKU5kzOOa0WudekGSNWvioZt.jpeg",
  },
]

// Skills Data
const SKILLS_DATA = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", logo: "🐍" },
      { name: "Java", logo: "☕" },
      { name: "JavaScript", logo: "🟨" },
    ],
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "HTML", logo: "🌐" },
      { name: "CSS", logo: "🎨" },
      { name: "React", logo: "⚛️" },
      { name: "Node.js", logo: "🟢" },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "MySQL", logo: "🗄️" },
      { name: "Power BI", logo: "📊" },
      { name: "Git", logo: "📝" },
      { name: "VS Code", logo: "💻" },
      { name: "Excel", logo: "📈" },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem Solving", logo: "🧩" },
      { name: "Team Work", logo: "🤝" },
      { name: "Communication", logo: "💬" },
      { name: "Critical Thinking", logo: "🧠" },
      { name: "Time Management", logo: "⏰" },
    ],
  },
]

// Certificates Data
const CERTIFICATES_DATA = [
  {
    title: "Google Data Analytics Certificate",
    issuer: "Google via Coursera",
    date: "2024",
    description:
      "Professional certificate in data analytics, covering data cleaning, analysis, and visualization using tools like SQL, R, and Tableau",
    link: "https://coursera.org/share/85505408af86cc76c14db22158432faf",
    icon: "📊",
    category: "Data Analytics",
  },
  {
    title: "Advanced Microsoft Power BI",
    issuer: "Microsoft via Coursera",
    date: "2024",
    description:
      "Advanced Power BI certification covering dashboard creation, DAX functions, data modeling, and business intelligence solutions",
    link: "https://coursera.org/share/53037e2b9768225ffb07cbf12df45a1f",
    icon: "📈",
    category: "Business Intelligence",
  },
  {
    title: "Advanced Excel Certificate",
    issuer: "Professional Training Institute",
    date: "2024",
    description:
      "Advanced Excel certification covering complex formulas, data analysis, pivot tables, macros, and advanced spreadsheet management techniques",
    link: "https://drive.google.com/file/d/1wEB-ft8WO0_v0a_WrfA8YLMCN5ifFqwI/view?usp=drive_link",
    icon: "📈",
    category: "Data Analysis",
  },
  {
    title: "Python Programming Certificate",
    issuer: "Professional Development Program",
    date: "2024",
    description:
      "Comprehensive Python programming certification covering advanced concepts, data structures, algorithms, and practical application development",
    link: "https://drive.google.com/file/d/1FuPgv6cycv7OyCinfh4knRe6YXdASKU_/view?usp=drive_link",
    icon: "🐍",
    category: "Programming",
  },
]

// Projects Data
const PROJECTS_DATA = [
  {
    title: "Pizza Sales Dashboard",
    description:
      "Built an interactive Power BI dashboard to analyze pizza sales and provide actionable business insights with SQL data processing.",
    technologies: ["Power BI", "SQL", "Excel", "DAX"],
    github: "https://github.com/RAMANADAM-VENKATA-SIVA-SAI/Power-Bi-Dash-board-project",
    features: [
      "Interactive data visualization",
      "Sales trend analysis",
      "KPI tracking and reporting",
      "Dynamic visual storytelling",
    ],
  },
  {
    title: "Rock-Paper-Scissors Game",
    description:
      "Interactive web-based game built with React.js featuring modern UI design and smooth gameplay mechanics.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/RVSS2002/GAME-RPS",
    features: ["Responsive design", "Interactive gameplay", "Score tracking", "Modern UI/UX"],
  },
]

// Contact Information
const CONTACT_INFO = [
  {
    icon: Mail,
    title: "Email",
    value: PERSONAL_INFO.email,
    link: `mailto:${PERSONAL_INFO.email}`,
  },
  {
    icon: Phone,
    title: "Phone",
    value: PERSONAL_INFO.phone,
    link: `tel:${PERSONAL_INFO.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    title: "Location",
    value: PERSONAL_INFO.location,
    link: "",
  },
]

// Helper Functions
const openResumeInNewTab = () => {
  window.open(PERSONAL_INFO.resumeLink, "_blank")
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

const handleContactClick = (link: string) => {
  if (link) {
    window.open(link)
  }
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "education", "skills", "certificates", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const downloadResume = () => {
    window.open("https://drive.google.com/file/d/1EevWyA6U0CXI9vpB26pJcZo5u_aNP07X/view?usp=drivesdk", "_blank")
  }

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <motion.nav className="main-navigation" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <div className="navigation-container">
          <div className="navigation-content">
            <motion.div className="logo-text" whileHover={{ scale: 1.05 }}>
              RVSS
            </motion.div>
            <div className="navigation-menu">
              {NAVIGATION_ITEMS.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-link ${activeSection === item.toLowerCase() ? "active" : ""}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <motion.div className="hero-background" style={{ y }} />
        <div className="hero-container">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {PERSONAL_INFO.name}
              <br />
              <span className="hero-subtitle">Siva Sai</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {PERSONAL_INFO.title}
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button onClick={() => scrollToSection("contact")} className="primary-button">
                Get In Touch
              </button>

              <button className="secondary-button" onClick={openResumeInNewTab}>
                <Download className="icon-small" />
                View My Resume
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="icon-large" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-bg-light">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <p className="about-text">
                I'm <strong>Ramanadam Venkata Siva Sai</strong>, a self-driven and highly motivated Computer Science
                graduate from Andhra Pradesh, currently pursuing my{" "}
                <strong>Master of Computer Applications (MCA)</strong> at Mohan Babu University, Tirupati (2024–2026).
                With a solid academic background — including a <strong>B.Sc. in Computer Science (CGPA: 9.02)</strong> —
                I bring strong technical and analytical skills to the table.
              </p>
              <p className="about-text">
                I'm passionate about technology and problem-solving, with hands-on experience in{" "}
                <strong>Python, Java, SQL, HTML, CSS, and JavaScript</strong>, as well as frameworks like{" "}
                <strong>React.js</strong> and <strong>Node.js</strong>. I've worked on practical projects such as a{" "}
                <strong>Power BI Sales Dashboard</strong> and a <strong>Rock-Paper-Scissors Game</strong>, showcasing my
                ability to apply concepts to real-world problems.
              </p>
              <p className="about-text">
                I recently completed a <strong>Python Developer Internship</strong> at{" "}
                <strong>Sri Sathya Sai Organisations</strong>, where I enhanced my Python skills through an
                advanced-level project.
              </p>
              <p className="about-text">
                In addition to my technical expertise, I bring strong{" "}
                <strong>communication, teamwork, and time management skills</strong> — making me a well-rounded
                candidate ready to contribute meaningfully to innovative and data-driven teams.
              </p>

              <div className="about-features">
                <motion.div className="feature-card" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <div className="feature-icon">
                    <Code className="icon-large text-white" />
                  </div>
                  <h3 className="feature-title">Development</h3>
                  <p className="feature-description">Full-stack development with modern technologies</p>
                </motion.div>

                <motion.div className="feature-card" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <div className="feature-icon">
                    <Award className="icon-large text-white" />
                  </div>
                  <h3 className="feature-title">Data Analysis</h3>
                  <p className="feature-description">Transforming data into actionable insights</p>
                </motion.div>

                <motion.div className="feature-card" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <div className="feature-icon">
                    <User className="icon-large text-white" />
                  </div>
                  <h3 className="feature-title">Problem Solving</h3>
                  <p className="feature-description">Analytical thinking and creative solutions</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Education</h2>
          </motion.div>

          <div className="education-list">
            <div className="education-items">
              {EDUCATION_DATA.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="education-card">
                    <div className="education-header">
                      <div className="education-header-content">
                        <div className="education-info">
                          <div className="education-logo">
                            <img src={edu.logo || "/placeholder.svg"} alt={`${edu.institution} logo`} />
                          </div>
                          <div>
                            <h3 className="education-degree">{edu.degree}</h3>
                            <p className="education-institution">{edu.institution}</p>
                          </div>
                        </div>
                        <span className="status-badge">{edu.status}</span>
                      </div>
                    </div>
                    <div className="education-content">
                      <div className="education-details">
                        <div className="education-date">
                          <Calendar className="icon-small" />
                          {edu.year}
                        </div>
                        {edu.grade && <div className="education-grade">{edu.grade}</div>}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-bg-green">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Technical Skills</h2>
          </motion.div>

          <div className="skills-grid">
            <div className="skills-categories">
              {SKILLS_DATA.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-category">
                    <div className="skill-category-header">
                      <h3 className="skill-category-title">{skillGroup.category}</h3>
                    </div>
                    <div className="skill-category-content">
                      <div className="skill-tags">
                        {skillGroup.skills.map((skill, skillIndex) => (
                          <motion.div key={skillIndex} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                            <div className="skill-tag">
                              <span className="skill-emoji">{skill.logo}</span>
                              <span>{skill.name}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Certificates & Achievements</h2>
            <p className="section-description">
              Professional certifications and achievements that validate my technical expertise and commitment to
              continuous learning.
            </p>
          </motion.div>

          <div className="certificates-grid">
            <div className="certificates-list">
              {CERTIFICATES_DATA.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="certificate-card">
                    <div className="certificate-header">
                      <div className="certificate-header-content">
                        <div className="certificate-info">
                          <div className="certificate-icon">{cert.icon}</div>
                          <div className="certificate-details">
                            <h3 className="certificate-title">{cert.title}</h3>
                            <p className="certificate-issuer">{cert.issuer}</p>
                          </div>
                        </div>
                        <motion.a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="certificate-link"
                        >
                          <ExternalLink className="icon-small" />
                        </motion.a>
                      </div>
                    </div>
                    <div className="certificate-content">
                      <div>
                        <p className="certificate-description">{cert.description}</p>
                        <div className="certificate-meta">
                          <div className="certificate-date">
                            <Calendar className="icon-small" />
                            {cert.date}
                          </div>
                          <span className="certificate-category">{cert.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="certificates-summary"
            >
              <div className="summary-card">
                <h3 className="summary-title">Continuous Learning Journey</h3>
                <p className="summary-description">
                  I believe in continuous improvement and staying updated with the latest technologies. These
                  certifications represent my commitment to professional growth and technical excellence.
                </p>
                <div className="summary-badges">
                  <span className="summary-badge">4 Professional Certifications</span>
                  <span className="summary-badge">Google & Microsoft Certified</span>
                  <span className="summary-badge">Verified Skills</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Badges Showcase</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f6f8;
      margin: 0;
      padding: 20px;
      color: #333;
    }
    header {
      background-color: #2d3748;
      color: white;
      padding: 20px;
      text-align: center;
    }
    h1 {
      margin: 0;
    }
    section {
      background: white;
      padding: 20px;
      margin-top: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    h2 {
      color: #2d3748;
    }
    ul {
      list-style: none;
      padding-left: 0;
    }
    li {
      margin-bottom: 15px;
      padding: 10px;
      border-left: 4px solid #4299e1;
      background-color: #edf2f7;
      border-radius: 4px;
    }
    a {
      color: #3182ce;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>

  <header>
    <h1>My Professional Badges</h1>
    <p>Certifications and Achievements</p>
  </header>

  <section id="badges">
    <h2>🎖️ Badges</h2>
    <ul>
      <li>
        <strong>Data Fundamentals</strong><br />
        <a href="https://drive.google.com/file/d/10pGZeb36Ii3Tiwx4GKyHQvJ5F6knVCEg/view?usp=drive_link" target="_blank">
          View Credential
        </a>
      </li>
      <li>
        <strong>Data Analysis Using Python</strong><br />
        <a href="https://drive.google.com/file/d/1jfah-RFYr_GgyIu58ODPlvXY1KXhmvjL/view?usp=drive_link" target="_blank">
          View Credential
        </a>
      </li>
      <li>
        <strong>Big Data Foundations</strong><br />
        <a href="https://drive.google.com/file/d/1Pr52sZlZqhezQQT-Vq-T5x0txmGkS_zT/view?usp=drive_link" target="_blank">
          View Credential
        </a>
      </li>
    </ul>
  </section>



      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Projects</h2>
          </motion.div>

          <div className="projects-grid">
            {PROJECTS_DATA.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="project-card">
                  <div className="project-header">
                    <div className="project-title-row">
                      <h3 className="project-title">{project.title}</h3>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="project-link"
                      >
                        <ExternalLink className="icon-small" />
                      </motion.a>
                    </div>
                    <p className="project-description">{project.description}</p>
                  </div>
                  <div className="project-content">
                    <div className="project-section">
                      <h4 className="project-section-title">Technologies:</h4>
                      <div className="project-technologies">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="technology-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="project-section">
                      <h4 className="project-section-title">Key Features:</h4>
                      <ul className="project-features">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>
                            <div className="feature-bullet"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section section-bg-light">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Experience</h2>
          </motion.div>

          <div className="experience-container">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-header-content">
                    <div>
                      <h3 className="experience-title">
                        <Briefcase className="icon-small experience-icon" />
                        Python Developer Intern
                      </h3>
                      <p className="experience-company">Sri Sathya Sai Organisations</p>
                    </div>
                    <span className="experience-badge">Internship</span>
                  </div>
                </div>
                <div className="experience-content">
                  <div className="experience-details">
                    <div className="experience-date">
                      <Calendar className="icon-small" />
                      February 2024 - April 2024
                    </div>
                    <div>
                      <h4 className="experience-project-title">Project: Advanced Python</h4>
                      <p className="experience-project-description">
                        Developed advanced Python applications and gained hands-on experience in software development
                        practices, code optimization, and project management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-description">
              I'm always open to discussing new opportunities and interesting projects. Let's connect and explore how we
              can work together!
            </p>
          </motion.div>

          <div className="contact-grid">
            <div className="contact-methods">
              {CONTACT_INFO.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="contact-card" onClick={() => handleContactClick(contact.link)}>
                    <div className="contact-card-content">
                      <div className="contact-icon-wrapper">
                        <contact.icon className="icon-large text-white" />
                      </div>
                      <h3 className="contact-method-title">{contact.title}</h3>
                      <p className="contact-method-value">{contact.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="social-links">
                <motion.a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-link linkedin"
                >
                  <Linkedin className="icon-medium" />
                </motion.a>
                <motion.a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-link github"
                >
                  <Github className="icon-medium" />
                </motion.a>
              </div>

              {/* Resume Download Button */}
              <div className="resume-download">
                <motion.button
                  onClick={openResumeInNewTab}
                  className="primary-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="icon-small" />
                  View My Resume
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">© 2024 Ramanadam Venkata Siva Sai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}