import React from "react";

const educationData = [
  {
    degree: "B.A. Honors",
    institution: "International Islamic University Chittagong (IIUC)",
    subject: "Quranic Sciences & Islamic Studies",
    gpa: "3.513 / 4.00",
    year: "2018",
  },
  {
    degree: "Alim (HSC)",
    institution: "Baitush Sharaf Ideal Kamil Madrasah, Chattogram",
    gpa: "4.25 / 5",
    year: "2014",
  },
  {
    degree: "Dakhil (SSC)",
    institution: "Baitush Sharaf Ideal Kamil Madrasah, Chattogram",
    gpa: "4.81 / 5",
    year: "2012",
  },
];

const Education = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Education</h2>
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <div key={index} className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-700">{edu.institution}</p>
            {edu.subject && <p className="text-gray-500">Subject: {edu.subject}</p>}
            <p className="text-gray-500">
              GPA: {edu.gpa} | Year: {edu.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
