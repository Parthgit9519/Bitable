import { useEffect, useRef, useState } from "react";

export default function ScrollVideo() {
  const videoRef = useRef(null);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    // 👇 Observe when the video enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // triggers when 50% visible
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  // 🎧 Enable sound manually (browser-safe)
  const enableSound = () => {
    const video = videoRef.current;
    video.muted = false;
    video.play();
    setSoundEnabled(true);
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <video
        ref={videoRef}
        src="/videos/video.mp4"
        className="rounded-xl shadow-xl"
        width={560}
        height={655}
        muted
        playsInline
        preload="auto"
        loop
      />

      {!soundEnabled && (
        <button
          onClick={enableSound}
          className=" text-black font-semibold px-5 py-2 rounded-lg shadow hover:bg-gray-900 transition-all"
        >
          🔊
        </button>
      )}
    </div>
  );
}
