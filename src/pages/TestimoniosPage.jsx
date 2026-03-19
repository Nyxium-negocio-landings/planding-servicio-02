import { TESTIMONIALS } from '../constants/data'
import { useScrollReveal } from '../hooks/useScrollReveal'

const StarRating = ({ rating }) => (
  <div className="testimonial-stars">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="star">{i < rating ? '★' : '☆'}</span>
    ))}
  </div>
)

const STATS = [
  { value: '500+', label: 'Clientes Satisfechos' },
  { value: '10+', label: 'Años de Experiencia' },
  { value: '99%', label: 'Efectividad' },
  { value: '24/7', label: 'Atención al Cliente' },
]

const TestimoniosPage = () => {
  const headerRef  = useScrollReveal('reveal-up')
  const statsRef   = useScrollReveal('reveal-up')
  const gridRef    = useScrollReveal('reveal-up')
  const ctaRef     = useScrollReveal('reveal-up')

  return (
    <div className="page-wrapper">
      {/* Hero banner */}
      <div className="testi-hero">
        <div className="container">
          <div ref={headerRef} style={{ animationDelay: '0.1s' }}>
            <h1 className="testi-hero-title">Lo Que Dicen<br /><span>Nuestros Clientes</span></h1>
            <div className="section-divider" style={{ margin: '1rem auto', background: 'var(--color-accent)' }}></div>
            <p className="testi-hero-sub">
              Más de 500 familias y empresas confían en EcoPlagas cada año.
            </p>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="testi-stats" ref={statsRef}>
        <div className="container">
          <div className="testi-stats-grid">
            {STATS.map((s, i) => (
              <div key={s.label} className="stat-item" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid de testimonios */}
      <section className="testimonios-section">
        <div className="container">
          <div className="testimonios-grid" ref={gridRef}>
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.id}
                className="testimonial-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Quote decorativa */}
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{t.text}</p>
                <StarRating rating={t.rating} />
                {/* Author con avatar */}
                <div className="testimonial-author">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="testimonial-avatar"
                    loading="lazy"
                    onError={e => { e.target.style.display = 'none' }}
                  />
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-location">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inferior */}
      <section className="testi-cta" ref={ctaRef}>
        <div className="container">
          <h2 className="testi-cta-title">¿Listo para una solución libre de plagas?</h2>
          <p className="testi-cta-sub">Únete a cientos de clientes satisfechos. Contáctanos hoy.</p>
          <div className="testi-cta-btns">
            <a href="tel:6621248161" className="btn btn-primary">📞 Llamar Ahora</a>
            <a
              href="https://wa.me/51982132639?text=Hola,%20me%20gustar%C3%ADa%20información%20sobre%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TestimoniosPage
