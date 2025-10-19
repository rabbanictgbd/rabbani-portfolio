import React from "react";

export default function Footer() {
  return (
    <footer className="bg-base-200 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Abdul Kader Rabbani. Built with React & Tailwind.
      </div>
    </footer>
  );
}
