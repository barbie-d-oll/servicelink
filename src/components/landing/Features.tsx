import {
  Search,
  FileCheck,
  BellRing,
  BarChart3,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

const items = [
  {
    icon: Search,
    title: "Search Opportunities",
  },
  {
    icon: FileCheck,
    title: "Easy Application",
  },
  {
    icon: BellRing,
    title: "Instant Notifications",
  },
  {
    icon: Users,
    title: "Company Dashboard",
  },
  {
    icon: BriefcaseBusiness,
    title: "Verified Companies",
  },
  {
    icon: BarChart3,
    title: "Recruitment Analytics",
  },
];

export default function Features() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Everything You Need
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Designed for students, companies and administrators.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="
                rounded-3xl
                bg-white
                p-10
                transition-all
                duration-300
                hover:-translate-y-2
                shadow-md
                hover:shadow-5xl
                "
              >
              

                <Icon
                  size={40}
                  className="mb-6 text-green-600"
                />

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}