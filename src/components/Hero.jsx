import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F2EDE3] to-transparent" />
      <div className="mx-auto max-w-7xl px-6 pt-16 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="grid items-center gap-8 lg:grid-cols-2"
        >
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl font-light tracking-tight text-slate-900 sm:text-5xl">
              Quiet luxury in architecture and interior design
            </h1>
            <p className="mt-5 max-w-xl text-slate-600">
              We craft serene spaces with warm minimal aesthetics — timeless materials, 
              restrained details, and impeccable proportion.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <a
                href="#projects"
                className="rounded-full border border-slate-400/40 bg-white/60 px-5 py-2.5 text-sm text-slate-800 shadow-sm backdrop-blur hover:bg-white transition-colors"
              >
                View Signature Projects
              </a>
              <a
                href="#contact"
                className="text-sm text-slate-700 underline-offset-4 hover:underline"
              >
                Start a Conversation
              </a>
            </div>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl border border-slate-300/30 shadow-sm">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1800&auto=format&fit=crop"
              alt="Minimal luxury living space"
              className="h-[420px] w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </motion.div>
        <div className="mt-12 border-t border-slate-300/30" />
      </div>
    </section>
  );
};

export default Hero;
