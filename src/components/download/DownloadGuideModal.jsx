import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Clipboard, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadGuides } from "./downloadGuideData";

export default function DownloadGuideModal({ platform, isOpen, onClose }) {
  const guide = platform ? downloadGuides[platform] : null;
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const copyResetTimeoutRef = useRef(null);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);
  const [canDownload, setCanDownload] = useState(false);

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

      const focusableElements = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
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

  useEffect(() => {
    if (isOpen) {
      setIsAdvancedOpen(Boolean(guide?.advancedFix?.defaultOpen));
      setHasCopied(false);
      setCanDownload(false);

      const downloadReadyTimer = window.setTimeout(() => {
        setCanDownload(true);
      }, 700);

      return () => window.clearTimeout(downloadReadyTimer);
    }

    setIsAdvancedOpen(false);
    setHasCopied(false);
    setCanDownload(false);
  }, [guide?.advancedFix?.defaultOpen, isOpen, platform]);

  useEffect(() => {
    return () => {
      window.clearTimeout(copyResetTimeoutRef.current);
    };
  }, []);

  if (!guide) {
    return null;
  }

  const NoteIcon = guide.note.icon ?? Info;

  const handleDownload = () => {
    if (!canDownload) {
      return;
    }

    if (!guide.downloadUrl || guide.downloadUrl === "#") {
      return;
    }

    window.location.href = guide.downloadUrl;
    onClose();
  };

  const handleCopyCommand = async () => {
    if (!guide.advancedFix?.command) {
      return;
    }

    await navigator.clipboard.writeText(guide.advancedFix.command);
    setHasCopied(true);

    window.clearTimeout(copyResetTimeoutRef.current);
    copyResetTimeoutRef.current = window.setTimeout(() => {
      setHasCopied(false);
    }, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="presentation"
          onMouseDown={onClose}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-guide-title"
            aria-describedby="download-guide-subtitle"
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0B1020] shadow-[0_32px_120px_rgba(109,93,251,.35)]"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 via-sky-400 to-emerald-400" />

            <div className="flex items-start justify-between gap-5 border-b border-white/10 px-5 py-5 sm:px-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-violet-300">
                  {guide.platform} setup
                </p>
                {/* <h2
                  id="download-guide-title"
                  className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
                >
                  {guide.title}
                </h2> */}
                <p
                  id="download-guide-subtitle"
                  className="mt-2 text-sm leading-6 text-slate-400 sm:text-base"
                >
                  {guide.subtitle}
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close download guide"
                onClick={onClose}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-6 sm:px-7">
              <div className="grid gap-4">
                {guide.steps.map((step, index) => {
                  const StepIcon = step.icon;

                  return (
                    <motion.div
                      key={`${guide.platform}-${step.title}`}
                      className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.045 }}
                    >
                      <div className="relative">
                        <motion.div
                          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-sky-500 text-sm font-bold text-white shadow-lg shadow-violet-500/25"
                          initial={{ scale: 0.72, rotate: -8 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            delay: index * 0.045,
                            type: "spring",
                            stiffness: 420,
                            damping: 22,
                          }}
                        >
                          {step.number ?? index + 1}
                        </motion.div>
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-start gap-3">
                          <StepIcon className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                          <p className="text-sm font-medium leading-6 text-slate-100 sm:text-base">
                            {step.title}
                          </p>
                        </div>

                        {step.details && (
                          <ul className="mt-3 space-y-2 pl-8 text-sm text-slate-400">
                            {step.details.map((detail) => (
                              <li key={detail}>{detail}</li>
                            ))}
                          </ul>
                        )}

                        {step.checks && (
                          <div className="mt-3 grid gap-2 pl-8 text-sm text-slate-300">
                            {step.checks.map((check) => (
                              <div key={check} className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-emerald-400" />
                                <span>{check}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5">
                <div className="flex items-start gap-3">
                  <NoteIcon className="mt-1 h-5 w-5 shrink-0 text-violet-300" />
                  <div>
                    <h3 className="font-semibold text-white">{guide.note.title}</h3>
                    <div className="mt-2 space-y-2 text-sm leading-6 text-slate-300">
                      {guide.note.body.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {guide.advancedFix && (
                <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <button
                    type="button"
                    aria-expanded={isAdvancedOpen}
                    onClick={() => setIsAdvancedOpen((current) => !current)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {guide.advancedFix.eyebrow}
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        {guide.advancedFix.title}
                      </p>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-slate-400 transition ${
                        isAdvancedOpen ? "rotate-180 text-violet-300" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isAdvancedOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="border-t border-white/10 px-5 py-5">
                          <div className="flex items-start gap-3">
                            <guide.advancedFix.icon className="mt-1 h-5 w-5 shrink-0 text-sky-300" />
                            <div className="space-y-3 text-sm leading-6 text-slate-300">
                              {guide.advancedFix.explanation.map((line) => (
                                <p key={line}>{line}</p>
                              ))}
                            </div>
                          </div>

                          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#050914]">
                            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
                              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                                <guide.advancedFix.icon className="h-4 w-4" />
                                Terminal
                              </div>
                              <button
                                type="button"
                                onClick={handleCopyCommand}
                                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                              >
                                {hasCopied ? (
                                  <Check className="h-4 w-4 text-emerald-400" />
                                ) : (
                                  <Clipboard className="h-4 w-4" />
                                )}
                                {hasCopied ? "Copied" : "Copy"}
                              </button>
                            </div>
                            <pre className="overflow-x-auto px-4 py-4 text-sm leading-6 text-sky-100">
                              <code>{guide.advancedFix.command}</code>
                            </pre>
                          </div>

                          {hasCopied && (
                            <p className="mt-3 text-sm font-medium text-emerald-400">
                              Command copied. Paste it into Terminal and press Return.
                            </p>
                          )}

                          {/* <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                            <p className="text-sm font-semibold text-emerald-200">
                              After running the command:
                            </p>
                            <ol className="mt-3 space-y-2 pl-5 text-sm leading-6 text-slate-300">
                              {guide.advancedFix.afterSteps.map((step) => (
                                <li key={step} className="list-decimal">
                                  {step}
                                </li>
                              ))}
                            </ol>
                          </div> */}

                          {/* <div className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-400/10 p-4">
                            <div className="flex items-start gap-3">
                              <Info className="mt-1 h-4 w-4 shrink-0 text-amber-200" />
                              <p className="text-sm leading-6 text-amber-50/90">
                                {guide.advancedFix.notice}
                              </p>
                            </div>
                          </div> */}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {guide.metadata?.length > 0 && (
                <div className="mt-5 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  {guide.metadata.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-4 text-sm"
                    >
                      <span className="text-slate-500">{item.label}</span>
                      <span className="text-right font-medium text-slate-200">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-white/10 bg-[#090E1B] px-5 py-5 sm:flex-row sm:justify-end sm:px-7">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="rounded-xl border-white/10 bg-white/5 px-6 py-6 text-base text-slate-200 hover:bg-white/10"
              >
                Cancel
              </Button>

              <Button
                type="button"
                onClick={handleDownload}
                disabled={!canDownload || !guide.downloadUrl || guide.downloadUrl === "#"}
                className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-6 text-base hover:opacity-90"
              >
                {guide.primaryLabel}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
