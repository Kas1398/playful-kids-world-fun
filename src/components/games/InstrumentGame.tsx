
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface InstrumentGameProps {
  onCorrect: () => void;
  onWrong: () => void;
}

const InstrumentGame = ({ onCorrect, onWrong }: InstrumentGameProps) => {
  const instruments = [
    { name: 'Piano', emoji: '🎹', sound: 'Ding dong' },
    { name: 'Guitar', emoji: '🎸', sound: 'Strum strum' },
    { name: 'Drums', emoji: '🥁', sound: 'Boom boom' },
    { name: 'Violin', emoji: '🎻', sound: 'La la la' },
    { name: 'Trumpet', emoji: '🎺', sound: 'Ta ta ta' },
    { name: 'Flute', emoji: '🪈', sound: 'Toot toot' }
  ];

  const [currentInstrument, setCurrentInstrument] = useState(instruments[0]);
  const [options, setOptions] = useState<typeof instruments>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const generateQuestion = () => {
    const randomInstrument = instruments[Math.floor(Math.random() * instruments.length)];
    const wrongOptions = instruments.filter(i => i.name !== randomInstrument.name);
    const shuffledWrong = wrongOptions.sort(() => Math.random() - 0.5).slice(0, 2);
    const allOptions = [randomInstrument, ...shuffledWrong].sort(() => Math.random() - 0.5);
    
    setCurrentInstrument(randomInstrument);
    setOptions(allOptions);
    setIsCorrect(false);
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleAnswer = (selectedInstrument: typeof instruments[0]) => {
    if (selectedInstrument.name === currentInstrument.name) {
      setIsCorrect(true);
      onCorrect();
      setTimeout(() => {
        generateQuestion();
      }, 2000);
    } else {
      onWrong();
    }
  };

  return (
    <div className="text-center">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-purple-600 mb-6">
          What Instrument Is This? 🎼
        </h2>
        
        <div className="mb-8">
          <div className="text-8xl mb-4 bounce-gentle">{currentInstrument.emoji}</div>
          <div className="text-2xl text-purple-600 font-semibold">
            This instrument sounds like: "{currentInstrument.sound}!"
          </div>
        </div>
        
        {isCorrect && (
          <div className="text-4xl text-green-600 font-bold mb-4 bounce-gentle">
            ✅ Fantastic! You're a music star! 🌟
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
        {options.map((instrument, index) => (
          <Button
            key={index}
            onClick={() => handleAnswer(instrument)}
            className="text-xl font-bold py-6 rounded-2xl bg-gradient-to-r from-purple-400 to-indigo-500 hover:from-purple-500 hover:to-indigo-600 text-white shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
            disabled={isCorrect}
          >
            {instrument.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default InstrumentGame;
