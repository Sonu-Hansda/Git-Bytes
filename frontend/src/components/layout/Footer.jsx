import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#121212] border-t-4 border-[#00FF9C] pt-12 pb-8 font-mono">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-[#00FF9C] p-2 neo-border mr-3">
              <i className="fas fa-shield-alt text-[#121212] text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-widest">CyberShield</h3>
          </div>
          <p className="text-[#00FF9C] mb-6 font-bold bg-[#1A1A1A] p-3 neo-border inline-block">
            Advanced web security scanning based on OWASP standards.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] text-[#00FF9C] neo-border hover:bg-[#00FF9C] hover:text-[#121212] transition-colors shadow-[2px_2px_0_0_#00FF9C]">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] text-[#00FF9C] neo-border hover:bg-[#00FF9C] hover:text-[#121212] transition-colors shadow-[2px_2px_0_0_#00FF9C]">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] text-[#00FF9C] neo-border hover:bg-[#00FF9C] hover:text-[#121212] transition-colors shadow-[2px_2px_0_0_#00FF9C]">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t-2 border-[#00FF9C] flex justify-between items-center text-sm font-bold max-w-4xl mx-auto">
          <p className="text-gray-400">© 2026 Git Bytes. All rights reserved.</p>
          <div className="text-[#00FF9C] bg-[#1A1A1A] px-2 py-1 neo-border shadow-[2px_2px_0_0_#00FF9C]">
            > STATUS: ONLINE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
