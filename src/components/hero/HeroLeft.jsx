import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Download,
  Apple,
  Sparkles,
} from "lucide-react";

export default function HeroLeft({ onDownloadClick }) {
  const handleDownloadClick = (event, platform) => {
    event.preventDefault();
    event.stopPropagation();
    onDownloadClick(platform);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .8 }}
      className="flex w-full max-w-xl flex-col items-center space-y-8 text-center lg:max-w-none lg:items-start lg:text-left"
    >
      <Badge className="rounded-full border-violet-500/30 bg-violet-500/10 px-4 py-2 text-violet-300">
        <Sparkles className="mr-2 h-4 w-4" />
        Built for Technical Interviews
      </Badge>

      <div>
        <h1 className="text-5xl font-black leading-none sm:text-6xl lg:text-8xl">
          Your Invisible
        </h1>

        <h1 className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-blue-400 bg-clip-text text-5xl font-black text-transparent sm:text-6xl lg:text-8xl">
          AI Interview
        </h1>

        <h1 className="text-5xl font-black leading-none sm:text-6xl lg:text-8xl">
          Companion
        </h1>
      </div>

      <p className="mx-auto max-w-xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0">
        Real-time AI assistance, OCR question detection,
        code generation and intelligent answers —
        right where you need them.
      </p>
      <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:flex-wrap lg:items-start">

        <Button
          type="button"
          size="lg"
          onClick={(event) => handleDownloadClick(event, "windows")}
          className="w-full max-w-[19rem] rounded-xl bg-linear-to-r from-violet-600 to-blue-500 px-8 py-7 sm:w-auto"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Windows
        </Button>

        <Button
          type="button"
          size="lg"
          variant="outline"
          onClick={(event) => handleDownloadClick(event, "macos")}
          className="w-full max-w-[19rem] cursor-pointer rounded-xl border-white/10 bg-white/5 px-8 py-7 text-base hover:bg-white/10 sm:w-auto"
        >
          <Apple className="mr-2 h-5 w-5" />
          Download macOS
        </Button>


      </div>
    </motion.div>
  );
}
