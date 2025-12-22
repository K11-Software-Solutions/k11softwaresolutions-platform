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
      const res = await api.post("/login/", form);
      localStorage.setItem("token", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      window.dispatchEvent(new Event("k11-login-state"));
      login(res.data.access);
      router.push("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 mt-20 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-800">
        Login
      </h2>

      {error && <p className="text-red-500 text-center mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          id="username"
          type="text"
          placeholder="Username"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />

        <input
          id="password"
          type="password"
          placeholder="Password"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        {/* 🔗 Forgot Password Link */}
        <div className="text-right">
          <a
            href="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot your password?
          </a>
        </div>

        <button
          id="submit"
          type="submit"
          disabled={loading}
          className={`bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>

      <p className="text-center mt-4 text-sm text-gray-600">
        Don’t have an account?{" "}
        <a href="/register" className="text-blue-600 hover:underline font-medium">
          Register here
        </a>
      </p>
    </div>
  );
}
