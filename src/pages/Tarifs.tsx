import { Check, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const forfaits = [
  {
    name: 'Moto',
    price: '90 000 F',
    icon: '🏍️',
    popular: false,
    features: ['Formation complète moto', 'Cours de code illimités', 'Conduite accompagnée', 'Véhicule fourni', 'Suivi personnalisé'],
  },
  {
    name: 'Poids léger',
    price: '90 000 F',
    icon: '🚗',
    popular: true,
    features: ['Permis voiture', 'Cours de code illimités', '20h de conduite', 'Accompagnement examen', 'Suivi personnalisé'],
  },
  {
    name: 'Poids lourd',
    price: '130 000 F',
    icon: '🚛',
    popular: false,
    features: ['Formation poids lourd', 'Cours de code intensifs', '30h de conduite', 'Accompagnement examen', 'Horaires flexibles'],
  },
  {
    name: 'Transport',
    price: '130 000 F',
    icon: '🚌',
    popular: false,
    features: ['Permis transport', 'Cours de code intensifs', '30h de conduite', 'Accompagnement examen', 'Stage accéléré'],
  },
  {
    name: 'Perfectionnement',
    price: '50 000 F',
    icon: '🎯',
    popular: false,
    features: ['Remise à niveau', 'Conduite accompagnée', 'Conseils personnalisés', 'Horaires flexibles'],
  },
]

export default function Tarifs() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-ecole-red/10 text-ecole-red px-4 py-2 rounded-full text-sm font-semibold mb-4">💰 Tarifs</span>
          <h1 className="section-title">Nos forfaits</h1>
          <p className="section-subtitle">Des formules adaptées à tous les besoins</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {forfaits.map((f, i) => (
            <div
              key={i}
              className={`relative glass-card p-8 text-center hover:-translate-y-2 transition-all duration-500 animate-fade-in ${
                f.popular ? 'ring-2 ring-ecole-red shadow-red-500/10' : ''
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {f.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-ecole-red to-red-700 text-white text-xs font-bold px-6 py-1.5 rounded-full shadow-lg shadow-red-500/30">
                  Populaire ⭐
                </div>
              )}
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-ecole-blue mb-2">{f.icon} {f.name}</h3>
                <div className="my-6">
                  <span className="text-5xl font-extrabold text-ecole-red">{f.price}</span>
                </div>
              </div>
              <ul className="space-y-3 text-left mb-8 border-t border-gray-100 pt-6">
                {f.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-600 text-sm">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-green-600" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/221768534797"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full justify-center inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  f.popular
                    ? 'bg-ecole-red text-white hover:bg-red-700 shadow-lg shadow-red-500/25'
                    : 'border-2 border-ecole-red text-ecole-red hover:bg-ecole-red hover:text-white'
                }`}
              >
                S'inscrire <ChevronRight size={18} />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-500 mb-4">Des questions sur nos tarifs ?</p>
          <Link to="/contact" className="text-ecole-red font-semibold hover:underline">Contactez-nous →</Link>
        </div>
      </div>
    </section>
  )
}
