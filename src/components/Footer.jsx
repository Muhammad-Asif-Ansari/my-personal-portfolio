import { portfolioData } from "../config";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    // <footer
    //   className={`py-12 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
    //     }`}
    // >
    //   <div className="max-w-6xl mx-auto px-6">
    //     <div className="grid md:grid-cols-3 gap-8 items-center">
    //       {/* Logo and Name */}
    //       <div className="text-center md:text-left">
    //         <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
    //           <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
    //             <span className="text-white font-bold text-sm">MA</span>
    //           </div>
    //           <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    //             {portfolioData.name}
    //           </h3>
    //         </div>
    //         <p className="text-gray-600 dark:text-gray-400 text-sm">
    //           Full-Stack Developer passionate about creating amazing web experiences.
    //         </p>
    //       </div>

    //       {/* Quick Links */}
    //       <div className="text-center">
    //         <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
    //         <div className="flex flex-wrap justify-center gap-4 text-sm">
    //           <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Home</a>
    //           <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">About</a>
    //           <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Projects</a>
    //           <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Contact</a>
    //         </div>
    //       </div>

    //       {/* Social Links */}
    //       <div className="text-center md:text-right">
    //         <h4 className="font-semibold mb-4 text-lg">Connect</h4>
    //         <div className="flex justify-center md:justify-end space-x-4">
    //           <a
    //             href={portfolioData.github}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className={`p-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-110 hover:shadow-xl 
    // ${darkMode
    //                 ? "bg-gray-700 text-black dark:bg-white"
    //                 : " bg-white text-white dark:bg-black"}`}
    //             aria-label="GitHub"
    //           >
    //             <svg
    //               className="w-6 h-6"
    //               fill="currentColor"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.563 21.8 24 17.313 24 12c0-6.627-5.373-12-12-12z" />
    //             </svg>
    //           </a>

    //           {/* LinkedIn */}
    //           <a
    //             href={portfolioData.linkedin}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className={`p-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-110 hover:shadow-xl 
    // ${darkMode
    //                 ? "bg-gray-700 text-black dark:bg-white"
    //                 : "bg-white text-white dark:bg-black"}`}
    //             aria-label="LinkedIn"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="w-6 h-6"
    //               fill="currentColor"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M20.447 20.452H16.89v-5.569c0-1.328-.025-3.04-1.852-3.04-1.853 0-2.136 1.447-2.136 
    //          2.942v5.667H9.345V9h3.41v1.561h.049c.476-.9 1.637-1.85 
    //          3.368-1.85 3.6 0 4.263 2.368 4.263 5.448v6.293zM5.337 
    //          7.433c-1.104 0-2-.896-2-2s.896-2 
    //          2-2 2 .896 2 2-.896 2-2 2zm1.779 
    //          13.019H3.559V9h3.557v11.452zM22.225 
    //          0H1.771C.792 0 0 .771 0 1.723v20.549C0 
    //          23.229.792 24 1.771 24h20.451C23.2 24 
    //          24 23.229 24 22.271V1.723C24 .771 
    //          23.2 0 22.225 0z" />
    //             </svg>
    //           </a>


    //           {/* Email */}
    //           <a
    //             href={`mailto:${portfolioData.email}`}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className={`p-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-110 hover:shadow-xl 
    // ${darkMode
    //                 ? "bg-gray-700 text-black dark:bg-white"
    //                 : "bg-white text-white dark:bg-black"}`}
    //             aria-label="Email"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="w-6 h-6"
    //               fill="currentColor"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M20 4H4c-1.1 0-2 .9-2 
    //          2v12c0 1.1.9 2 2 2h16c1.1 
    //          0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
    //          4-8 5-8-5V6l8 5 8-5v2z" />
    //             </svg>
    //           </a>

    //         </div>
    //       </div>
    //     </div>

    //     {/* Divider */}
    //     <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8">
    //       <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    //         <p className="text-sm text-gray-600 dark:text-gray-400">
    //           © {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer
  className={`py-10 md:py-12 transition-colors duration-300 ${
    darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
  }`}
>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* Logo and Name */}
      <div className="text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
          <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">MA</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {portfolioData.name}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          Full-Stack Developer passionate about creating amazing web experiences.
        </p>
      </div>

      {/* Quick Links */}
      <div className="text-center">
        <h4 className="font-semibold mb-3 text-base sm:text-lg">Quick Links</h4>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm">
          <a
            href="#home"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="text-center md:text-right">
        <h4 className="font-semibold mb-3 text-base sm:text-lg">Connect</h4>
        <div className="flex justify-center md:justify-end space-x-3 sm:space-x-4">
          {/* GitHub */}
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${
              darkMode
                ? "bg-gray-800 text-gray-200"
                : "bg-gray-100 text-gray-800"
            }`}
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.563 21.8 24 17.313 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${
              darkMode
                ? "bg-gray-800 text-gray-200"
                : "bg-gray-100 text-gray-800"
            }`}
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452H16.89v-5.569c0-1.328-.025-3.04-1.852-3.04-1.853 0-2.136 1.447-2.136 
             2.942v5.667H9.345V9h3.41v1.561h.049c.476-.9 1.637-1.85 
             3.368-1.85 3.6 0 4.263 2.368 4.263 5.448v6.293zM5.337 
             7.433c-1.104 0-2-.896-2-2s.896-2 
             2-2 2 .896 2 2-.896 2-2 2zm1.779 
             13.019H3.559V9h3.557v11.452zM22.225 
             0H1.771C.792 0 0 .771 0 1.723v20.549C0 
             23.229.792 24 1.771 24h20.451C23.2 24 
             24 23.229 24 22.271V1.723C24 .771 
             23.2 0 22.225 0z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href={`mailto:${portfolioData.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${
              darkMode
                ? "bg-gray-800 text-gray-200"
                : "bg-gray-100 text-gray-800"
            }`}
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 
             2v12c0 1.1.9 2 2 2h16c1.1 
             0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
             4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
</footer>

  );
}
