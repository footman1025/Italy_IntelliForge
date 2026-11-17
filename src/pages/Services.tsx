import { Breadcrumb } from "../components/Breadcrumb";
import { CtaBand } from "../components/CtaBand";
import { SkillCard } from "../components/SkillCard";
import { services } from "../data/services";
import { usePage } from "../usePage";

export function Services() {
  usePage(
    "Services · IntelliForge",
    "Six IntelliForge practices: software, trading systems, brand and video, automation, stores and CMS, and 3D. Hourly rates in USD.",
  );

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <p className="eyebrow">What the studio builds</p>
          <h1>Six practices.</h1>
          <p className="lede">
            Software, trading systems, brand and video, automation, stores, and 3D. One
            team, so a product, a brand, and the operations behind it stay consistent.
          </p>
        </div>
      </header>

      <section className="section section-tight" aria-label="Service directory">
        <div className="container skill-grid">
          {services.map((service) => (
            <SkillCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
