import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-600">
          Abdul Kader Rabbani
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-red-600">Home</a></li>
          <li><a href="#about" className="hover:text-red-600">About</a></li>
          <li><a href="#skills" className="hover:text-red-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-red-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
        </ul>

        {/* Hire Button (Desktop Only) */}
        <a
          href="#contact"
          className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-800 font-medium">
            <li><a href="#home" onClick={toggleMenu} className="hover:text-red-600">Home</a></li>
            <li><a href="#about" onClick={toggleMenu} className="hover:text-red-600">About</a></li>
            <li><a href="#skills" onClick={toggleMenu} className="hover:text-red-600">Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu} className="hover:text-red-600">Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="hover:text-red-600">Contact</a></li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
