export default function PrivacyPolicy() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal information you provide (such as name, email, etc.)</li>
        <li>Usage data and cookies for analytics and improvement</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To provide and improve our services</li>
        <li>To communicate with you about updates or offers</li>
        <li>To ensure security and prevent fraud</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>You can request access, correction, or deletion of your data</li>
        <li>You can opt out of marketing communications at any time</li>
      </ul>
      <p className="mt-8 text-slate-500">For questions, contact us at <a href="/contact" className="text-blue-700 underline">Contact Us</a>.</p>
    </div>
  );
}
