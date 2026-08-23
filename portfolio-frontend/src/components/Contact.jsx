import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import api from "../api/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/contact", form);
      toast.success("Message sent — I'll reply soon!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-cream border-2 border-ink/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lavender transition-colors";

  return (
    <section id="contact" className="py-24 max-w-2xl mx-auto px-6 relative">
      <div className="absolute top-10 right-0 w-16 h-16 bg-peach/20 rounded-full animate-float" />
      <div className="absolute bottom-10 left-0 w-12 h-12 border-4 border-ink/10 rounded-2xl rotate-12 animate-wiggle" />

      <span className="section-tag mx-auto flex w-fit">05 · Contact</span>
      <h2 className="section-heading text-center mb-2">Let's talk</h2>
      <p className="text-ink/60 text-center mb-10">Got a role or project in mind? My inbox's open.</p>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="clay-card bg-white p-8 space-y-4"
      >
        <div>
          <label className="text-xs font-semibold text-ink/60 block mb-1.5">Name</label>
          <input required name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label className="text-xs font-semibold text-ink/60 block mb-1.5">Email</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" />
        </div>
        <div>
          <label className="text-xs font-semibold text-ink/60 block mb-1.5">Message</label>
          <textarea required name="message" value={form.message} onChange={handleChange} rows={5} className={inputClass} placeholder="Tell me about your project or role..." />
        </div>
        <button type="submit" disabled={loading} className="w-full py-3.5 rounded-full bg-lavender clay-btn font-bold disabled:opacity-50">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>
    </section>
  );
}