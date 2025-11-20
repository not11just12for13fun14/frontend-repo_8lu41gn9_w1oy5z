import React from 'react'
import { motion } from 'framer-motion'
import { ScanLine, Sparkles } from 'lucide-react'

export default function Hero({ onAddSample }) {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12 pb-16 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(59,130,246,0.25),transparent),radial-gradient(1200px_800px_at_-10%_20%,rgba(14,165,233,0.25),transparent)]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[90%] max-w-5xl blur-3xl opacity-30 bg-gradient-to-r from-blue-500/40 via-cyan-400/40 to-emerald-400/40 rounded-full" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-200/80 text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            Unified post‑purchase experience
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Your products, warranties, and service — in one beautiful place
          </h1>
          <p className="mt-4 text-blue-200/90 max-w-2xl mx-auto">
            Store purchases, track warranty health, and book trusted service with zero hassle.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
            <button onClick={onAddSample} className="group px-5 py-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium shadow-lg shadow-cyan-500/25 transition inline-flex items-center gap-2">
              <ScanLine className="h-5 w-5" /> Add sample data
            </button>
            <a href="#vault" className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition">
              Explore your vault
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
