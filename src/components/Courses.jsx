import { motion } from "framer-motion";
import { FaCertificate, FaGraduationCap } from "react-icons/fa";

const ProfessionalCourses = () => {
  const courses = [
    {
      title: "Complete Web Development (JavaScript, React, Node.js, MongoDB)",
      provider: "Programming Hero",
      year: "2025",
      icon: <FaGraduationCap />,
    },
    {
      title: "Networking Technology",
      provider: "IsDB BESEW",
      year: "2021",
      icon: <FaGraduationCap />,
    },
    {
      title: "Graphics Design (Photoshop & Illustrator)",
      provider: "Chittagong Computer Academy",
      year: "2017",
      icon: <FaGraduationCap />,
    },
  ];

  const certifications = [
    {
      name: "Microsoft Certified Solutions Associate (MCSA)",
      certificationId: "990677419",
      icon: <FaCertificate />,
    },
  ];

  return (
    <section
      id="professional-courses"
      className="p-4 sm:p-6 md:p-8 lg:p-10 bg-base-100 mx-2 sm:mx-6 md:mx-12 lg:mx-20 my-6 md:my-10 rounded-2xl shadow-2xl"

    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          Professional Courses & Certifications
        </motion.h2>

        {/* Courses Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-xl bg-base-100  hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-4 mb-2 text-primary text-3xl">
                {course.icon}
                <h3 className="text-xl font-semibold">{course.title}</h3>
              </div>
              <p className="text-sm">
                <strong>Institute:</strong> {course.provider}
              </p>
              <p className="text-sm">
                <strong>Year:</strong> {course.year}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-xl bg-base-100 dark:bg-gray-800 hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-4 mb-2 text-blue-600 text-3xl">
                {cert.icon}
                <h3 className="text-xl font-semibold">{cert.name}</h3>
              </div>
              <p className="text-sm">
                <strong>Certification ID:</strong> {cert.certificationId}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCourses;
