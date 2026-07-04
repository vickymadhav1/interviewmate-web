import {
  ScanText,
  BrainCircuit,
  Code2,
  Zap,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ScanText,
    title: "OCR Question Detection",
    description:
      "Automatically captures interview questions from your screen with high accuracy.",
    color: "text-violet-400",
    glow: "hover:shadow-violet-500/20",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Answers",
    description:
      "Receive intelligent explanations, optimized solutions and interview insights instantly.",
    color: "text-blue-400",
    glow: "hover:shadow-blue-500/20",
  },
  {
    icon: Code2,
    title: "Code Generation",
    description:
      "Generate clean, optimized code across multiple programming languages.",
    color: "text-emerald-400",
    glow: "hover:shadow-emerald-500/20",
  },
  {
    icon: Zap,
    title: "Real-Time Assistance",
    description:
      "Stay focused while InterviewMate AI works silently in the background.",
    color: "text-yellow-400",
    glow: "hover:shadow-yellow-500/20",
  },
  {
    icon: Rocket,
    title: "Lightweight Desktop App",
    description:
      "Optimized for performance with minimal CPU and memory usage.",
    color: "text-cyan-400",
    glow: "hover:shadow-cyan-500/20",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
            Features
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Everything You Need to
            <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
              {" "}
              Ace Your Interview
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Built specifically for coding interviews with AI assistance,
            OCR detection and real-time explanations.
          </p>

        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className={`rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-8 shadow-xl transition-all duration-300 ${feature.glow}`}
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 ${feature.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
