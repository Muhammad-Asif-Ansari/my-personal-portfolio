import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { portfolioData } from "../config";
import emailjs from '@emailjs/browser';


const SERVICE_ID = "service_a9pqkor";
const TEMPLATE_ID = "template_abc123";
const USER_ID = "bVKdrW8jvkydngBkr";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { darkMode } = useContext(ThemeContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(() => {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        alert("Failed to send message. Please try again later.");
      })
      .finally(() => setIsSubmitting(false));
  };

  // Hide success message after 3 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <section
      id="contact"
      className={`py-16 px-6 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        }`}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>

        {/* Contact Info */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 list-none p-0">
            {[
              {
                icon: "📧",
                label: "Email",
                value: portfolioData.email,
                href: `mailto:${portfolioData.email}`,
              },
              {
                icon: "💼",
                label: "LinkedIn",
                value: "Connect with me",
                href: portfolioData.linkedin,
              },
              {
                icon: "🐙",
                label: "GitHub",
                value: "View my work",
                href: portfolioData.github,
              },
            ].map((info, idx) => (
              <li key={idx}>
                <a
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 no-underline ${darkMode ? "text-cyan-300 hover:text-cyan-400" : "text-blue-600 hover:text-blue-800"
                    } transition-colors duration-300`}
                >
                  <span className="text-xl">{info.icon}</span>
                  <strong>{info.label}:</strong> <span>{info.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          noValidate
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={`px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${darkMode
                  ? "bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={`px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${darkMode
                  ? "bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              className={`px-4 py-3 rounded-md border resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${darkMode
                  ? "bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={
              isSubmitting ||
              !formData.name.trim() ||
              !formData.email.trim() ||
              !formData.message.trim()
            }
            className={`py-3 rounded-md font-semibold text-white transition duration-300
    ${isSubmitting
                ? "bg-gray-500 cursor-not-allowed"
                : darkMode
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:cursor-pointer"
                  : "bg-gradient-to-r from-pink-500 to-yellow-500 hover:opacity-90 hover:cursor-pointer"
              }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

        </form>

        {successMessage && (
          <div
            className="mt-6 text-center font-semibold text-green-500 animate-fade-in"
            role="alert"
          >
            {successMessage}
          </div>
        )}
      </div>
    </section>
  );
}


