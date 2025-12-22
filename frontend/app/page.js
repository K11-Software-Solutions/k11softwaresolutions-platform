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
      <section className="relative overflow-hidden">
        {/* background */}
        <div className="absolute inset-0 -z-10">
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

        <div className={`w-full max-w-6xl mx-auto ${styles.section}`}>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Building scalable, AI-ready software for growing teams
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                Empowering your business with intelligent software
              </h1>

              <p className={`mt-4 ${styles.p}`}>
                We deliver robust, scalable digital solutions tailored to your business needs—leveraging automation and AI to streamline operations, unlock actionable insights, and accelerate your growth.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button as={Link} href="/services" variant="primary">
                  🚀 Explore services
                </Button>
                <Button as={Link} href="/contact" variant="secondary">
                  💬 Talk to us
                </Button>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className={styles.pill}>✅ Fast delivery</span>
                <span className={styles.pill}>✅ Scalable architecture</span>
                <span className={styles.pill}>✅ AI-ready solutions</span>
              </div>


            </div>
            {/* Hero image on the right */}
            <div className="hidden lg:block lg:col-span-5 p-0 m-0">
              <img
                src="/images/k11_hero.png"
                alt="AI Data Visualization"
                className="w-full h-auto rounded-3xl shadow-lg object-contain p-0 m-0"
                style={{ maxHeight: 340, padding: 0, margin: 0, display: 'block' }}
              />
            </div>


          </div>
        </div>
      </section>
      <Chatbot />

      {/* Quick actions */}
      <section className="pb-16">
        <div className={styles.container}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className={styles.h2}>Get started</h2>
              <p className={`${styles.subtle} mt-1`}>Jump into the areas you use most.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href="/dashboard" className="group">
              <Card className="hover:border-slate-300">
                <CardBody className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                    📊
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-slate-900">Dashboard</p>
                      <span className="text-slate-400 group-hover:translate-x-0.5 transition">
                        →
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">
                      View insights, activity, and key metrics at a glance.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Link>

            <Link href="/services" className="group">
              <Card className="hover:border-slate-300">
                <CardBody className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                    🛠️
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-slate-900">Services</p>
                      <span className="text-slate-400 group-hover:translate-x-0.5 transition">
                        →
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">
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
