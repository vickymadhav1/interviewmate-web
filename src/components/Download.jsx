import { motion } from "framer-motion";
import {
  Download as DownloadIcon,
  Apple,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Download({ onDownloadClick }) {
  const handleDownloadClick = (event, platform) => {
    event.preventDefault();
    event.stopPropagation();
    onDownloadClick(platform);
  };

  return (
    <section
      id="download"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] px-10 py-20 text-center backdrop-blur-xl shadow-[0_30px_120px_rgba(109,93,251,.25)]"
        >
          <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300">
            Ready to Get Started?
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
            Download{" "}
            <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
              InterviewMate AI
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Install InterviewMate AI in under a minute and experience
            real-time AI assistance built exclusively for technical
            interviews.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Button
              type="button"
              size="lg"
              onClick={(event) => handleDownloadClick(event, "windows")}
              className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-8 py-7 text-base hover:opacity-90"
            >
              <DownloadIcon className="mr-2 h-5 w-5" />
              Download for Windows
            </Button>

            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={(event) => handleDownloadClick(event, "macos")}
              className="cursor-pointer rounded-xl border-white/10 bg-white/5 px-8 py-7 text-base hover:bg-white/10"
            >
              <Apple className="mr-2 h-5 w-5" />
              Download for macOS
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <span>Windows 10+</span>
            <span>macOS 12+</span>
            <span>Free Updates</span>
          </div>

          <div className="mt-12">
            <a
              href="#faq"
              className="inline-flex items-center gap-2 text-violet-400 transition hover:text-violet-300"
            >
              Learn More
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
