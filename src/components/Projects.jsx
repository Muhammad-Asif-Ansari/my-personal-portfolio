import { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { portfolioData } from "../config"
import weatherApp from "../assets/images/weatherApp.png"
import DigitalClock from "../assets/images/DigitalClock.png"
import LoginSignup from "../assets/images/LoginSignup.png"
import passwordGenerator from "../assets/images/passwordGenerator.png"
import crudFirebase from "../assets/images/CrudFirebase.png"
import quizApp from "../assets/images/QuizApp.png"
import EcommerceStore from "../assets/images/EcommerceStore.png"
import TodoApp from "../assets/images/TodoApp.png"
import Calculator from "../assets/images/Calculator.png"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const { darkMode } = useContext(ThemeContext)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('projects')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const enhancedProjects = [
    {
      ...portfolioData.projects[0],
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: weatherApp,
      description: 'A real-time weather application that provides current weather conditions, forecasts, and interactive maps using modern APIs and responsive design.'
    },
    {
      ...portfolioData.projects[1],
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      image: DigitalClock,
      description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart functionality, and secure payment processing.'
    },
    {
      ...portfolioData.projects[2],
      tech: ['React', 'Supabase', 'TypeScript'],
      image: LoginSignup,
      description: 'A comprehensive authentication system with user registration, login, password reset, and role-based access control using modern security practices.'
    },
    {
      ...portfolioData.projects[3],
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: passwordGenerator,
      description: 'A real-time weather application that provides current weather conditions, forecasts, and interactive maps using modern APIs and responsive design.'
    },
    {
      ...portfolioData.projects[4],
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: crudFirebase,
      description: 'A real-time weather application that provides current weather conditions, forecasts, and interactive maps using modern APIs and responsive design.'
    },
    {
      ...portfolioData.projects[5],
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: quizApp,
      description: 'A real-time weather application that provides current weather conditions, forecasts, and interactive maps using modern APIs and responsive design.'
    },
  {
  ...portfolioData.projects[6],
  tech: ['React', 'Node.js', 'MongoDB', 'Express'],
  image: EcommerceStore,
  description: 'A full-stack e-commerce store with product listings, shopping cart, and secure checkout, built using the MERN stack.'
},
{
  ...portfolioData.projects[7],
  tech: ['React', 'Material UI'],
  image: TodoApp,
  description: 'A responsive todo application built with React and Material UI, featuring task creation, editing, and deletion with a clean, modern interface.'
},
{
  ...portfolioData.projects[8],
  tech: ['HTML', 'CSS', 'JavaScript'],
  image: Calculator,
  description: 'A fully responsive calculator built with HTML, CSS, and JavaScript, capable of performing basic arithmetic operations with a simple and clean interface.'
}



  ]

  return (
    <section id="projects"
      className={`section py-20 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 animate-fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 gradient-text">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've built to showcase my skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enhancedProjects.map((project, i) => (
            <div
              key={i}
              className={`project-card rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out
      ${darkMode ? 'bg-gray-800 text-gray-200 shadow-gray-700' : 'bg-white text-gray-900 shadow-gray-300'}
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden rounded-t-2xl group cursor-pointer">


                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-500">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-80"
                  />
                </div>

                <span className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg">
                  Featured
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[calc(100%-192px)]">
                <div>
                  <h3
                    className={`text-2xl font-bold mb-3 transition-colors duration-300
            ${darkMode ? 'text-gray-100 group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'}`}
                  >
                    {project.title}
                  </h3>
                  <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm font-medium
                ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center py-2 px-4 rounded-lg font-medium transition-all duration-300
            ${darkMode
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'btn-primary text-white hover:bg-blue-700'}`}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center py-2 px-4 rounded-lg font-medium border-2 transition-all duration-300
            ${darkMode
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
