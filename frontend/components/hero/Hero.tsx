"use client";

import { useState } from "react";

import AIOrb from "./AIOrb";
import PromptSuggestions from "./PromptSuggestions";
import ChatInput from "../chat/ChatInput";

interface HeroProps {
  onSendMessage?: (message: string) => void;
}

export default function Hero({
  onSendMessage,
}: HeroProps) {
  const [message, setMessage] = useState("");

  const promptMap: Record<string, string> = {
    "Refund Denied":
      "My refund was denied by the seller. What should I do?",

    "Wrong Product":
      "I received the wrong product instead of what I ordered.",

    "Consumer Rights":
      "Explain my consumer rights under the Consumer Protection Act.",

    "Complaint Letter":
      "Help me write a consumer complaint letter.",

    "Delivery Delay":
      "My order has been delayed for several days. What should I do?",

    "Payment Failed":
      "My payment was deducted but my order was not confirmed.",
  };

  const handlePromptSelect = (prompt: string) => {
    setMessage(promptMap[prompt] ?? prompt);
  };

  const handleSend = () => {
    if (!message.trim()) return;

    onSendMessage?.(message);

    console.log(message);

    // ChatWorkspace will clear this later
  };

  return (
    <section
      className="
      mx-auto

      flex

      h-screen

      max-w-4xl

      flex-col

      items-center

      justify-center

      px-6

      pb-8
      "
    >
      {/* Orb */}

      <AIOrb />

      {/* Title */}

      <h1
        className="
        mt-8

        text-6xl

        font-bold

        tracking-tight

        text-slate-800
        "
      >
        LegalBot
      </h1>

      {/* Subtitle */}

      <p
        className="
        mt-5

        max-w-2xl

        text-center

        text-lg

        leading-8

        text-slate-500
        "
      >
        AI Consumer Legal Assistant

        <br />

        Know your rights, generate complaints and
        find the correct consumer forum.
      </p>

      {/* Divider */}

      <div className="mt-6 w-20 border-t border-slate-200" />

      {/* Prompt Suggestions */}

      <div className="mt-5 w-full">
        <PromptSuggestions
          onSelect={handlePromptSelect}
        />
      </div>

      {/* Input */}

      <div className="mt-4 w-full">
        <ChatInput
          value={message}
          onChange={setMessage}
          onSend={handleSend}
        />
      </div>
    </section>
  );
}