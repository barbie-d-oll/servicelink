import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import {
  ArrowRight,
  Building2,
  Clock3,
  MapPin,
} from "lucide-react";

const jobs = [
  {
    company: "MTN Ghana",
    role: "Software Developer",
    location: "Accra",
    deadline: "30 Aug 2026",
    type: "National Service",
  },
  {
    company: "Republic Bank",
    role: "Finance Officer",
    location: "Accra",
    deadline: "28 Aug 2026",
    type: "National Service",
  },
  {
    company: "Telecel Ghana",
    role: "Marketing Officer",
    location: "Kumasi",
    deadline: "5 Sept 2026",
    type: "National Service",
  },
];

export default function FeaturedJobs() {
  return (
    <section
      id="opportunities"
      className="bg-slate-50 py-24"
    >
      <Container>

        <SectionTitle
          badge="LATEST OPPORTUNITIES"
          title="Explore National Service Opportunities"
          subtitle="Find opportunities from verified companies across Ghana."
        />

        <div className="space-y-8">

          {jobs.map((job) => (

            <div
              key={job.role}
              className="
              group
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-green-600
              hover:shadow-2xl
              "
            >

              <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

                <div className="flex items-center gap-6">

                  <div
                    className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-2xl
                    bg-green-100
                    transition-all
                    duration-500
                    group-hover:bg-green-600
                    "
                  >
                    <Building2
                      size={38}
                      className="text-green-600 transition-all group-hover:text-white"
                    />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      {job.role}
                    </h3>

                    <p className="mt-2 font-semibold text-green-600">
                      {job.company}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-5 text-slate-500">

                      <div className="flex items-center gap-2">
                        <MapPin size={18} />
                        {job.location}
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock3 size={18} />
                        {job.deadline}
                      </div>

                    </div>

                  </div>

                </div>

                <div className="flex flex-col items-start gap-4 lg:items-end">

                  <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-600">
                    {job.type}
                  </span>

                  <button
                    className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-green-600
                    px-6
                    py-3
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-green-700
                    hover:opacity-90
                    "
                  >
                    Apply Now

                    <ArrowRight size={18} />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}