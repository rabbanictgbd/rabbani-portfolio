import { FaUniversity } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Arts (Honors)",
      subject: "Quranic Sciences & Islamic Studies",
      institution: "International Islamic University Chittagong (IIUC)",
      gpa: "GPA: 3.513 / 4.00",
      year: "2018",
      icon: <FaUniversity />,
    },
  ];

  return (
    <section
      id="education"
      className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Academic Qualification
        </h2>
        <div className="grid md:grid-cols-1 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-4 mb-4 text-green-600 text-3xl">
                {edu.icon}
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
              </div>
              <p className="text-sm mb-1">
                <strong>Subject:</strong> {edu.subject}
              </p>
              <p className="text-sm mb-1">
                <strong>Institution:</strong> {edu.institution}
              </p>
              <p className="text-sm mb-1">
                <strong>{edu.gpa}</strong>
              </p>
              <p className="text-sm">
                <strong>Passing Year:</strong> {edu.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
