import React from "react";
import Hero from "./components/Hero";
import AboutAndApproach from "./components/AboutAndApproach";
import Projects from "./components/Projects";
import TestimonialsAndContact from "./components/TestimonialsAndContact";

function App() {
  return (
    <div className="min-h-screen bg-[#F8F5EF] text-slate-800 antialiased">
      <Hero />
      <div className="mx-auto max-w-6xl px-6">
        <AboutAndApproach />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <Projects />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <TestimonialsAndContact />
      </div>
      <footer className="mt-20 border-t border-slate-300/30">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
          © {new Date().getFullYear()} Atelier Novelle. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
