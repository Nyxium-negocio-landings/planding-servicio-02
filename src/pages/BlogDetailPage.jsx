// pages/BlogDetailPage.jsx — Ruta: /blog/:id
// Página de detalle de artículo del blog con sidebar (similar al original)
import { useParams, Link } from 'react-router-dom'
import { BLOG_POSTS, WHATSAPP_NUMBER } from '../constants/data'

// Contenido extendido para cada post
const POST_CONTENT = {
  1: {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=400&fit=crop&auto=format&q=80',
    body: [
      { type: 'p', text: '¿Tienes termitas en casa? La fumigación para termitas es uno de los tratamientos más importantes que puedes hacer para proteger tu propiedad. Las termitas pueden causar daños graves en cuestión de meses si no se actúa a tiempo.' },
      { type: 'h2', text: '¿Por qué son tan peligrosas las termitas?' },
      { type: 'p', text: 'Las termitas son insectos sociales que se alimentan de celulosa, principalmente de madera. Una colonia puede llegar a tener millones de individuos y destruir las estructuras de madera de una casa en poco tiempo.' },
      { type: 'h2', text: 'Métodos de fumigación contra termitas' },
      { type: 'ul', items: ['Tratamiento químico en madera', 'Barrera anti-termitas en suelo', 'Fumigación con gas de penetración', 'Eliminación de termitas subterráneas'] },
      { type: 'p', text: 'En EcoPlagas utilizamos los métodos más efectivos y seguros para eliminar las termitas de tu hogar o negocio. Contamos con tecnología de última generación y productos certificados.' },
      { type: 'h2', text: '¿Cómo detectar una infestación de termitas?' },
      { type: 'p', text: 'Algunos de los signos más comunes de infestación de termitas son: madera que suena hueca al golpearla, presencia de alas descartadas cerca de ventanas y puertas, túneles de barro en paredes o cimientos, y daños visibles en muebles o estructuras de madera.' },
    ]
  },
  2: {
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&h=400&fit=crop&auto=format&q=80',
    body: [
      { type: 'p', text: 'Las garrapatas son ectoparásitos que pueden transmitir enfermedades graves tanto a personas como a animales. Una fumigación para garrapatas efectiva es fundamental para proteger a tu familia y mascotas.' },
      { type: 'h2', text: '¿Qué enfermedades transmiten las garrapatas?' },
      { type: 'ul', items: ['Enfermedad de Lyme', 'Fiebre manchada de las Montañas Rocosas', 'Ehrlichiosis', 'Babesiosis'] },
      { type: 'p', text: 'Nuestro servicio de eliminación de garrapatas incluye un diagnóstico completo del área afectada y la aplicación de tratamientos seguros para toda la familia.' },
    ]
  },
  3: {
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&h=400&fit=crop&auto=format&q=80',
    body: [
      { type: 'p', text: 'La fumigación para cucarachas es uno de los servicios más solicitados en Hermosillo. Estos insectos son portadores de bacterias y pueden contaminar los alimentos de tu hogar o negocio.' },
      { type: 'h2', text: '3 Beneficios principales de una fumigación profesional' },
      { type: 'ul', items: ['Eliminación completa de la plaga', 'Tratamiento preventivo para evitar futuras infestaciones', 'Productos seguros para tu familia y mascotas'] },
      { type: 'p', text: 'Con EcoPlagas obtendrás resultados garantizados. Nuestro equipo de expertos utiliza los mejores productos del mercado para asegurar que tu hogar quede libre de cucarachas.' },
    ]
  },
  4: {
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=900&h=400&fit=crop&auto=format&q=80',
    body: [
      { type: 'p', text: 'Realizar una fumigación efectiva requiere de conocimiento y experiencia. Aquí te presentamos los consejos de nuestros expertos para obtener los mejores resultados en la eliminación de cucarachas.' },
      { type: 'h2', text: 'Consejos antes de la fumigación' },
      { type: 'ul', items: ['Limpiar y ordenar todas las áreas', 'Guardar alimentos y utensilios de cocina', 'Retirar mascotas y plantas', 'Identifica los puntos de acceso de las plagas'] },
      { type: 'h2', text: 'Durante el tratamiento' },
      { type: 'p', text: 'Nuestros técnicos aplicarán productos de última generación en todas las áreas clave, prestando especial atención a grietas, hendiduras y espacios oscuros donde las cucarachas suelen esconderse.' },
    ]
  },
}

