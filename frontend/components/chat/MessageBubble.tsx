"use client";

import { useState } from "react";
import { Copy, Check, Scale } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import ActionCards from "./ActionCards";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;

  onGenerateComplaint: () => void;
  onFindForum: () => void;
  onExportPDF: () => void;
}

export default function MessageBubble({
  role,
  content,
  onGenerateComplaint,
  onFindForum,
  onExportPDF,
}: MessageBubbleProps) {
  const [copied, setCopied] = useState(false);

  const isUser = role === "user";

  async function handleCopy() {
    await navigator.clipboard.writeText(content);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  // ======================
  // USER MESSAGE
  // ======================

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div
          className="
          max-w-[80%]
          rounded-3xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          px-5
          py-4
          text-white
          whitespace-pre-wrap
          shadow-lg
          animate-in
          fade-in
          slide-in-from-bottom-2
          duration-300
          "
        >
          {content}
        </div>
      </div>
    );
  }

  // ======================
  // ASSISTANT MESSAGE
  // ======================

  return (
    <div className="flex gap-4">

      {/* Avatar */}

      <div
        className="
        flex
        h-11
        w-11
        shrink-0
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

      {/* Content */}

      <div className="flex-1">

        <div className="mb-2 flex items-center justify-between">

          <h3 className="font-semibold text-slate-700">
            LegalBot
          </h3>

          <button
            onClick={handleCopy}
            className="
            flex
            items-center
            gap-1
            rounded-lg
            px-2
            py-1
            text-xs
            text-slate-500
            transition
            hover:bg-slate-100
            "
          >
            {copied ? (
              <>
                <Check size={14} />
                Copied
              </>
            ) : (
              <>
                <Copy size={14} />
                Copy
              </>
            )}
          </button>

        </div>

        <div
          className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          px-6
          py-5
          shadow-sm
          animate-in
          fade-in
          slide-in-from-bottom-2
          duration-300
          "
        >
          <article
            className="
            prose
            prose-slate
            max-w-none

            prose-headings:text-slate-800
            prose-headings:font-bold

            prose-p:text-slate-700
            prose-p:leading-7

            prose-strong:text-slate-900

            prose-ul:my-4
            prose-li:my-2

            prose-code:text-blue-700
            prose-code:font-semibold

            prose-pre:rounded-xl
            prose-pre:bg-slate-900

            prose-table:border
            prose-th:border
            prose-td:border
            "
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </article>
        </div>

        <ActionCards
          message={content}
          onGenerateComplaint={onGenerateComplaint}
          onFindForum={onFindForum}
          onExportPDF={onExportPDF}
        />

      </div>

    </div>
  );
}