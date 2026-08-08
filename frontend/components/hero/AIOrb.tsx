"use client";

export default function AIOrb() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Outer Glow */}

      <div
        className="
          absolute
          h-36
          w-36
          rounded-full
          bg-blue-500/20
          blur-3xl
          animate-pulse
        "
      />

      {/* Middle Glow */}

      <div
        className="
          absolute
          h-28
          w-28
          rounded-full
          bg-blue-500/30
          blur-2xl
        "
      />

      {/* Main Orb */}

      <div
        className="
          relative
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-blue-500
          via-blue-600
          to-indigo-700
          shadow-[0_20px_50px_rgba(37,99,235,0.35)]
          transition-all
          duration-300
          hover:scale-105
        "
      >
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-white/15
            backdrop-blur-sm
          "
        >
          <span className="text-3xl">⚖️</span>
        </div>
      </div>

    </div>
  );
}