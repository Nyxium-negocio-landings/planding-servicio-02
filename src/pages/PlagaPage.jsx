import { PLAGAS_LIST_LEFT, PLAGAS_LIST_RIGHT } from '../constants/data'
import { useScrollReveal } from '../hooks/useScrollReveal'
import plagaImg from '../assets/images/plaga.png'

const IMG = plagaImg

const PlagaPage = () => {
  const contentRef = useScrollReveal()
  const imageRef   = useScrollReveal()

  return (
    <div className="page-wrapper">
      <div className="hero-grid">
        <div className="hero-content" ref={contentRef}>
        <h1 className="section-title">Plaga</h1>
        <div className="section-divider"></div>

        <p className="section-desc">
          Las plagas son organismos no deseados que pueden causar daño a la propiedad,
          transmitir enfermedades y causar molestias a las personas.
        </p>

        {/* Barra de progreso */}
        <div className="progress-bar-wrap">
          <div className="progress-bar-header">
            <span>Eliminamos Un</span>
            <span>90%</span>
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill"></div>
          </div>
        </div>

        {/* Lista 2 cols */}
        <div className="two-col-list">
          <ul className="bullet-list" style={{ marginBottom: 0 }}>
            {PLAGAS_LIST_LEFT.map(p => <li key={p}>{p}</li>)}
          </ul>
          <ul className="bullet-list" style={{ marginBottom: 0 }}>
            {PLAGAS_LIST_RIGHT.map(p => <li key={p}>{p}</li>)}
          </ul>
        </div>

        <a href="tel:6621248161" className="btn btn-primary">
          📞 (662) 124 - 8161
        </a>
      </div>

      <div className="hero-image" ref={imageRef} style={{ animationDelay: '0.2s' }}>
        <img src={IMG} alt="Fumigador visto desde arriba aplicando tratamiento" loading="lazy" />
      </div>
    </div>
  </div>
  )
}

export default PlagaPage
