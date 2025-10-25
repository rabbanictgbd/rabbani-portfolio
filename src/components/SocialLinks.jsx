import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/your-profile", // replace with your LinkedIn URL
    icon: <FaLinkedin />,
    color: "text-blue-600",
  },
  {
    name: "GitHub",
    url: "https://github.com/rabbanictgbd",
    icon: <FaGithub />,
    color: "text-gray-800",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/your-profile", // replace with your Facebook URL
    icon: <FaFacebook />,
    color: "text-blue-500",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mt-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center space-x-2 hover:scale-110 transition-transform ${link.color}`}
        >
          <span className="text-xl">{link.icon}</span>
          <span className="hidden sm:inline font-medium">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
