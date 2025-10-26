import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Education", link: "#education" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-base-100/80 backdrop-blur-lg shadow-md z-50 border-b border-primary/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-6">
        
        {/* Logo / Name */}
        <h1 className="text-xl md:text-2xl font-bold text-primary">
        <a href="/">
          Abdul Kader Rabbani
        </a>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="hover:text-primary transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <a
          href="#contact"
          className="hidden md:block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition"
        >
          Hire Me
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 hover:text-primary transition text-lg font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition"
            >
              Hire Me
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}
