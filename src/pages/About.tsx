import { Link } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb";
import { CtaBand } from "../components/CtaBand";
import { Portrait } from "../components/Portrait";
import { services } from "../data/services";
import { studio } from "../studio";
import { usePage } from "../usePage";

const standards = [
  {
    title: "Scope the real problem first",
    text: "Business, users, and process come before a stack, a theme, a bot, or a model.",
  },
  {
    title: "Say the trade-off plainly",
    text: "What a choice costs, what it rules out, and what should wait until later.",
  },
  {
    title: "Recommend the smaller job",
    text: "When a simpler tool is the better decision, that is the advice, even if it is less work for the studio.",
  },
  {
    title: "Execute the strategy you wrote",
    text: "Trading systems follow your rules. The studio does not sell signals or promise returns.",
  },
  {
    title: "Fix the process, then automate it",
    text: "A faster broken workflow only hides the mistakes. The map comes first.",
  },
  {
    title: "Pick a platform you can run",
    text: "Sometimes that is a custom build. Sometimes it is a theme you can manage yourself.",
  },
];

export function About() {
  usePage(
    "About Hassan Mustafa · IntelliForge",
    "Hassan Mustafa is founder and CEO of IntelliForge, a studio in Italy working across software, trading systems, automation, commerce, brand, and 3D.",
  );

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "About" }]} />
          <p className="eyebrow">{studio.role}</p>
          <h1>{studio.founder}</h1>
          <p className="lede">
            {studio.name} is his studio. The work is founder-led, based in {studio.location},
            and built to stay reliable as it grows.
          </p>
        </div>
      </header>

      <section className="section section-tight">
        <div className="container about-grid">
          <Portrait className="about-photo" />
          <dl className="facts-list">
              <div>
                <dt>Studio</dt>
                <dd>{studio.name}</dd>
              </div>
              <div>
                <dt>Leadership</dt>
                <dd>
                  {studio.founder}, {studio.role}
                </dd>
              </div>
              <div>
                <dt>Where</dt>
                <dd>{studio.location}</dd>
              </div>
              <div>
                <dt>Experience</dt>
                <dd>{studio.experience}</dd>
              </div>
              <div>
                <dt>On record since</dt>
                <dd>{studio.since}</dd>
              </div>
              <div>
                <dt>Recommendations</dt>
                <dd>{studio.recommendations} from clients</dd>
              </div>
            </dl>
          <div className="prose about-copy">
            <p>
              For more than ten years, Hassan and his team have worked with startups,
              founders, and established businesses. The projects change — a SaaS product, a
              marketplace, an ERP, a trading system, a brand, an automation, a store, a
              building, a game asset — and the method does not.
            </p>
            <p>
              Understand the business, the user, and the process before production starts.
              Explain the trade-offs in plain language. Recommend what makes sense,
              including when the right answer is a smaller piece of work.
            </p>
            <p>
              You receive the project files, the source, and a documented handover another
              team can pick up. Long-term support is available when you want the same
              people nearby after launch.
            </p>
            <p>
              <Link className="text-link" to="/#approach">
                See how an engagement runs
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="about-standards">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How the studio decides</p>
            <h2 id="about-standards">Six standards, across every practice.</h2>
          </div>
          <div className="standards standards-six">
            {standards.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight" aria-labelledby="about-practices">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Practices</p>
            <h2 id="about-practices">Where the work goes.</h2>
          </div>
          <ul className="link-rows">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`}>
                  <span>{service.number}</span>
                  <span>{service.name}</span>
                  <span>{service.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
