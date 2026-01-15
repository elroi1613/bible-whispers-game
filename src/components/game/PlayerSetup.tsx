import { useState } from 'react';
import { Plus, X, Users, Play, Trash2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { Player } from '@/hooks/useGameState';

interface PlayerSetupProps {
  players: Player[];
  onAddPlayer: (name: string) => void;
  onRemovePlayer: (id: string) => void;
  onClearPlayers: () => void;
  onStartGame: () => void;
}

export function PlayerSetup({
  players,
  onAddPlayer,
  onRemovePlayer,
  onClearPlayers,
  onStartGame,
}: PlayerSetupProps) {
  const [newPlayerName, setNewPlayerName] = useState('');

  const handleAddPlayer = () => {
    if (newPlayerName.trim()) {
      onAddPlayer(newPlayerName);
      setNewPlayerName('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddPlayer();
    }
  };

  const canStart = players.length >= 3;

  return (
    <div className="min-h-screen gradient-dark flex flex-col relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-neon-violet/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/2 w-60 h-60 bg-neon-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative gradient-neon p-6 shadow-elevated">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            <h1 className="font-display text-2xl font-bold text-primary-foreground tracking-wider neon-text-glow">
              EL IMPOSTOR CRISTIANO
            </h1>
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
          </div>
          <p className="text-primary-foreground/80 text-sm font-body tracking-wide">
            Prepara tu partida
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 max-w-md mx-auto w-full relative z-10">
        {/* Add Player Section */}
        <div className="gradient-card rounded-xl shadow-card p-4 mb-4 animate-fade-in border border-primary/30">
          <label className="block font-display text-sm font-semibold text-accent mb-2 tracking-wide">
            AGREGAR JUGADOR
          </label>
          <div className="flex gap-2">
            <Input
              type="text"
              value={newPlayerName}
              onChange={(e) => setNewPlayerName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Nombre del jugador"
              className="flex-1 font-body bg-muted/50 border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground"
              maxLength={20}
            />
            <Button
              onClick={handleAddPlayer}
              disabled={!newPlayerName.trim()}
              className="gradient-violet-blue hover:opacity-90 transition-opacity shadow-glow-violet"
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Players List */}
        <div className="gradient-card rounded-xl shadow-card p-4 mb-4 animate-fade-in border border-primary/30" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-neon-violet" />
              <span className="font-display font-semibold text-foreground tracking-wide">
                JUGADORES ({players.length})
              </span>
            </div>
            {players.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearPlayers}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Limpiar
              </Button>
            )}
          </div>

          {players.length === 0 ? (
            <p className="text-muted-foreground text-center py-8 font-body">
              Agrega al menos 3 jugadores para comenzar
            </p>
          ) : (
            <ul className="space-y-2 max-h-[40vh] overflow-y-auto">
              {players.map((player, index) => (
                <li
                  key={player.id}
                  className="flex items-center justify-between bg-secondary/30 rounded-lg px-4 py-3 animate-scale-in border border-primary/20 hover:border-primary/40 transition-colors"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="font-body text-foreground font-medium">{player.name}</span>
                  <button
                    onClick={() => onRemovePlayer(player.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors p-1"
                    aria-label={`Eliminar ${player.name}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Minimum players warning */}
        {players.length > 0 && players.length < 3 && (
          <p className="text-center text-accent text-sm mb-4 font-body animate-fade-in">
            Necesitas al menos {3 - players.length} jugador{3 - players.length !== 1 ? 'es' : ''} más
          </p>
        )}
      </main>

      {/* Start Button */}
      <footer className="p-4 pb-8 max-w-md mx-auto w-full relative z-10 flex flex-col gap-4">
        <Button
          onClick={onStartGame}
          disabled={!canStart}
          className="w-full py-6 text-lg font-display gradient-gold text-accent-foreground shadow-glow-gold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed animate-pulse-gold tracking-wider"
        >
          <Play className="w-6 h-6 mr-2" />
          INICIAR PARTIDA
        </Button>

        <div className="text-center space-y-1">
          <p className="text-xs text-muted-foreground font-body">
            Powered by <a href="https://labs.elroi.cloud" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ELROI Labs</a>
          </p>
          <p className="text-xs text-muted-foreground font-body">
            <a href="https://elroi.cloud" target="_blank" rel="noopener noreferrer" className="text-neon-violet hover:underline">elroi.cloud</a> - Una comunidad cristiana
          </p>
        </div>
      </footer>
    </div>
  );
}
