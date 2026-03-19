// pages/FumigacionesPage.jsx — Ruta: /
import { Link } from 'react-router-dom'
import { SERVICES_LIST } from '../constants/data'
import { useScrollReveal } from '../hooks/useScrollReveal'
import fumigadorImg from '../assets/images/fumigador.png'

const FUMIGADOR_IMG = fumigadorImg

const FumigacionesPage = () => {
  const contentRef = useScrollReveal()
  const imageRef   = useScrollReveal()

  return (
    <div className="page-wrapper">
      <div className="hero-grid">
        {/* Contenido izquierdo */}
        <div className="hero-content" ref={contentRef}>
          <h1 className="section-title">Fumigaciones</h1>
        <div className="section-divider wide"></div>

        <p className="section-desc">
          El servicio de fumigación es un procedimiento que se utiliza para controlar y
          eliminar las <a href="#" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>plagas</a> de
          insectos no deseados en un área determinada. Los servicios de fumigación son esenciales
          en entornos comerciales y residenciales para garantizar la seguridad, la higiene y la
          comodidad de las personas.
        </p>

        <p className="section-invite">
          ¡Te invitamos a conocer los{' '}
          <Link to="/testimonios">Testimonios</Link>{' '}
          de nuestros clientes satisfechos!
        </p>

        <ul className="bullet-list">
          {SERVICES_LIST.map(s => <li key={s}>{s}</li>)}
        </ul>

        <div className="icon-badges">
          <div className="icon-badge">
            <span className="icon-badge-icon">🏠</span>
            <span className="icon-badge-label">Hogar</span>
          </div>
          <div className="icon-badge">
            <span className="icon-badge-icon">🏢</span>
            <span className="icon-badge-label">Empresa</span>
          </div>
        </div>

        <a href="tel:6621248161" className="btn btn-primary">
          📞 (662) 124 - 8161
        </a>
      </div>

      {/* Imagen fumigador */}
      <div className="hero-image" ref={imageRef} style={{ animationDelay: '0.2s' }}>
        <img
          src={FUMIGADOR_IMG}
          alt="Técnico de fumigación con traje de protección blanco"
          loading="eager"
        />
      </div>
    </div>
  </div>
  )
}

export default FumigacionesPage
