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

// Pages with a dark hero image where the nav can float transparently
const darkHeroPages = ['/', '/about', '/culture', '/venue']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const hasDarkHero = darkHeroPages.includes(location.pathname)
  const transparent = !scrolled && hasDarkHero

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    // Re-check scroll on route change
    setScrolled(window.scrollY > 60)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      transparent
        ? 'bg-transparent'
        : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <img src={c.logo_shield} data-cms="Nav - Nav - Logo" alt="Dalmatian Cultural Society" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <p className={`font-heading text-base leading-tight transition-colors duration-300 ${transparent ? 'text-white' : 'text-blue'}`}>
                Dalmatian Cultural Society
              </p>
              <p className={`font-body text-xs tracking-wide transition-colors duration-300 ${transparent ? 'text-white/70' : 'text-muted'}`}>
                Dalmatinsko Kulturno Drustvo
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`font-body text-sm font-semibold transition-colors duration-200 ${
                  transparent
                    ? 'text-white/90 hover:text-white'
                    : location.pathname === l.to
                      ? 'text-blue border-b-2 border-blue pb-0.5'
                      : 'text-[#1A1A1A] hover:text-blue'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`ml-4 font-body font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 ${
                transparent
                  ? 'border-2 border-white/80 text-white hover:bg-white hover:text-blue'
                  : 'bg-blue hover:bg-blue-hover text-white'
              }`}
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
            <span className={`block w-6 h-0.5 transition-all duration-300 ${transparent ? 'bg-white' : 'bg-blue'} ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${transparent ? 'bg-white' : 'bg-blue'} ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${transparent ? 'bg-white' : 'bg-blue'} ${open ? '-rotate-45 -translate-y-2' : ''}`} />
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
