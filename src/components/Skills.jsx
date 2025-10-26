import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaPeopleCarry } from "react-icons/fa";

export default function Skills() {
  const technicalSkills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript (ES6+)", icon: <FaJsSquare /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <FaDatabase /> },
    { name: "REST APIs", icon: null },
    { name: "Tailwind CSS & DaisyUI", icon: null },
    { name: "Git & GitHub", icon: null },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <FaPeopleCarry /> },
    { name: "Team Collaboration", icon: <FaPeopleCarry /> },
    { name: "Adaptability", icon: <FaPeopleCarry /> },
    { name: "Time Management", icon: <FaPeopleCarry /> },
    { name: "Critical Thinking", icon: <FaPeopleCarry /> },
    { name: "Communication Skills", icon: <FaPeopleCarry /> },
  ];

  const SkillCard = ({ title, skills }) => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-base-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {skills.map((s, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-800">
            <span className="text-primary text-xl">{s.icon}</span>
            <span className="font-medium">{s.name}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 8, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-primary mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard title="Technical Skills" skills={technicalSkills} />
          <SkillCard title="Soft Skills" skills={softSkills} />
        </div>
      </div>
    </section>
  );
}
