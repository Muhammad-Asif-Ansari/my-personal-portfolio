import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { portfolioData } from "../config";

export default function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "shadow-lg backdrop-blur-md" : ""
        } ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 w-full">
        <div className="flex justify-between items-center">
          {/* Logo / Name */}
          <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap">
            &lt; {portfolioData.name} /&gt;
          </h1>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              <a href="/" className="hover:text-gray-400">Home</a>
              <a href="#about" className="hover:text-gray-400">About</a>
              <a href="#projects" className="hover:text-gray-400">Projects</a>
              <a href="#contact" className="hover:text-gray-400">Contact</a>
            </div>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded-md border hover:bg-gray-700 hover:text-white transition"
            >
              {darkMode ? "🌞 Light" : "🌙 Dark"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition transform hover:scale-110 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
              }`}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div
            className={`lg:hidden mt-3 flex flex-col space-y-3  ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
              } p-4 rounded-md`}
          >
            <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <button onClick={toggleTheme} className="mt-2">
              {darkMode ? "🌞 Light" : "🌙 Dark"}
            </button>
          </div>
        )}
      </div>
    </nav>

  );
}
