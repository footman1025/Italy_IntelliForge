import { useMemo, useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb";
import { services } from "../data/services";
import { studio } from "../studio";
import { usePage } from "../usePage";

export function Contact() {
  const [params] = useSearchParams();
  const requested = params.get("service") ?? "";
  const initial = services.some((service) => service.slug === requested) ? requested : "";
  const [practice, setPractice] = useState(initial);
  const [sent, setSent] = useState(false);

  const selected = useMemo(
    () => services.find((service) => service.slug === practice),
    [practice],
  );

  usePage(
    "Contact · IntelliForge",
    "Start a project with Hassan Mustafa at IntelliForge. Share the outcome, the timing, and a budget that feels comfortable.",
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : "",
      `Service: ${selected ? selected.name : "Not sure yet"}`,
      "",
      message,
    ].filter((line) => line !== "");

    const href = `mailto:${studio.email}?subject=${encodeURIComponent(
      `Project inquiry from ${name}`,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
          <p className="eyebrow">{studio.location}</p>
          <h1>Let’s talk.</h1>
          <p className="lede">
            Tell us the outcome you want, when you need it, and the budget that feels
            comfortable. You’ll get a straight recommendation, not a pile of options.
          </p>
        </div>
      </header>

      <section className="section section-tight">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-grid">
              <label className="field">
                <span>Name</span>
                <input name="name" type="text" autoComplete="name" required maxLength={120} />
              </label>
              <label className="field">
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" required maxLength={160} />
              </label>
              <label className="field wide">
                <span>
                  Company <span className="optional">· Optional</span>
                </span>
                <input name="company" type="text" autoComplete="organization" maxLength={160} />
              </label>
              <label className="field wide">
                <span>What do you need?</span>
                <select
                  name="practice"
                  value={practice}
                  onChange={(event) => {
                    setPractice(event.target.value);
                    setSent(false);
                  }}
                >
                  <option value="">Not sure yet</option>
                  {services.map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="field wide">
                <span>Project note</span>
                <textarea
                  name="message"
                  required
                  minLength={20}
                  maxLength={4000}
                  rows={7}
                  placeholder="What should exist when this is done, who it is for, and any deadline or budget you already know."
                />
              </label>
            </div>
            {selected && (
              <p className="form-note">
                You’re asking about {selected.name}. The scope is agreed before work starts.
              </p>
            )}
            <button className="button" type="submit">
              Open email to send
            </button>
            {sent && (
              <p className="form-success" role="status">
                Your email app should open with the message ready. If it does not, write
                directly to <a href={`mailto:${studio.email}`}>{studio.email}</a>.
              </p>
            )}
          </form>

          <aside className="contact-side">
            <div>
              <h2>What happens next</h2>
              <ol>
                <li>You send the outcome, timing, and a comfortable budget.</li>
                <li>We reply with questions, a recommendation, and a written scope.</li>
                <li>Work starts when that scope is agreed.</li>
              </ol>
            </div>
            <div>
              <h2>Services</h2>
              <ul className="service-list">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link to={`/services/${service.slug}`}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className="side-mail">
              Or write straight to{" "}
              <a href={`mailto:${studio.email}`}>{studio.email}</a>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
