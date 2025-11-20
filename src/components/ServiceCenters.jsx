import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Star } from 'lucide-react'

export default function ServiceCenters({ centers }) {
  return (
    <section id="centers" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Nearby Authorized Service Centers</h2>
          <p className="text-sm text-blue-200/70">Trusted partners</p>
        </div>
        {centers.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-blue-200/80">
            No centers listed yet. This will populate as partners onboard.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {centers.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="p-5 rounded-2xl border border-white/10 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="text-white font-semibold">{c.name}</div>
                  <div className="text-xs text-blue-200/80 inline-flex items-center gap-1"><Star className="h-3.5 w-3.5 text-amber-300"/> {c.rating?.toFixed(1)}</div>
                </div>
                <div className="mt-2 text-blue-200/80 text-sm">Brands: {c.brands?.join(', ')}</div>
                <div className="mt-1 text-blue-200/60 text-xs inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5"/> {c.address}, {c.city}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
