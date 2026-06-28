import { Link } from 'react-router-dom'
import { Shield, Users, Award, Clock, ChevronRight, Star } from 'lucide-react'

const stats = [
  { value: '+500', label: 'Élèves formés' },
  { value: '95%', label: 'Taux de réussite' },
  { value: '10+', label: 'Ans d\'expérience' },
  { value: '4.9', label: 'Note moyenne' },
]

const avantages = [
  { icon: <Shield size={28} />, title: 'Encadrement pro', desc: 'Moniteurs diplômés et expérimentés' },
  { icon: <Users size={28} />, title: 'Petits groupes', desc: 'Suivi personnalisé pour chaque élève' },
  { icon: <Award size={28} />, title: 'Permis du 1er coup', desc: 'Formation intensive et efficace' },
  { icon: <Clock size={28} />, title: 'Horaires flexibles', desc: 'Cours adaptés à votre emploi du temps' },
]

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-car.jpg" alt="Voiture sur la route" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ecole-blue/90 via-blue-900/80 to-ecole-red/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span>🚗</span>
              <span>Bienvenue à 2DCG Auto-École</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Votre permis,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                notre mission
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl">
              Formation de qualité, moniteurs professionnels, accompagnement personnalisé — 
              obtenez votre permis avec 2DCG à Dakar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/tarifs" className="btn-primary text-lg shadow-xl shadow-red-500/30">
                Voir nos tarifs <ChevronRight size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary text-lg">
                Nous contacter
              </Link>
            </div>

            <div className="flex items-center gap-2 mt-8 text-blue-200 text-sm">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="font-semibold">4.9/5</span>
              <span className="opacity-60">— Plus de 500 élèves formés</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <p className="text-3xl md:text-4xl font-extrabold text-ecole-red">{s.value}</p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block bg-ecole-red/10 text-ecole-red px-4 py-2 rounded-full text-sm font-semibold mb-4">Pourquoi nous choisir ?</span>
            <h2 className="section-title">L'excellence de la formation</h2>
            <p className="section-subtitle">Des années d'expérience au service de votre réussite</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map((a, i) => (
              <div key={i} className="group glass-card p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ecole-red to-red-700 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/20">
                  {a.icon}
                </div>
                <h3 className="text-lg font-bold text-ecole-blue mb-2">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-ecole-blue via-blue-900 to-ecole-red/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 animate-fade-in">
            Prêt à prendre le volant ? 🚗
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Rejoignez des centaines d'élèves satisfaits. Inscrivez-vous dès maintenant !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg shadow-xl shadow-red-500/30">
              S'inscrire maintenant
            </Link>
            <a href="https://wa.me/221768534797" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
