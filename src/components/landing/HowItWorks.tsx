import {
  UserPlus,
  Search,
  Send,
  Building2,
  CheckCircle2,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description:
      "Register and complete your student profile with your programme, skills and CV.",
  },
  {
    icon: Search,
    title: "Discover Opportunities",
    description:
      "Browse verified National Service opportunities from trusted companies.",
  },
  {
    icon: Send,
    title: "Apply",
    description:
      "Submit your application with one click directly through ServiceLink.",
  },
  {
    icon: Building2,
    title: "Company Review",
    description:
      "Companies review applications and shortlist suitable candidates.",
  },
  {
    icon: CheckCircle2,
    title: "Get Placed",
    description:
      "Receive placement updates and begin your National Service journey.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          badge="HOW IT WORKS"
          title="Your Journey Starts Here"
          subtitle="From registration to placement, ServiceLink makes the National Service process simple and transparent."
        />

        <div className="relative mt-20">

          {/* Vertical Line */}
          <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-green-200 lg:block" />

          <div className="space-y-10">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="group relative flex items-start gap-8"
                >
                  {/* Circle */}
                  <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Icon size={28} />
                  </div>

                  {/* Card */}
                  <div
                    className="
                      flex-1
                      rounded-3xl
                      border
                      border-slate-200
                      bg-white
                      p-8
                      shadow-lg
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:shadow-2xl
                      hover:border-green-500
                    "
                  >
                    <span className="text-sm font-bold text-green-600">
                      STEP {index + 1}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </Container>
    </section>
  );
}