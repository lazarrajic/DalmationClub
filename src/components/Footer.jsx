import { Link } from 'react-router-dom'
import c from '../../content.js'

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/culture', label: 'Culture & Classes' },
  { to: '/venue', label: 'Venue Hire' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-blue text-white font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Logo + tagline */}
          <div>
            <img src={c.logo_white} data-cms="Footer - Footer - Logo" alt="Dalmatian Cultural Society" className="h-12 w-auto object-contain mb-4" />
            <p data-cms="Footer - Footer - Tagline" className="text-white/80 text-sm leading-relaxed">{c.footer_tagline}</p>
            <div className="flex gap-4 mt-6">
              <a href={c.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-white/60 transition-colors">
                <FacebookIcon />
              </a>
              <a href={c.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-white/60 transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/80 hover:text-white text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-white">Contact</h4>
            <div className="space-y-2">
              <p data-cms="Footer - Footer - Address" className="text-white/80 text-sm">{c.address}</p>
              <p data-cms="Footer - Footer - Phone" className="text-white/80 text-sm">{c.phone}</p>
              <p data-cms="Footer - Footer - Email" className="text-white/80 text-sm">{c.email}</p>
            </div>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block bg-white text-blue font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-blue-tint transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p data-cms="Footer - Footer - Copyright" className="text-white/60 text-xs text-center">
            {c.footer_copyright}
          </p>
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
