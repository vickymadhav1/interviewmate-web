import { motion } from "framer-motion";
import {
  ScanText,
  BrainCircuit,
  Code2,
  CheckCircle2,
} from "lucide-react";

import dashboard from "../assets/banner.png"; // Export a clean screenshot from Electron

export default function DesktopShowcase() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-32 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-[1500px] px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="uppercase tracking-[0.4em] text-violet-400 text-sm">
            Desktop Experience
          </p>

          <h2 className="mt-4 text-6xl font-bold">
            Built for
            <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
              {" "}
              Real Interviews
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Keep your workflow uninterrupted while InterviewMate AI
            analyzes questions, generates solutions and assists in real time.
          </p>

        </div>

        {/* Showcase */}

        <motion.div
          initial={{ opacity:0,y:60 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.7 }}
          className="relative flex justify-center"
        >

          {/* Dashboard */}

          <img
            src={dashboard}
            alt="Dashboard"
            className="w-full max-w-6xl rounded-3xl shadow-[0_40px_120px_rgba(109,93,251,.35)]"
          />

          {/* OCR */}

          <motion.div
            animate={{
              y:[0,-10,0]
            }}
            transition={{
              duration:3,
              repeat:Infinity
            }}
            className="absolute left-6 top-24 rounded-2xl border border-white/10 bg-[#101827]/95 p-5 backdrop-blur-xl"
          >

            <div className="flex items-center gap-3">

              <ScanText className="text-violet-400"/>

              <div>

                <h4 className="font-semibold">
                  OCR Detection
                </h4>

                <p className="text-sm text-slate-400">
                  Question captured successfully
                </p>

              </div>

            </div>

          </motion.div>

          {/* AI */}

          <motion.div
            animate={{
              y:[0,12,0]
            }}
            transition={{
              duration:4,
              repeat:Infinity
            }}
            className="absolute right-8 top-40 rounded-2xl border border-white/10 bg-[#101827]/95 p-5 backdrop-blur-xl"
          >

            <div className="flex items-center gap-3">

              <BrainCircuit className="text-sky-400"/>

              <div>

                <h4 className="font-semibold">
                  AI Response Ready
                </h4>

                <p className="text-sm text-slate-400">
                  Complexity O(n)
                </p>

              </div>

            </div>

          </motion.div>

          {/* Code */}

          <motion.div
            animate={{
              y:[0,-8,0]
            }}
            transition={{
              duration:5,
              repeat:Infinity
            }}
            className="absolute bottom-12 left-20 rounded-2xl border border-white/10 bg-[#101827]/95 p-5 backdrop-blur-xl"
          >

            <div className="flex items-center gap-3">

              <Code2 className="text-green-400"/>

              <div>

                <h4 className="font-semibold">
                  Optimized Solution
                </h4>

                <p className="text-sm text-slate-400">
                  Ready to explain
                </p>

              </div>

            </div>

          </motion.div>

          {/* Success */}

          <motion.div
            animate={{
              y:[0,8,0]
            }}
            transition={{
              duration:4.5,
              repeat:Infinity
            }}
            className="absolute bottom-20 right-10 rounded-2xl border border-white/10 bg-[#101827]/95 p-5 backdrop-blur-xl"
          >

            <div className="flex items-center gap-3">

              <CheckCircle2 className="text-emerald-400"/>

              <div>

                <h4 className="font-semibold">
                  Interview Ready
                </h4>

                <p className="text-sm text-slate-400">
                  AI Companion Active
                </p>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}