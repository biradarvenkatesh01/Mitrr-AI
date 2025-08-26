import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse-glow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text leading-tight">
              Welcome to the
              <br />
              Future
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the next generation of web applications with stunning design and seamless interactions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg glow-primary animate-pulse-glow"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-card hover:bg-accent/50 px-8 py-4 text-lg border-primary/30"
              >
                Learn More
              </Button>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <Card className="glass-card p-6 hover:glow-primary transition-all duration-500 hover:scale-105">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
                <p className="text-muted-foreground">Beautiful glass-morphism UI with smooth animations</p>
              </Card>

              <Card className="glass-card p-6 hover:glow-primary transition-all duration-500 hover:scale-105" style={{animationDelay: '0.2s'}}>
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <div className="w-6 h-6 bg-primary-glow rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
                <p className="text-muted-foreground">Lightning-fast loading with optimized components</p>
              </Card>

              <Card className="glass-card p-6 hover:glow-primary transition-all duration-500 hover:scale-105" style={{animationDelay: '0.4s'}}>
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <div className="w-6 h-6 bg-accent rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fully Responsive</h3>
                <p className="text-muted-foreground">Perfect experience on any device or screen size</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
