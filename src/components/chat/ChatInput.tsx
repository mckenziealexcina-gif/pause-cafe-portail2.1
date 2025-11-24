"use client";

import { useState, KeyboardEvent } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSend(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="sticky bottom-0 backdrop-blur-xl bg-white/70 border-t border-stone-200/50 p-4 shadow-lg">
      <div className="mx-auto flex max-w-3xl items-end gap-3">
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Message..."
            disabled={disabled}
            rows={1}
            className="w-full resize-none rounded-3xl border border-stone-300 bg-white px-5 py-3 pr-12 text-[15px] text-stone-800 placeholder-stone-400 shadow-sm outline-none transition-all focus:border-coffee-orange/50 focus:ring-2 focus:ring-coffee-orange/20 disabled:opacity-50"
            style={{ maxHeight: '120px' }}
          />

          {/* Send button inside input - iMessage style */}
          <button
            onClick={handleSend}
            disabled={disabled || !message.trim()}
            className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-coffee-orange to-amber-500 text-white shadow-md transition-all hover:scale-110 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hint text */}
      <p className="mx-auto mt-2 max-w-3xl text-center text-xs text-stone-400">
        Appuyez sur Entrée pour envoyer • Shift+Entrée pour nouvelle ligne
      </p>
    </div>
  );
}
