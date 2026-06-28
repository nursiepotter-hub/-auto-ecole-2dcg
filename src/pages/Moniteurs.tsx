import { Award, Star } from 'lucide-react'

const moniteurs = [
  { name: 'M. Dieng', role: 'Directeur & Moniteur', exp: '15 ans', bio: 'Fondateur de 2DCG, expert en formation à la conduite depuis 15 ans. Passionné par la pédagogie.', color: 'from-ecole-blue to-blue-700' },
  { name: 'M. Diop', role: 'Moniteur Principal', exp: '10 ans', bio: 'Spécialiste en conduite accompagnée et stages intensifs. Patience et professionnalisme.', color: 'from-ecole-red to-red-700' },
  { name: 'Mme Diallo', role: 'Monitrice', exp: '8 ans', bio: 'Pédagogue attentive, idéale pour les débutants. Met ses élèves en confiance rapidement.', color: 'from-blue-700 to-ecole-red' },
]

export default function Moniteurs() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-ecole-blue/10 text-ecole-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">👨‍🏫 Équipe</span>
          <h1 className="section-title">Nos moniteurs</h1>
          <p className="section-subtitle">Des professionnels passionnés à votre écoute</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {moniteurs.map((m, i) => (
            <div key={i} className="group glass-card p-8 text-center hover:-translate-y-2 transition-all duration-500 animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                {m.name.split(' ')[1]?.[0] || m.name[1] || 'D'}
              </div>
              <div className="inline-flex items-center gap-1 bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
                {m.exp} d'expérience
              </div>
              <h3 className="text-xl font-bold text-ecole-blue">{m.name}</h3>
              <p className="text-ecole-red font-semibold text-sm mb-4">{m.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{m.bio}</p>
              <div className="mt-6 flex items-center justify-center gap-1 text-xs text-gray-400">
                <Award size={14} />
                <span>Diplômé d'État</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
