import React from 'react';

const HowItWorks = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-20 font-mono">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-16 text-white border-b-4 border-[#00FF9C] inline-block pb-2 px-4 md:px-8 uppercase tracking-widest break-words">
          How_It_Works
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="neo-card p-6 md:p-8 hover:-translate-y-2 transition-transform">
          <div className="w-16 h-16 border-4 border-[#00FF9C] flex items-center justify-center mb-6 bg-[#121212]">
            <i className="fas fa-terminal text-[#00FF9C] text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[#00FF9C]">1_TARGET</h3>
          <p className="text-gray-300 border-l-2 border-[#00FF9C] pl-4">
            Provide your website address and select which vulnerabilities you want to scan for.
          </p>
        </div>
        
        <div className="neo-card p-8 hover:-translate-y-2 transition-transform">
          <div className="w-16 h-16 border-4 border-[#00FF9C] flex items-center justify-center mb-6 bg-[#121212]">
            <i className="fas fa-crosshairs text-[#00FF9C] text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[#00FF9C]">2_ATTACK</h3>
           
          <p className="text-gray-300 border-l-2 border-[#00FF9C] pl-4">
            Our system performs non-invasive tests to identify security issues based on OWASP guidelines.
          </p>
        </div>
        
        <div className="neo-card p-8 hover:-translate-y-2 transition-transform">
          <div className="w-16 h-16 border-4 border-[#00FF9C] flex items-center justify-center mb-6 bg-[#121212]">
            <i className="fas fa-file-code text-[#00FF9C] text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[#00FF9C]">3_REPORT</h3>
          <p className="text-gray-300 border-l-2 border-[#00FF9C] pl-4">
            Receive a comprehensive security report with actionable recommendations to fix vulnerabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
