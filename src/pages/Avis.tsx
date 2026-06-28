import { Star, Quote } from 'lucide-react'

const avisList = [
  { name: 'Fatou S.', note: 5, text: 'Excellente auto-école ! J\'ai obtenu mon permis du premier coup. Les moniteurs sont patients et professionnels.', initial: 'F' },
  { name: 'Omar D.', note: 5, text: 'Je recommande 2DCG à 100%. Formation de qualité, prix abordables, et un suivi personnalisé exceptionnel.', initial: 'O' },
  { name: 'Aïcha B.', note: 5, text: 'Les moniteurs sont très pédagogues. J\'ai appris à conduire en toute confiance. Merci à toute l\'équipe !', initial: 'A' },
  { name: 'Mamadou F.', note: 4, text: 'Bonne auto-école avec des horaires flexibles. Accueil chaleureux et professionnel. Je recommande !', initial: 'M' },
  { name: 'Sophie K.', note: 5, text: 'Je stressais beaucoup au début mais l\'équipe m\'a mise à l\'aise. Permis obtenu haut la main !', initial: 'S' },
  { name: 'Abdou R.', note: 4, text: 'Professionnalisme et sérieux. Les tarifs sont très corrects pour la qualité de formation proposée.', initial: 'A' },
]

export default function Avis() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">⭐ Avis</span>
          <h1 className="section-title">Ce que disent nos élèves</h1>
          <p className="section-subtitle">La satisfaction de nos élèves est notre plus belle récompense</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {avisList.map((a, i) => (
            <div key={i} className="glass-card p-6 hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${i * 0.08}s` }}>
              <Quote size={24} className="text-ecole-red/20 mb-3" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} className={j < a.note ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'} />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed italic">"{a.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ecole-blue to-ecole-red flex items-center justify-center text-white text-sm font-bold">
                  {a.initial}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{a.name}</p>
                  <p className="text-xs text-gray-400">Élève 2DCG</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
