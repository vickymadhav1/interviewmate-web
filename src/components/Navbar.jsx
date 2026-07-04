import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070B16]/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-center px-6 md:justify-between">

        {/* Logo */}

        <a href="/" className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-sky-500 shadow-lg shadow-violet-500/20">

            <span className="font-bold text-white">
              IA
            </span>

          </div>

          <div>

            <h1 className="text-lg font-semibold tracking-tight">
              InterviewMate
              <span className="text-violet-400"> AI</span>
            </h1>

            <p className="text-xs text-slate-400">
              AI Interview Companion
            </p>

          </div>

        </a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 text-sm text-slate-300 md:flex">

          <a href="#features" className="transition hover:text-white">
            Features
          </a>

          <a href="#how-it-works" className="transition hover:text-white">
            How It Works
          </a>

          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>

          <a href="#download" className="transition hover:text-white">
            Download
          </a>

        </nav>

      </div>
    </motion.header>
  );
}
