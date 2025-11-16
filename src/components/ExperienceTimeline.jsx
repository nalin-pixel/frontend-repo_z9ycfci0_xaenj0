import React from 'react'
import { motion } from 'framer-motion'

const timeline = [
  { year: '2025', role: 'Senior Data Engineer', org: 'CloudScale Co.', points: ['Built lakehouse governance with Unity Catalog', 'Introduced CDC with Debezium']} ,
  { year: '2023', role: 'Data Engineer', org: 'FinData Inc.', points: ['Designed streaming ETL on AWS', 'Optimized Snowflake costs by 40%']},
  { year: '2021', role: 'Associate Data Engineer', org: 'RetailAI', points: ['Created dbt pipelines', 'Implemented quality gates']},
]

function TimelineItem({ item, i }) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-400" />
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="rounded-lg border border-white/10 bg-white/5 p-4"
      >
        <div className="flex items-center justify-between text-white">
          <h3 className="font-semibold">{item.role} • {item.org}</h3>
          <span className="text-sm text-white/60">{item.year}</span>
        </div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
          {item.points.map((p, idx) => (
            <li key={idx}>{p}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

function ExperienceTimeline() {
  return (
    <section id="experience" className="relative w-full bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h2>
        <div className="mt-8 border-l border-white/10 pl-6">
          {timeline.map((t, i) => (
            <TimelineItem key={t.year} item={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline
