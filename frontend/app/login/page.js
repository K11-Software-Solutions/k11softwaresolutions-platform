"use client";
import { useState } from "react";
import api from "../../utils/api";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // backend exposes sqlite-auth routes at /api/sqlite-auth
      const payload = { email: form.username, password: form.password };
      const res = await api.post("sqlite-auth/login", payload);
      // backend returns { token, user }
      localStorage.setItem("token", res.data.token);
      window.dispatchEvent(new Event("k11-login-state"));
      login(res.data.token);
      router.push("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 mt-20 bg-white shadow rounded" id="login-container">
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-800" id="login-title">
        Login
      </h2>

      {error && <p className="text-red-500 text-center mb-2" id="login-error">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" id="login-form">

        <input
          id="login-username"
          type="text"
          placeholder="Username"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />

        <input
          id="login-password"
          type="password"
          placeholder="Password"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        {/* 🔗 Forgot Password Link */}
        <div className="text-right" id="login-forgot-password-link">
          <a
            href="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
            id="login-forgot-link"
          >
            Forgot your password?
          </a>
        </div>

        <button
          id="login-submit"
          type="submit"
          disabled={loading}
          className={`bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>

      <p className="text-center mt-4 text-sm text-gray-600" id="login-register-link">
        Don’t have an account?{" "}
        <a href="/register" className="text-blue-600 hover:underline font-medium" id="login-register-here">
          Register here
        </a>
      </p>
    </div>
  );
}
