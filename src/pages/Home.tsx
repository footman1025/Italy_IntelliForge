import { Link } from "react-router-dom";
import { CtaBand } from "../components/CtaBand";
import { Portrait } from "../components/Portrait";
import { SkillCard } from "../components/SkillCard";
import { services } from "../data/services";
import { studio } from "../studio";
import { usePage } from "../usePage";

export function Home() {
  usePage(
    "IntelliForge · Hassan Mustafa",
    "IntelliForge is the Italy-based studio of Hassan Mustafa. Software, trading systems, automation, stores, brand and video, and 3D — scoped around the real problem first.",
  );

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">
              {studio.founder} · {studio.role}
            </p>
            <h1>
              Built right
              <br />
              <em>the first time.</em>
            </h1>
            <p className="lede">
              IntelliForge is a studio in {studio.location}. We help startups, founders,
              and established businesses launch software, trading systems, automation,
              stores, brand and video, and 3D work that stays reliable as it grows.
            </p>
            <p className="lede lede-next">
              The work starts with the business, the users, and the process behind the
              idea — before a line of code, a layout, or a model.
            </p>
            <div className="actions">
              <Link className="button" to="/contact">
                Start a project
              </Link>
              <a className="button button-secondary" href="#practices">
                See the six practices
              </a>
            </div>
          </div>
          <aside className="portrait-frame">
            <Portrait />
          </aside>
        </div>
      </section>

      <section className="fact-strip" aria-label="Studio facts">
        <ul className="container facts">
          {[
            ["10+ years", "With growing companies"],
            ["6 practices", "Kept inside one studio"],
            [studio.location, "Founder-led from the start"],
            ["Services", "From software to 3D"],
          ].map(([title, caption]) => (
            <li key={title}>
              <strong>{title}</strong>
              <span>{caption}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="belief-title">
        <div className="container belief">
          <p className="eyebrow" id="belief-title">
            The working belief
          </p>
          <blockquote>
            <p>
              Most software projects don’t fail because of bad code — they fail because
              the wrong problems get solved first.
            </p>
          </blockquote>
          <p className="belief-note">
            The same standard covers a trading system, a brand, an automation, a store,
            or a 3D model. A beautiful result on a misunderstood problem is still a redo.
          </p>
        </div>
      </section>

      <section className="section section-tight" id="practices" aria-labelledby="practices-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h2 id="practices-title">Six practices. One studio.</h2>
            <p>
              Pick the practice that matches the job. Related work stays in-house, so
              design, engineering, and operations do not drift between vendors.
            </p>
          </div>
          <div className="skill-grid">
            {services.map((service) => (
              <SkillCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="approach" aria-labelledby="approach-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Approach</p>
            <h2 id="approach-title">How an engagement runs.</h2>
            <p>The sequence is the same whether the output is code, a brand, a workflow, or a model.</p>
          </div>
          <ol className="steps">
            <li>
              <span>01</span>
              <h3>Map the work</h3>
              <p>How the business, the users, and the process actually run today.</p>
            </li>
            <li>
              <span>02</span>
              <h3>Name the real problem</h3>
              <p>Where time, money, or trust is leaking — and what can wait.</p>
            </li>
            <li>
              <span>03</span>
              <h3>Choose the right build</h3>
              <p>Custom software, a platform, a no-code tool, or a smaller engagement.</p>
            </li>
            <li>
              <span>04</span>
              <h3>Hand it over cleanly</h3>
              <p>Documented files, source you can keep, and support after launch.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section-tight" aria-labelledby="standards-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Standards</p>
            <h2 id="standards-title">What clients say they value.</h2>
          </div>
          <div className="standards">
            <article>
              <h3>The right questions, early</h3>
              <p>
                We learn the workflow before proposing a stack, a theme, a bot, or a model.
              </p>
            </article>
            <article>
              <h3>Trade-offs in plain language</h3>
              <p>
                You hear what a choice costs, what it rules out, and what should wait.
              </p>
            </article>
            <article>
              <h3>The smaller job, when it fits</h3>
              <p>
                If a simpler platform or a smaller build is the better business decision, that is the recommendation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="founder" aria-labelledby="founder-title">
        <div className="container founder">
          <Portrait />
          <div>
            <p className="eyebrow">Founder</p>
            <h2 id="founder-title">{studio.founder}</h2>
            <p>
              {studio.role} of {studio.name}, based in {studio.location}. Hassan leads the
              work from the first conversation: what the business needs, what the user has
              to do, and what should be left easy to change later.
            </p>
            <p>
              Client work is on record since {studio.since.toLowerCase()}, with{" "}
              {studio.recommendations} recommendations and more than a decade of delivery
              across the six practices.
            </p>
            <Link className="text-link" to="/about">
              About the studio
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
