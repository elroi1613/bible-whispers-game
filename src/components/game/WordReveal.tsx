import { useState } from 'react';
import { Eye, EyeOff, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WordRevealProps {
  playerName: string;
  word: string;
  category: string;
  isImpostor: boolean;
  turnNumber: number;
  totalPlayers: number;
  onNext: () => void;
}

export function WordReveal({
  playerName,
  word,
  category,
  isImpostor,
  turnNumber,
  totalPlayers,
  onNext,
}: WordRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleNext = () => {
    setIsRevealed(false);
    onNext();
  };

  return (
    <div className="min-h-screen gradient-parchment flex flex-col">
      {/* Header */}
      <header className="gradient-sacred p-6 shadow-elevated">
        <div className="text-center">
          <p className="text-primary-foreground/80 text-sm font-body mb-1">
            Turno {turnNumber} de {totalPlayers}
          </p>
          <h1 className="font-display text-xl font-bold text-primary-foreground">
            {playerName}
          </h1>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="h-1 bg-secondary">
        <div
          className="h-full gradient-gold transition-all duration-300"
          style={{ width: `${(turnNumber / totalPlayers) * 100}%` }}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          {!isRevealed ? (
            /* Closed Card */
            <div className="animate-scale-in">
              <div className="bg-card rounded-2xl shadow-elevated p-8 text-center border-2 border-primary/20">
                <div className="w-20 h-20 gradient-sacred rounded-full flex items-center justify-center mx-auto mb-6 shadow-card">
                  <EyeOff className="w-10 h-10 text-primary-foreground" />
                </div>
                <p className="font-body text-muted-foreground mb-2">
                  Asegúrate de que solo tú puedas ver la pantalla
                </p>
                <p className="font-display text-lg font-semibold text-foreground mb-6">
                  ¿Listo, {playerName}?
                </p>
                <Button
                  onClick={handleReveal}
                  className="w-full py-6 text-lg font-display gradient-gold text-foreground shadow-card hover:opacity-90 transition-all animate-pulse-glow"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Abrir
                </Button>
              </div>
            </div>
          ) : (
            /* Revealed Card */
            <div className="animate-reveal">
              <div
                className={`rounded-2xl shadow-elevated p-8 text-center border-2 ${
                  isImpostor
                    ? 'bg-gradient-to-br from-red-50 to-red-100 border-impostor/30'
                    : 'bg-card border-primary/20'
                }`}
              >
                {isImpostor ? (
                  /* Impostor Reveal */
                  <>
                    <div className="w-20 h-20 gradient-impostor rounded-full flex items-center justify-center mx-auto mb-6 shadow-card animate-shake">
                      <span className="text-4xl">🎭</span>
                    </div>
                    <p className="font-display text-2xl font-bold text-impostor mb-2">
                      ¡Cristiano Impostor!
                    </p>
                    <p className="font-body text-muted-foreground">
                      Intenta adivinar la palabra sin ser descubierto
                    </p>
                  </>
                ) : (
                  /* Normal Player Reveal */
                  <>
                    <div className="w-20 h-20 gradient-sacred rounded-full flex items-center justify-center mx-auto mb-6 shadow-card">
                      <BookOpen className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <p className="font-body text-sm text-muted-foreground mb-1">
                      {category}
                    </p>
                    <p className="font-display text-2xl font-bold text-foreground mb-2">
                      {word}
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      Describe esta palabra sin decirla
                    </p>
                  </>
                )}

                <Button
                  onClick={handleNext}
                  className="w-full py-6 text-lg font-display mt-6 gradient-sacred hover:opacity-90 transition-all"
                >
                  Siguiente
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
