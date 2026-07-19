import {
  GraduationCap,
  Building2,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import Container from "../common/Container";

const features = [
  {
    icon: GraduationCap,
    title: "For Students",
    desc: "Create your profile, upload your CV and discover National Service opportunities that match your programme.",
  },
  {
    icon: Building2,
    title: "For Companies",
    desc: "Post opportunities, receive applications and recruit qualified National Service Personnel easily.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Platform",
    desc: "Every company and student profile is verified before becoming active on the platform.",
  },
  {
    icon: Clock3,
    title: "Save Time",
    desc: "Reduce paperwork and make placements faster using one centralized recruitment portal.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <Container>
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-green-600">
            About ServiceLink
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            One Platform.
            <span className="text-green-600">{" "}Students & Companies.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            ServiceLink is a digital recruitment platform that connects
            National Service Personnel with organizations across Ghana.
            Instead of searching company by company,
            students can apply through one trusted platform while
            organizations receive qualified applicants.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                transition-all
                duration-500
                hover:-translate-y-4
                hover:scale-[1.03]
                hover:shadow-[0_25px_60px_rgba(22,163,74,0.25)]
                hover:border-green-500
                cursor-pointer
                "
              >
                {/* Glow effect */}
                <div
                  className="
                  absolute
                  bg-gradient-to-r
                  from-green-500/5
                  to-green-500/5
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                  group-hover:blur-[100px]
                  inset-0
                  "
                />

                {/* Icon */}
                <div
                  className="
                  relative
                  mb-6
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
                    size={32}
                    className="text-green-600 transition-all duration-500 group-hover:text-white"
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                  relative
                  text-2xl
                  font-bold
                  transition-all
                  duration-500
                  group-hover:text-green-600
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                  relative
                  mt-4
                  text-slate-500
                  transition-all
                  duration-500
                  group-hover:text-slate-700
                  "
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
