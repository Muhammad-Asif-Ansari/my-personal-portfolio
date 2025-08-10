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
      style={{
        padding: "1rem",
        backgroundColor: darkMode ? "#111827" : "#fff",
        color: darkMode ? "#fff" : "#000",
        display: "flex",
        justifyContent: "space-between",
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg backdrop-blur-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            &lt; {portfolioData.name} /&gt;
          </h1>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            <button onClick={toggleTheme}>
              {darkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
            </button>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 bg-gray-200 dark:bg-gray-100 rounded"
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a><br />
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a><br />
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a><br />
            <button onClick={toggleTheme} className="mt-2">
              {darkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
