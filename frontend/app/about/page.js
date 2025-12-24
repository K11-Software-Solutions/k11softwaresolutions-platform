"use client";

export default function About() {
  return (
    <div id="about-container" className="flex justify-center items-center min-h-[60vh] py-12 px-2">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8 md:p-12 border border-slate-200">
        <h1 id="about-title" className="text-4xl font-bold mb-6 text-blue-900">About K11 Software Solutions</h1>
        <p className="text-lg text-slate-700 mb-6">
          K11 Software Solutions is a technology consultancy focused on delivering intelligent, scalable software systems. We specialize in AI-driven applications, automation, consulting, training, and modern software engineering—helping organizations turn complex challenges into reliable, high-impact solutions.
        </p>
        <p className="text-lg text-slate-700 mb-6">
          We work closely with teams to design and build systems that improve efficiency, support data-driven decision-making, and scale with business growth.
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-slate-900">Our Mission</h2>
          <p className="text-slate-600">
            Our mission is to deliver robust, production-ready software and automation solutions that accelerate business outcomes, enable smarter decisions, and create long-term value for our clients.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-slate-900">What Sets Us Apart</h2>
          <ul className="list-disc list-inside text-slate-600 space-y-4">
            <li>
              <span className="font-bold text-blue-900">Expertise in AI, automation, and cloud-native engineering</span><br />
              Practical, systems-focused AI development—not experimental or short-term solutions.
            </li>
            <li>
              <span className="font-bold text-blue-900">End-to-end delivery</span><br />
              From strategy and architecture to implementation, testing, and enablement.
            </li>
            <li>
              <span className="font-bold text-blue-900">Quality and reliability</span><br />
              A strong emphasis on clean design, maintainable code, and measurable results.
            </li>
            <li>
              <span className="font-bold text-blue-900">Client-first approach</span><br />
              Transparent communication, realistic timelines, and solutions aligned with real business needs.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-slate-900">Let’s Build What’s Next</h2>
          <p className="text-slate-600">
            Whether you’re looking to automate workflows, modernize existing systems, or build intelligent software from the ground up, K11 Software Solutions is a trusted partner throughout the journey.
          </p>
          <p className="text-slate-600 mt-2">
            <a href="/contact" className="text-blue-700 hover:underline font-semibold">Contact us</a> to start the conversation.
          </p>
        </div>
      </div>
    </div>
  );
}
