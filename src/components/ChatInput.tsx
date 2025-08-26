import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex items-center space-x-3 p-4 glass-effect rounded-2xl shadow-glass">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          disabled={disabled}
          className={cn(
            "flex-1 border-0 bg-transparent text-foreground placeholder:text-muted-foreground",
            "focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-0"
          )}
        />
        <Button
          type="submit"
          size="sm"
          disabled={!message.trim() || disabled}
          className={cn(
            "bg-gradient-primary text-primary-foreground border-0 rounded-xl",
            "hover:shadow-glow transition-all duration-300",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
          )}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};