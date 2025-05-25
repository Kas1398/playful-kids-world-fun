
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface ColorGameProps {
  onCorrect: () => void;
  onWrong: () => void;
}

const ColorGame = ({ onCorrect, onWrong }: ColorGameProps) => {
  const colors = [
    { name: 'Red', hex: '#FF6B6B', emoji: '🔴' },
    { name: 'Blue', hex: '#4ECDC4', emoji: '🔵' },
    { name: 'Yellow', hex: '#FFE66D', emoji: '🟡' },
    { name: 'Green', hex: '#95E1D3', emoji: '🟢' },
    { name: 'Purple', hex: '#A8E6CF', emoji: '🟣' },
    { name: 'Orange', hex: '#FFB74D', emoji: '🟠' }
  ];

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [options, setOptions] = useState<typeof colors>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const generateQuestion = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const wrongOptions = colors.filter(c => c.name !== randomColor.name);
    const shuffledWrong = wrongOptions.sort(() => Math.random() - 0.5).slice(0, 2);
    const allOptions = [randomColor, ...shuffledWrong].sort(() => Math.random() - 0.5);
    
    setCurrentColor(randomColor);
    setOptions(allOptions);
    setIsCorrect(false);
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleAnswer = (selectedColor: typeof colors[0]) => {
    if (selectedColor.name === currentColor.name) {
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
          What Color Is This? 🌈
        </h2>
        
        <div className="mb-8">
          <div 
            className="w-32 h-32 mx-auto rounded-full shadow-2xl bounce-gentle border-8 border-white"
            style={{ backgroundColor: currentColor.hex }}
          />
          <div className="text-6xl mt-4">{currentColor.emoji}</div>
        </div>
        
        {isCorrect && (
          <div className="text-4xl text-green-600 font-bold mb-4 bounce-gentle">
            ✅ Perfect! You know your colors! 🎨
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
        {options.map((color, index) => (
          <Button
            key={index}
            onClick={() => handleAnswer(color)}
            className="text-xl font-bold py-6 rounded-2xl bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
            disabled={isCorrect}
          >
            {color.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ColorGame;
