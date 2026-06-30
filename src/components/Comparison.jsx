import {
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const withoutAI = [
  "Switching tabs breaks your flow",
  "Hard to read questions on screen",
  "Searching manually for solutions",
  "Stress, panic and overthinking",
  "Lower confidence during interviews",
];

const withAI = [
  "Everything inside the desktop app",
  "Instant OCR question detection",
  "Real-time AI answers & explanations",
  "Stay calm and focused",
  "Higher confidence and better results",
];

export default function Comparison() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {/* Without */}

          <div className="rounded-3xl border border-red-500/20 bg-white/[0.02] p-8">
            <h3 className="mb-8 text-3xl font-bold text-red-400">
              Without InterviewMate AI
            </h3>

            <div className="space-y-5">
              {withoutAI.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <XCircle className="mt-1 h-5 w-5 text-red-500" />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* VS */}

          <div className="flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-3xl font-bold">
              VS
            </div>
          </div>

          {/* With */}

          <div className="rounded-3xl border border-emerald-500/20 bg-white/[0.02] p-8">
            <h3 className="mb-8 text-3xl font-bold text-emerald-400">
              With InterviewMate AI
            </h3>

            <div className="space-y-5">
              {withAI.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-400" />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}