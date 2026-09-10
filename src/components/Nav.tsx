import { NavLink } from 'react-router-dom'

export default function Nav() {
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
      </div>
    </nav>
  )
}
