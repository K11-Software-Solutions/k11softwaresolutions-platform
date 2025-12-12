export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-10 mt-10">
      <p className="text-xs text-gray-400 mb-6">© {new Date().getFullYear()} K11 Software Solutions. All rights reserved.</p>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-1">K11 Software Solutions</h2>
        <p className="text-sm mb-4">Transforming ideas into intelligent software. Consulting, automation, and upskilling for modern teams.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-2">
          <a
            href="/register"
            className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow transition-all duration-200"
          >
            Subscribe
          </a>
          <a
            href="/services"
            className="inline-block px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold shadow transition-all duration-200"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </footer>
  );
}
