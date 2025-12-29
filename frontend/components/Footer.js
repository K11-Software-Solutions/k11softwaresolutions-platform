export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="h-1 w-16 bg-blue-700 rounded-full mb-8 mx-auto opacity-20" />
        {/* Top section */}
        {/* Brand + Description + Capabilities */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <img src="/images/k11_logo.png" alt="K11 Logo" className="h-10 w-10 rounded-xl bg-white object-contain border border-slate-200 shadow-sm" />
            <span className="text-xl font-bold text-slate-900 tracking-tight">K11 Software Solutions</span>
          </div>
          <div className="text-blue-700 font-semibold text-xs uppercase tracking-widest mb-2">AI & Automation Experts</div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600 text-center">
            Transforming ideas into intelligent software.<br />
            Consulting, Automation, and AI-enabled application development.
          </p>
        </div>

        {/* Three Columns: Solutions | Contact & Trust | Get Started */}
        <div className="grid gap-8 md:grid-cols-3 mb-10">
          {/* SOLUTIONS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="text-slate-600 hover:text-slate-900 transition">Services</a></li>
              <li><a href="/insights" className="text-slate-600 hover:text-slate-900 transition">Insights</a></li>
              <li><a href="/about" className="text-slate-600 hover:text-slate-900 transition">About</a></li>
              <li><a href="/contact" className="text-slate-600 hover:text-slate-900 transition">Contact</a></li>
            </ul>
          </div>
          {/* CONTACT & TRUST */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-4">Contact & Trust</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:k11softwaresolutions@outlook.com" className="text-slate-600 hover:text-slate-900 transition">k11softwaresolutions@outlook.com</a></li>
              <li className="text-slate-600">US / Remote</li>
              <li className="text-slate-600">NDA-friendly</li>
              <li className="text-slate-600">24–48h response</li>
            </ul>
          </div>
          {/* GET STARTED */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-4">Get Started</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="text-blue-700 hover:underline font-semibold">Explore Services</a></li>
              <li><a href="/register" className="text-blue-700 hover:underline font-semibold">Subscribe</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex gap-4 items-center text-xs text-slate-600">
            <span className="font-semibold">Follow Me:</span>
            <a href="https://www.linkedin.com/in/kavita-jadhav-tech/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">LinkedIn</a> |
            <a href="https://github.com/K11-Software-Solutions" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">GitHub</a> |
            <a href="https://www.youtube.com/@k11-tech/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">YouTube</a> |
            <a href="https://x.com/kavita_jadhav11" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Twitter/X</a>
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="border-t border-slate-200 pt-4 flex flex-col items-center text-xs text-slate-500">
          <div>© 2025 <span className="font-semibold text-slate-700">K11 Software Solutions</span></div>
          <div className="footer-links mt-1">
            <a href="/privacy-policy" className="mx-2 text-blue-700 hover:underline">Privacy</a> |
            <a href="/terms-of-use" className="mx-2 text-blue-700 hover:underline">Terms</a> |
            <a href="/contact" className="mx-2 text-blue-700 hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
