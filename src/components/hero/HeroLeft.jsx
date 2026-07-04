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
      className="space-y-8"
    >
      <Badge className="rounded-full border-violet-500/30 bg-violet-500/10 px-4 py-2 text-violet-300">
        <Sparkles className="mr-2 h-4 w-4" />
        Built for Technical Interviews
      </Badge>

      <div>
        <h1 className="text-6xl font-black leading-none lg:text-8xl">
          Your Invisible
        </h1>

        <h1 className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-blue-400 bg-clip-text text-6xl font-black text-transparent lg:text-8xl">
          AI Interview
        </h1>

        <h1 className="text-6xl font-black leading-none lg:text-8xl">
          Companion
        </h1>
      </div>

      <p className="max-w-xl text-lg leading-8 text-slate-400">
        Real-time AI assistance, OCR question detection,
        code generation and intelligent answers —
        right where you need them.
      </p>
      <div className="flex flex-wrap gap-4">

        <Button
          type="button"
          size="lg"
          onClick={(event) => handleDownloadClick(event, "windows")}
          className="rounded-xl bg-linear-to-r from-violet-600 to-blue-500 px-8 py-7"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Windows
        </Button>

        <Button
          type="button"
          size="lg"
          variant="outline"
          onClick={(event) => handleDownloadClick(event, "macos")}
          className="cursor-pointer rounded-xl border-white/10 bg-white/5 px-8 py-7 text-base hover:bg-white/10"
        >
          <Apple className="mr-2 h-5 w-5" />
          Download macOS
        </Button>


      </div>
    </motion.div>
  );
}