const BlogDetailPage = () => {
  const { id } = useParams()
  const postId = parseInt(id)
  const post = BLOG_POSTS.find(p => p.id === postId)
  const content = POST_CONTENT[postId]

  if (!post || !content) {
    return (
      <div className="page-wrapper" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h1>Artículo no encontrado</h1>
        <Link to="/blog" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
          Volver al Blog
        </Link>
      </div>
    )
  }

  const otherPosts = BLOG_POSTS.filter(p => p.id !== postId).slice(0, 3)

  return (
    <div className="page-wrapper">
      {/* Hero del artículo */}
      <div className="blog-detail-hero">
        <div className="blog-detail-hero-inner">
          <div className="blog-detail-hero-grid">
            <h1 className="blog-detail-title">{post.title}</h1>
            <div className="blog-detail-meta">
              <span className="blog-detail-meta-author">Por {post.author}</span>
              <span className="blog-detail-meta-date">{post.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido + Sidebar */}
      <div className="blog-detail-wrap">
        <div className="blog-detail-layout">
          {/* Artículo principal */}
          <div className="blog-detail-content">
            <div className="blog-detail-img">
              <img src={content.image} alt={post.title} loading="lazy" />
            </div>
            <div className="blog-detail-body">
              {content.body.map((block, i) => {
                if (block.type === 'p')   return <p key={i}>{block.text}</p>
                if (block.type === 'h2')  return <h2 key={i}>{block.text}</h2>
                if (block.type === 'ul')  return (
                  <ul key={i}>
                    {block.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )
                return null
              })}
            </div>
            {/* CTA al final */}
            <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: '#F9FAFB', borderRadius: 12, borderLeft: '4px solid var(--color-primary)' }}>
              <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>¿Necesitas ayuda con una plaga?</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                Contáctanos hoy y recibe una solución efectiva y profesional.
              </p>
              <a href="tel:6621248161" className="btn btn-primary">📞 (662) 124 - 8161</a>
            </div>

            {/* Volver al blog */}
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.875rem', marginTop: '2rem' }}>
              ← Volver al Blog
            </Link>
          </div>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            {/* CTA de servicio */}
            <div className="sidebar-cta">
              <h3>¡Libera Tu Hogar De Plagas!</h3>
              <p>
                Nuestro servicio de fumigación de alta calidad es la forma más efectiva de eliminar cualquier tipo de plaga en tu hogar.{' '}
                <a href="tel:6621248161">Contáctanos ahora</a> y recupera la tranquilidad en tu hogar.
              </p>
              <a href="tel:6621248161" className="btn btn-primary btn-full">
                CONTRATAR SERVICIO
              </a>
            </div>

            {/* Publicaciones recientes */}
            <div className="sidebar-card">
              <p className="sidebar-card-title">Publicaciones Recientes</p>
              {otherPosts.map(p => (
                <div key={p.id} className="sidebar-recent-post">
                  <div className="sidebar-recent-dot" />
                  <Link to={`/blog/${p.id}`} className="sidebar-recent-link">{p.title}</Link>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20leí%20el%20artículo%20y%20me%20gustaría%20obtener%20información.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '1rem 1.25rem', background: '#25D366', borderRadius: 12, color: '#fff', fontWeight: 600, fontSize: '0.9rem', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#128C7E'}
              onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
            >
              <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Pregunta por WhatsApp
            </a>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailPage
