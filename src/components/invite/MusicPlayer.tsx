import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export function MusicPlayer({ autoPlayTrigger }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Attempt playback when the envelope is opened or triggered
  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !hasInteracted) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {
          // Autoplay policy prevented playback until user click
          setIsPlaying(false);
        });
    }
  }, [autoPlayTrigger, hasInteracted]);

  const toggleMusic = () => {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(10);
    }
    setHasInteracted(true);
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Audio playback error:", err));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/bgm.mp3"
        loop
        playsInline
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => {});
          }
        }}
      />

      <div className="fixed top-5 right-5 z-40">
        <motion.button
          type="button"
          onClick={toggleMusic}
          aria-label={isPlaying ? "Mute background music" : "Play background music"}
          whileTap={{ scale: 0.92 }}
          className="group relative flex size-11 items-center justify-center rounded-full border border-gold/50 bg-paper/85 shadow-[0_10px_25px_-8px_rgba(60,45,25,0.45)] backdrop-blur-md transition-colors hover:border-gold"
        >
          {/* Subtle spinning ring when playing */}
          <motion.span
            aria-hidden="true"
            className="absolute inset-[-2px] rounded-full border border-gold/30 border-t-gold"
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={isPlaying ? { duration: 4, repeat: Infinity, ease: "linear" } : { duration: 0.3 }}
          />

          {isPlaying ? (
            /* Animated music wave bars */
            <div className="flex items-center gap-[2.5px]" aria-hidden="true">
              <motion.span
                className="w-[2.5px] rounded-full bg-gold"
                animate={{ height: [6, 15, 8, 18, 6] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                className="w-[2.5px] rounded-full bg-gold"
                animate={{ height: [12, 6, 18, 10, 12] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                className="w-[2.5px] rounded-full bg-gold"
                animate={{ height: [16, 8, 12, 6, 16] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          ) : (
            /* Sound off / muted music note icon */
            <svg
              className="size-5 text-sepia/75 transition-colors group-hover:text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.75}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12 0c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"
              />
              <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" />
            </svg>
          )}
        </motion.button>
      </div>
    </>
  );
}
