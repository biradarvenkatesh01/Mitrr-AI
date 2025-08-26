import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t border-border/50 backdrop-blur-sm">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message Mittr..."
        disabled={disabled}
        className="flex-1 glass-card border-primary/30 focus:border-primary/50"
      />
      <Button 
        type="submit" 
        disabled={!message.trim() || disabled}
        className="bg-primary hover:bg-primary/90 glow-primary"
      >
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
};