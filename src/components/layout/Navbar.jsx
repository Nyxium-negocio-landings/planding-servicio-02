// Navbar.jsx - Navegación con React Router, sticky, con menú hamburguesa
import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NAV_LINKS } from '../../constants/data'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <div className="navbar-logo-icon">🦗</div>
            <div className="navbar-logo-text">
              <span className="navbar-logo-name">ECO PLAGAS</span>
              <span className="navbar-logo-sub">Fumigaciones</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="navbar-links">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) => isActive ? 'active' : ''}
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className={`navbar-hamburger${isOpen ? ' open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`navbar-mobile${isOpen ? ' open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setIsOpen(false)}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Navbar
