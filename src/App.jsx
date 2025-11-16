import React from 'react'
import Hero3D from './components/Hero3D'
import SkillsMarquee from './components/SkillsMarquee'
import ProjectsShowcase from './components/ProjectsShowcase'
import ExperienceTimeline from './components/ExperienceTimeline'
import ContactForm from './components/ContactForm'
import DE3DScene from './components/DE3DScene'
import { Menu } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#hero" className="font-semibold tracking-tight">DE • Portfolio</a>
          <nav className="hidden gap-6 sm:flex" aria-label="Primary">
            <a href="#skills" className="text-white/80 hover:text-white">Skills</a>
            <a href="#projects" className="text-white/80 hover:text-white">Projects</a>
            <a href="#experience" className="text-white/80 hover:text-white">Experience</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          </nav>
          <button className="sm:hidden" aria-label="Open menu"><Menu className="h-6 w-6" /></button>
        </div>
      </header>

      <main className="pt-16">
        <Hero3D />

        <section className="bg-slate-900 py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold">Pipeline Preview</h2>
              <p className="mt-2 text-white/80">A lightweight 3D illustration of an ETL pipeline: data flows from sources through transformation to a warehouse.</p>
            </div>
            <DE3DScene />
          </div>
        </section>

        <SkillsMarquee />
        <ProjectsShowcase />
        <ExperienceTimeline />
        <ContactForm />
      </main>

      <footer className="border-t border-white/10 bg-slate-900/80 py-6 text-center text-white/60">
        © {new Date().getFullYear()} Data Engineer • Built with React, Three.js, GSAP-friendly motions
      </footer>
    </div>
  )
}

export default App
