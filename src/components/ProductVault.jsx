import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Tag } from 'lucide-react'

function WarrantyBadge({ warrantyEnd }) {
  if (!warrantyEnd) return null
  const end = new Date(warrantyEnd)
  const remaining = Math.ceil((end - new Date()) / (1000 * 60 * 60 * 24))
  const soon = remaining <= 30
  const expired = remaining < 0
  return (
    <span className={`px-2 py-1 text-xs rounded-md border ${expired ? 'bg-rose-500/15 text-rose-300 border-rose-400/20' : soon ? 'bg-amber-500/15 text-amber-300 border-amber-400/20' : 'bg-emerald-500/15 text-emerald-300 border-emerald-400/20'}`}>
      {expired ? 'Warranty expired' : `Warranty ${soon ? 'ends' : 'valid'} until ${end.toLocaleDateString()}`}
    </span>
  )
}

export default function ProductVault({ products }) {
  return (
    <section id="vault" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Your Product Vault</h2>
          <p className="text-sm text-blue-200/70">All your products in one place</p>
        </div>
        {products.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-blue-200/80">
            No products yet. Use the button above to add sample data and see the experience.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="p-5 rounded-2xl border border-white/10 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-white font-semibold leading-tight">{p.brand} {p.model}</div>
                    <div className="text-blue-200/70 text-xs mt-0.5">SN: {p.serial_number}</div>
                  </div>
                  <ShieldCheck className="h-5 w-5 text-emerald-300/80 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  {p.category && <div className="text-blue-200/80 text-sm inline-flex items-center gap-1"><Tag className="h-4 w-4"/> {p.category}</div>}
                  <WarrantyBadge warrantyEnd={p.warranty_end} />
                </div>
                {p.purchase_date && <div className="mt-3 text-blue-200/60 text-xs">Purchased: {new Date(p.purchase_date).toLocaleDateString()}</div>}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
