import { useState, useEffect, useCallback } from 'react';
import { getRandomWord } from '@/data/biblicalWords';

export interface Player {
  id: string;
  name: string;
}

export interface GameRound {
  word: string;
  category: string;
  impostorId: string;
  turnOrder: string[];
  currentTurnIndex: number;
  starterPlayerId: string;
  revealedPlayers: string[];
  isRoundComplete: boolean;
  showingResults: boolean;
}

export interface GameState {
  players: Player[];
  currentRound: GameRound | null;
  gamePhase: 'setup' | 'playing' | 'results';
}

const STORAGE_KEY = 'impostor-cristiano-game';

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return { players: [], currentRound: null, gamePhase: 'setup' };
      }
    }
    return { players: [], currentRound: null, gamePhase: 'setup' };
  });

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
  }, [gameState]);

  const addPlayer = useCallback((name: string) => {
    if (name.trim() && gameState.players.length < 20) {
      const newPlayer: Player = {
        id: crypto.randomUUID(),
        name: name.trim(),
      };
      setGameState(prev => ({
        ...prev,
        players: [...prev.players, newPlayer],
      }));
    }
  }, [gameState.players.length]);

  const removePlayer = useCallback((playerId: string) => {
    setGameState(prev => ({
      ...prev,
      players: prev.players.filter(p => p.id !== playerId),
    }));
  }, []);

  const clearPlayers = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      players: [],
    }));
  }, []);

  const startRound = useCallback(() => {
    if (gameState.players.length < 3) return;

    const { word, category } = getRandomWord();
    const shuffledPlayers = [...gameState.players].sort(() => Math.random() - 0.5);
    const impostorIndex = Math.floor(Math.random() * shuffledPlayers.length);
    const starterIndex = Math.floor(Math.random() * shuffledPlayers.length);

    const newRound: GameRound = {
      word,
      category,
      impostorId: shuffledPlayers[impostorIndex].id,
      turnOrder: shuffledPlayers.map(p => p.id),
      currentTurnIndex: 0,
      starterPlayerId: shuffledPlayers[starterIndex].id,
      revealedPlayers: [],
      isRoundComplete: false,
      showingResults: false,
    };

    setGameState(prev => ({
      ...prev,
      currentRound: newRound,
      gamePhase: 'playing',
    }));
  }, [gameState.players]);

  const revealForCurrentPlayer = useCallback(() => {
    if (!gameState.currentRound) return;

    const currentPlayerId = gameState.currentRound.turnOrder[gameState.currentRound.currentTurnIndex];
    
    setGameState(prev => {
      if (!prev.currentRound) return prev;
      
      const newRevealedPlayers = [...prev.currentRound.revealedPlayers, currentPlayerId];
      const isComplete = newRevealedPlayers.length === prev.players.length;
      
      return {
        ...prev,
        currentRound: {
          ...prev.currentRound,
          revealedPlayers: newRevealedPlayers,
          isRoundComplete: isComplete,
        },
      };
    });
  }, [gameState.currentRound]);

  const nextTurn = useCallback(() => {
    setGameState(prev => {
      if (!prev.currentRound) return prev;
      
      return {
        ...prev,
        currentRound: {
          ...prev.currentRound,
          currentTurnIndex: prev.currentRound.currentTurnIndex + 1,
        },
      };
    });
  }, []);

  const showResults = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      currentRound: prev.currentRound ? {
        ...prev.currentRound,
        showingResults: true,
      } : null,
      gamePhase: 'results',
    }));
  }, []);

  const resetToSetup = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      currentRound: null,
      gamePhase: 'setup',
    }));
  }, []);

  const getCurrentPlayer = useCallback(() => {
    if (!gameState.currentRound) return null;
    const playerId = gameState.currentRound.turnOrder[gameState.currentRound.currentTurnIndex];
    return gameState.players.find(p => p.id === playerId) || null;
  }, [gameState.currentRound, gameState.players]);

  const isCurrentPlayerImpostor = useCallback(() => {
    if (!gameState.currentRound) return false;
    const currentPlayerId = gameState.currentRound.turnOrder[gameState.currentRound.currentTurnIndex];
    return currentPlayerId === gameState.currentRound.impostorId;
  }, [gameState.currentRound]);

  const getImpostorName = useCallback(() => {
    if (!gameState.currentRound) return '';
    const impostor = gameState.players.find(p => p.id === gameState.currentRound?.impostorId);
    return impostor?.name || '';
  }, [gameState.currentRound, gameState.players]);

  const getStarterPlayer = useCallback(() => {
    if (!gameState.currentRound) return null;
    return gameState.players.find(p => p.id === gameState.currentRound?.starterPlayerId) || null;
  }, [gameState.currentRound, gameState.players]);

  return {
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
  };
}
