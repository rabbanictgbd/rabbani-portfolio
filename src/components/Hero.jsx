import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-24 bg-gradient-to-b from-base-100 to-white"
    >
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          Hi, I’m{" "}
          <span className="text-primary">
            Abdul Kader Rabbani
          </span>{" "}
          👋
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 font-semibold"
        >
          Web Developer (MERN Stack)
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

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center md:justify-start space-x-4"
        >
          <a
            href="#projects"
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition flex items-center gap-2"
          >
            View Projects
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=19ELi2YZzouI5CXfR2z4FH7Zf2a2OGEnv"
            className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition flex items-center gap-2"
          >
            <FaDownload /> Download CV
          </a>

          <a
            href="https://drive.google.com/file/d/19ELi2YZzouI5CXfR2z4FH7Zf2a2OGEnv/view"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent text-accent px-6 py-3 rounded-lg font-medium hover:bg-accent hover:text-white transition flex items-center gap-2"
          >
            <FaEye /> View CV
          </a>
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
          className="w-72 md:w-96 rounded-full shadow-lg border-4 border-primary/20"
        />
      </motion.div>
    </section>
  );
}
