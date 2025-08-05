"use client";
import { useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setMuted(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-black relative"
      onClick={muted ? handleUnmute : undefined}
    >
      <video
        ref={videoRef}
        className="w-[80%] h-[80vh] object-cover"
        src="https://www.dropbox.com/scl/fi/xqv8stpgpaqoxvhqnuwr4/TOKYOPILL-E-t-h-e-r-e-a-l.mp4?rlkey=9hqo6qyehznw2p9hh7t8wkhzx&st=nvd7j28f&raw=1"
        autoPlay
        loop
        muted
        playsInline
      />
      {muted && (
        <div className="absolute text-white bg-black/70 px-4 py-2 rounded">
          Click me
        </div>
      )}
    </div>
  );
}
