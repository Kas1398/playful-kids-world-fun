
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface MathGameProps {
  onCorrect: () => void;
  onWrong: () => void;
}

const MathGame = ({ onCorrect, onWrong }: MathGameProps) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [options, setOptions] = useState<number[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const generateProblem = () => {
    const n1 = Math.floor(Math.random() * 5) + 1;
    const n2 = Math.floor(Math.random() * 5) + 1;
    const correctAnswer = n1 + n2;
    
    const wrongOptions = [
      correctAnswer + 1,
      correctAnswer - 1,
      correctAnswer + 2
    ].filter(opt => opt > 0);
    
    const allOptions = [correctAnswer, ...wrongOptions.slice(0, 2)]
      .sort(() => Math.random() - 0.5);
    
    setNum1(n1);
    setNum2(n2);
    setAnswer(correctAnswer);
    setOptions(allOptions);
    setIsCorrect(false);
  };

  useEffect(() => {
    generateProblem();
  }, []);

  const handleAnswer = (selectedAnswer: number) => {
    if (selectedAnswer === answer) {
      setIsCorrect(true);
      onCorrect();
      setTimeout(() => {
        generateProblem();
      }, 2000);
    } else {
      onWrong();
    }
  };

  return (
    <div className="text-center">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-purple-600 mb-6">
          Let's Add Numbers! 🔢
        </h2>
        
        <div className="text-6xl font-bold text-purple-700 mb-8">
          {num1} + {num2} = ?
        </div>
        
        {isCorrect && (
          <div className="text-4xl text-green-600 font-bold mb-4 bounce-gentle">
            ✅ Correct! Great job! 🎉
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleAnswer(option)}
            className="text-3xl font-bold py-8 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
            disabled={isCorrect}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MathGame;
