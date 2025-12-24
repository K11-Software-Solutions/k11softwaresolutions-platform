"use client";
import { useState } from "react";
import api from "../../utils/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
    try {
      await api.post("/forgot-password/", { email });
      setMessage("If your email is registered, you will receive a password reset link.");
    } catch (err) {
      setError("Failed to send reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="forgot-password-container" className="max-w-md mx-auto p-8 mt-20 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-800">Forgot Password</h2>
      {message && <p id="forgot-password-message" className="text-green-600 text-center mb-2">{message}</p>}
      {error && <p id="forgot-password-error" className="text-red-500 text-center mb-2">{error}</p>}
      <form id="forgot-password-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          id="forgot-password-email"
          type="email"
          placeholder="Enter your email"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          id="forgot-password-submit"
          type="submit"
          disabled={loading}
          className={`bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
}
