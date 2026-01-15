import { Trophy, RotateCcw, Home, BookOpen, UserX, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResultsProps {
  word: string;
  category: string;
  impostorName: string;
  onNewRound: () => void;
  onExit: () => void;
}

export function Results({ word, category, impostorName, onNewRound, onExit }: ResultsProps) {
  return (
    <div className="min-h-screen gradient-dark flex flex-col relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-neon-gold/15 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-10 w-40 h-40 bg-neon-violet/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-neon-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Header */}
      <header className="relative gradient-gold p-6 shadow-glow-gold">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative text-center">
          <Trophy className="w-12 h-12 text-accent-foreground mx-auto mb-2 animate-float" />
          <h1 className="font-display text-2xl font-bold text-accent-foreground tracking-widest">
            ¡RESULTADOS!
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-sm space-y-4">
          {/* Word Card */}
          <div className="gradient-card rounded-2xl shadow-elevated p-6 text-center border-2 border-primary/30 animate-scale-in">
            <div className="w-20 h-20 gradient-violet-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow-violet">
              <BookOpen className="w-10 h-10 text-primary-foreground" />
            </div>
            <p className="font-body text-sm text-muted-foreground mb-1 tracking-wide">
              LA PALABRA ERA:
            </p>
            <p className="font-display text-2xl font-bold text-accent mb-2 gold-text-glow tracking-wider">
              {word.toUpperCase()}
            </p>
            <p className="font-body text-sm text-muted-foreground italic">
              ({category})
            </p>
          </div>

          {/* Impostor Card */}
          <div
            className="gradient-impostor rounded-2xl shadow-elevated p-6 text-center border-2 border-impostor/50 animate-scale-in"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="w-20 h-20 bg-black/30 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-impostor/50">
              <UserX className="w-10 h-10 text-primary-foreground" />
            </div>
            <p className="font-body text-sm text-primary-foreground/80 mb-1 tracking-wide">
              EL IMPOSTOR ERA:
            </p>
            <p className="font-display text-2xl font-bold text-primary-foreground tracking-wider animate-flicker">
              {impostorName.toUpperCase()}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button
              onClick={onNewRound}
              className="w-full py-6 text-lg font-display gradient-gold text-accent-foreground shadow-glow-gold hover:opacity-90 transition-all animate-pulse-gold tracking-wider"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              NUEVA RONDA
            </Button>
            <Button
              onClick={onExit}
              variant="outline"
              className="w-full py-6 text-lg font-display border-2 border-primary/30 hover:bg-secondary/30 hover:border-primary/50 transition-all tracking-wider text-foreground"
            >
              <Home className="w-5 h-5 mr-2" />
              VOLVER AL INICIO
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
