import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import {
  Users,
  ShieldCheck,
  Briefcase,
  BarChart3,
  Clock3,
  Globe2,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Access Qualified Students",
    description:
      "Connect with thousands of final-year students and National Service Personnel from universities across Ghana.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Profiles",
    description:
      "Every student profile is verified, giving companies confidence in the quality of applicants.",
  },
  {
    icon: Briefcase,
    title: "Manage Opportunities",
    description:
      "Create, edit and manage all National Service opportunities from one dashboard.",
  },
  {
    icon: BarChart3,
    title: "Recruitment Analytics",
    description:
      "Track applications, placement trends and recruitment performance with real-time insights.",
  },
  {
    icon: Clock3,
    title: "Save Time",
    description:
      "Eliminate paperwork and streamline recruitment with a centralized digital workflow.",
  },
  {
    icon: Globe2,
    title: "National Reach",
    description:
      "Recruit talented students from universities across Ghana through a single platform.",
  },
];

export default function WhyCompanies() {
  return (
    <section className="py-28 bg-white">

      <Container>

        <SectionTitle
          badge="FOR COMPANIES"
          title="Why Companies Choose ServiceLink"
          subtitle="Recruit smarter, faster and more efficiently with a platform built specifically for National Service recruitment."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-3
                hover:scale-[1.03]
                hover:border-green-500
                hover:shadow-[0_25px_60px_rgba(22,163,74,0.25)]
                cursor-pointer
                "
              >

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-green-500/5
                  via-transparent
                  to-green-500/10
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                  "
                />

                <div
                  className="
                  relative
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-green-100
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:bg-green-600
                  "
                >
                  <Icon
                    size={34}
                    className="
                    text-green-600
                    transition-all
                    duration-500
                    group-hover:text-white
                    "
                  />
                </div>

                <h3
                  className="
                  relative
                  mt-8
                  text-2xl
                  font-bold
                  transition-all
                  duration-500
                  group-hover:text-green-600
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                  relative
                  mt-5
                  leading-8
                  text-slate-500
                  transition-all
                  duration-500
                  group-hover:text-slate-700
                  "
                >
                  {feature.description}
                </p>

              </div>

            );

          })}

        </div>

      </Container>

    </section>
  );
}