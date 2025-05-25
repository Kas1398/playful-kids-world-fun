
import { Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/kasu.han',
      icon: '📘',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kassahun-f-01390369/',
      icon: '💼',
      color: 'from-blue-700 to-blue-800'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Kas1398',
      icon: '💻',
      color: 'from-gray-700 to-gray-800'
    },
    {
      name: 'Portfolio',
      url: 'https://kassahun-3d-portfolio.onrender.com/',
      icon: '🧑‍🎨',
      color: 'from-purple-600 to-purple-700'
    }
  ];

  return (
    <footer className="bg-white/90 backdrop-blur-sm mt-8 py-6">
      <div className="container mx-auto px-4">
        {/* Buy Me a Coffee Section */}
        <div className="text-center mb-6">
          <a
            href="https://paypal.me/kassahun1398?country.x=FI&locale.x=fi_FI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
          >
            ☕ Buy Me a Coffee
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 bg-gradient-to-r ${link.color} hover:opacity-80 text-white font-semibold py-2 px-4 rounded-full shadow-md transform transition-all duration-300 hover:scale-105`}
              title={link.name}
            >
              <span className="text-lg">{link.icon}</span>
              <span className="hidden sm:inline">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Made with Love */}
        <div className="text-center">
          <p className="text-gray-600 font-medium flex items-center justify-center gap-2">
            Made with <Heart className="text-red-500 fill-current" size={16} /> by Kassahun.H | F
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
