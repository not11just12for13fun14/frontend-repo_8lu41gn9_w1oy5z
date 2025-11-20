import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductVault from './components/ProductVault'
import ServiceCenters from './components/ServiceCenters'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

async function fetchJSON(url, options) {
  const res = await fetch(url, options)
  if (!res.ok) throw new Error('Request failed')
  return res.json()
}

function App() {
  const [products, setProducts] = useState([])
  const [centers, setCenters] = useState([])

  const loadData = async () => {
    try {
      const [prods, scs] = await Promise.all([
        fetchJSON(`${API_BASE}/api/products`),
        fetchJSON(`${API_BASE}/api/service-centers`),
      ])
      setProducts(prods)
      setCenters(scs)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const addSampleData = async () => {
    try {
      const sample = [
        {
          user_id: 'demo-user',
          brand: 'Samsung',
          model: 'Q80B 65"',
          serial_number: 'SAM-65Q80B-12345',
          category: 'TV',
          purchase_date: new Date(Date.now() - 250 * 24 * 60 * 60 * 1000).toISOString().slice(0,10),
          warranty_months: 12,
        },
        {
          user_id: 'demo-user',
          brand: 'LG',
          model: 'TurboWash 7kg',
          serial_number: 'LG-WASH-98765',
          category: 'Washer',
          purchase_date: new Date(Date.now() - 500 * 24 * 60 * 60 * 1000).toISOString().slice(0,10),
          warranty_months: 24,
        },
      ]
      for (const p of sample) {
        await fetchJSON(`${API_BASE}/api/products`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(p),
        })
      }
      await loadData()
    } catch (e) {
      console.error(e)
      alert('Could not add sample data. Check backend logs.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <Hero onAddSample={addSampleData} />
      <ProductVault products={products} />
      <ServiceCenters centers={centers} />
      <footer className="py-12 text-center text-blue-200/70">
        Built as an interactive concept for a unified post‑purchase experience
      </footer>
    </div>
  )
}

export default App
