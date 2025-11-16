import React, { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

const skills = [
  'Python','SQL','Apache Spark','Airflow','DBT','AWS','GCP','Azure','Kafka','Kinesis','Flink','Snowflake','Redshift','Databricks','Docker','Kubernetes','Terraform','CI/CD','Pandas','Dask','Presto','Trino','Delta Lake','Hudi','Iceberg'
]

function MarqueeRow({ direction = 'left', speed = 50, pause }) {
  const rowRef = useRef(null)

  useEffect(() => {
    const row = rowRef.current
    if (!row) return

    row.style.setProperty('--duration', `${speed}s`)
    row.style.setProperty('--direction', direction === 'left' ? 'normal' : 'reverse')
  }, [direction, speed])

  return (
    <div className={`relative overflow-hidden py-3 ${pause ? 'pause' : ''}`}>
      <div
        ref={rowRef}
        className="marquee whitespace-nowrap will-change-transform"
        aria-label="scrolling skills"
      >
        {skills.concat(skills).map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="mx-4 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

function VerticalMarquee({ speed = 60, pause }) {
  const colRef = useRef(null)
  useEffect(() => {
    const col = colRef.current
    if (!col) return
    col.style.setProperty('--duration', `${speed}s`)
  }, [speed])

  return (
    <div className={`relative h-48 overflow-hidden ${pause ? 'pause' : ''}`}>
      <div ref={colRef} className="marquee-vertical will-change-transform" aria-label="vertical skills">
        {skills.concat(skills).map((s, i) => (
          <div key={`${s}-v-${i}`} className="mb-3">
            <span className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90 backdrop-blur hover:bg-white/10">
              {s}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function SkillsMarquee() {
  const [paused, setPaused] = useState(false)
  const [activeSkill, setActiveSkill] = useState(null)

  return (
    <section id="skills" className="relative w-full bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Core Skills</h2>
          <button
            aria-label={paused ? 'Play marquee' : 'Pause marquee'}
            onClick={() => setPaused((p) => !p)}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />} {paused ? 'Play' : 'Pause'}
          </button>
        </div>

        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <MarqueeRow direction="left" pause={paused} />
          <MarqueeRow direction="right" pause={paused} />
        </div>

        <div className="mt-8" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <VerticalMarquee pause={paused} />
        </div>

        {activeSkill && (
          <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4" role="dialog" aria-live="polite">
            <p className="text-sm text-white/90">{activeSkill}</p>
          </div>
        )}

        <p className="sr-only">Click a skill to see more details.</p>
      </div>

      <style>{`
        .marquee { 
          display: inline-block; 
          animation: marquee var(--duration, 50s) linear infinite;
          animation-direction: var(--direction, normal);
        }
        .marquee-vertical {
          display: inline-block;
          animation: marquee-vertical var(--duration, 60s) linear infinite;
        }
        .pause .marquee, .pause .marquee-vertical { animation-play-state: paused; }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </section>
  )
}

export default SkillsMarquee
