"use client";

import { useEffect, useRef } from "react";
import { SendHorizontal } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export default function ChatInput({
  value,
  onChange,
  onSend,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "0px";

    const newHeight = Math.min(
      textarea.scrollHeight,
      150
    );

    textarea.style.height = `${newHeight}px`;
  }, [value]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      if (value.trim()) {
        onSend();
      }
    }
  };

  return (
    <div className="w-full">

      <div
        className="
        relative

        overflow-hidden

        rounded-[30px]

        border

        border-slate-200

        bg-white/90

        backdrop-blur-xl

        shadow-lg

        transition-all
        duration-300

        focus-within:border-blue-500
        focus-within:shadow-xl
        focus-within:shadow-blue-100
        "
      >

        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          placeholder="Ask anything about consumer law..."
          onChange={(e) =>
            onChange(e.target.value)
          }
          onKeyDown={handleKeyDown}
          className="
          w-full

          resize-none

          overflow-y-auto

          bg-transparent

          px-6

          pt-6

          pb-6

          pr-24

          min-h-[84px]

          max-h-[150px]

          text-[16px]

          leading-7

          text-slate-700

          outline-none

          placeholder:text-slate-400

          scrollbar-thin
          "
        />

        <button
          onClick={onSend}
          disabled={!value.trim()}
          className={`
          absolute

          right-5
          bottom-5

          flex

          items-center
          justify-center

          h-12
          w-12

          rounded-full

          transition-all
          duration-300

          focus:outline-none
          focus:ring-4
          focus:ring-indigo-200

          ${
            value.trim()
              ? `
              bg-gradient-to-r
              from-blue-600
              to-indigo-600

              text-white

              cursor-pointer

              shadow-lg

              hover:from-indigo-600
              hover:to-purple-600

              hover:shadow-[0_0_25px_rgba(79,70,229,0.45)]

              hover:scale-110

              active:scale-95
              active:shadow-md
              `
              : `
              bg-slate-200
              text-slate-400
              cursor-not-allowed
              `
          }
          `}
        >
          <SendHorizontal size={20} />
        </button>

      </div>

    </div>
  );
}