import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { services } from "../data/services";
import { studio } from "../studio";

export function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="page-shell">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="logo" aria-label="IntelliForge, home">
            <span className="mark" aria-hidden="true" />
            IntelliForge
          </Link>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <nav id="site-nav" className={open ? "site-nav open" : "site-nav"} aria-label="Primary">
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link className="button button-small nav-cta" to="/contact">
              Start a project
            </Link>
          </nav>
        </div>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-name">IntelliForge</p>
            <p>
              The studio of {studio.founder}, {studio.role}. Based in {studio.location}.
              Software, trading systems, automation, stores, brand, and 3D.
            </p>
          </div>
          <div>
            <p className="footer-label">Practices</p>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-label">Studio</p>
            <ul>
              <li>
                <Link to="/about">About Hassan</Link>
              </li>
              <li>
                <Link to="/#approach">How we work</Link>
              </li>
              <li>
                <Link to="/services">All services</Link>
              </li>
              <li>
                <a href={`mailto:${studio.email}`}>{studio.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container footer-bar">
          <p>© {new Date().getFullYear()} IntelliForge. {studio.location}.</p>
          <p>{studio.founder}, {studio.role}</p>
        </div>
      </footer>
    </div>
  );
}
