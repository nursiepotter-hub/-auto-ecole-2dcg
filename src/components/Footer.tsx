import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ecole-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-ecole-red flex items-center justify-center">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <span className="text-xl font-bold">2DCG Auto-École</span>
            </div>
            <p className="text-blue-200 text-sm">
              Votre auto-école de confiance au Sénégal. Permis B, conduite accompagnée et stages intensifs.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {[['Accueil', '/'], ['Tarifs', '/tarifs'], ['Inscription', '/inscription'], ['Contact', '/contact'], ['Avis', '/avis']].map(([n, h]) => (
                <li key={h}>
                  <Link to={h} className="text-blue-200 hover:text-white text-sm transition-colors">{n}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li className="flex items-center gap-2">📍 Guédiawaye Rond-Point Marché Jeudi</li>
               <li className="flex items-center gap-2">📍 Keur Massar (en face de l'hôpital)</li>
              <li className="flex items-center gap-2">📱 +221 76 853 47 97 / 77 584 77 77</li>
              <li className="flex items-center gap-2">✉️ contact@2dcg.sn</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
          © 2026 2DCG Auto-École — Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
