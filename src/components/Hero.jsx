import { useState, useEffect, useContext } from "react";
import { portfolioData } from "../config";
import { ThemeContext } from "../context/ThemeContext";
import "../index.css";
import Resume from "../Resume/My FULLSTACK Resume.pdf"

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [slideClass, setSlideClass] = useState("slide-in-left");
  const { darkMode } = useContext(ThemeContext);

  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack Developer",
  ];

  useEffect(() => {
    let timeout;

    const fullText = roles[currentIndex];

    if (isDeleting) {
      if (currentText.length > 0) {
        timeout = setTimeout(() => setCurrentText(currentText.slice(0, -1)), 50);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setSlideClass("slide-in-left");
      }
    }
    else {
      if (currentText.length < fullText.length) {
        timeout = setTimeout(() => setCurrentText(fullText.slice(0, currentText.length + 1)), 100);
      } else {
        timeout = setTimeout(() => {
          setSlideClass("slide-out-right"); // slide out old role to right
          setIsDeleting(true);
        }, 2000);
      }
    }
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, roles]);

  return (
    <section
      id="home"
      className={`section min-h-screen flex items-center transition-colors duration-500 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Content */}
        <div className="space-y-10">
          {/* Greeting */}
          <div className="space-y-5">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-10">
              Hi all, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                {portfolioData.name}
              </span>{" "}
              <span className="inline-block ml-2 animate-wave">👋</span>
            </h1>
            <h2
              className={`text-3xl md:text-4xl min-h-[50px] ${slideClass} fancy-text`}
              style={{ animationFillMode: "forwards" }}
            >
              {currentText}
              <span className="border-r-4 border-blue-500 animate-blink ml-1"></span>
            </h2>
            {/* Description */}
            <p
              className={`max-w-2xl text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"
                }`}
            >
              A motivated MERN Stack Developer 🚀 skilled in building scalable and
              responsive web applications. Experienced in working with
              <span className="font-semibold"> JavaScript (ES6), React.js, Node.js,
                Express.js, and MongoDB</span>, along with modern tools like
              <span className="font-semibold"> Firebase, Supabase, Git, and GitHub</span>.
              Passionate about creating clean, user-friendly UIs and efficient backend
              systems to deliver seamless digital experiences.
            </p>

          </div>

          {/* Social Icons + Resume Button */}
          <div className="flex gap-6 flex-wrap">
            {/* GitHub */}
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 shadow-lg"
              aria-label="GitHub"
            >
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 shadow-lg"
              aria-label="LinkedIn"
            >
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${portfolioData.email}`}
              className="w-14 h-14 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 shadow-lg"
              aria-label="Email"
            >
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.819L12 10.183l9.545-6.362h.819c.904 0 1.636.732 1.636 1.636z" />
              </svg>
            </a>

            {/* Resume Button */}
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-4 rounded-lg font-semibold shadow-md transition-all duration-300 hover:scale-105 ${darkMode
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                : "bg-gradient-to-r from-pink-500 to-yellow-500 text-white"
                }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              Download My Resume
            </a>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center relative right-illustration-animate">
          <div className="relative w-96 h-96">
            {/* Character */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Body */}
                <div className="w-32 h-40 bg-white rounded-full relative shadow-lg">
                  {/* Head */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div className="absolute bottom-2 w-6 h-1 bg-black rounded-full"></div>
                  </div>

                  {/* Arms */}
                  <div className="absolute top-8 -left-4 w-8 h-16 bg-purple-500 rounded-full transform -rotate-12 shadow-md"></div>
                  <div className="absolute top-8 -right-4 w-8 h-16 bg-purple-500 rounded-full transform rotate-12 shadow-md"></div>

                  {/* Hands */}
                  <div className="absolute top-20 -left-6 w-6 h-6 bg-yellow-400 rounded-full shadow-inner"></div>
                  <div className="absolute top-20 -right-6 w-6 h-6 bg-yellow-400 rounded-full shadow-inner"></div>

                  {/* Legs */}
                  <div className="absolute bottom-0 left-4 w-8 h-16 bg-purple-500 rounded-full shadow-md"></div>
                  <div className="absolute bottom-0 right-4 w-8 h-16 bg-purple-500 rounded-full shadow-md"></div>
                </div>

                {/* Bee */}
                <div className="absolute -top-4 -right-4 w-4 h-4 bg-yellow-400 rounded-full animate-bounce shadow-lg">
                  <div className="absolute inset-0 bg-black rounded-full opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Target */}
            <div className="absolute top-1/4 left-1/4 w-24 h-24">
              <div className="w-full h-full border-4 border-blue-600 rounded-full relative shadow-md">
                <div className="absolute inset-2 border-4 border-blue-600 rounded-full"></div>
                <div className="absolute inset-4 border-4 border-blue-600 rounded-full"></div>
                <div className="absolute inset-6 border-4 border-blue-600 rounded-full"></div>
                <div className="absolute inset-8 border-4 border-blue-600 rounded-full"></div>
                {/* Arrow */}
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-purple-500 rotate-45 shadow-lg"></div>
              </div>
            </div>

            {/* Clouds */}
            <div className="absolute top-8 left-8 w-16 h-8 bg-purple-300 rounded-full opacity-60 shadow-inner"></div>
            <div className="absolute bottom-8 right-8 w-20 h-10 bg-purple-300 rounded-full opacity-60 shadow-inner"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

