
import { useState, useEffect } from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import GameCategories from '../components/GameCategories';
import GameScreen from '../components/GameScreen';
import Footer from '../components/Footer';
import { speakText } from '../utils/tts';

export type GameType = 'math' | 'colors' | 'animals' | 'instruments' | 'dance';

const Index = () => {
  const [childName, setChildName] = useState<string>('');
  const [currentGame, setCurrentGame] = useState<GameType | null>(null);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    // Welcome message when app loads
    speakText("Welcome to Christian's Playground! Please enter your name to start playing.");
  }, []);

  const handleNameSubmitted = (name: string) => {
    setChildName(name);
    setShowCategories(true);
    speakText(`Welcome, ${name}! Let's play!`);
  };

  const handleGameSelect = (game: GameType) => {
    setCurrentGame(game);
  };

  const handleBackToCategories = () => {
    setCurrentGame(null);
  };

  if (!showCategories) {
    return <WelcomeScreen onNameSubmit={handleNameSubmitted} />;
  }

  if (currentGame) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
        <GameScreen 
          gameType={currentGame} 
          childName={childName} 
          onBack={handleBackToCategories}
        />
        <Footer />
        <div className="watermark">Christian's Playground © Kassahun.H</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bounce-gentle">
            Welcome, {childName}! Let's play! 🎉
          </h1>
        </div>
        <GameCategories onGameSelect={handleGameSelect} />
      </div>
      <Footer />
      <div className="watermark">Christian's Playground © Kassahun.H</div>
    </div>
  );
};

export default Index;
