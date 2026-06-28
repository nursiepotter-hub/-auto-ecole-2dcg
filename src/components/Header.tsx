import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Tarifs', href: '/tarifs' },
  { name: 'Inscription', href: '/inscription' },
  { name: 'Moniteurs', href: '/moniteurs' },
  { name: 'Galerie', href: '/galerie' },
  { name: 'Avis', href: '/avis' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-ecole-red to-red-700 flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:shadow-red-500/50 transition-all group-hover:scale-105">
            <span className="text-white font-extrabold text-xl" style={{ fontFamily: 'Poppins' }}>2</span>
          </div>
          <div>
            <span className="font-extrabold text-ecole-blue text-xl tracking-tight" style={{ fontFamily: 'Poppins' }}>2DCG</span>
            <span className="block text-[10px] text-gray-400 -mt-1 font-medium uppercase tracking-widest">Auto-École</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                location.pathname === l.href
                  ? 'bg-ecole-red/10 text-ecole-red'
                  : 'text-gray-600 hover:text-ecole-red hover:bg-gray-50'
              }`}
            >
              {l.name}
            </Link>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-xl hover:bg-gray-100">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1 animate-fade-in">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                location.pathname === l.href
                  ? 'bg-ecole-red/10 text-ecole-red'
                  : 'text-gray-600 hover:text-ecole-red hover:bg-gray-50'
              }`}
            >
              {l.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
