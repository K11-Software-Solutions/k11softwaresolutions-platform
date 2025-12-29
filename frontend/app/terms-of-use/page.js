export default function TermsOfUse() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
      <p className="mb-4">By accessing or using our website and services, you agree to these Terms of Use. Please read them carefully.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Use of Services</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Use our services only for lawful purposes</li>
        <li>Do not misuse or attempt to disrupt our services</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>All content is owned by K11 Software Solutions unless otherwise stated</li>
        <li>Do not copy, reproduce, or distribute content without permission</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>We are not liable for any damages resulting from use of our services</li>
        <li>Services are provided "as is" without warranties</li>
      </ul>
      <p className="mt-8 text-slate-500">For questions, contact us at <a href="/contact" className="text-blue-700 underline">Contact Us</a>.</p>
    </div>
  );
}
