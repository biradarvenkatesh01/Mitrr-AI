import { useState, useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { Bot, Sparkles } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AI_RESPONSES = [
  "Hello! I'm your AI assistant. How can I help you today?",
  "That's an interesting question! Let me think about that...",
  "I'd be happy to help you with that. Can you provide more details?",
  "Based on what you've shared, here's what I think...",
  "That's a great point! Here's another perspective to consider...",
  "I understand your concern. Let me break this down for you...",
  "Thanks for asking! This is definitely something I can help with.",
  "I appreciate your patience. Here's a comprehensive answer...",
];

export const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateAIResponse = () => {
    const randomResponse = AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)];
    return randomResponse;
  };

  const handleSendMessage = async (text: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5s
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center justify-center space-x-3 mb-6 p-6 glass-effect rounded-2xl shadow-glass">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl shadow-glow">
          <Bot className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            AI Assistant
          </h1>
          <p className="text-muted-foreground flex items-center justify-center space-x-1">
            <Sparkles className="h-4 w-4" />
            <span>Powered by Artificial Intelligence</span>
          </p>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-hidden rounded-2xl glass-effect shadow-glass">
        <div className="h-full overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isUser={message.isUser}
            />
          ))}
          
          {isTyping && (
            <ChatMessage
              message=""
              isUser={false}
              isTyping={true}
            />
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="mt-4">
        <ChatInput
          onSendMessage={handleSendMessage}
          disabled={isTyping}
        />
      </div>
    </div>
  );
};