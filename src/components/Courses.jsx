import { FaCertificate, FaGraduationCap } from "react-icons/fa";

const ProfessionalCourses = () => {
  const courses = [
    {
      title: "Web Development (JavaScript, React, MongoDB)",
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
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Professional Courses & Certifications
        </h2>

        {/* Courses Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-xl bg-white dark:bg-gray-800 hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-4 mb-2 text-green-600 text-3xl">
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
              className="p-6 shadow-lg rounded-xl bg-white dark:bg-gray-800 hover:shadow-2xl transition"
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
