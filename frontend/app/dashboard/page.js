"use client";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const res = await api.get("/dashboard/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        console.error("Dashboard fetch failed:", err);
        if (err.response && err.response.status === 401) {
          localStorage.removeItem("token");
          router.push("/login");
        } else {
          setError("Failed to load dashboard data");
        }
      }
    };

    fetchData();
  }, [router]);

  if (error) {
    return <p className="text-red-500 text-center mt-10">{error}</p>;
  }

  if (!user) {
    return <p className="text-center mt-10">Loading dashboard...</p>;
  }

  return (
    <div className="max-w-lg mx-auto mt-20 bg-white shadow-lg p-8 rounded">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p className="text-gray-700 mb-2">Welcome, <b>{user.message}</b></p>
      <p className="text-gray-600">Email: {user.email}</p>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          router.push("/login");
        }}
        className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
