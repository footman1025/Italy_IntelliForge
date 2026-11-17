import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb";
import { CtaBand } from "../components/CtaBand";
import { getService, hourly, services } from "../data/services";
import { studio } from "../studio";
import { usePage } from "../usePage";
import { NotFound } from "./NotFound";

export function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  usePage(
    service ? `${service.name} · IntelliForge` : "Not found · IntelliForge",
    service ? `${service.headline} ${service.summary} ${hourly(service.rate)}.` : "Page not found.",
  );

  if (!service) return <NotFound />;

  const index = services.findIndex((item) => item.slug === service.slug);
  const previous = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];
  const related = service.related
    .map((relatedSlug) => getService(relatedSlug))
    .filter((item) => item !== undefined);

  return (
    <>
      <header className="page-hero">
        <div className="container skill-hero">
          <div>
            <Breadcrumb
              items={[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: service.name },
              ]}
            />
            <p className="eyebrow">
              {service.number} · {hourly(service.rate)}
            </p>
            <h1>{service.headline}</h1>
            <p className="lede">{service.lede}</p>
          </div>
          <img
            className="skill-hero-img"
            src={service.image}
            alt={service.imageAlt}
            width={1400}
            height={875}
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      <section className="section section-tight">
        <div className="container service-layout">
          <div className="prose">
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className="glance" aria-label="Engagement details">
            <p className="glance-kicker">{service.name}</p>
            <p className="glance-rate">{hourly(service.rate)}</p>
            <dl>
              <div>
                <dt>Led by</dt>
                <dd>
                  {studio.founder}
                  <br />
                  {studio.role}
                </dd>
              </div>
              <div>
                <dt>Based</dt>
                <dd>{studio.location}</dd>
              </div>
              <div>
                <dt>Engagement</dt>
                <dd>Hourly. Scope agreed before work starts.</dd>
              </div>
              <div>
                <dt>Standard</dt>
                <dd>{service.promise}</dd>
              </div>
            </dl>
            <Link className="button button-light" to={`/contact?service=${service.slug}`}>
              Discuss this work
            </Link>
          </aside>

          <div className="service-rest">
            <h2 className="block-title">What we do</h2>
            <div className="group-grid">
              {service.groups.map((group) => (
                <article key={group.title} className="group">
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <figure className="pull">
              <figcaption>What clients value</figcaption>
              <blockquote>
                <p>{service.principle}</p>
              </blockquote>
            </figure>

            {related.length > 0 && (
              <div className="related">
                <h2>Often paired with</h2>
                <ul>
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link to={`/services/${item.slug}`}>
                        <span>{item.number}</span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <nav className="section section-tight pager-wrap" aria-label="Other practices">
        <div className="container pager">
          <Link to={`/services/${previous.slug}`}>
            <small>Previous</small>
            <strong>
              {previous.number} {previous.name}
            </strong>
          </Link>
          <Link to={`/services/${next.slug}`}>
            <small>Next</small>
            <strong>
              {next.number} {next.name}
            </strong>
          </Link>
        </div>
      </nav>

      <CtaBand />
    </>
  );
}
