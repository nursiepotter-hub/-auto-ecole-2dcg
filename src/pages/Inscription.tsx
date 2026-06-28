import { CheckCircle, Camera, Droplets, Heart, CreditCard, MapPin, ArrowRight, Copy } from 'lucide-react'
import { Link } from 'react-router-dom'

const documents = [
  { icon: <Copy size={28} />, title: 'Copie CIN légalisée', desc: 'Copie certifiée conforme de votre carte d\'identité nationale', note: 'Recto & verso' },
  { icon: <MapPin size={28} />, title: 'Certificat de résidence', desc: 'Justificatif de domicile de moins de 3 mois', note: 'Original' },
  { icon: <Camera size={28} />, title: 'Quatre (04) photos', desc: 'Photos d\'identité récentes, fond blanc', note: '4 x 4 cm' },
  { icon: <Droplets size={28} />, title: 'Groupe sanguin', desc: 'Carte ou certificat de groupe sanguin', note: 'Original + copie' },
  { icon: <Heart size={28} />, title: 'Certificat médical', desc: 'Certificat d\'aptitude à la conduite délivré par un médecin agréé', note: 'Valable 3 mois' },
  { icon: <CreditCard size={28} />, title: 'Quittance pour permis', desc: 'Paiement des frais de permis auprès du service compétent', note: 'Conserver le reçu' },
]

export default function Inscription() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-ecole-blue/10 text-ecole-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">📋 Inscription</span>
          <h1 className="section-title">Pièces à fournir</h1>
          <p className="section-subtitle">Pour vous inscrire, munissez-vous des documents suivants</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 mb-10 animate-fade-in">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-ecole-red to-red-700 flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                <CheckCircle size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ecole-blue">Checklist d'inscription</h2>
                <p className="text-gray-500 text-sm">Cochez chaque document avant de vous présenter</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {documents.map((doc, i) => (
                <div key={i} className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-ecole-red/20 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ecole-red/10 to-red-100 flex items-center justify-center text-ecole-red flex-shrink-0 group-hover:scale-110 transition-transform">
                    {doc.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-ecole-blue text-sm">{doc.title}</h3>
                      <span className="text-[10px] font-semibold bg-ecole-red/10 text-ecole-red px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">{doc.note}</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{doc.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-ecole-blue">💡 Conseil :</span> Rassemblez tous vos documents dans une pochette avant de venir à l'auto-école. 
                Assurez-vous que votre <span className="font-semibold">certificat médical</span> est toujours valable (moins de 3 mois).
              </p>
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <div className="glass-card p-8 md:p-10 inline-block max-w-lg mx-auto">
              <h3 className="text-xl font-bold text-ecole-blue mb-4">Prêt à démarrer ?</h3>
              <p className="text-gray-500 mb-6">Une fois vos documents prêts, contactez-nous pour finaliser votre inscription.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="btn-primary">
                  Nous contacter <ArrowRight size={18} />
                </Link>
                <a href="https://wa.me/221768534797" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
