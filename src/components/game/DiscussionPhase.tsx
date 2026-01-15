import { MessageCircle, Eye, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DiscussionPhaseProps {
  starterPlayerName: string;
  onShowResults: () => void;
}

export function DiscussionPhase({ starterPlayerName, onShowResults }: DiscussionPhaseProps) {
  return (
    <div className="min-h-screen gradient-parchment flex flex-col">
      {/* Header */}
      <header className="gradient-sacred p-6 shadow-elevated">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-primary-foreground mb-1">
            ¡Ronda de Discusión!
          </h1>
          <p className="text-primary-foreground/80 text-sm font-body">
            Todos han visto su palabra
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm animate-scale-in">
          <div className="bg-card rounded-2xl shadow-elevated p-8 text-center border-2 border-primary/20">
            {/* Icon */}
            <div className="w-24 h-24 gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <MessageCircle className="w-12 h-12 text-foreground" />
            </div>

            {/* Starter Info */}
            <div className="bg-secondary/50 rounded-xl p-4 mb-6">
              <p className="font-body text-sm text-muted-foreground mb-2">
                Comienza a describir:
              </p>
              <div className="flex items-center justify-center gap-2">
                <UserCircle className="w-6 h-6 text-primary" />
                <span className="font-display text-xl font-bold text-foreground">
                  {starterPlayerName}
                </span>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-3 mb-6 text-left">
              <p className="font-body text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">1.</span> Cada jugador describe la palabra sin decirla
              </p>
              <p className="font-body text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">2.</span> El impostor debe fingir conocerla
              </p>
              <p className="font-body text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">3.</span> ¡Voten quién creen que es el impostor!
              </p>
            </div>

            {/* Show Results Button */}
            <Button
              onClick={onShowResults}
              className="w-full py-6 text-lg font-display gradient-sacred hover:opacity-90 transition-all"
            >
              <Eye className="w-5 h-5 mr-2" />
              Mostrar Resultados
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
