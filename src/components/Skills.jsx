import React from "react";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "DaisyUI"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "GitHub", "VS Code", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-10">My Skills</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl shadow-lg bg-base-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              {skill.category}
            </h3>
            <ul className="space-y-2 text-lg">
              {skill.items.map((item, i) => (
                <li key={i} className="hover:text-primary transition-colors">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
