export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <video
        className="w-[80%] h-[80vh] object-cover"
        src="https://www.dropbox.com/scl/fi/xqv8stpgpaqoxvhqnuwr4/TOKYOPILL-E-t-h-e-r-e-a-l.mp4?rlkey=9hqo6qyehznw2p9hh7t8wkhzx&st=nvd7j28f&raw=1"
        autoPlay
        loop
        controls
        muted // set to false if you want sound
        playsInline
      />
    </div>
  );
}
