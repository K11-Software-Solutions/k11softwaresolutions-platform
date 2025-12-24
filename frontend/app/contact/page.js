// cache-bust: trigger redeploy - 2025-12-23T00:00:00Z
"use client";
import { useState } from "react";
import api from "../../utils/api";
import Chatbot from "../../components/Chatbot";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/contact/", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div id="contact-container" className="max-w-lg mx-auto">
        <h1 id="contact-title" className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input id="contact-name" type="text" placeholder="Name" className="p-2 border rounded"
            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}/>
          <input id="contact-email" type="email" placeholder="Email" className="p-2 border rounded"
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}/>
          <textarea id="contact-message" placeholder="Message" className="p-2 border rounded h-32"
            value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}/>
          <button id="contact-submit" type="submit" className="bg-blue-700 text-white p-2 rounded">Send Message</button>
          {sent && <p id="contact-sent" className="text-green-600 text-center">Message sent successfully!</p>}
        </form>
      </div>
      <Chatbot />
    </>
  );
}
