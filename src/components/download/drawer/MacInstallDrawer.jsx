import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, X } from "lucide-react";
import InstallVideo from "./InstallVideo";
import TerminalCommand from "./TerminalCommand";

export default function MacInstallDrawer({ isOpen, downloadUrl, onClose }) {
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  const handleDownload = () => {
    if (!downloadUrl) {
      return;
    }

    window.location.href = downloadUrl;
  };

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
        'a[href], button:not([disabled]), video[controls], [tabindex]:not([tabindex="-1"])'
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
            aria-labelledby="mac-install-title"
            aria-describedby="mac-install-subtitle"
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
            className="ml-auto flex h-[100dvh] w-full max-w-[900px] flex-col overflow-hidden border-l border-white/[0.06] bg-[#09090B] px-6 py-7 text-[#FAFAFA] shadow-[-36px_0_120px_rgba(0,0,0,.45)] sm:px-8 sm:py-8"
          >
            <div className="mb-6 flex shrink-0 items-start justify-between gap-5">
              <div className="min-w-0">
                <h2
                  id="mac-install-title"
                  className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-[#FAFAFA] sm:text-[32px]"
                >
                  Can't open Interview Mate AI?
                </h2>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close macOS installation guide"
                onClick={onClose}
                className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-white/[0.06] bg-[#18181B] text-[#A1A1AA] transition hover:-translate-y-0.5 hover:text-[#FAFAFA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto overscroll-contain pr-1 [scrollbar-color:rgba(56,189,248,.55)_transparent] [scrollbar-gutter:stable] [scrollbar-width:thin]">
              <InstallVideo isOpen={isOpen} />
              <TerminalCommand />

              <p className="shrink-0 text-center text-sm font-medium text-[#A1A1AA]">
                Run this command once after moving the app to Applications.
              </p>
            </div>

            <div className="mt-6 grid shrink-0 grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
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
                Download for macOS
              </motion.button>

              {/* <motion.button
                type="button"
                onClick={onClose}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                className="h-14 w-full cursor-pointer rounded-[20px] border border-white/[0.06] bg-[#18181B] px-6 text-base font-semibold text-[#FAFAFA] transition hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] sm:w-auto"
              >
                Got it
              </motion.button> */}
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
