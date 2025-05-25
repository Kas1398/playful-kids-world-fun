
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface DanceGameProps {
  onCorrect: () => void;
  onWrong: () => void;
}

const DanceGame = ({ onCorrect, onWrong }: DanceGameProps) => {
  const dances = [
    { name: 'Wave Hands', emoji: '🙋', instruction: 'Wave your hands up high!' },
    { name: 'Clap Hands', emoji: '👏', instruction: 'Clap clap clap!' },
    { name: 'Stomp Feet', emoji: '🦶', instruction: 'Stomp your feet!' },
    { name: 'Spin Around', emoji: '💃', instruction: 'Spin like a dancer!' },
    { name: 'Jump Up', emoji: '🦘', instruction: 'Jump up and down!' },
    { name: 'Touch Nose', emoji: '👃', instruction: 'Touch your nose!' }
  ];

  const [currentDance, setCurrentDance] = useState(dances[0]);
  const [hasPerformed, setHasPerformed] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const generateDance = () => {
    const randomDance = dances[Math.floor(Math.random() * dances.length)];
    setCurrentDance(randomDance);
    setHasPerformed(false);
    setShowNext(false);
  };

  useEffect(() => {
    generateDance();
  }, []);

  const handlePerformed = () => {
    setHasPerformed(true);
    setShowNext(true);
    onCorrect();
  };

  const handleNextDance = () => {
    generateDance();
  };

  return (
    <div className="text-center">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-purple-600 mb-6">
          Let's Dance Together! 💃🕺
        </h2>
        
        <div className="mb-8">
          <div className="text-8xl mb-4 bounce-gentle">{currentDance.emoji}</div>
          <div className="text-3xl text-purple-600 font-bold mb-6">
            {currentDance.instruction}
          </div>
        </div>
        
        {hasPerformed && (
          <div className="text-4xl text-green-600 font-bold mb-4 bounce-gentle">
            ✅ Amazing dancing! You're a superstar! ⭐
          </div>
        )}
      </div>

      <div className="space-y-4 max-w-md mx-auto">
        {!hasPerformed ? (
          <Button
            onClick={handlePerformed}
            className="w-full text-2xl font-bold py-8 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 text-white shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
          >
            I Did It! 🎉
          </Button>
        ) : (
          <Button
            onClick={handleNextDance}
            className="w-full text-2xl font-bold py-8 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Next Dance! 🎵
          </Button>
        )}
      </div>

      <div className="mt-8 text-lg text-purple-600">
        🎶 Keep moving to the beat! 🎶
      </div>
    </div>
  );
};

export default DanceGame;
