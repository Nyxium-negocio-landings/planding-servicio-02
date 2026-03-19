import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import serviciosImg from '../assets/images/servicios.png'

const IMG = serviciosImg

const SERVICIOS = [
  { label: 'Plaga', to: '/plaga' },
  { label: 'Control De Plagas', to: '/control-de-plagas' },
  { label: 'Fumigaciones', to: '/' },
]

const ServiciosPage = () => {
  const contentRef = useScrollReveal()
  const imageRef   = useScrollReveal()

  return (
    <div className="page-wrapper">
      <div className="hero-grid">
        <div className="hero-content" ref={contentRef}>
        <h1 className="section-title">Servicios</h1>
        <div className="section-divider wide"></div>

        <p className="section-desc">
          Los servicios de fumigación son una solución efectiva para controlar y eliminar
          plagas en hogares y negocios. Estos servicios consisten en la aplicación de
          productos químicos especializados para erradicar las plagas y prevenir futuras
          infestaciones.
        </p>

        <p className="section-invite">
          ¡Te invitamos a conocer los{' '}
          <Link to="/testimonios">Testimonios</Link>{' '}
          de nuestros clientes satisfechos!
        </p>

        <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Servicios:</p>
        <ul className="servicios-list">
          {SERVICIOS.map(s => (
            <li key={s.label}><Link to={s.to}>{s.label}</Link></li>
          ))}
        </ul>

        <a href="tel:6621248161" className="btn btn-primary">
          📞 (662) 124 - 8161
        </a>
      </div>

      <div className="hero-image" ref={imageRef} style={{ animationDelay: '0.2s' }}>
        <img src={IMG} alt="Técnico fumigando instalación" loading="lazy" />
      </div>
    </div>
  </div>
  )
}

export default ServiciosPage
