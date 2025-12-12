"use client";
import { useEffect, useState } from "react";
import api from "@/utils/api";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get("/services").then((res) => setServices(res.data));
  }, []);

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="flex flex-col gap-8 items-center w-full max-w-3xl mx-auto">
        {services.length > 0 ? (
          services.map((s, i) => (
            <div
              key={s._id || s.id}
              className="relative group border p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-xl flex flex-row items-center w-full max-w-3xl mx-auto transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex-1 flex flex-col justify-center">
                <div className="absolute -top-6 left-8 bg-blue-600 text-white rounded-full px-4 py-1 text-xs font-bold shadow group-hover:bg-blue-800 transition">{s.name}</div>
                <pre className="whitespace-pre-wrap text-sm text-gray-700 mb-4 mt-8 text-left" style={{fontFamily: 'inherit'}} dangerouslySetInnerHTML={{
                  __html: s.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }} />
                {s.price && <p className="mt-2 text-blue-600 font-medium">${s.price}</p>}
                {/* Subscribe button for Upskilling & Mentorship */}
                {s.name && s.name.toLowerCase().includes("upskilling") && (
                  <button
                    className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow transition-all duration-200"
                    onClick={() => window.location.href = '/register'}
                  >
                    Subscribe
                  </button>
                )}
              </div>
              {s.website && (
                <div className="flex flex-col items-center justify-center ml-8">
                  <a
                    href={s.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full font-semibold shadow hover:from-blue-800 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                  >
                    {s.name.toLowerCase().includes("newsletter")
                      ? "Visit SDET Insights LinkedIn newsletter"
                      : "Visit Website"}
                  </a>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No services available yet.</p>
        )}
        {/* Always show Subscribe button at the bottom */}
        <button
          className="mt-2 px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full font-bold shadow-lg transition-all duration-200 text-lg"
          onClick={() => window.location.href = '/register'}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
