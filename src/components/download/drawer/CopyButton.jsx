import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

export default function CopyButton({ copied, onCopy }) {
  return (
    <motion.button
      type="button"
      aria-label={copied ? "Terminal command copied" : "Copy terminal command"}
      onClick={onCopy}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 520, damping: 30 }}
      className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.06] px-3 text-sm font-semibold text-[#FAFAFA] transition hover:border-[#38BDF8]/40 hover:bg-white/[0.1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
    >
      {copied ? (
        <Check className="h-4 w-4 text-[#32D583]" />
      ) : (
        <Copy className="h-4 w-4 text-[#A1A1AA]" />
      )}
      {copied ? "Copied" : "Copy"}
    </motion.button>
  );
}
