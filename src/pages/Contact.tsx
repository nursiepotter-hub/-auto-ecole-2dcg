import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-ecole-red/10 text-ecole-red px-4 py-2 rounded-full text-sm font-semibold mb-4">📞 Contact</span>
          <h1 className="section-title">Parlons de votre permis</h1>
          <p className="section-subtitle">Laissez-nous un message ou contactez-nous directement</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-10 animate-fade-in">
            <h3 className="text-xl font-bold text-ecole-blue mb-6 flex items-center gap-2">
              <Send size={20} className="text-ecole-red" />
              Envoyez-nous un message
            </h3>
            {sent ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <p className="text-xl font-bold text-gray-800 mb-2">Message envoyé ! ✅</p>
                <p className="text-gray-500">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Votre nom" required className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-ecole-red focus:ring-2 focus:ring-red-100 outline-none transition-all bg-gray-50/50" />
                  <input type="tel" placeholder="Votre téléphone" required className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-ecole-red focus:ring-2 focus:ring-red-100 outline-none transition-all bg-gray-50/50" />
                </div>
                <select className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-ecole-red focus:ring-2 focus:ring-red-100 outline-none transition-all bg-gray-50/50 text-gray-600">
                  <option>Permis B</option>
                  <option>Conduite accompagnée</option>
                  <option>Stage intensif</option>
                  <option>Autre</option>
                </select>
                <textarea placeholder="Votre message" rows={4} required className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-ecole-red focus:ring-2 focus:ring-red-100 outline-none transition-all bg-gray-50/50" />
                <button type="submit" className="btn-primary w-full justify-center text-lg">
                  Envoyer le message <Send size={18} />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-ecole-blue mb-6">Nos coordonnées</h3>
              <div className="space-y-3 mb-6">
                <p className="font-semibold text-gray-800 text-sm flex items-center gap-2"><MapPin size={16} className="text-ecole-red" /> Nos adresses</p>
                <div className="grid gap-2">
                  <div className="bg-gradient-to-r from-ecole-red/5 to-transparent rounded-xl p-3 border border-ecole-red/10">
                    <p className="font-bold text-ecole-blue text-sm">Guédiawaye</p>
                    <p className="text-gray-500 text-xs">Rond-Point Marché Jeudi</p>
                  </div>
                  <div className="bg-gradient-to-r from-ecole-blue/5 to-transparent rounded-xl p-3 border border-ecole-blue/10">
                    <p className="font-bold text-ecole-blue text-sm">Keur Massar</p>
                    <p className="text-gray-500 text-xs">En face de l'hôpital</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: <Phone size={20} />, title: 'Téléphone', value: '+221 76 853 47 97 / 77 584 77 77' },
                  { icon: <Mail size={20} />, title: 'Email', value: 'permispourtous221@gmail.com' },
                  { icon: <Clock size={20} />, title: 'Horaires', value: 'Lun-Ven: 8h-18h · Sam: 9h-13h' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-ecole-red/10 flex items-center justify-center text-ecole-red flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                      <p className="text-gray-500">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
