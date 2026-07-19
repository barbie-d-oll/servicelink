"use client";

const companies = [
  "MTN Ghana",
  "Telecel Ghana",
  "Republic Bank",
  "Ecobank",
  "GCB Bank",
  "Absa Bank",
  "Vodafone",
  "GOIL",
  "KPMG",
  "Deloitte",
  "HapaSpace",
  "HapaWeb Solutions",
];

export default function TrustedCompanies() {
  return (
    <section
      id="companies"
      className="border-y border-slate-200 bg-white py-14"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Companies We Aim to Work With
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Trusted by Leading Organizations
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            ServiceLink is designed to help organizations recruit
            National Service Personnel faster through one centralized
            recruitment platform.
          </p>

        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">

          {companies.map((company) => (
            <div
              key={company}
              className="
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-8
              text-center
              font-semibold
              text-slate-700
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-green-500
              hover:bg-green-50
              hover:text-green-600
              hover:shadow-xl
              "
            >
              {company}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}