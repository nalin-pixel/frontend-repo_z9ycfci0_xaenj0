import React, { useState } from 'react'
import { motion } from 'framer-motion'

function ContactForm() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setStatus('sending')

    try {
      // For demo, just simulate sending
      await new Promise((r) => setTimeout(r, 800))
      setStatus('sent')
      form.reset()
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative w-full bg-slate-900/95 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Get in touch</h2>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          aria-label="Contact form"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1">
              <span className="text-sm text-white/80">Name</span>
              <input name="name" required aria-required="true" className="rounded-md border border-white/10 bg-white/10 px-3 py-2 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Your name" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-white/80">Email</span>
              <input name="email" type="email" required aria-required="true" className="rounded-md border border-white/10 bg-white/10 px-3 py-2 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="you@company.com" />
            </label>
          </div>
          <label className="grid gap-1">
            <span className="text-sm text-white/80">Message</span>
            <textarea name="message" rows="4" required className="rounded-md border border-white/10 bg-white/10 px-3 py-2 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Tell me about your data challenge..." />
          </label>
          <div className="flex items-center gap-3">
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center rounded-md bg-cyan-500 px-5 py-2 font-semibold text-slate-900 hover:bg-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              Send
            </motion.button>
            {status === 'sending' && <span aria-live="polite" className="text-white/70">Sending...</span>}
            {status === 'sent' && <span aria-live="polite" className="text-emerald-300">Sent! I’ll get back soon.</span>}
            {status === 'error' && <span aria-live="polite" className="text-red-300">Something went wrong.</span>}
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactForm
