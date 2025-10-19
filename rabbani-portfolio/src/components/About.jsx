import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="bg-base-200 p-6 rounded-2xl shadow-sm"
        >
          <div className="md:flex md:items-center md:gap-6">
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto md:mx-0">
              <img src="https://i.ibb.co/ChNsD2B/dev-avatar.png" alt="profile" className="w-full h-full object-cover"/>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-lg text-gray-700">
                I am a Web Developer and System Support Engineer with practical experience building responsive and user-friendly web apps. I enjoy problem-solving and learning new technologies.
              </p>
              <ul className="mt-4 space-y-1 text-sm text-gray-600">
                <li><strong>Location:</strong> Chattogram, Bangladesh</li>
                <li><strong>Email:</strong> your-email@example.com</li>
                <li><strong>Available:</strong> Open for freelance & collaboration</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
