import { useState } from 'react';
import { Eye, EyeOff, ArrowRight, BookOpen, Zap } from 'lucide-react';
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
    <div className="min-h-screen gradient-dark flex flex-col relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-5 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-5 w-48 h-48 bg-neon-violet/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative gradient-violet-blue p-6 shadow-elevated">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative text-center">
          <p className="text-primary-foreground/80 text-sm font-body mb-1 tracking-wide">
            TURNO {turnNumber} DE {totalPlayers}
          </p>
          <h1 className="font-display text-xl font-bold text-primary-foreground tracking-wider neon-text-glow">
            {playerName.toUpperCase()}
          </h1>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="h-1.5 bg-muted">
        <div
          className="h-full gradient-gold transition-all duration-500 shadow-glow-gold"
          style={{ width: `${(turnNumber / totalPlayers) * 100}%` }}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-sm">
          {!isRevealed ? (
            /* Closed Card */
            <div className="animate-scale-in">
              <div className="gradient-card rounded-2xl shadow-elevated p-8 text-center border-2 border-primary/30">
                <div className="w-24 h-24 gradient-violet-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow-violet animate-pulse-neon">
                  <EyeOff className="w-12 h-12 text-primary-foreground" />
                </div>
                <p className="font-body text-muted-foreground mb-2">
                  Asegúrate de que solo tú puedas ver la pantalla
                </p>
                <p className="font-display text-lg font-semibold text-foreground mb-6 tracking-wide">
                  ¿LISTO, {playerName.toUpperCase()}?
                </p>
                <Button
                  onClick={handleReveal}
                  className="w-full py-6 text-lg font-display gradient-gold text-accent-foreground shadow-glow-gold hover:opacity-90 transition-all animate-pulse-gold tracking-wider"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  ABRIR
                </Button>
              </div>
            </div>
          ) : (
            /* Revealed Card */
            <div className="animate-reveal">
              <div
                className={`rounded-2xl shadow-elevated p-8 text-center border-2 ${
                  isImpostor
                    ? 'gradient-impostor border-impostor/50'
                    : 'gradient-card border-primary/30'
                }`}
              >
                {isImpostor ? (
                  /* Impostor Reveal */
                  <>
                    <div className="w-24 h-24 bg-black/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-elevated animate-shake border-2 border-impostor/50">
                      <span className="text-5xl">🎭</span>
                    </div>
                    <p className="font-display text-2xl font-bold text-primary-foreground mb-2 tracking-wider animate-flicker">
                      ¡CRISTIANO IMPOSTOR!
                    </p>
                    <p className="font-body text-primary-foreground/80">
                      Intenta adivinar la palabra sin ser descubierto
                    </p>
                  </>
                ) : (
                  /* Normal Player Reveal */
                  <>
                    <div className="w-24 h-24 gradient-violet-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow-violet">
                      <BookOpen className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <p className="font-body text-sm text-muted-foreground mb-1 tracking-wide uppercase">
                      {category}
                    </p>
                    <p className="font-display text-2xl font-bold text-accent mb-2 gold-text-glow tracking-wider">
                      {word.toUpperCase()}
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      Describe esta palabra sin decirla
                    </p>
                  </>
                )}

                <Button
                  onClick={handleNext}
                  className="w-full py-6 text-lg font-display mt-6 gradient-violet-blue hover:opacity-90 transition-all shadow-glow-violet tracking-wider"
                >
                  SIGUIENTE
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
