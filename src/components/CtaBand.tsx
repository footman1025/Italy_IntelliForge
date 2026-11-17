import { Link } from "react-router-dom";

export function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow on-dark">New work</p>
          <h2 id="cta-title">Let’s build it together.</h2>
          <p>
            High quality, fast delivery, and a comfortable budget to bring an idea
            to life. Start with a conversation.
          </p>
        </div>
        <Link className="button button-light" to="/contact">
          Contact the studio
        </Link>
      </div>
    </section>
  );
}
