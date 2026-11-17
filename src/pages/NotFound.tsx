import { Link } from "react-router-dom";
import { usePage } from "../usePage";

export function NotFound() {
  usePage("Page not found · IntelliForge", "That page is not part of the IntelliForge site.");

  return (
    <header className="page-hero">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>That page is not here.</h1>
        <p className="lede">The studio pages are the home, the six practices, about, and contact.</p>
        <div className="actions">
          <Link className="button" to="/">
            Back to the studio
          </Link>
          <Link className="button button-secondary" to="/services">
            See services
          </Link>
        </div>
      </div>
    </header>
  );
}
