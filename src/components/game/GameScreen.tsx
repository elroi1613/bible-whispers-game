import { useGameState } from '@/hooks/useGameState';
import { PlayerSetup } from './PlayerSetup';
import { WordReveal } from './WordReveal';
import { DiscussionPhase } from './DiscussionPhase';
import { Results } from './Results';

export function GameScreen() {
  const {
    gameState,
    addPlayer,
    removePlayer,
    clearPlayers,
    startRound,
    revealForCurrentPlayer,
    nextTurn,
    showResults,
    resetToSetup,
    getCurrentPlayer,
    isCurrentPlayerImpostor,
    getImpostorName,
    getStarterPlayer,
  } = useGameState();

  // Setup phase
  if (gameState.gamePhase === 'setup' || !gameState.currentRound) {
    return (
      <PlayerSetup
        players={gameState.players}
        onAddPlayer={addPlayer}
        onRemovePlayer={removePlayer}
        onClearPlayers={clearPlayers}
        onStartGame={startRound}
      />
    );
  }

  const { currentRound } = gameState;
  const currentPlayer = getCurrentPlayer();

  // Results phase
  if (gameState.gamePhase === 'results' || currentRound.showingResults) {
    return (
      <Results
        word={currentRound.word}
        category={currentRound.category}
        impostorName={getImpostorName()}
        onNewRound={startRound}
        onExit={resetToSetup}
      />
    );
  }

  // Discussion phase (all players have seen their word)
  if (currentRound.isRoundComplete) {
    const starterPlayer = getStarterPlayer();
    return (
      <DiscussionPhase
        starterPlayerName={starterPlayer?.name || ''}
        onShowResults={showResults}
      />
    );
  }

  // Word reveal phase
  if (currentPlayer) {
    const hasRevealed = currentRound.revealedPlayers.includes(currentPlayer.id);
    
    const handleNext = () => {
      if (!hasRevealed) {
        revealForCurrentPlayer();
      }
      // Move to next turn if there are more players
      if (currentRound.currentTurnIndex < gameState.players.length - 1) {
        nextTurn();
      }
    };

    return (
      <WordReveal
        playerName={currentPlayer.name}
        word={currentRound.word}
        category={currentRound.category}
        isImpostor={isCurrentPlayerImpostor()}
        turnNumber={currentRound.currentTurnIndex + 1}
        totalPlayers={gameState.players.length}
        onNext={handleNext}
      />
    );
  }

  return null;
}
