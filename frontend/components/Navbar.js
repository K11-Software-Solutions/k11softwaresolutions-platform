"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { logout } from "@/utils/auth";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem("token"));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-900/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-white tracking-wide hover:text-blue-200 transition duration-200"
        >
          <span className="text-blue-300">K11</span> Software Solutions
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6 items-center">
          <Link
            href="/"
            className="text-white font-medium px-3 py-2 rounded hover:bg-blue-800 hover:text-blue-200 transition duration-200"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-white font-medium px-3 py-2 rounded hover:bg-blue-800 hover:text-blue-200 transition duration-200"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-white font-medium px-3 py-2 rounded hover:bg-blue-800 hover:text-blue-200 transition duration-200"
          >
            Contact
          </Link>

          {loggedIn ? (
            <>
              <Link
                href="/dashboard"
                className="text-white font-medium px-3 py-2 rounded hover:bg-blue-800 hover:text-blue-200 transition duration-200"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="bg-red-600 text-white font-medium px-3 py-2 rounded hover:bg-red-700 transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-white font-medium px-3 py-2 rounded hover:bg-blue-800 hover:text-blue-200 transition duration-200"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="border border-white text-white font-medium px-3 py-2 rounded hover:bg-white hover:text-blue-800 transition duration-200"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
