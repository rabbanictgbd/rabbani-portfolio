import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Blood Donation App",
      desc: "Full-stack MERN app to manage donors, donations, and requests.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      live: "https://blood-donation-c.web.app/",
      github: "https://github.com/rabbanictgbd/Blood-Donation.git"
    },
    {
      title: "Store Management System",
      desc: "Core PHP application for inventory and sales management.",
      tech: ["PHP", "MySQL", "Bootstrap"],
      live: "http://rabbanictgbd.kesug.com/",
      github: "https://github.com/rabbanictgbd/store_ms.git"
    },
    {
      title: "B2B Wholesale Platform",
      desc: "React + Express platform for wholesale business orders.",
      tech: ["React", "Express", "MongoDB"],
      live: "https://b2b-client-side.web.app/",
      github: "https://github.com/rabbanictgbd/b2b-client-side.git"
    }
  ];

  return (
    <section id="projects" className="p-10 bg-base-100 mx-20 my-10 rounded-2xl shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ y: 8, opacity: 0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} className="text-3xl font-bold text-center text-primary mb-10">
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="bg-base-100 p-6 rounded-2xl shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{p.desc}</p>

              <div className="mb-4">
                {p.tech.map((t, ti) => <span key={ti} className="inline-block px-2 py-1 mr-2 mb-2 rounded-full border text-sm">{t}</span>)}
              </div>

              <div className="flex gap-3">
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Live</a>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
