import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import c from '../../content.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/culture', label: 'Culture & Classes' },
  { to: '/venue', label: 'Venue Hire' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={c.logo} data-cms="Nav - Nav - Logo" alt="Dalmatian Cultural Society" className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`font-body text-sm font-semibold transition-colors duration-200 ${
                  location.pathname === l.to
                    ? 'text-blue border-b-2 border-blue pb-0.5'
                    : 'text-[#1A1A1A] hover:text-blue'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 bg-blue hover:bg-blue-hover text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              <span data-cms="Nav - Nav - CTA">{c.nav_cta}</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 relative"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            <span className={`block w-6 h-0.5 bg-blue transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-blue transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-blue transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={`font-body text-2xl font-semibold transition-colors ${
              location.pathname === l.to ? 'text-blue' : 'text-[#1A1A1A] hover:text-blue'
            }`}
          >
            {l.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="mt-4 bg-blue hover:bg-blue-hover text-white font-body font-semibold text-lg px-8 py-3 rounded-full transition-colors duration-200"
        >
          {c.nav_cta}
        </Link>
      </div>
    </nav>
  )
}
