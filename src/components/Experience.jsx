import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const experienceData = [
    {
      role: "System Support Engineer",
      company: "Computer Network Systems Limited (CNS)",
      duration: "October 2021 – Present",
      responsibilities: [
        "Managed IT infrastructure and enterprise-level system support for government and corporate clients.",
        "Handled critical modules including PMIS, ORS, Training, Library, Appointment, and Board Decision systems.",
        "Collaborated with cross-functional teams to implement software updates and improve system performance.",
        "Provided advanced technical troubleshooting to ensure system efficiency and continuity."
      ],
      icon: <FaBriefcase />,
    },
  ];

  return (
    <section id="experience" className="py-16 bg-base-100 text-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Professional Experience
        </h2>

        {/* Experience Card */}
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-primary transition transform hover:-translate-y-1 hover:shadow-2xl duration-300"
            >
              <div className="flex items-center gap-4 mb-4 text-primary text-3xl">
                {exp.icon}
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
              </div>
              <p className="text-lg font-medium text-secondary">
                {exp.company}
              </p>
              <p className="text-sm mb-4 text-accent font-semibold">
                {exp.duration}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
