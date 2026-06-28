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
                  { icon: <Mail size={20} />, title: 'Email', value: 'contact@2dcg.sn' },
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

            <a
              href="https://wa.me/221768534797"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-xl shadow-green-500/30 hover:shadow-green-500/50"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Contactez-nous sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
