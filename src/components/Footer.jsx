import React from "react";

export default function Footer() {
  return (
    <footer className="bg-base-200 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-4">
          <a href="#home" className="text-xl font-bold text-primary">Abdul Kader Rabbani</a>
        </div>
        <div className="mb-4 text-sm text-gray-600">
          © {new Date().getFullYear()} Abdul Kader Rabbani. All rights reserved.
        </div>
        <div className="flex items-center justify-center gap-4">
          <a href="https://github.com/rabbanictgbd" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary">GitHub</a>
          <a href="https://www.linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary">LinkedIn</a>
          <a href="mailto:rabbanictgbd@gmail.com" className="text-gray-700 hover:text-primary">Email</a>
        </div>
      </div>
    </footer>
  );
}
