import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Users,
  BadgeCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 via-white to-white">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-slate-700">
            🇬🇭 National Service Placement Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Connecting
            <span className="text-slate-900"> Final Year Students </span>
            with the Right Companies.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            ServiceLink connects students, National Service Personnel,
            universities and companies through one digital platform,
            making placement faster, easier and transparent.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="/register/student"
              className="rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition duration-300 hover:bg-green-700 hover:opacity-90"
            >
              I&apos;m a Student
            </Link>

            <Link
              href="/register/company"
              className="flex items-center gap-2 rounded-xl border border-green-600 px-7 py-4 font-semibold text-green-600 transition duration-300 hover:bg-green-50"
            >
              I&apos;m a Company
              <ArrowRight size={18} />
            </Link>

          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <Users className="mb-3 text-green-600" />
              <h2 className="text-3xl font-bold">5K+</h2>
              <p className="text-sm text-slate-500 hover:text-slate-500">
                Students
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <Building2 className="mb-3 text-green-600" />
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="text-sm text-slate-500 hover:text-slate-500">
                Companies
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <Briefcase className="mb-3 text-green-600" />
              <h2 className="text-3xl font-bold">1500+</h2>
              <p className="text-sm text-slate-500 hover:text-slate-500">
                Opportunities
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <BadgeCheck className="mb-3 text-green-600" />
              <h2 className="text-3xl font-bold">98%</h2>
              <p className="text-sm text-slate-500">
                Success Rate
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="rounded-3xl bg-green-600 p-8 text-white shadow-2xl">

            <div className="rounded-2xl bg-white p-6 text-slate-900">

              <h2 className="mb-8 text-2xl font-bold">
                Company Dashboard Preview
              </h2>

              <div className="space-y-5">

                <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4">
                  <span>Total Applications</span>
                  <strong>325</strong>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4">
                  <span>Active Opportunities</span>
                  <strong>42</strong>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4">
                  <span>Students Available</span>
                  <strong>5,480</strong>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4">
                  <span>Verified Companies</span>
                  <strong>512</strong>
                </div>

              </div>

            </div>

          </div>

          {/* Floating Cards */}

          <div className="absolute -left-6 top-10 rounded-xl bg-white p-5 shadow-xl">
            <p className="text-sm text-slate-500">
              New Applications
            </p>

            <h3 className="text-3xl font-bold text-green-600">
              +120
            </h3>
          </div>

          <div className="absolute -bottom-6 right-0 rounded-xl bg-white p-5 shadow-xl">
            <p className="text-sm text-slate-500">
              Companies Joined
            </p>

            <h3 className="text-3xl font-bold text-green-600">
              +38
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}