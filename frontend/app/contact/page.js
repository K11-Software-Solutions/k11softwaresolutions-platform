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
      <div className="w-full h-40 md:h-56 lg:h-64 xl:h-72 overflow-hidden">
        <img
          src="/images/Hero.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="p-2 border rounded"
            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}/>
          <input type="email" placeholder="Email" className="p-2 border rounded"
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}/>
          <textarea placeholder="Message" className="p-2 border rounded h-32"
            value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}/>
          <button type="submit" className="bg-blue-700 text-white p-2 rounded">Send Message</button>
          {sent && <p className="text-green-600 text-center">Message sent successfully!</p>}
        </form>
      </div>
      <Chatbot />
    </>
  );
}
