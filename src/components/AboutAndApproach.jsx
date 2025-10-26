import React from "react";
import { motion } from "framer-motion";

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9, ease: "easeOut", delay }}>
    {children}
  </motion.div>
);

const AboutAndApproach = () => {
  return (
    <section id="studio" className="py-16 lg:py-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <div>
            <h2 className="text-2xl font-light tracking-tight text-slate-900">Studio Story</h2>
            <p className="mt-6 text-slate-600">
              Founded on the belief that calm is a form of luxury, Atelier Novelle designs 
              residences and hospitality destinations that feel collected and enduring. Our 
              practice is driven by material honesty, natural light, and a devotion to human scale.
            </p>
            <p className="mt-4 text-slate-600">
              We collaborate closely with artisans and builders to deliver spaces that live 
              beautifully, age gracefully, and reflect the quiet confidence of their owners.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 text-sm text-slate-700">
              <div>
                <div className="text-2xl font-light text-slate-900">12+</div>
                <div className="mt-2">Years of Practice</div>
              </div>
              <div>
                <div className="text-2xl font-light text-slate-900">48</div>
                <div className="mt-2">Completed Projects</div>
              </div>
              <div>
                <div className="text-2xl font-light text-slate-900">7</div>
                <div className="mt-2">International Awards</div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div>
            <h2 className="text-2xl font-light tracking-tight text-slate-900">Design Approach</h2>
            <ul className="mt-6 space-y-6 text-slate-600">
              <li className="border-l-2 border-slate-400/30 pl-5">
                Materiality first — stone, timber, linen, and patinated metal form a restrained palette.
              </li>
              <li className="border-l-2 border-slate-400/30 pl-5">
                Proportion and negative space guide composition; every line serves a purpose.
              </li>
              <li className="border-l-2 border-slate-400/30 pl-5">
                Light as architecture — framing daylight to soften edges and enrich textures.
              </li>
              <li className="border-l-2 border-slate-400/30 pl-5">
                Sustainable detailing and craft that privilege longevity over trend.
              </li>
            </ul>
            <div className="mt-10 overflow-hidden rounded-xl border border-slate-300/30">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1505692794403-34d4982ef8aa?q=80&w=1600&auto=format&fit=crop"
                alt="Tactile materials"
                className="h-64 w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </FadeIn>
      </div>
      <div className="mt-16 border-t border-slate-300/30" />
    </section>
  );
};

export default AboutAndApproach;
