
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { speakText } from '../utils/tts';

interface WelcomeScreenProps {
  onNameSubmit: (name: string) => void;
}

const WelcomeScreen = ({ onNameSubmit }: WelcomeScreenProps) => {
  const [name, setName] = useState('');
  const [isWiggling, setIsWiggling] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name.trim());
    } else {
      setIsWiggling(true);
      speakText("Please enter your name first!");
      setTimeout(() => setIsWiggling(false), 1000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-green-200 to-yellow-200 flex items-center justify-center p-4">
      <div className="text-center max-w-md w-full">
        <div className="bounce-gentle mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-600 to-green-600 mb-4">
            🎪 Christian's Playground 🎨
          </h1>
          <div className="text-6xl mb-6">🌟✨🎈</div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl pulse-rainbow">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">
            Hi there, little explorer! 👋
          </h2>
          <p className="text-xl text-blue-600 mb-6">
            What's your name? I can't wait to play with you! 🎮
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className={`transition-all duration-300 ${isWiggling ? 'wiggle' : ''}`}>
              <Input
                type="text"
                value={name}
                onChange={handleInputChange}
                placeholder="Type your name here..."
                className="text-2xl p-6 rounded-2xl border-4 border-blue-300 focus:border-green-400 text-center font-semibold text-blue-700"
                autoFocus
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full text-2xl py-6 px-8 rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Let's Play! 🚀
            </Button>
          </form>
        </div>

        <div className="mt-8 text-lg text-blue-600">
          🎵 Get ready for fun games and adventures! 🌟
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
