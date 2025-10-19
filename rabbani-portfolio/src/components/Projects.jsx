import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Blood Donation App",
      description: "MERN stack app to manage donors, requests, and donations.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      live: "#",
      github: "#"
    },
    {
      title: "Store Management System",
      description: "Core PHP project for products, sales, and inventory.",
      tech: ["PHP", "MySQL", "Bootstrap"],
      live: "#",
      github: "#"
    },
    {
      title: "B2B Wholesale Platform",
      description: "Platform for bulk buying/selling for businesses.",
      tech: ["React", "Tailwind", "Express", "MongoDB"],
      live: "#",
      github: "#"
    },
  ];

  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-8">Projects</motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="bg-base-200 p-6 rounded-2xl shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm mb-4 text-gray-700">{p.description}</p>
              <div className="mb-4">
                {p.tech.map((t, i) => (
                  <span key={i} className="inline-block px-3 py-1 mr-2 mb-2 rounded-full border text-sm">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={p.live} className="btn btn-sm btn-primary">Live</a>
                <a href={p.github} className="btn btn-sm btn-outline">GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
