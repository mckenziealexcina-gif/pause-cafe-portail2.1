interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

// Fonction pour rendre les URLs cliquables
function renderContentWithLinks(content: string, isUser: boolean) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = content.split(urlRegex);

  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className={`underline font-semibold transition-colors ${
            isUser
              ? "text-white hover:text-yellow-200"
              : "text-coffee-orange hover:text-amber-600"
          }`}
        >
          {part}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex w-full items-end gap-2 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="mb-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-coffee-orange to-amber-500 shadow-md">
          <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3 11H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
        </div>
      )}

      <div
        className={`group relative max-w-[70%] rounded-3xl px-5 py-3 shadow-sm transition-all hover:shadow-md ${
          isUser
            ? "bg-gradient-to-br from-coffee-orange to-amber-500 text-white"
            : "bg-white text-stone-800 border border-stone-200/50"
        }`}
      >
        <p className="whitespace-pre-wrap text-[15px] leading-relaxed">
          {renderContentWithLinks(content, isUser)}
        </p>

        {/* Tail/pointer */}
        <div
          className={`absolute bottom-1 ${
            isUser
              ? "right-0 translate-x-1/2 rotate-[60deg] bg-gradient-to-br from-coffee-orange to-amber-500"
              : "left-0 -translate-x-1/2 -rotate-[60deg] bg-white border-l border-b border-stone-200/50"
          } h-3 w-3 rounded-sm`}
        />
      </div>

      {isUser && (
        <div className="mb-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-stone-600 to-stone-700 shadow-md">
          <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
        </div>
      )}
    </div>
  );
}
