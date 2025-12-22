"use client";

export default function InsightsSection() {
  const insights = [
    {
      type: "Whitepaper Repository",
      title: "Building AI-Driven Automation Systems at Scale",
      desc: "A practical guide to designing reliable AI-powered automation without over-engineering or vendor lock-in.",
      tag: "AI Systems",
      href: "https://github.com/K11-Software-Solutions/Whitepapers",
    },
    {
      type: "Technical Blog",
      title: "From Traditional Test Automation to Intelligent Automation",
      desc: "How teams can modernize QA and validation workflows using data-driven automation strategies.",
      tag: "Automation",
      href: "https://www.softwaretestautomation.org/",
    },
    {
      type: "Newsletter",
      title: "SDET Insights Newsletter",
      desc: "Professional technical writing, best practices, and insights for modern QA teams.",
      tag: "QA & Automation",
      href: "https://www.linkedin.com/newsletters/sdet-insights-7354009267919613954/",
    },
  ];

  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Header */}
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Insights & Whitepapers
          </h2>
          <p className="mt-2 text-slate-600">
            Perspectives on AI systems, automation, and modern software engineering—grounded in real-world delivery.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="rounded-full bg-blue-50 px-2 py-0.5 text-blue-700">
                  {item.type}
                </span>
                <span className="text-slate-400">•</span>
                <span>{item.tag}</span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:underline">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>

              <div className="mt-5 text-sm font-semibold text-slate-900">
                Read more →
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-between rounded-2xl bg-white p-6 ring-1 ring-slate-200">
          <p className="text-sm text-slate-600">
            Want deeper technical guidance or custom research?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
