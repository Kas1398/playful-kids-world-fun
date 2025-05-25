
import { Facebook, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t-4 border-purple-200 py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        {/* Buy Me a Coffee Section */}
        <div className="mb-6">
          <a
            href="https://paypal.me/kassahun1398?country.x=FI&locale.x=fi_FI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            ☕ Buy Me a Coffee (Support the App!)
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.facebook.com/kasu.han"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transform transition-all duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/kassahun-f-01390369/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transform transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com/Kas1398"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transform transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
          <a
            href="https://kassahun-3d-portfolio.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 transform transition-all duration-300 hover:scale-110 text-2xl font-bold"
            aria-label="Portfolio"
          >
            🧑‍🎨
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-purple-600 font-semibold text-lg">
          Made with ❤️ by Kassahun.H | F
        </div>
      </div>
    </footer>
  );
};

export default Footer;
