"use client";

import { useEffect, useRef } from "react";

import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatWorkspaceProps {
  messages: ChatMessage[];
  loading: boolean;

  input: string;
  setInput: (value: string) => void;

  onSend: () => void;

  onGenerateComplaint: () => void;
  onFindForum: () => void;
  onExportPDF: () => void;
}

export default function ChatWorkspace({
  messages,
  loading,
  input,
  setInput,
  onSend,
  onGenerateComplaint,
  onFindForum,
  onExportPDF,
}: ChatWorkspaceProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="flex h-screen flex-col">

      {/* Header */}

      <header
        className="
        border-b
        border-slate-200
        bg-white/80
        backdrop-blur
        px-8
        py-5
        "
      >
        <h2 className="text-xl font-semibold text-slate-800">
          LegalBot
        </h2>

        <p className="text-sm text-slate-500">
          AI Consumer Legal Assistant
        </p>
      </header>

      {/* Messages */}

      <div
        className="
        flex-1
        overflow-y-auto
        px-8
        py-8
        "
      >
        <div
          className="
          mx-auto
          flex
          max-w-4xl
          flex-col
          gap-6
          "
        >
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              role={message.role}
              content={message.content}
              onGenerateComplaint={onGenerateComplaint}
              onFindForum={onFindForum}
              onExportPDF={onExportPDF}
            />
          ))}

          {loading && <TypingIndicator />}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}

      <footer
        className="
        border-t
        border-slate-200
        bg-white/80
        backdrop-blur
        px-8
        py-6
        "
      >
        <div className="mx-auto max-w-4xl">
          <ChatInput
            value={input}
            onChange={setInput}
            onSend={onSend}
          />
        </div>
      </footer>

    </div>
  );
}