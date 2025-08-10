import { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { portfolioData } from "../config"
import "../index.css"
export default function About() {
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

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const skills = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript (ES6)", icon: "🟡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Bootstrap", icon: "🎯" },
    { name: "Firebase", icon: "🔥" },
    { name: "Supabase", icon: "⚡" },
    { name: "GitHub", icon: "📚" },
  ]

  return (
    <section
      id="about"
      className={`section py-20 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 animate-fade-in-up ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div
            className={`animate-slide-in-left ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="space-y-6">
              <div
                className={`code-block p-4 rounded-lg ${
                  darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-400">developer.js</span>
                </div>
                <div className="text-sm">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span> = {"{"}
                  <br />
                  <span className="text-green-400 ml-4">name:</span>{" "}
                  <span className="text-yellow-400">
                    "{portfolioData.name}"
                  </span>
                  ,<br />
                  <span className="text-green-400 ml-4">title:</span>{" "}
                  <span className="text-yellow-400">
                    "{portfolioData.title}"
                  </span>
                  ,<br />
                  <span className="text-green-400 ml-4">stack:</span>{" "}
                  <span className="text-yellow-400">"MERN"</span>,<br />
                  <span className="text-green-400 ml-4">passion:</span>{" "}
                  <span className="text-yellow-400">
                    "Building amazing web experiences"
                  </span>
                  <br />
                  {"}"};
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">
                  MERN Stack Developer
                </h3>
                <p
                  className={`text-lg leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {portfolioData.description}
                </p>
                <p
                  className={`text-lg leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  I specialize in building responsive and scalable web
                  applications using the MERN stack. With expertise in React.js
                  for frontend, Node.js for backend, and MongoDB for database, I
                  create modern web solutions that deliver exceptional user
                  experiences.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div
                  className={`text-center p-4 rounded-lg ${
                    darkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    3+
                  </div>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Projects Built
                  </div>
                </div>
                <div
                  className={`text-center p-4 rounded-lg ${
                    darkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    10
                  </div>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Core Skills
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div
            className={`animate-slide-in-right ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-500 hover:scale-105 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  } ${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-medium text-lg">{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4">
                Technologies I Work With
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {portfolioData.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`p-3 rounded-lg text-center font-medium transition-all duration-500 hover:scale-105 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    } ${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                    style={{ transitionDelay: `${(index + 10) * 50}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
