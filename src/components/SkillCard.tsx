import { Link } from "react-router-dom";
import { hourly, type Service } from "../data/services";

export function SkillCard({ service }: { service: Service }) {
  return (
    <Link className="skill-card" to={`/services/${service.slug}`}>
      <img
        src={service.image}
        alt={service.imageAlt}
        width={1400}
        height={875}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <div className="skill-card-body">
        <p className="practice-num">{service.number}</p>
        <h3>{service.name}</h3>
        <p>{service.summary}</p>
        <p className="skill-card-foot">
          <span>{hourly(service.rate)}</span>
          <span aria-hidden="true">View →</span>
        </p>
      </div>
    </Link>
  );
}
