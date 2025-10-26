import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Placeholder: integrate EmailJS or backend endpoint here
    setStatus("Message sent (demo). Replace with EmailJS or backend.");
    e.target.reset();
    setTimeout(() => setStatus(""), 5000);
  }

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2 initial={{ y: 8, opacity: 0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} className="text-3xl font-bold text-center text-primary mb-6">
          Contact
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center text-gray-600 mb-6">
          Interested in working together? Fill out the form or reach me via email.
        </motion.p>

        <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} onSubmit={handleSubmit} className="bg-base-100 p-6 rounded-2xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" type="text" required placeholder="Your name" className="input input-bordered w-full" />
            <input name="email" type="email" required placeholder="Your email" className="input input-bordered w-full" />
          </div>
          <textarea name="message" required placeholder="Your message" className="textarea textarea-bordered w-full mt-4 h-32"></textarea>

          <div className="flex items-center justify-between mt-4">
            <button type="submit" className="btn btn-primary">Send Message</button>
            <div className="text-sm text-gray-500">Or email: <a href="mailto:rabbanictgbd@gmail.com" className="text-primary">rabbanictgbd@gmail.com</a></div>
          </div>

          {status && <p className="mt-3 text-sm text-green-600">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
