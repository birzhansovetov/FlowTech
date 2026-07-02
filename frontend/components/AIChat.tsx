"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { Dictionary } from "@/lib/i18n";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function AIChat({ dict }: { dict: Dictionary }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: dict.aiChat.prompt
    }
  ]);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  async function sendMessage() {
    if (!input.trim() || loading) {
      return;
    }

    const nextMessages: Message[] = [
      ...messages,
      { role: "user", content: input.trim() }
    ];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/ai-chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: input.trim() })
      });

      const data = await response.json();

      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: data.answer || dict.aiChat.responseError
        }
      ]);
    } catch {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: dict.aiChat.connectError
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="glass-card mx-auto max-w-4xl rounded-[2rem] p-5 md:p-7">
      <div className="h-[460px] overflow-y-auto rounded-[1.5rem] border border-white/10 bg-[#08111f] p-5">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[82%] rounded-3xl px-5 py-4 leading-7 ${message.role === "user" ? "bg-white text-ink" : "bg-white/10 text-slate-100"}`}>
                {message.content}
              </div>
            </div>
          ))}
          {loading ? <p className="text-sm text-slate-400">AI is typing...</p> : null}
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          className="flex-1 rounded-full border border-white/10 bg-white/[0.06] px-5 py-4 outline-none focus:border-accent"
          placeholder={dict.aiChat.inputPlaceholder}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="rounded-full bg-white px-6 py-4 font-semibold text-ink disabled:opacity-60"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
