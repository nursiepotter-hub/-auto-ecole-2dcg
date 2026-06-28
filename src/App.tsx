import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Home from '@/pages/Home'
import Tarifs from '@/pages/Tarifs'
import Moniteurs from '@/pages/Moniteurs'
import Contact from '@/pages/Contact'
import Avis from '@/pages/Avis'
import Galerie from '@/pages/Galerie'
import Inscription from '@/pages/Inscription'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/moniteurs" element={<Moniteurs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/avis" element={<Avis />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/inscription" element={<Inscription />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}
