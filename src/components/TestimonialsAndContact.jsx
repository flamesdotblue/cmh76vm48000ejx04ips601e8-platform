import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Their restraint and attention to proportion transformed our daily life. It's elegance you feel more than see.",
    author: "M. Laurent",
    role: "Private Residence, Paris",
  },
  {
    quote:
      "A masterclass in calm — tactile, timeless, and exquisitely detailed from threshold to terrace.",
    author: "E. Park",
    role: "Boutique Hotel, Seoul",
  },
  {
    quote:
      "The team listened with care and designed a space that will age beautifully with our family.",
    author: "S. Patel",
    role: "River House, London",
  },
];

const TestimonialsAndContact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-2xl font-light tracking-tight text-slate-900"
          >
            Client Testimonials
          </motion.h2>
          <div className="mt-8 space-y-8">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 * i }}
                className="rounded-xl border border-slate-300/30 bg-white/60 p-6 shadow-sm backdrop-blur"
              >
                <div className="mb-3 flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" className="text-amber-500" />
                  ))}
                </div>
                <p className="text-slate-800">{t.quote}</p>
                <footer className="mt-4 text-sm text-slate-600">
                  — {t.author}, {t.role}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
        <div id="contact">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-2xl font-light tracking-tight text-slate-900"
          >
            Contact Form
          </motion.h2>
          <p className="mt-4 text-slate-600">
            Share your project vision. We typically respond within 2 business days.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={onChange}
                  className="mt-2 w-full rounded-md border border-slate-400/40 bg-white/70 px-3 py-2 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  className="mt-2 w-full rounded-md border border-slate-400/40 bg-white/70 px-3 py-2 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-slate-700">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={onChange}
                className="mt-2 w-full rounded-md border border-slate-400/40 bg-white/70 px-3 py-2 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-500"
                placeholder="Tell us about the site, scope, and desired timeline"
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-full border border-slate-400/40 bg-slate-900 px-5 py-2.5 text-sm text-white shadow-sm transition-colors hover:bg-slate-800 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : status === "success" ? "Message Sent" : "Send Message"}
              </button>
              <span className="text-xs text-slate-500">We never share your information.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndContact;
