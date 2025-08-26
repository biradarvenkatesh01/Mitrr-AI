export const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4 fade-in">
      <div className="glass-card rounded-2xl px-4 py-3 text-sm">
        <div className="flex items-center space-x-1">
          <span className="text-muted-foreground">Mittr is thinking</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};