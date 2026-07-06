import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, X } from "lucide-react";

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

    const link = document.createElement("a");
    link.href = guide.downloadUrl;
    link.download = "InterviewMateAI-Windows-Portable-1.0.0.exe";
    document.body.appendChild(link);
    link.click();
    link.remove();
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
            className="ml-auto flex h-[100dvh] w-full max-w-[640px] flex-col overflow-hidden border-l border-white/[0.06] bg-[#09090B] text-[#FAFAFA] shadow-[-36px_0_120px_rgba(0,0,0,.45)]"
          >
            <div className="shrink-0 px-5 pb-5 pt-5 sm:px-8 sm:pt-8">
              <div className="flex items-start justify-between gap-5">
                <div className="min-w-0">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#38BDF8]">
                    Windows setup
                  </p>
                  <h2
                    id="windows-install-title"
                    className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-[#FAFAFA] sm:text-[34px]"
                  >
                    {guide.title}
                  </h2>
                  <p
                    id="windows-install-subtitle"
                    className="mt-3 text-base font-medium leading-7 text-[#A1A1AA]"
                  >
                    {guide.subtitle}
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
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-5 sm:px-8">
              <ol className="space-y-4">
                {guide.steps.map((step, index) => (
                  <motion.li
                    key={step.title}
                    className="grid grid-cols-[36px_1fr] gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.035 }}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#38BDF8]/25 bg-[#38BDF8]/10 text-sm font-semibold text-[#38BDF8]">
                      {index + 1}
                    </span>
                    <p className="pt-1.5 text-[15px] font-medium leading-7 text-[#E4E4E7]">
                      {step.title}
                    </p>
                  </motion.li>
                ))}
              </ol>

              <div className="mt-7 rounded-[20px] border border-white/[0.06] bg-[#18181B] p-5">
                <p className="text-base font-semibold text-[#FAFAFA]">
                  {guide.note.title}
                </p>
                <p className="mt-3 text-sm font-medium leading-6 text-[#A1A1AA]">
                  {guide.note.description}
                </p>
              </div>

              <div className="mt-4 rounded-[18px] border border-[#38BDF8]/15 bg-[#38BDF8]/10 p-4">
                <p className="text-sm font-semibold leading-6 text-[#E0F2FE]">
                  {guide.highlight}
                </p>
              </div>
            </div>

            <div className="shrink-0 border-t border-white/[0.06] bg-[#09090B]/95 px-5 py-4 backdrop-blur sm:px-8">
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
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
