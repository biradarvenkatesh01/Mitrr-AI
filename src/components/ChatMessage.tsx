import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  isTyping?: boolean;
}

const TypingIndicator = () => (
  <div className="flex space-x-1 items-center py-2">
    <div className="typing-indicator"></div>
    <div className="typing-indicator"></div>
    <div className="typing-indicator"></div>
  </div>
);

export const ChatMessage = ({ message, isUser, isTyping = false }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full message-enter message-enter-active",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-3 shadow-message",
          "transition-all duration-300 hover:shadow-lg",
          isUser
            ? "bg-gradient-primary text-chat-user-foreground ml-auto glow-effect"
            : "glass-effect text-chat-ai-foreground"
        )}
      >
        {isTyping ? (
          <TypingIndicator />
        ) : (
          <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};