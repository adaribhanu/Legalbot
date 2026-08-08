"use client";

import { Scale } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="flex items-end gap-3">

      {/* AI Avatar */}

      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-full

          bg-gradient-to-br
          from-blue-600
          to-indigo-600

          text-white

          shadow-md
        "
      >
        <Scale size={18} />
      </div>

      {/* Bubble */}

      <div
        className="
          rounded-3xl

          border
          border-slate-200

          bg-white

          px-5
          py-4

          shadow-sm
        "
      >
        <div className="flex items-center gap-2">

          <span
            className="
              h-2.5
              w-2.5

              rounded-full

              bg-blue-500

              animate-bounce
            "
          />

          <span
            className="
              h-2.5
              w-2.5

              rounded-full

              bg-blue-500

              animate-bounce

              [animation-delay:150ms]
            "
          />

          <span
            className="
              h-2.5
              w-2.5

              rounded-full

              bg-blue-500

              animate-bounce

              [animation-delay:300ms]
            "
          />

        </div>
      </div>

    </div>
  );
}