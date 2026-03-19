// pages/ContactoPage.jsx — Ruta: /contacto
// Layout: col izquierda info + col derecha imagen con formulario encima
import { useState } from 'react'
import { CONTACT_INFO, WHATSAPP_NUMBER } from '../constants/data'
import { useScrollReveal } from '../hooks/useScrollReveal'
import contactoImg from '../assets/images/contacto.png'

const ContactoPage = () => {
  const [form, setForm] = useState({ nombre: '', celular: '', direccion: '', empresa: '', email: '', mensaje: '' })
  
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); alert('¡Mensaje enviado! Nos pondremos en contacto pronto.') }

  return (
    <div className="page-wrapper">
      <div className="contacto-page-grid">

        {/* Columna izquierda — info de contacto */}
        <div className="contacto-left" ref={leftRef}>
          <h1 className="section-title">Contacto</h1>
          <div className="section-divider wide"></div>

          <p className="section-desc" style={{ marginBottom: '2rem' }}>
            ¡No dejes que las plagas tomen el control de tu hogar o negocio! Contáctanos hoy
            para obtener una solución efectiva y{' '}
            <a href="#" style={{ color: 'var(--color-accent)' }}>duradera</a> para tus problemas de{' '}
            <a href="#" style={{ color: 'var(--color-accent)' }}>plagas</a>.
          </p>

          {/* Teléfono */}
          <div className="contact-info-row">
            <div className="contact-icon-circle" style={{ background: 'var(--color-accent)' }}>
              <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 2 }}>Teléfono:</p>
              <a href="tel:6621248161" style={{ color: 'var(--color-accent)', fontSize: '0.9rem' }}>
                (662) 124 – {CONTACT_INFO.phone.split('- ')[1]}
              </a>
            </div>
          </div>

          {/* Correo */}
          <div className="contact-info-row">
            <div className="contact-icon-circle" style={{ background: 'var(--color-accent)' }}>
              <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 2 }}>Correo:</p>
              <a href={`mailto:${CONTACT_INFO.email}`} style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          {/* Ubicación */}
          <div className="contact-info-row">
            <div className="contact-icon-circle" style={{ background: 'var(--color-accent)' }}>
              <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 2 }}>Ubicación:</p>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
                Av. {CONTACT_INFO.address}, Col. Periodista
              </span>
            </div>
          </div>

          {/* Facebook */}
          <div className="contact-info-row">
            <div className="contact-icon-circle" style={{ background: 'var(--color-accent)' }}>
              <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/>
              </svg>
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '0.95rem' }}>Facebook</p>
            </div>
          </div>
        </div>

        {/* Columna derecha — imagen de fondo + formulario encima */}
        <div className="contacto-right" ref={rightRef} style={{ animationDelay: '0.2s' }}>
          <img src={contactoImg} alt="Fumigador profesional" className="contacto-bg-img" />
          <div className="contacto-form-overlay">
            <form className="contacto-form-dark" onSubmit={handleSubmit}>
              {/* Fila Nombre + Celular */}
              <div className="form-row-2">
                <div className="form-group-dark">
                  <label>Nombre <span style={{ color: 'var(--color-accent)' }}>*</span></label>
                  <input name="nombre" type="text" value={form.nombre} onChange={handleChange} required />
                </div>
                <div className="form-group-dark">
                  <label>Celular <span style={{ color: 'var(--color-accent)' }}>*</span></label>
                  <input name="celular" type="tel" value={form.celular} onChange={handleChange} required />
                </div>
              </div>
              {/* Fila Dirección + Empresa */}
              <div className="form-row-2">
                <div className="form-group-dark">
                  <label>Dirección <span style={{ color: 'var(--color-accent)' }}>*</span></label>
                  <input name="direccion" type="text" value={form.direccion} onChange={handleChange} required />
                </div>
                <div className="form-group-dark">
                  <label>Empresa</label>
                  <input name="empresa" type="text" value={form.empresa} onChange={handleChange} />
                </div>
              </div>
              {/* Email */}
              <div className="form-group-dark">
                <label>Correo electrónico</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} />
              </div>
              {/* Mensaje */}
              <div className="form-group-dark">
                <label>Mensaje</label>
                <textarea name="mensaje" rows={4} placeholder="ESCRIBE TU MENSAJE" value={form.mensaje} onChange={handleChange} />
              </div>
              <button type="submit" className="contacto-submit-btn">ENVIAR</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContactoPage
