import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="p-4 sm:p-6 md:p-8 lg:p-10 bg-base-100 mx-2 sm:mx-6 md:mx-12 lg:mx-20 my-6 md:my-10 rounded-2xl shadow-2xl"

    >
      <div className="max-w-6xl mx-auto px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Picture */}
          <motion.img
            src="https://i.ibb.co.com/9k7TpGbr/AKR-Picture2.jpg"
            alt="Abdul Kader Rabbani"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-60 h-60 rounded-full shadow-xl border-4 border-primary/30 object-cover"
          />

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left space-y-4"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              👨‍💻 Web Developer | MERN Stack Enthusiast
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I am a passionate Web Developer skilled in building responsive, interactive, and scalable web
              applications using the <span className="font-semibold text-primary">MERN stack (MongoDB, Express.js, React, Node.js)</span>.
              My goal is to create meaningful digital solutions that solve real-world problems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With strong problem-solving abilities and a continuous learning mindset, I always strive to improve
              performance, write clean code, and follow the best development practices.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 shadow-md rounded-xl border border-primary/10 hover:shadow-xl transition">
                <h4 className="font-semibold text-primary mb-2">🚀 Mission</h4>
                <p className="text-gray-600 text-sm">
                  To build creative and impactful web applications that boost user experience & efficiency.
                </p>
              </div>
              <div className="p-4 shadow-md rounded-xl border border-primary/10 hover:shadow-xl transition">
                <h4 className="font-semibold text-primary mb-2">🎯 Goal</h4>
                <p className="text-gray-600 text-sm">
                  To become a top-level MERN Stack Developer and contribute to innovative tech solutions.
                </p>
              </div>
            </div>

            {/* Button */}
            <motion.a
              href="#skills"
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Explore My Skills
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
