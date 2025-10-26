import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Coastal Residence",
    location: "Byron Bay, AU",
    image: "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Hillside Retreat",
    location: "Napa Valley, US",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Courtyard House",
    location: "Kyoto, JP",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Urban Penthouse",
    location: "Copenhagen, DK",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2a59?q=80&w=2000&auto=format&fit=crop",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-light tracking-tight text-slate-900">Signature Projects</h2>
        <a href="#contact" className="text-sm text-slate-700 underline-offset-4 hover:underline">Request Portfolio PDF</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 * idx }}
            className="group overflow-hidden rounded-xl border border-slate-300/30 bg-white/60 shadow-sm backdrop-blur"
          >
            <div className="relative">
              <img
                src={p.image}
                alt={p.title}
                className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <h3 className="text-base font-medium text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.location}</p>
              </div>
              <div className="h-px w-10 bg-slate-400/40" />
            </div>
          </motion.article>
        ))}
      </div>
      <div className="mt-16 border-t border-slate-300/30" />
    </section>
  );
};

export default Projects;
