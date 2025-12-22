import Link from "next/link";
import Navbar from "../components/Navbar";

import { styles } from "../components/ui/styles";
import { Button } from "../components/ui/Button";

import { Card, CardBody } from "../components/ui/Card";

import Chatbot from "../components/Chatbot";

export default function Home() {
  return (
    <>

      {/* Hero (NO PNG) */}
      <section className="relative overflow-hidden" id="home-hero-section">
        {/* background */}
        <div className="absolute inset-0 -z-10" id="home-hero-bg">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
          <div
            className="absolute -top-24 left-1/2 h-72 w-[46rem] -translate-x-1/2 rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #60a5fa, transparent 55%), radial-gradient(circle at 70% 60%, #a78bfa, transparent 55%)",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:18px_18px] opacity-50" />
        </div>

        <div className={`w-full max-w-6xl mx-auto ${styles.section}`} id="home-hero-content">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center" id="home-hero-grid">
            <div className="lg:col-span-7" id="home-hero-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur" id="home-hero-announcement">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Building scalable, AI-ready software for growing teams
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-900" id="home-hero-title">
                Empowering your business with intelligent software
              </h1>

              <p className={`mt-4 ${styles.p}`} id="home-hero-description">
                We deliver robust, scalable digital solutions tailored to your business needs—leveraging automation and AI to streamline operations, unlock actionable insights, and accelerate your growth.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3" id="home-hero-actions">
                <Button as={Link} href="/services" variant="primary" id="home-explore-services-btn">
                  🚀 Explore services
                </Button>
                <Button as={Link} href="/contact" variant="secondary" id="home-contact-btn">
                  💬 Talk to us
                </Button>
              </div>

              <div className="mt-7 flex flex-wrap gap-2" id="home-hero-benefits">
                <span className={styles.pill} id="home-benefit-fast">✅ Fast delivery</span>
                <span className={styles.pill} id="home-benefit-scalable">✅ Scalable architecture</span>
                <span className={styles.pill} id="home-benefit-ai">✅ AI-ready solutions</span>
              </div>


            </div>
            {/* Hero image on the right */}
            <div className="hidden lg:block lg:col-span-5 p-0 m-0" id="home-hero-image-container">
              <img
                src="/images/k11_hero.png"
                alt="AI Data Visualization"
                className="w-full h-auto rounded-3xl shadow-lg object-contain p-0 m-0"
                style={{ maxHeight: 340, padding: 0, margin: 0, display: 'block' }}
                id="home-hero-image"
              />
            </div>


          </div>
        </div>
      </section>
      <Chatbot />

      {/* Quick actions */}
      <section className="pb-16" id="home-quick-actions-section">
        <div className={styles.container} id="home-quick-actions-container">
          <div className="flex items-end justify-between gap-4" id="home-quick-actions-header">
            <div id="home-quick-actions-header-content">
              <h2 className={styles.h2} id="home-quick-actions-title">Get started</h2>
              <p className={`${styles.subtle} mt-1`} id="home-quick-actions-desc">Jump into the areas you use most.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3" id="home-quick-actions-grid">
            <Link href="/dashboard" className="group" id="home-dashboard-link">
              <Card className="hover:border-slate-300" id="home-dashboard-card">
                <CardBody className="flex gap-4" id="home-dashboard-card-body">
                  <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center" id="home-dashboard-icon">
                    📊
                  </div>
                  <div id="home-dashboard-content">
                    <div className="flex items-center gap-2" id="home-dashboard-title-row">
                      <p className="font-semibold text-slate-900" id="home-dashboard-title">Dashboard</p>
                      <span className="text-slate-400 group-hover:translate-x-0.5 transition" id="home-dashboard-arrow">
                        →
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600" id="home-dashboard-desc">
                      View insights, activity, and key metrics at a glance.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Link>

            <Link href="/services" className="group" id="home-services-link">
              <Card className="hover:border-slate-300" id="home-services-card">
                <CardBody className="flex gap-4" id="home-services-card-body">
                  <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center" id="home-services-icon">
                    🛠️
                  </div>
                  <div id="home-services-content">
                    <div className="flex items-center gap-2" id="home-services-title-row">
                      <p className="font-semibold text-slate-900" id="home-services-title">Services</p>
                      <span className="text-slate-400 group-hover:translate-x-0.5 transition" id="home-services-arrow">
                        →
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600" id="home-services-desc">
                      Explore AI tools, custom software, and automation options.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Link>


          </div>
        </div>
      </section>
    </>
  );
}
