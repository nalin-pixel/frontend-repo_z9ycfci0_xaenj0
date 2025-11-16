import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Streaming Analytics Platform',
    desc: 'Real-time event processing with Kafka, Spark Structured Streaming, and Delta Lake.',
    tags: ['Kafka', 'Spark', 'Delta Lake', 'Databricks']
  },
  {
    title: 'Data Warehouse Modernization',
    desc: 'ETL migration to dbt + Snowflake with CI/CD and data quality tests.',
    tags: ['dbt', 'Snowflake', 'Great Expectations']
  },
  {
    title: 'ML Feature Store',
    desc: 'Unified offline/online features powered by Redis and parquet lakehouse.',
    tags: ['Feast', 'Redis', 'Parquet']
  }
]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
      role="article"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <span className="text-xs text-white/60">{index + 1}</span>
      </div>
      <p className="mt-2 text-white/80">{project.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function ProjectsShowcase() {
  return (
    <section id="projects" className="relative w-full bg-slate-900/95 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsShowcase
