import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, ShieldAlert, X } from "lucide-react";

export default function WindowsInstallDrawer({ guide, isOpen, onClose }) {
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = drawerRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements?.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    if (!guide.downloadUrl || guide.downloadUrl === "#") {
      return;
    }

    window.location.href = guide.downloadUrl;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/45 backdrop-blur-[6px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.aside
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="windows-install-title"
            aria-describedby="windows-install-subtitle"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 310,
              damping: 34,
              mass: 0.9,
            }}
            onMouseDown={(event) => event.stopPropagation()}
            className="ml-auto flex h-[100dvh] w-full max-w-[560px] flex-col overflow-hidden border-l border-white/[0.06] bg-[#09090B] px-6 py-6 text-[#FAFAFA] shadow-[-36px_0_120px_rgba(0,0,0,.45)] sm:px-8 sm:py-8"
          >
            <div className="mb-6 flex shrink-0 items-start justify-between gap-5">
              <div className="min-w-0">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#38BDF8]">
                  Windows setup
                </p>
                <h2
                  id="windows-install-title"
                  className="text-[27px] font-bold leading-tight tracking-[-0.02em] text-[#FAFAFA] sm:text-[32px]"
                >
                  Download Interview Mate AI for Windows
                </h2>
                <p
                  id="windows-install-subtitle"
                  className="mt-3 max-w-[28rem] text-base font-medium leading-7 text-[#A1A1AA]"
                >
                  Installation only takes a minute.
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close Windows installation guide"
                onClick={onClose}
                className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-white/[0.06] bg-[#18181B] text-[#A1A1AA] transition hover:-translate-y-0.5 hover:text-[#FAFAFA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-2 auto-rows-fr gap-3">
              {guide.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.035 }}
                  className="flex min-h-0 flex-col justify-between rounded-[20px] border border-white/[0.06] bg-[#18181B] p-4 shadow-[0_14px_44px_rgba(0,0,0,.18)]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/10 text-sm font-semibold text-[#38BDF8]">
                    {index + 1}
                  </div>
                  <p className="mt-3 text-sm font-semibold leading-5 text-[#FAFAFA]">
                    {step.title}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 shrink-0 rounded-[20px] border border-amber-300/[0.12] bg-amber-300/[0.06] p-4">
              <div className="flex gap-3">
                <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-200" />
                <p className="text-sm font-medium leading-6 text-[#A1A1AA]">
                  Windows Defender may show a beta-app warning. Choose
                  <span className="text-[#FAFAFA]"> More info</span>, then
                  <span className="text-[#FAFAFA]"> Run anyway</span>.
                </p>
              </div>
            </div>

            <div className="mt-5 grid shrink-0 grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
              <motion.button
                type="button"
                onClick={handleDownload}
                whileHover={{
                  y: -1,
                  boxShadow: "0 0 42px rgba(124,58,237,.34)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                className="inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-[20px] bg-gradient-to-r from-[#7C3AED] to-[#38BDF8] text-base font-semibold text-white shadow-[0_18px_50px_rgba(124,58,237,.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B]"
              >
                <Download className="h-5 w-5" />
                Download for Windows
              </motion.button>

              <motion.button
                type="button"
                onClick={onClose}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                className="h-14 w-full cursor-pointer rounded-[20px] border border-white/[0.06] bg-[#18181B] px-6 text-base font-semibold text-[#FAFAFA] transition hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] sm:w-auto"
              >
                Got it
              </motion.button>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
