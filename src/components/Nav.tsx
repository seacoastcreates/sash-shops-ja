import { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import MobileMenu, { type DrawerItem } from './MobileMenu'
import { scrollToSection } from '../utils'

const HOME_SECTIONS = [
  { id: 'what-we-do', label: 'What We Do' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'why-choose-us', label: 'Why Choose Us' },
  { id: 'location', label: "Where We're Located" },
  { id: 'reviews', label: 'Customer Reviews' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function goToSection(id: string) {
    setMenuOpen(false)
    if (location.pathname === '/') {
      scrollToSection(id)
    } else {
      navigate(`/#${id}`)
    }
  }

  const drawerItems: DrawerItem[] = [
    ...HOME_SECTIONS.map((section) => ({ label: section.label, onClick: () => goToSection(section.id) })),
    {
      label: 'Contact',
      onClick: () => {
        setMenuOpen(false)
        navigate('/contact')
      },
    },
  ]

  return (
    <nav className="site-nav">
      <div className="wrap site-nav-inner">
        <NavLink to="/" end className="site-nav-brand">
          <span className="dot" /> Sash Shops Ja
        </NavLink>
        <div className="site-nav-links">
          <NavLink to="/" end className={({ isActive }) => `site-nav-link${isActive ? ' active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `site-nav-link${isActive ? ' active' : ''}`}>
            Contact
          </NavLink>
        </div>
        <button
          type="button"
          className="hamburger-btn"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} items={drawerItems} />
    </nav>
  )
}
