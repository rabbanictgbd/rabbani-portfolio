import { motion } from "framer-motion";
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
      className="p-4 sm:p-6 md:p-8 lg:p-10 bg-base-100 mx-2 sm:mx-6 md:mx-12 lg:mx-20 my-6 md:my-10 rounded-2xl shadow-2xl"

    >
      <div className="max-w-5xl mx-auto px-6">
       <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          Academic Qualification
        </motion.h2>
        <div className="grid md:grid-cols-1 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-xl bg-base-100 dark:bg-gray-800 hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-4 mb-4 text-primary text-3xl">
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
