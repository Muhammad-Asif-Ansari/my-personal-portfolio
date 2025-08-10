import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      minHeight: "100vh",
      transition: "all 0.3s ease",
      backgroundColor: darkMode ? "#111" : "#fff",
      color: darkMode ? "#fff" : "#111",
      overflow:"hidden"
    }}>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
