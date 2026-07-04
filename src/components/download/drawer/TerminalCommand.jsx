import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CopyButton from "./CopyButton";

const command =
  'xattr -rd com.apple.quarantine "/Applications/Interview Mate AI.app"';

const commandParts = [
  { text: "xattr", className: "text-[#38BDF8]" },
  { text: " -rd", className: "text-[#A78BFA]" },
  { text: " com.apple.quarantine", className: "text-[#FDBA74]" },
  { text: ' "/Applications/Interview Mate AI.app"', className: "text-[#32D583]" },
];

export default function TerminalCommand() {
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef(null);

  useEffect(() => {
    return () => window.clearTimeout(resetTimerRef.current);
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.clearTimeout(resetTimerRef.current);
    resetTimerRef.current = window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 28, delay: 0.04 }}
      className="shrink-0 rounded-[20px] border border-white/[0.06] bg-[#18181B]/85 p-5 shadow-[0_22px_70px_rgba(0,0,0,.34)] backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-[#FAFAFA]">💻 Terminal Command</p>
        <CopyButton copied={copied} onCopy={handleCopy} />
      </div>

      <pre className="overflow-x-auto whitespace-pre rounded-2xl bg-[#09090B] px-4 py-4 font-['JetBrains_Mono',monospace] text-[18px] font-medium leading-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,.04)]">
        <code className="select-text">
          {commandParts.map((part) => (
            <span key={part.text} className={part.className}>
              {part.text}
            </span>
          ))}
        </code>
      </pre>
    </motion.div>
  );
}
