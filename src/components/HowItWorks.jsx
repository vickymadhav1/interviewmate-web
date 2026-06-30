import { motion } from "framer-motion";
import {
  Download,
  Laptop,
  LogIn,
  Video,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Download",
    description: "Download InterviewMate AI for Windows or macOS.",
  },
  {
    icon: Laptop,
    title: "Install",
    description: "Complete the installation in under a minute.",
  },
  {
    icon: LogIn,
    title: "Sign In",
    description: "Securely authenticate using your Google account.",
  },
  {
    icon: Video,
    title: "Start Interview",
    description: "Open your coding interview platform as usual.",
  },
  {
    icon: Sparkles,
    title: "AI Companion",
    description: "Launch the companion and receive AI assistance instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="uppercase tracking-[0.35em] text-violet-400 text-sm">
            How It Works
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Get Started in
            <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
              {" "}
              Five Simple Steps
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Install once, sign in, and let InterviewMate AI become your
            real-time desktop interview companion.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Line */}

          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-violet-500/60 via-slate-600 to-transparent lg:block" />

          <div className="space-y-16">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className={`grid items-center gap-8 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >

                  {/* Card */}

                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-lg">

                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-sky-500">

                      <Icon className="h-8 w-8 text-white" />

                    </div>

                    <h3 className="mb-3 text-3xl font-bold">
                      {step.title}
                    </h3>

                    <p className="text-slate-400 leading-7">
                      {step.description}
                    </p>

                  </div>

                  {/* Step Number */}

                  <div className="hidden items-center justify-center lg:flex">

                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-violet-500/30 bg-[#111827] text-3xl font-bold text-violet-400 shadow-lg shadow-violet-500/20">

                      {index + 1}

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}