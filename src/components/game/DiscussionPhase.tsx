import { MessageCircle, Eye, UserCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DiscussionPhaseProps {
  starterPlayerName: string;
  onShowResults: () => void;
}

export function DiscussionPhase({ starterPlayerName, onShowResults }: DiscussionPhaseProps) {
  return (
    <div className="min-h-screen gradient-dark flex flex-col relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-neon-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-10 w-48 h-48 bg-neon-violet/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-neon-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <header className="relative gradient-neon p-6 shadow-elevated">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative text-center">
          <h1 className="font-display text-2xl font-bold text-primary-foreground mb-1 tracking-wider neon-text-glow">
            ¡RONDA DE DISCUSIÓN!
          </h1>
          <p className="text-primary-foreground/80 text-sm font-body tracking-wide">
            Todos han visto su palabra
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-sm animate-scale-in">
          <div className="gradient-card rounded-2xl shadow-elevated p-8 text-center border-2 border-primary/30">
            {/* Icon */}
            <div className="w-28 h-28 gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow-gold animate-pulse-gold">
              <MessageCircle className="w-14 h-14 text-accent-foreground" />
            </div>

            {/* Starter Info */}
            <div className="bg-secondary/30 rounded-xl p-4 mb-6 border border-primary/20">
              <p className="font-body text-sm text-muted-foreground mb-2 tracking-wide">
                COMIENZA A DESCRIBIR:
              </p>
              <div className="flex items-center justify-center gap-2">
                <UserCircle className="w-6 h-6 text-neon-violet" />
                <span className="font-display text-xl font-bold text-accent tracking-wider gold-text-glow">
                  {starterPlayerName.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-3 mb-6 text-left">
              <div className="flex items-start gap-3 p-2 rounded-lg bg-neon-violet/10 border border-neon-violet/20">
                <span className="font-display font-bold text-neon-violet">1.</span>
                <p className="font-body text-sm text-foreground">
                  Cada jugador describe la palabra sin decirla
                </p>
              </div>
              <div className="flex items-start gap-3 p-2 rounded-lg bg-neon-blue/10 border border-neon-blue/20">
                <span className="font-display font-bold text-neon-blue">2.</span>
                <p className="font-body text-sm text-foreground">
                  El impostor debe fingir conocerla
                </p>
              </div>
              <div className="flex items-start gap-3 p-2 rounded-lg bg-neon-gold/10 border border-neon-gold/20">
                <span className="font-display font-bold text-accent">3.</span>
                <p className="font-body text-sm text-foreground">
                  ¡Voten quién creen que es el impostor!
                </p>
              </div>
            </div>

            {/* Show Results Button */}
            <Button
              onClick={onShowResults}
              className="w-full py-6 text-lg font-display gradient-violet-blue hover:opacity-90 transition-all shadow-glow-violet tracking-wider"
            >
              <Eye className="w-5 h-5 mr-2" />
              MOSTRAR RESULTADOS
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
