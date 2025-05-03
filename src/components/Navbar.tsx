import React from 'react';
import { Link } from 'react-router-dom';
import { Type, Github, Linkedin } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors">
          <Type size={24} />
          <span className="font-bold text-xl">StyleText</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-slate-600 hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <Link to="/editor" className="text-slate-600 hover:text-indigo-600 transition-colors">
            Editor
          </Link>
          <a 
            href="https://github.com/trivedikavya" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/trivedikavya" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;