// App.jsx - Raíz de la app con React Router multi-página
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Páginas (cada una es una ruta separada como el sitio original)
import FumigacionesPage     from './pages/FumigacionesPage'
import ControlDePlagasPage  from './pages/ControlDePlagasPage'
import PlagaPage            from './pages/PlagaPage'
import BlogPage             from './pages/BlogPage'
import BlogDetailPage       from './pages/BlogDetailPage'
import ServiciosPage        from './pages/ServiciosPage'
import TestimoniosPage      from './pages/TestimoniosPage'
import ContactoPage         from './pages/ContactoPage'

function App() {
  return (
    <BrowserRouter>
      {/* Navbar fijo en todas las páginas */}
      <Navbar />

      {/* Contenido de la página según ruta */}
      <Routes>
        <Route path="/"                   element={<FumigacionesPage />} />
        <Route path="/control-de-plagas"  element={<ControlDePlagasPage />} />
        <Route path="/plaga"              element={<PlagaPage />} />
        <Route path="/blog"               element={<BlogPage />} />
        <Route path="/blog/:id"           element={<BlogDetailPage />} />
        <Route path="/servicios"          element={<ServiciosPage />} />
        <Route path="/testimonios"        element={<TestimoniosPage />} />
        <Route path="/contacto"           element={<ContactoPage />} />
        {/* Fallback a inicio */}
        <Route path="*"                   element={<FumigacionesPage />} />
      </Routes>

      {/* Footer + botón flotante WhatsApp en todas las páginas */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
