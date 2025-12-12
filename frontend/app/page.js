export default function Home() {
  return (
    <>
      {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 overflow-hidden">
        <img
          src="/images/Hero.png"
          alt="Business software hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Overlay removed for full image clarity */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900 to-transparent z-20" />
          <div className="relative z-30 flex flex-col items-center justify-center w-full min-h-[400px] pt-20 pb-8">
            {/* Headline and subheading removed as requested */}
        </div>
      </section>
      {/* Home Menu Section */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 mt-12 mb-8">
        <a href="/dashboard" className="flex flex-col items-center p-6 bg-blue-50 rounded-2xl shadow hover:bg-blue-100 transition group w-64">
          <span className="text-3xl mb-2 text-blue-700 group-hover:text-blue-900 transition">📊</span>
          <span className="font-bold text-lg mb-1 text-blue-900">Dashboard</span>
          <span className="text-gray-600 text-sm">Access your personalized dashboard and insights.</span>
        </a>
        <a href="/services" className="flex flex-col items-center p-6 bg-blue-50 rounded-2xl shadow hover:bg-blue-100 transition group w-64">
          <span className="text-3xl mb-2 text-blue-700 group-hover:text-blue-900 transition">🛠️</span>
          <span className="font-bold text-lg mb-1 text-blue-900">Services</span>
          <span className="text-gray-600 text-sm">See what we offer for your business.</span>
        </a>
        <a href="/contact" className="flex flex-col items-center p-6 bg-blue-50 rounded-2xl shadow hover:bg-blue-100 transition group w-64">
          <span className="text-3xl mb-2 text-blue-700 group-hover:text-blue-900 transition">✉️</span>
          <span className="font-bold text-lg mb-1 text-blue-900">Contact</span>
          <span className="text-gray-600 text-sm">Get in touch with our team.</span>
        </a>
      </div>
    </>
  );
}
