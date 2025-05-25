
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { GameType } from '../pages/Index';
import { speakText } from '../utils/tts';
import MathGame from './games/MathGame';
import ColorGame from './games/ColorGame';
import AnimalGame from './games/AnimalGame';
import InstrumentGame from './games/InstrumentGame';
import DanceGame from './games/DanceGame';

interface GameScreenProps {
  gameType: GameType;
  childName: string;
  onBack: () => void;
}

const GameScreen = ({ gameType, childName, onBack }: GameScreenProps) => {
  const [score, setScore] = useState(0);

  const gameConfig = {
    math: { title: 'Simple Math Fun', emoji: '🧮', color: 'from-green-400 to-emerald-500' },
    colors: { title: 'Colour Adventure', emoji: '🎨', color: 'from-pink-400 to-rose-500' },
    animals: { title: 'Animal Kingdom', emoji: '🐶', color: 'from-yellow-400 to-orange-500' },
    instruments: { title: 'Music World', emoji: '🎻', color: 'from-purple-400 to-indigo-500' },
    dance: { title: 'Dance Party', emoji: '🎵', color: 'from-blue-400 to-cyan-500' }
  };

  const config = gameConfig[gameType];

  useEffect(() => {
    speakText(`Let's play ${config.title}! Have fun, ${childName}!`);
  }, [gameType, childName, config.title]);

  const handleCorrectAnswer = () => {
    const encouragements = [
      `${childName}, You're amazing!`,
      `${childName}, Wonderful!`,
      `${childName}, Betam gobez!`,
      `${childName}, Good job!`,
      `${childName}, Awesome!`
    ];
    const message = encouragements[Math.floor(Math.random() * encouragements.length)];
    speakText(message);
    setScore(prev => prev + 1);
  };

  const handleWrongAnswer = () => {
    const gentle = ['Try again!', 'Almost there…'];
    const message = gentle[Math.floor(Math.random() * gentle.length)];
    speakText(message);
  };

  const renderGame = () => {
    switch (gameType) {
      case 'math':
        return <MathGame onCorrect={handleCorrectAnswer} onWrong={handleWrongAnswer} />;
      case 'colors':
        return <ColorGame onCorrect={handleCorrectAnswer} onWrong={handleWrongAnswer} />;
      case 'animals':
        return <AnimalGame onCorrect={handleCorrectAnswer} onWrong={handleWrongAnswer} />;
      case 'instruments':
        return <InstrumentGame onCorrect={handleCorrectAnswer} onWrong={handleWrongAnswer} />;
      case 'dance':
        return <DanceGame onCorrect={handleCorrectAnswer} onWrong={handleWrongAnswer} />;
      default:
        return <div>Game not found</div>;
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Button
            onClick={onBack}
            className="bg-white/80 text-purple-600 hover:bg-white rounded-2xl px-6 py-3 font-bold text-lg shadow-lg"
          >
            ← Back to Games
          </Button>
          <div className="bg-white/80 rounded-2xl px-6 py-3 shadow-lg">
            <span className="text-purple-600 font-bold text-lg">Score: {score} ⭐</span>
          </div>
        </div>

        <div className={`bg-gradient-to-br ${config.color} rounded-3xl p-8 mb-8 text-center shadow-2xl`}>
          <div className="text-6xl mb-4 bounce-gentle">{config.emoji}</div>
          <h1 className="text-4xl font-bold text-white mb-2">{config.title}</h1>
          <p className="text-white/90 text-xl">Let's have fun, {childName}! 🌟</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          {renderGame()}
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
