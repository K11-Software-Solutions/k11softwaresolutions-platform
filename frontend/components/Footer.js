export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="h-1 w-16 bg-blue-700 rounded-full mb-8 mx-auto opacity-20" />
        {/* Top section */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img src="/images/k11_logo.png" alt="K11 Logo" className="h-10 w-10 rounded-xl bg-white object-contain border border-slate-200 shadow-sm" />
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                K11 Software Solutions
              </span>
            </div>
            <div className="text-blue-700 font-semibold text-xs uppercase tracking-widest mb-2">AI & Automation Experts</div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-600">
              Transforming ideas into intelligent software.<br />
              Consulting, automation, and AI-enabled application development for modern teams.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 text-center">
              What We Do
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-center">
              <li>
                <a
                  href="/"
                  className="text-slate-600 hover:text-slate-900 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-slate-600 hover:text-slate-900 transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/insights"
                  className="text-slate-600 hover:text-slate-900 transition"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-slate-600 hover:text-slate-900 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-slate-600 hover:text-slate-900 transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  className="text-slate-600 hover:text-slate-900 transition"
                >
                  Subscribe
                </a>
              </li>
            </ul>
          </div>

          {/* Call to action */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Get started
            </h3>
            <p className="mt-4 text-sm text-slate-600">
              Want updates, insights, or mentorship opportunities? Subscribe or
              explore our services.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="/register"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Subscribe
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                Explore services
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} <span className="font-semibold text-slate-700">K11 Software Solutions</span>. All rights reserved.
          </p>
          <div className="flex gap-4 items-center text-xs">
            <a href="#" className="text-slate-500 hover:text-slate-700 transition">
              Privacy
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-700 transition">
              Terms
            </a>
            <a href="https://www.linkedin.com/company/k11-software-solutions/" target="_blank" rel="noopener noreferrer" className="ml-2 text-slate-400 hover:text-blue-700 transition" aria-label="LinkedIn">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M16.338 16.338h-2.307v-3.356c0-.8-.014-1.83-1.116-1.83-1.117 0-1.288.872-1.288 1.772v3.414H9.32V8.75h2.214v1.034h.031c.308-.583 1.06-1.198 2.182-1.198 2.334 0 2.764 1.536 2.764 3.535v4.217zM5.337 7.713a1.338 1.338 0 1 1 0-2.676 1.338 1.338 0 0 1 0 2.676zm1.154 8.625H4.183V8.75h2.308v7.588zM17.669 2.5H2.33A1.833 1.833 0 0 0 .5 4.333v11.334A1.833 1.833 0 0 0 2.333 17.5h15.334A1.833 1.833 0 0 0 19.5 15.667V4.333A1.833 1.833 0 0 0 17.667 2.5z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
