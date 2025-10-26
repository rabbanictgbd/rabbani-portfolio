import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="p-4 sm:p-6 md:p-8 lg:p-10 bg-base-100 mx-2 sm:mx-6 md:mx-12 lg:mx-20 my-6 md:my-10 rounded-2xl shadow-2xl"
>
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          initial={{ y: 8, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          viewport={{ once: true }} 
          className="text-3xl font-bold text-primary mb-6"
        >
          Contact
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="text-gray-600 mb-8"
        >
          Get in touch with me via the following channels:
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="space-x-6 text-left md:text-left flex flex-wrap items-center md:items-center"
        >
          <p className="flex items-center gap-3 text-lg">
            <FaPhoneAlt className="text-primary" /> 
            <span>+880 1832786121</span>
          </p>

          <p className="flex items-center gap-3 text-lg">
            <FaEnvelope className="text-primary" /> 
            <a href="mailto:rabbanictgbd@gmail.com" className="text-primary">rabbanictgbd@gmail.com</a>
          </p>

          <p className="flex items-center gap-3 text-lg">
            <FaGithub className="text-primary" /> 
            <a href="https://github.com/rabbanictgbd" target="_blank" rel="noreferrer" className="text-primary">GitHub</a>
          </p>

          <p className="flex items-center gap-3 text-lg">
            <FaLinkedin className="text-primary" /> 
            <a href="https://www.linkedin.com/in/abdul-kader-rabbani/" target="_blank" rel="noreferrer" className="text-primary">LinkedIn</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
