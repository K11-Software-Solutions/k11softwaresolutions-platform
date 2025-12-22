"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { styles } from "./ui/styles";
import { Button } from "./ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    // Check login state on mount and when storage changes or custom login event
    const checkLogin = () => {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
      setIsLoggedIn(!!token);
    };
    checkLogin();
    window.addEventListener("storage", checkLogin);
    window.addEventListener("k11-login-state", checkLogin);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("storage", checkLogin);
      window.removeEventListener("k11-login-state", checkLogin);
    };
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      window.dispatchEvent(new Event("k11-login-state"));
      router.push("/login");
    }
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full",
        "transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur border-b border-slate-200 shadow-sm"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className={`${styles.container} h-16 flex items-center justify-between`}>
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-slate-900"
        >
          <img src="/images/k11_logo.png" alt="K11 Logo" className="h-9 w-9 rounded-xl bg-white object-contain" style={{background:'#fff'}} />
          <span className="text-lg">K11 Software Solutions</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-2">
          <Link
            href="/"
            className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            Services
          </Link>
          <Link
            href="/insights"
            className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            Insights
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            Contact
          </Link>

          <div className="mx-2 h-6 w-px bg-slate-200" />
          {!isLoggedIn ? (
            <>
              <Button as={Link} href="/login" variant="ghost">
                Login
              </Button>
              <Button as={Link} href="/register" variant="primary">
                Register
              </Button>
            </>
          ) : (
            <Button onClick={handleLogout} variant="ghost">
              Logout
            </Button>
          )}
        </nav>

        {/* Mobile CTA */}
        <div className="md:hidden">
          {!isLoggedIn ? (
            <Button as={Link} href="/register" variant="primary">
              Register
            </Button>
          ) : (
            <Button onClick={handleLogout} variant="ghost">
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
