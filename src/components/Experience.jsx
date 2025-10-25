import React from "react";

const experienceData = [
  {
    role: "System Support Engineer",
    company: "Computer Network Systems Limited (CNS)",
    duration: "Oct 2021 – Present",
    responsibilities: [
      "Managed enterprise IT infrastructure, troubleshooting, and system maintenance.",
      "Administered Windows Server 2016 and Red Hat Enterprise Linux 7 environments.",
      "Ensured network stability and system security for uninterrupted operations.",
      "Collaborated with teams to deploy and maintain IT services efficiently.",
    ],
  },
  // Add more experiences here if needed
];

const Experience = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Experience</h2>
      <div className="space-y-6">
        {experienceData.map((job, index) => (
          <div key={index} className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">{job.role}</h3>
            <p className="text-gray-700">{job.company}</p>
            <p className="text-gray-500 mb-2">{job.duration}</p>
            <ul className="list-disc list-inside text-gray-600">
              {job.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
