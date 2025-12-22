"use client";
import { useState } from "react";
import api from "../../utils/api";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", email: "", password: "", subscription: "basic" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register/", form);
      setSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Registration failed");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 mt-20 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
      {/* Subscription Features Table */}
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-2 text-center">Compare Subscription Levels</h3>
        <table className="w-full text-sm border rounded overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Features</th>
              <th className="p-2 border">Basic</th>
              <th className="p-2 border">Pro</th>
              <th className="p-2 border">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border text-left">Access to free resources</td>
              <td className="p-2 border text-center">✔️</td>
              <td className="p-2 border text-center">✔️</td>
              <td className="p-2 border text-center">✔️</td>
            </tr>
            <tr>
              <td className="p-2 border text-left">Community support</td>
              <td className="p-2 border text-center">✔️</td>
              <td className="p-2 border text-center">✔️</td>
              <td className="p-2 border text-center">✔️</td>
            </tr>
            <tr>
              <td className="p-2 border text-left">Premium tutorials & webinars</td>
              <td className="p-2 border text-center">—</td>
              <td className="p-2 border text-center">✔️</td>
              <td className="p-2 border text-center">✔️</td>
            </tr>
            <tr>
              <td className="p-2 border text-left">1:1 mentorship sessions</td>
              <td className="p-2 border text-center">—</td>
              <td className="p-2 border text-center">2/month</td>
              <td className="p-2 border text-center">Unlimited</td>
            </tr>
            <tr>
              <td className="p-2 border text-left">Team onboarding & training</td>
              <td className="p-2 border text-center">—</td>
              <td className="p-2 border text-center">—</td>
              <td className="p-2 border text-center">✔️</td>
            </tr>
            <tr>
              <td className="p-2 border text-left">Custom automation consulting</td>
              <td className="p-2 border text-center">—</td>
              <td className="p-2 border text-center">—</td>
              <td className="p-2 border text-center">✔️</td>
            </tr>
          </tbody>
        </table>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-600 text-center font-semibold">Registration successful! Redirecting to login...</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Username" className="p-2 border rounded"
          onChange={(e) => setForm({ ...form, username: e.target.value })}/>
        <input type="email" placeholder="Email" className="p-2 border rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}/>
        <input type="password" placeholder="Password" className="p-2 border rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}/>
        <select
          className="p-2 border rounded"
          value={form.subscription}
          onChange={(e) => setForm({ ...form, subscription: e.target.value })}
        >
          <option value="basic">Basic (Free)</option>
          <option value="pro">Pro</option>
          <option value="enterprise">Enterprise</option>
        </select>
        <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Create Account
        </button>
      </form>
    </div>
  );
}
