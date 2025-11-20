import React from 'react'
import { Menu, Boxes, ShieldCheck, ScanLine } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center shadow-lg shadow-blue-500/30">
            <Boxes className="h-5 w-5 text-white" />
          </div>
          <div className="text-white font-semibold tracking-tight">Product Vault</div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-200/80">
          <a href="#vault" className="hover:text-white transition">Vault</a>
          <a href="#centers" className="hover:text-white transition">Service</a>
          <a href="#" className="hover:text-white transition flex items-center gap-1"><ShieldCheck className="h-4 w-4"/>Warranty</a>
        </nav>
        <button className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10">
          <Menu className="h-5 w-5 text-white" />
        </button>
      </div>
    </header>
  )
}
