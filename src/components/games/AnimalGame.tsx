
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface AnimalGameProps {
  onCorrect: () => void;
  onWrong: () => void;
}

const AnimalGame = ({ onCorrect, onWrong }: AnimalGameProps) => {
  const animals = [
    { name: 'Cat', emoji: '🐱', sound: 'Meow' },
    { name: 'Dog', emoji: '🐶', sound: 'Woof' },
    { name: 'Cow', emoji: '🐄', sound: 'Moo' },
    { name: 'Pig', emoji: '🐷', sound: 'Oink' },
    { name: 'Duck', emoji: '🦆', sound: 'Quack' },
    { name: 'Lion', emoji: '🦁', sound: 'Roar' }
  ];

  const [currentAnimal, setCurrentAnimal] = useState(animals[0]);
  const [options, setOptions] = useState<typeof animals>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const generateQuestion = () => {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const wrongOptions = animals.filter(a => a.name !== randomAnimal.name);
    const shuffledWrong = wrongOptions.sort(() => Math.random() - 0.5).slice(0, 2);
    const allOptions = [randomAnimal, ...shuffledWrong].sort(() => Math.random() - 0.5);
    
    setCurrentAnimal(randomAnimal);
    setOptions(allOptions);
    setIsCorrect(false);
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleAnswer = (selectedAnimal: typeof animals[0]) => {
    if (selectedAnimal.name === currentAnimal.name) {
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
          What Animal Is This? 🐾
        </h2>
        
        <div className="mb-8">
          <div className="text-8xl mb-4 bounce-gentle">{currentAnimal.emoji}</div>
          <div className="text-2xl text-purple-600 font-semibold">
            This animal says: "{currentAnimal.sound}!"
          </div>
        </div>
        
        {isCorrect && (
          <div className="text-4xl text-green-600 font-bold mb-4 bounce-gentle">
            ✅ Amazing! You know your animals! 🦋
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
        {options.map((animal, index) => (
          <Button
            key={index}
            onClick={() => handleAnswer(animal)}
            className="text-xl font-bold py-6 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
            disabled={isCorrect}
          >
            {animal.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AnimalGame;
