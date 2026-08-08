"use client";

import { sendChatMessage } from "@/services/chatService";
import { useEffect, useState } from "react";

import AIDock from "./AIDock";
import Hero from "../hero/Hero";

import ChatWorkspace, {
  ChatMessage,
} from "../chat/ChatWorkspace";

import ComplaintWorkspace from "../complaint/ComplaintWorkspace";
import ForumWorkspace from "../forum/ForumWorkspace";

export default function LegalBot() {
  const [page, setPage] = useState("chat");

  const [started, setStarted] = useState(false);

  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // ----------------------------
  // Load Chat History
  // ----------------------------

  useEffect(() => {
    const savedMessages =
      localStorage.getItem("legalbot_messages");

    const savedStarted =
      localStorage.getItem("legalbot_started");

    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }

    if (savedStarted === "true") {
      setStarted(true);
    }
  }, []);

  // ----------------------------
  // Save Chat History
  // ----------------------------

  useEffect(() => {
    localStorage.setItem(
      "legalbot_messages",
      JSON.stringify(messages)
    );

    localStorage.setItem(
      "legalbot_started",
      started.toString()
    );
  }, [messages, started]);

  // ----------------------------
  // Send Message
  // ----------------------------

  async function sendMessage(message: string) {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setStarted(true);

    setLoading(true);

    try {
      const response =
        await sendChatMessage(message);

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.answer,
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);
    } catch (error) {
      console.error(error);

      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "⚠️ Sorry, I couldn't connect to the server. Please try again.",
      };

      setMessages((prev) => [
        ...prev,
        errorMessage,
      ]);
    } finally {
      setLoading(false);
    }
  }

  // ----------------------------
  // New Chat
  // ----------------------------

  function clearChat() {
    setMessages([]);

    setInput("");

    setStarted(false);

    setLoading(false);

    localStorage.removeItem(
      "legalbot_messages"
    );

    localStorage.removeItem(
      "legalbot_started"
    );

    setPage("chat");
  }

  // ----------------------------
  // Action Card Navigation
  // ----------------------------

  function openComplaintGenerator() {
    setPage("complaint");
  }

  function openForumFinder() {
    setPage("forum");
  }

  function exportPDF() {
    // For now just navigate.
    // The Download PDF button inside
    // Complaint Workspace will handle it.
    setPage("complaint");
  }

  return (
    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-50
      via-blue-50
      to-slate-100
      "
    >
      <AIDock
        active={page}
        onChange={setPage}
        onNewChat={clearChat}
      />

      <div
        className="
        ml-28
        h-screen
        overflow-hidden
        px-8
        "
      >
        {/* CHAT */}

        {page === "chat" &&
          (!started ? (
            <Hero
              onSendMessage={sendMessage}
            />
          ) : (
            <ChatWorkspace
              messages={messages}
              loading={loading}
              input={input}
              setInput={setInput}
              onSend={() =>
                sendMessage(input)
              }
              onGenerateComplaint={
                openComplaintGenerator
              }
              onFindForum={
                openForumFinder
              }
              onExportPDF={
                exportPDF
              }
            />
          ))}

        {/* COMPLAINT */}

        {page === "complaint" && (
          <ComplaintWorkspace
            messages={messages}
          />
        )}

        {/* FORUM */}

        {page === "forum" && (
          <ForumWorkspace />
        )}

        {/* ABOUT */}

        {page === "about" && (
          <div className="flex h-screen items-center justify-center">
            <h1 className="text-5xl font-bold">
              About LegalBot
            </h1>
          </div>
        )}
      </div>
    </main>
  );
}