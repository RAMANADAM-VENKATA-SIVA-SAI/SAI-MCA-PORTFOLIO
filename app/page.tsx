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
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    // Open Google Drive link in new tab
    window.open("https://drive.google.com/file/d/1EevWyA6U0CXI9vpB26pJcZo5u_aNP07X/view?usp=drivesdk", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              RVSS
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Education", "Skills", "Certificates", "Projects", "Experience", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? "text-blue-600" : "text-gray-600"
                  }`}
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
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-green-100/30 to-blue-50/50"
          style={{ y }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-blue-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ramanadam Venkata
              <br />
              <span className="text-4xl md:text-6xl">Siva Sai</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Computer Science Graduate | Python Developer | Data Analyst
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </Button>

              <Button
                variant="outline"
                className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-medium bg-transparent"
                onClick={downloadResume}
              >
                <Download className="w-5 h-5 mr-2" />
                View My Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-50/50 to-green-50/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I'm <strong>Ramanadam Venkata Siva Sai</strong>, a self-driven and highly motivated Computer Science
                graduate from Andhra Pradesh, currently pursuing my{" "}
                <strong>Master of Computer Applications (MCA)</strong> at Mohan Babu University, Tirupati (2024–2026).
                With a solid academic background — including a <strong>B.Sc. in Computer Science (CGPA: 9.02)</strong> —
                I bring strong technical and analytical skills to the table.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I'm passionate about technology and problem-solving, with hands-on experience in{" "}
                <strong>Python, Java, SQL, HTML, CSS, and JavaScript</strong>, as well as frameworks like{" "}
                <strong>React.js</strong> and <strong>Node.js</strong>. I've worked on practical projects such as a{" "}
                <strong>Power BI Sales Dashboard</strong> and a <strong>Rock-Paper-Scissors Game</strong>, showcasing my
                ability to apply concepts to real-world problems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I recently completed a <strong>Python Developer Internship</strong> at{" "}
                <strong>Sri Sathya Sai Organisations</strong>, where I enhanced my Python skills through an
                advanced-level project.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                In addition to my technical expertise, I bring strong{" "}
                <strong>communication, teamwork, and time management skills</strong> — making me a well-rounded
                candidate ready to contribute meaningfully to innovative and data- driven teams.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Development</h3>
                  <p className="text-gray-600">Full-stack development with modern technologies</p>
                </motion.div>

                <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Analysis</h3>
                  <p className="text-gray-600">Transforming data into actionable insights</p>
                </motion.div>

                <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Problem Solving</h3>
                  <p className="text-gray-600">Analytical thinking and creative solutions</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Education
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
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
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-lg overflow-hidden bg-white shadow-md flex-shrink-0">
                            <img
                              src={edu.logo || "/placeholder.svg"}
                              alt={`${edu.institution} logo`}
                              className="w-full h-full object-contain p-1"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-xl text-gray-800">{edu.degree}</CardTitle>
                            <CardDescription className="text-gray-600 mt-1">{edu.institution}</CardDescription>
                          </div>
                        </div>
                        <Badge
                          variant={edu.status === "Pursuing" ? "default" : "secondary"}
                          className="bg-gradient-to-r from-blue-500 to-green-500 text-white"
                        >
                          {edu.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.year}
                        </div>
                        {edu.grade && <div className="text-blue-600 font-semibold">{edu.grade}</div>}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-r from-green-50/50 to-blue-50/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
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
              ].map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, skillIndex) => (
                          <motion.div key={skillIndex} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                            <Badge
                              variant="secondary"
                              className="bg-gradient-to-r from-blue-100 to-green-100 text-gray-700 hover:from-blue-200 hover:to-green-200 flex items-center gap-2 px-3 py-2"
                            >
                              <span className="text-lg">{skill.logo}</span>
                              <span>{skill.name}</span>
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Certificates & Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional certifications and achievements that validate my technical expertise and commitment to
              continuous learning.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
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
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                            {cert.icon}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
                              {cert.title}
                            </CardTitle>
                            <CardDescription className="text-gray-600 mt-1">{cert.issuer}</CardDescription>
                          </div>
                        </div>
                        <motion.a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-blue-600 hover:text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-gray-600 leading-relaxed">{cert.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {cert.date}
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-gradient-to-r from-blue-100 to-green-100 text-gray-700 text-xs"
                          >
                            {cert.category}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Continuous Learning Journey</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  I believe in continuous improvement and staying updated with the latest technologies. These
                  certifications represent my commitment to professional growth and technical excellence.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 text-sm">
                    4 Professional Certifications
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 text-sm">
                    Google & Microsoft Certified
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 text-sm">
                    Verified Skills
                  </Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Projects
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {[
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
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800 flex items-center justify-between">
                      {project.title}
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </CardTitle>
                    <CardDescription className="text-gray-600">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="border-blue-300 text-blue-600">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-r from-blue-50/50 to-green-50/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Experience
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-800 flex items-center">
                        <Briefcase className="w-5 h-5 mr-2 text-green-600" />
                        Python Developer Intern
                      </CardTitle>
                      <CardDescription className="text-gray-600 mt-1">Sri Sathya Sai Organisations</CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white">Internship</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      February 2024 - April 2024
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Project: Advanced Python</h4>
                      <p className="text-gray-600">
                        Developed advanced Python applications and gained hands-on experience in software development
                        practices, code optimization, and project management.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. Let's connect and explore how we
              can work together!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "sairamanadam.mca@gmail.com",
                  link: "mailto:sairamanadam.mca@gmail.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+91 9908881764",
                  link: "tel:+919908881764",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Ipurupalem, Chirala, Andhra Pradesh",
                  link: "",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <Card
                    className="hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => contact.link && window.open(contact.link)}
                  >
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <contact.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{contact.title}</h3>
                      <p className="text-gray-600">{contact.value}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <div className="flex justify-center space-x-6 mb-8">
                <motion.a
                  href="https://www.linkedin.com/in/venkata-siva-sai-ramanadam-6915692aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://github.com/RAMANADAM-VENKATA-SIVA-SAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
              </div>

              {/* Resume Download Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={downloadResume}
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  View My Resume
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-300">© 2024 Ramanadam Venkata Siva Sai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
