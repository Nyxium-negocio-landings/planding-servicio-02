// pages/ControlDePlagasPage.jsx — Ruta: /control-de-plagas
import { Link } from 'react-router-dom'
import { CONTROL_PLAGAS_LIST } from '../constants/data'
import { useScrollReveal } from '../hooks/useScrollReveal'
import controlPlgImg from '../assets/images/control_plagas.png'

const IMG = controlPlgImg

const ControlDePlagasPage = () => {
  const contentRef = useScrollReveal()
  const imageRef   = useScrollReveal()

  return (
    <div className="page-wrapper">
      <div className="hero-grid">
        {/* Contenido */}
        <div className="hero-content" ref={contentRef}>
        <h1 className="section-title">Control De Plagas</h1>
        <div className="section-divider wide"></div>

        <p className="section-desc">
          Es una solución efectiva y segura para proteger tu hogar o negocio de las{' '}
          <Link to="/plaga" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>plagas</Link>.
          Si estás experimentando un problema de infestación, no dudes en{' '}
          <Link to="/contacto" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>contactar</Link>{' '}
          a un profesional para obtener ayuda.
        </p>

        <p className="section-invite">
          ¡Te invitamos a conocer los{' '}
          <Link to="/testimonios">Testimonios</Link>{' '}
          de nuestros clientes satisfechos!
        </p>

        <ul className="bullet-list">
          {CONTROL_PLAGAS_LIST.map(s => <li key={s}>{s}</li>)}
        </ul>

        <a href="tel:6621248161" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          📞 (662) 124 - 8161
        </a>
      </div>

      {/* Imagen */}
      <div className="hero-image" ref={imageRef} style={{ animationDelay: '0.2s' }}>
        <img src={IMG} alt="Control de plagas profesional en instalaciones" loading="lazy" />
      </div>
    </div>
  </div>
  )
}

export default ControlDePlagasPage
