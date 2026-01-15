import { useState } from 'react';
import { Plus, X, Users, Play, Trash2 } from 'lucide-react';
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
    <div className="min-h-screen gradient-parchment flex flex-col">
      {/* Header */}
      <header className="gradient-sacred p-6 shadow-elevated">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-primary-foreground mb-1">
            El Impostor Cristiano
          </h1>
          <p className="text-primary-foreground/80 text-sm font-body">
            Prepara tu partida
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 max-w-md mx-auto w-full">
        {/* Add Player Section */}
        <div className="bg-card rounded-lg shadow-card p-4 mb-4 animate-fade-in">
          <label className="block font-display text-sm font-semibold text-foreground mb-2">
            Agregar Jugador
          </label>
          <div className="flex gap-2">
            <Input
              type="text"
              value={newPlayerName}
              onChange={(e) => setNewPlayerName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Nombre del jugador"
              className="flex-1 font-body"
              maxLength={20}
            />
            <Button
              onClick={handleAddPlayer}
              disabled={!newPlayerName.trim()}
              className="gradient-sacred hover:opacity-90 transition-opacity"
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Players List */}
        <div className="bg-card rounded-lg shadow-card p-4 mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-display font-semibold text-foreground">
                Jugadores ({players.length})
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
            <p className="text-muted-foreground text-center py-8 font-body italic">
              Agrega al menos 3 jugadores para comenzar
            </p>
          ) : (
            <ul className="space-y-2 max-h-[40vh] overflow-y-auto">
              {players.map((player, index) => (
                <li
                  key={player.id}
                  className="flex items-center justify-between bg-secondary/50 rounded-md px-3 py-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="font-body text-foreground">{player.name}</span>
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
          <p className="text-center text-amber-600 text-sm mb-4 font-body animate-fade-in">
            Necesitas al menos {3 - players.length} jugador{3 - players.length !== 1 ? 'es' : ''} más
          </p>
        )}
      </main>

      {/* Start Button */}
      <footer className="p-4 pb-8 max-w-md mx-auto w-full">
        <Button
          onClick={onStartGame}
          disabled={!canStart}
          className="w-full py-6 text-lg font-display gradient-gold text-foreground shadow-elevated hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed animate-pulse-glow"
        >
          <Play className="w-6 h-6 mr-2" />
          Iniciar Partida
        </Button>
      </footer>
    </div>
  );
}
