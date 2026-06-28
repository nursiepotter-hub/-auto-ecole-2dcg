import { Link } from 'react-router-dom'
import { Shield, Users, Award, Clock, ChevronRight, Star } from 'lucide-react'

const stats = [
  { value: '+500', label: 'Élèves formés' },
  { value: '95%', label: 'Taux de réussite' },
  { value: '10+', label: "Ans d'expérience" },
  { value: '4.9', label: 'Note moyenne' },
]

const avantages = [
  { icon: <Shield size={28} />, title: 'Encadrement pro', desc: 'Moniteurs diplômés et expérimentés' },
  { icon: <Users size={28} />, title: 'Petits groupes', desc: 'Suivi personnalisé pour chaque élève' },
  { icon: <Award size={28} />, title: 'Permis du 1er coup', desc: 'Formation intensive et efficace' },
  { icon: <Clock size={28} />, title: 'Horaires flexibles', desc: 'Cours adaptés à votre emploi du temps' },
]

const homeGallery = [
  '/images/hero-accueil-1.png',
  '/images/hero-photo.png',
  '/images/hero-accueil-2.png',
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-accueil-1.png" alt="Auto-école 2DCG" className="w-full h-full object-cover" />
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

      {/* Stats */}
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

      {/* Galerie sur l'accueil */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14 animate-fade-in">
            <span className="inline-block bg-ecole-red/10 text-ecole-red px-4 py-2 rounded-full text-sm font-semibold mb-4">En images</span>
            <h2 className="section-title">Notre auto-école en action</h2>
            <p className="section-subtitle">Des cours pratiques et théoriques dans un cadre professionnel</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {homeGallery.map((img, i) => (
              <div key={i} className="relative group rounded-2xl overflow-hidden shadow-xl aspect-[4/3] animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <img src={img} alt={`Auto-école 2DCG - ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/galerie" className="text-ecole-red hover:text-red-700 font-semibold inline-flex items-center gap-1 transition-colors">
              Voir toute la galerie <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Avantages avec image */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-block bg-ecole-red/10 text-ecole-red px-4 py-2 rounded-full text-sm font-semibold mb-4">Pourquoi nous choisir ?</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-ecole-blue mb-6 leading-tight">
                L'excellence de la formation
              </h2>
              <p className="text-gray-500 mb-8 max-w-lg">
                Des années d'expérience au service de votre réussite. Nos moniteurs qualifiés vous accompagnent à chaque étape.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {avantages.map((a, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-ecole-red/5 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ecole-red to-red-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-red-500/20">
                      {a.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-ecole-blue">{a.title}</h3>
                      <p className="text-gray-500 text-sm">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/hero-accueil-2.png" alt="Formation auto-école" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ecole-blue/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                  <Award size={28} className="text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-ecole-blue">95% de réussite</p>
                  <p className="text-gray-400 text-sm">au 1er essai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA avec image de fond */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/galerie-5.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ecole-blue/90 via-blue-900/85 to-ecole-red/80" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in">
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
