import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Video } from "lucide-react";

export default function InstallVideo({
  isOpen,
  videoSrc = "/installdemo.mp4",
  poster = "/installdemo-poster.jpg",
}) {
  const videoRef = useRef(null);
  const [hasVideoError, setHasVideoError] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      videoRef.current?.pause();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setHasVideoError(false);
    }
  }, [isOpen, videoSrc]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      whileHover={{ y: -3 }}
      className="relative shrink-0 overflow-hidden rounded-[24px] border border-[#7C3AED]/35 bg-[#18181B] shadow-[0_28px_90px_rgba(124,58,237,.26)]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[24px] shadow-[inset_0_0_44px_rgba(124,58,237,.18)]" />
      <div className="aspect-video">
        {isOpen && !hasVideoError ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={videoSrc}
            poster={poster}
            controls
            preload="metadata"
            playsInline
            onError={() => setHasVideoError(true)}
            aria-label="macOS installation video for Interview Mate AI"
          />
        ) : (
          <div className="relative h-full w-full bg-[#09090B]">
            <img
              src={poster}
              alt=""
              className="h-full w-full object-cover opacity-70"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#09090B]/25 via-transparent to-[#7C3AED]/25" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex max-w-[80%] flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.08] text-[#FAFAFA] backdrop-blur-xl">
                  {hasVideoError ? (
                    <Video className="h-7 w-7" />
                  ) : (
                    <Play className="ml-1 h-7 w-7 fill-current" />
                  )}
                </div>
                {hasVideoError && (
                  <p className="mt-4 text-sm font-medium leading-6 text-[#FAFAFA]">
                    Video preview could not load. You can still follow the
                    command below.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
