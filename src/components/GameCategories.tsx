
import { GameType } from '../pages/Index';

interface GameCategoriesProps {
  onGameSelect: (game: GameType) => void;
}

const GameCategories = ({ onGameSelect }: GameCategoriesProps) => {
  const games = [
    {
      id: 'math' as GameType,
      title: 'Simple Math',
      emoji: '🧮',
      color: 'from-blue-500 to-blue-600',
      description: 'Count and add with fun!'
    },
    {
      id: 'colors' as GameType,
      title: 'Colour Fun',
      emoji: '🎨',
      color: 'from-red-500 to-red-600',
      description: 'Learn beautiful colors!'
    },
    {
      id: 'animals' as GameType,
      title: 'Animal Friends',
      emoji: '🐘',
      color: 'from-green-500 to-green-600',
      description: 'Meet amazing animals!'
    },
    {
      id: 'instruments' as GameType,
      title: 'Music Magic',
      emoji: '🎺',
      color: 'from-yellow-500 to-yellow-600',
      description: 'Discover musical sounds!'
    },
    {
      id: 'dance' as GameType,
      title: 'Dance Party',
      emoji: '💃',
      color: 'from-orange-500 to-orange-600',
      description: 'Dance and move to music!'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {games.map((game) => (
        <div
          key={game.id}
          onClick={() => onGameSelect(game.id)}
          className={`game-card cursor-pointer bg-gradient-to-br ${game.color} rounded-3xl p-8 text-center shadow-2xl min-h-[200px] flex flex-col justify-center items-center hover:shadow-3xl`}
        >
          <div className="text-6xl mb-4 bounce-gentle">{game.emoji}</div>
          <h3 className="text-2xl font-bold text-white mb-2">{game.title}</h3>
          <p className="text-white/90 text-lg">{game.description}</p>
          <div className="mt-4 bg-white/20 rounded-full px-4 py-2 text-white font-semibold">
            Tap to Play! 🎯
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameCategories;
