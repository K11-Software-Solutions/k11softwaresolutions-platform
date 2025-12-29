"use client";

import { useEffect, useState } from "react";
import api from "../../utils/api";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
      return;
    }

    const fetchData = async () => {
      try {
        // NOTE: be consistent: either "/dashboard/" or "dashboard/" depending on your api baseURL
        const res = await api.get("/dashboard/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        console.error("Dashboard fetch failed:", err);
        if (err?.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("refresh");
          router.replace("/login");
        } else {
          setError("Failed to load dashboard data");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    window.dispatchEvent(new Event("k11-login-state"));
    router.replace("/login");
  };

  if (error) {
    return (
      <div className="max-w-3xl mx-auto mt-16 px-4">
        <div className="rounded-lg border bg-white p-6">
          <p className="text-red-600 font-medium">{error}</p>
          <button
            onClick={() => router.refresh?.() ?? window.location.reload()}
            className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-64 rounded bg-gray-200" />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="h-24 rounded-xl bg-gray-200" />
            <div className="h-24 rounded-xl bg-gray-200" />
            <div className="h-24 rounded-xl bg-gray-200" />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2 h-64 rounded-xl bg-gray-200" />
            <div className="h-64 rounded-xl bg-gray-200" />
          </div>
        </div>
      </div>
    );
  }

  if (!user) return null;

  // If your API returns { message: "Welcome testuser", email: "..." }
  // you can also create a nicer displayName:
  const displayName =
    typeof user?.message === "string"
      ? user.message.replace(/^Welcome\s*,?\s*/i, "").replace(/[!.]$/g, "")
      : "User";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">
              Manage your account and view updates
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-gray-900">{displayName}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>

            <button
              onClick={handleLogout}
              className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard title="Account Status" value="Active" sub="All systems normal" />
          <StatCard title="Plan" value="Free" sub="Upgrade anytime" />
          <StatCard title="Last Login" value="Today" sub="Recent session detected" />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {/* Left: Overview */}
          <div className="md:col-span-2 rounded-xl border bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
            <p className="mt-1 text-sm text-gray-600">
              Welcome back, <span className="font-medium">{displayName}</span>. Here are quick actions to get started.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <ActionButton title="Update Profile" desc="Edit account details" onClick={() => router.push("/profile")} />
              <ActionButton title="Billing & Plans" desc="Manage subscription" onClick={() => router.push("/billing")} />
              <ActionButton title="Support" desc="Get help quickly" onClick={() => router.push("/contact")} />
              <ActionButton title="Explore Services" desc="See what we offer" onClick={() => router.push("/services")} />
            </div>
          </div>

          {/* Right: Profile */}
          <div className="rounded-xl border bg-white p-6">
            <h2 className="text-lg font-semibold text-gray-900">Profile</h2>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Name</span>
                <span className="text-sm font-medium text-gray-900">{displayName}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Email</span>
                <span className="text-sm font-medium text-gray-900">{user.email}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Status</span>
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                  Active
                </span>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={() => router.push("/settings")}
                className="w-full rounded-md border bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                Account Settings
              </button>
            </div>
          </div>
        </div>

        {/* Activity */}
        <div className="mt-6 rounded-xl border bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li className="flex items-start justify-between gap-4">
              <span>Logged in successfully</span>
              <span className="text-xs text-gray-500">Just now</span>
            </li>
            <li className="flex items-start justify-between gap-4">
              <span>Visited dashboard</span>
              <span className="text-xs text-gray-500">Today</span>
            </li>
            <li className="flex items-start justify-between gap-4">
              <span>Explored services</span>
              <span className="text-xs text-gray-500">This week</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, sub }) {
  return (
    <div className="rounded-xl border bg-white p-5">
      <p className="text-sm text-gray-600">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-gray-900">{value}</p>
      <p className="mt-1 text-xs text-gray-500">{sub}</p>
    </div>
  );
}

function ActionButton({ title, desc, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg border p-4 text-left hover:bg-gray-50 transition"
      type="button"
    >
      <p className="text-sm font-semibold text-gray-900">{title}</p>
      <p className="mt-1 text-xs text-gray-600">{desc}</p>
    </button>
  );
}
