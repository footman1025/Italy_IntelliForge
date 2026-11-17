import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { services } from "./data/services";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ServiceDetail } from "./pages/ServiceDetail";
import { Services } from "./pages/Services";
import { studio } from "./studio";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function OrganizationSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: studio.name,
      email: studio.email,
      founder: {
        "@type": "Person",
        name: studio.founder,
        jobTitle: "Founder and CEO",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "IT",
      },
      description:
        "IntelliForge is the studio of Hassan Mustafa. Software, trading systems, automation, commerce, brand and video, and 3D.",
      knowsAbout: services.map((service) => service.name),
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return null;
}

export default function App() {
  return (
    <>
      <OrganizationSchema />
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
