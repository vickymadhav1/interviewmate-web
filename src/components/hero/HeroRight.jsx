import { motion } from "framer-motion";
import banner from "../../assets/banner.png"
export default function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-[120px]" />

      {/* Laptop */}

     <div className="relative lg:scale-125 lg:translate-x-12">
  <div className="relative flex justify-end">
  <img
    src={banner}
    alt="InterviewMate Dashboard"
   className="grid items-center gap-4 lg:grid-cols-[40%_60%]"
  />
</div>
</div>

      {/* OCR Popup */}

      <div className="absolute top-full left-8 z-20 rounded-2xl border border-white/10 bg-[#111827]/90 p-5 backdrop-blur-xl">

        <div className="font-semibold text-green-400">
          ✓ OCR Detected
        </div>

        <p className="mt-2 text-sm text-slate-300">
          Question captured successfully
        </p>

        <p className="text-xs text-slate-500">
          LeetCode • Two Sum
        </p>

      </div>

    </motion.div>
  );
}