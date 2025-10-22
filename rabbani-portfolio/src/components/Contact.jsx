import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // placeholder logic — integrate EmailJS or backend later
    setStatus("Message sent (demo). Replace with EmailJS or backend.");
    e.target.reset();
  }

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-6">Contact</motion.h2>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid gap-4 bg-base-200 p-6 rounded-2xl shadow-sm">
          <input name="name" required placeholder="Your Name" className="input input-bordered w-full" />
          <input type="email" name="email" required placeholder="Your Email" className="input input-bordered w-full" />
          <textarea name="message" required placeholder="Your Message" className="textarea textarea-bordered w-full h-32" />
          <button className="btn btn-primary" type="submit">Send Message</button>
          {status && <p className="text-sm text-green-600 mt-2">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
