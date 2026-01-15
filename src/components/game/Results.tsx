import { Trophy, RotateCcw, Home, BookOpen, UserX } from 'lucide-react';
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
    <div className="min-h-screen gradient-parchment flex flex-col">
      {/* Header */}
      <header className="gradient-sacred p-6 shadow-elevated">
        <div className="text-center">
          <Trophy className="w-10 h-10 text-accent mx-auto mb-2" />
          <h1 className="font-display text-2xl font-bold text-primary-foreground">
            ¡Resultados!
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm space-y-4">
          {/* Word Card */}
          <div className="bg-card rounded-2xl shadow-elevated p-6 text-center border-2 border-primary/20 animate-scale-in">
            <div className="w-16 h-16 gradient-sacred rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary-foreground" />
            </div>
            <p className="font-body text-sm text-muted-foreground mb-1">
              La palabra era:
            </p>
            <p className="font-display text-2xl font-bold text-foreground mb-2">
              {word}
            </p>
            <p className="font-body text-sm text-muted-foreground italic">
              ({category})
            </p>
          </div>

          {/* Impostor Card */}
          <div
            className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl shadow-elevated p-6 text-center border-2 border-impostor/30 animate-scale-in"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="w-16 h-16 gradient-impostor rounded-full flex items-center justify-center mx-auto mb-4">
              <UserX className="w-8 h-8 text-primary-foreground" />
            </div>
            <p className="font-body text-sm text-muted-foreground mb-1">
              El impostor era:
            </p>
            <p className="font-display text-2xl font-bold text-impostor">
              {impostorName}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button
              onClick={onNewRound}
              className="w-full py-6 text-lg font-display gradient-gold text-foreground shadow-card hover:opacity-90 transition-all"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Nueva Ronda
            </Button>
            <Button
              onClick={onExit}
              variant="outline"
              className="w-full py-6 text-lg font-display border-2 border-primary/20 hover:bg-secondary transition-all"
            >
              <Home className="w-5 h-5 mr-2" />
              Volver al Inicio
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
