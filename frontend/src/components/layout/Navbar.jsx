import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container mx-auto px-4 md:px-6 py-4 md:py-6 font-mono border-b-2 border-[#00FF9C]">
      <nav className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center">
            <i className="fas fa-shield-alt text-[#00FF9C] text-xl md:text-2xl mr-3"></i>
            <h1 className="text-xl md:text-2xl font-bold tracking-wider text-white neo-shadow-sm">
              <Link to="/">CyberShield</Link>
            </h1>
          </div>
          <button
            className="md:hidden text-[#00FF9C] text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-start md:items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-8 font-bold mt-6 md:mt-0 pb-4 md:pb-0`}>
          <a href="#how-it-works" className="text-gray-300 hover:text-[#00FF9C] transition-colors cursor-pointer md:hover:-translate-y-1 block">How It Works</a>
          <a href="https://owasp.org/projects/top-ten" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#00FF9C] transition-colors cursor-pointer md:hover:-translate-y-1 block">OWASP Top 10</a>
          <a href="https://github.com/Sonu-Hansda/Git-Bytes" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#00FF9C] transition-colors cursor-pointer md:hover:-translate-y-1 flex items-center">
            <i className="fab fa-github mr-2 text-xl"></i> GitHub
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
