import React, { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowDown } from 'lucide-react'

function Hero3D() {
  const containerRef = useRef(null)

  return (
    <section
      id="hero"
      aria-label="Hero with interactive 3D scene"
      className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white"
      ref={containerRef}
    >
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center sm:pt-32">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Data Engineering Portfolio
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-200">
          Building resilient data pipelines, real-time analytics, and cloud-native platforms.
        </p>
        <a
          href="#skills"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          Explore skills <ArrowDown className="h-4 w-4" />
        </a>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900/90 to-transparent" />
    </section>
  )
}

export default Hero3D
