"use client";

export default function About() {
  return (
    <div
      id="about-container"
      className="flex justify-center items-start min-h-[70vh] py-14 px-3 bg-slate-50"
    >
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="bg-white shadow-sm rounded-2xl border border-slate-200 p-8 md:p-12">
          <div className="flex flex-col gap-3">
            <h1
              id="about-title"
              className="text-xl md:text-2xl font-extrabold tracking-tight text-blue-900"
            >
              About K11 Software Solutions
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              We help teams design and deliver trustworthy software and AI systems—built for
              reliability, change, and production reality.
            </p>
          </div>

          {/* Overview */}
          <div className="mt-8 space-y-5">
            <p className="text-base text-slate-700 leading-relaxed">
              K11 Software Solutions is a technology consultancy specializing in software
              development, AI development, and AI-powered test automation. We partner with
              engineering teams to modernize delivery, strengthen quality engineering, and
              bring AI initiatives to production with discipline—not hype.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Our work spans end-to-end execution: architecture and implementation, test
              strategy and automation, evaluation and assurance, and scalable CI/CD workflows.
              The goal is consistent outcomes—systems that are testable by design, resilient
              under change, and auditable in production.
            </p>

            {/* Quick capability chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "AI Systems & Integration",
                "AI-Powered Test Automation",
                "Intelligent Quality Engineering",
                "AI Assurance & Red Teaming",
                "Prompt Evaluation & Safety",
                "Scalable CI/CD Workflows",
                "Model Context Protocol (MCP)",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="my-10 h-px w-full bg-slate-200" />

            {/* Mission */}
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-blue-900">
                Mission
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                Deliver production-ready software, automation, and AI systems that improve
                outcomes, reduce operational risk, and raise the engineering quality bar—through
                clear architecture, measurable validation, and reliable delivery practices.
              </p>
            </section>

            {/* Operating principles */}
            <section className="mt-10 space-y-4">
              <h2 className="text-base md:text-lg font-bold text-blue-900">
                How We Work
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Engineering discipline first",
                    body:
                      "We prioritize correctness, maintainability, and clarity—so systems stay stable as they evolve.",
                  },
                  {
                    title: "Testable by design",
                    body:
                      "We build for observability, deterministic testing, and fast feedback loops across the stack.",
                  },
                  {
                    title: "AI with accountability",
                    body:
                      "We apply evaluation, assurance, and red teaming so AI behavior is measurable and auditable in production.",
                  },
                  {
                    title: "Delivery that scales",
                    body:
                      "We design CI/CD workflows and automation strategies that scale with teams, traffic, and complexity.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <h3 className="text-base font-semibold text-blue-900">{item.title}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Leadership / Founder section (non-personal) */}
            <section className="mt-10 space-y-4">
              <h2 className="text-base md:text-lg font-bold text-blue-900">
                Founder & Leadership
              </h2>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-slate-700 leading-relaxed">
                    K11 Software Solutions is founder-led and engineering-driven. Leadership is hands-on in architecture,
                    delivery, and quality—ensuring every engagement reflects the same standards we teach:
                    deterministic automation where possible, rigorous evaluation for AI behavior, and
                    documentation that makes systems auditable and maintainable.
                </p>
                <p className="mt-3 text-base text-slate-700 leading-relaxed">
                  We partner closely with client stakeholders—from engineering managers to architects
                  and SDETs—to align on measurable outcomes, delivery milestones, and operating practices
                  that endure beyond the initial build.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mt-10">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-blue-900">
                    Let’s build systems you can trust in production.
                  </h2>
                  <p className="mt-2 text-base text-slate-600">
                    If you want deeper technical guidance, implementation support, or an assurance-first
                    approach to AI and automation, we can help.
                  </p>
                </div>

                <div className="flex flex-col gap-3 w-full max-w-xs mx-auto mt-4">
                  <a
                    href="/services"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-2.5 font-semibold text-white hover:bg-blue-800 w-full"
                  >
                    Explore services
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 font-semibold text-white hover:bg-slate-800 w-full"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Optional small note */}
        <p className="mt-6 text-center text-base text-slate-500">
          Building resilient software and AI systems with engineering discipline, measurable validation,
          and scalable delivery.
        </p>
      </div>
    </div>
  );
}
