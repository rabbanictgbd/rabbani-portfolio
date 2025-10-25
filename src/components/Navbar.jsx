export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold text-red-600">Abdul Kader Rabbani</h1>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-red-600">Home</a></li>
          <li><a href="#about" className="hover:text-red-600">About</a></li>
          <li><a href="#skills" className="hover:text-red-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-red-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
        </ul>
        <a
          href="#contact"
          className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Hire Me
        </a>
      </div>
      
    </nav>

  );
}
