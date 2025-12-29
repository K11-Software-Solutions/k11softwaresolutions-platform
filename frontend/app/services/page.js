"use client";

import { Card, CardBody } from "../../components/ui/Card";

export default function Services() {
  const services = [
    {
      title: "AI-driven Full-Stack Test Automation",
      desc: "AI-powered, end-to-end automation across UI, API, DB, and cloud validations—leveraging intelligence for smarter, faster, and more reliable testing.",
      bullets: ["UI + API automation", "CI/CD integration", "Reliable reporting"],
      badge: "Most popular",
      cta: { label: "Talk about automation", href: "/contact" },
    },
    {
      title: "AI/ML in Testing",
      desc: "Smarter test design with model-based approaches and AI-assisted workflow generation.",
      bullets: ["Model-based test design", "Scenario generation", "Intelligent test workflows"],
      badge: "AI-ready",
      cta: { label: "Explore AI testing", href: "/contact" },
    },
    {
      title: "Custom Development Consulting",
      desc: "Hands-on help building modern apps, APIs, and test frameworks with scalable architecture.",
      bullets: ["Java / Python / REST APIs", "Test frameworks", "Microservices"],
      badge: "Build & ship",
      cta: { label: "Start a project", href: "/contact" },
    },
    {
      title: "Data Analytics",
      desc: "Transform your raw data into actionable insights with our advanced analytics solutions.",
      bullets: ["Data visualization", "Business intelligence dashboards", "Predictive analytics"],
      badge: "Data-driven",
      cta: { label: "Discuss analytics", href: "/contact" },
    },
    {
      title: "AI Development",
      desc: "Custom AI solutions for automation, prediction, and optimization tailored to your business needs.",
      bullets: [
        "ML-based scoring & recommendation engines",
        "Predictive analytics & decision engines",
        "Forecasting & trend analysis",
        "Smart automation pipelines",
        "AI-assisted business logic"
      ],
      badge: "AI solutions",
      cta: { label: "Start AI project", href: "/contact" },
    },
    {
      title: "Upskilling & Mentorship",
      desc: "Structured coaching for teams and individuals to build real-world engineering confidence.",
      bullets: ["Career guidance", "Team enablement", "Best practices"],
      badge: "Mentorship",
      cta: { label: "Request mentorship", href: "/contact" },
    },
  ];

  const resources = [
    {
      title: "SDET Insights Website",
      desc: "Learn more about test automation, QA best practices, and industry insights.",
      icon: "🌐",
      href: "https://www.softwaretestautomation.org/",
      cta: "Visit website",
    },
    {
      title: "SDET Insights Newsletter",
      desc: "Professional technical writing, best practices, and insights for modern QA teams.",
      icon: "📰",
      href: "https://www.linkedin.com/newsletters/sdet-insights-7354009267919613954/",
      cta: "Read on LinkedIn",
    },
    {
      title: "K11 Tech Lab GitHub Organization",
      desc: "Explore our open-source projects, code samples, and engineering resources.",
      icon: "💻",
      href: "https://github.com/orgs/K11-Software-Solutions",
      cta: "View on GitHub",
    },
    {
      title: "Engineering Trustworthy AI Systems — K11 Tech",
      desc: "A technical channel focused on AI development, AI-powered test automation, and intelligent quality engineering — helping teams build resilient, auditable, and production-ready AI systems.",
      icon: "▶️",
      href: "https://www.youtube.com/@k11-tech/",
      cta: "Watch on YouTube",
    },
  ];

  return (
    <div id="services-container" className="p-10 text-center">
      <h1 id="services-title" className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto">
        {services.map((s, i) => (
          <Card key={s.title} className="flex flex-col h-full relative group bg-slate-50 border border-slate-100 shadow-sm">
            <CardBody className="flex-1 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-2">
                <span className="ml-2 px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">{s.badge}</span>
              </div>
              <h2 className="text-xl font-bold mb-2 text-left">{s.title}</h2>
              <p className="text-slate-600 mb-3 text-left">{s.desc}</p>
              <ul className="mb-4 text-left list-disc list-inside text-slate-500">
                {s.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <a
                href={s.cta.href}
                className="mt-auto inline-block px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full font-semibold shadow transition-all duration-200"
              >
                {s.cta.label}
              </a>
            </CardBody>
          </Card>
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-12 mb-6">Resources</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto">
        {resources.map((r) => (
          <Card key={r.title} className="flex flex-col h-full relative group">
            <CardBody className="flex-1 flex flex-col items-start">
              <h3 className="text-lg font-bold mb-1 text-left">{r.title}</h3>
              <p className="text-slate-600 mb-3 text-left">{r.desc}</p>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full font-semibold shadow transition-all duration-200"
              >
                {r.cta}
              </a>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
