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
    { name: "Bootstrap", icon: "🎯" },
    { name: "Tailwind CSS", icon: "💠" },
    { name: "JavaScript (ES6+)", icon: "🟡" },
    { name: "TypeScript", icon: "🔵" },
    { name: "React.js", icon: "⚛️" },
    { name: "Redux Toolkit", icon: "📦" },
    { name: "Vite", icon: "⚡" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Firebase", icon: "🔥" },
    { name: "Supabase", icon: "⚡" },
    { name: "Git & GitHub", icon: "📚" },
    { name: "Postman", icon: "📮" },
    { name: "VS Code", icon: "💻" },
  ];


  return (

    <section
      id="about"
      className={`py-16 md:py-20 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left Column */}
          <div
            className={`transition-all duration-700 space-y-6 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
          >
            {/* Code Block */}
            <div
              className={`p-4 rounded-lg shadow-md ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
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
              <pre className="text-sm leading-relaxed font-mono">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span> = {"{"}
                <br />
                <span className="ml-4 text-green-400">name:</span>{" "}
                <span className="text-yellow-400">"{portfolioData.name}"</span>,
                <br />
                <span className="ml-4 text-green-400">title:</span>{" "}
                <span className="text-yellow-400">"{portfolioData.title}"</span>,
                <br />
                <span className="ml-4 text-green-400">stack:</span>{" "}
                <span className="text-yellow-400">"MERN"</span>,
                <br />
                <span className="ml-4 text-green-400">passion:</span>{" "}
                <span className="text-yellow-400">
                  "Building amazing web experiences"
                </span>
                <br />
                {"};"}
              </pre>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold">
                MERN Stack Developer
              </h3>
              <p
                className={`text-base md:text-lg leading-relaxed ${darkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                I specialize in building responsive and scalable web applications
                using the MERN stack with expertise in React.js, Node.js, and MongoDB.
              </p>
              <p
                className={`text-base md:text-lg leading-relaxed ${darkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                Skilled in JavaScript (ES6+), Tailwind CSS, Redux Toolkit, Firebase,
                Supabase, and modern development tools like Git & GitHub.
              </p>
            </div>


            <div className="grid grid-cols-2 gap-4 pt-4">
              <div
                className={`text-center p-4 rounded-lg shadow hover:scale-105 transition-all ${darkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  3+
                </div>
                <div
                  className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                  Projects Built
                </div>
              </div>
              <div
                className={`text-center p-4 rounded-lg shadow hover:scale-105 transition-all ${darkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
              >
                <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">
                  10
                </div>
                <div
                  className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                  Core Skills
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
              }`}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6">My Skills</h3>

            {/* Flex Wrap Skills */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow text-sm md:text-base font-medium transition-all duration-500 hover:scale-105 ${darkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-100 text-gray-700"
                    }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span className="text-lg md:text-xl">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}
