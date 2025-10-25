import { motion } from "framer-motion";
import { FaDownload, FaEye, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/your-profile", // replace with your LinkedIn URL
    icon: <FaLinkedin />,
    color: "text-blue-600",
  },
  {
    name: "GitHub",
    url: "https://github.com/rabbanictgbd",
    icon: <FaGithub />,
    color: "text-gray-800",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/your-profile", // replace with your Facebook URL
    icon: <FaFacebook />,
    color: "text-blue-500",
  },
];


export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-24 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-900"
        >
          Hi, I’m <span className="text-red-600">Abdul Kader Rabbani</span> 👋
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 font-medium"
        >
          Web Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-xl mx-auto md:mx-0 text-gray-600"
        >
          I build modern, responsive, and user-friendly web applications using the MERN stack.
          Passionate about learning new technologies and solving real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center md:justify-start items-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition"
          >
            View Projects
          </a>

          {/* ✅ View CV */}
          <a
            href="https://drive.google.com/file/d/19ELi2YZzouI5CXfR2z4FH7Zf2a2OGEnv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition flex items-center gap-2"
          >
            <FaEye /> View CV
          </a>

          {/* ✅ Download CV */}
          <a
            href="https://drive.google.com/uc?export=download&id=19ELi2YZzouI5CXfR2z4FH7Zf2a2OGEnv"
            className="border border-red-600 text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-600 hover:text-white transition flex items-center gap-2"
          >
            <FaDownload /> Download CV
          </a>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 hover:scale-110 transition-transform ${link.color}`}
              >
                <span className="text-xl">{link.icon}</span>
                <span className="hidden sm:inline font-medium">{link.name}</span>
              </a>
            ))}
          </div>

        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex-1 mt-10 md:mt-0 flex justify-center"
      >
        <img
          src="https://i.ibb.co.com/9k7TpGbr/AKR-Picture2.jpg"
          alt="Abdul Kader Rabbani"
          className="w-72 md:w-96 rounded-full shadow-lg border-4 border-white"
        />
      </motion.div>
    </section>
  );
}
