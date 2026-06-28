import { useState } from 'react'
import { CheckCircle, Camera, Droplets, Heart, CreditCard, MapPin, Copy, Send, User, Phone, FileText } from 'lucide-react'

const categories = ['Moto', 'Poids léger', 'Poids lourd', 'Transport', 'Perfectionnement']

const documents = [
  { icon: <Copy size={28} />, title: 'Copie CIN légalisée', note: 'Recto & verso' },
  { icon: <MapPin size={28} />, title: 'Certificat de résidence', note: 'Original' },
  { icon: <Camera size={28} />, title: 'Quatre (04) photos', note: '4 x 4 cm' },
  { icon: <Droplets size={28} />, title: 'Groupe sanguin', note: 'Original + copie' },
  { icon: <Heart size={28} />, title: 'Certificat médical d\'aptitude', note: 'Valable 3 mois' },
  { icon: <CreditCard size={28} />, title: 'Quittance pour permis', note: 'Conserver le reçu' },
]

export default function Inscription() {
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [tel, setTel] = useState('')
  const [categorie, setCategorie] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `*Nouvelle inscription 2DCG Auto-École* 🚗\n\n👤 *Nom :* ${nom}\n👤 *Prénom :* ${prenom}\n📞 *Téléphone :* ${tel}\n📋 *Catégorie :* ${categorie}`
    window.open(`https://wa.me/221768534797?text=${encodeURIComponent(message)}`, '_blank')
    setSent(true)
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-ecole-blue/10 text-ecole-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">📋 Inscription</span>
          <h1 className="section-title">Pré-inscription en ligne</h1>
          <p className="section-subtitle">Laissez vos coordonnées, nous vous recontacterons</p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="glass-card p-8 md:p-10 animate-fade-in">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-ecole-red to-red-700 flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                <FileText size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ecole-blue">Formulaire</h2>
                <p className="text-gray-500 text-sm">Tous les champs sont obligatoires</p>
              </div>
            </div>

            {sent ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <p className="text-xl font-bold text-gray-800 mb-2">Inscription envoyée ! ✅</p>
                <p className="text-gray-500 mb-4">Vous allez être redirigé vers WhatsApp. Envoyez le message pour finaliser.</p>
                <button onClick={() => { setSent(false); setNom(''); setPrenom(''); setTel(''); setCategorie('') }} className="btn-outline mx-auto">
                  Nouvelle inscription
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nom</label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input value={nom} onChange={e => setNom(e.target.value)} required placeholder="Votre nom" className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-ecole-red focus:ring-2 focus:ring-red-100 outline-none transition-all bg-gray-50/50" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Prénom</label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input value={prenom} onChange={e => setPrenom(e.target.value)} required placeholder="Votre prénom" className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-ecole-red focus:ring-2 focus:ring-red-100 outline-none transition-all bg-gray-50/50" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Téléphone</label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input value={tel} onChange={e => setTel(e.target.value)} required type="tel" placeholder="+221 76 XXX XX XX" className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-ecole-red focus:ring-2 focus:ring-red-100 outline-none transition-all bg-gray-50/50" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Catégorie de permis</label>
                  <select value={categorie} onChange={e => setCategorie(e.target.value)} required className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-ecole-red focus:ring-2 focus:ring-red-100 outline-none transition-all bg-gray-50/50 text-gray-600">
                    <option value="">Sélectionnez une catégorie</option>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-lg">
                  Envoyer l'inscription <Send size={18} />
                </button>

                <p className="text-xs text-gray-400 text-center">
                  En cliquant, vous serez redirigé vers WhatsApp pour confirmer votre inscription.
                </p>
              </form>
            )}
          </div>

          <div className="glass-card p-8 md:p-10 animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-ecole-blue to-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <CheckCircle size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ecole-blue">Pièces à fournir</h2>
                <p className="text-gray-500 text-sm">Documents requis pour l'inscription</p>
              </div>
            </div>

            <div className="space-y-3">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-ecole-red/20 transition-all animate-fade-in" style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ecole-red/10 to-red-100 flex items-center justify-center text-ecole-red flex-shrink-0">
                    {doc.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-ecole-blue text-sm">{doc.title}</p>
                  </div>
                  <span className="text-[10px] font-semibold bg-ecole-red/10 text-ecole-red px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">{doc.note}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-ecole-blue">💡 Conseil :</span> Rassemblez tous vos documents avant de venir à l'auto-école.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
