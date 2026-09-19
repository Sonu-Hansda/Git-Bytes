import React from 'react';

const OwaspInfo = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-16 neo-card bg-[#1A1A1A] font-mono mb-12 md:mb-20 max-w-6xl">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-10">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#00FF9C] uppercase tracking-widest break-words">> About OWASP</h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 border-l-4 border-[#00FF9C] pl-4 bg-[#121212] p-4 neo-border">
            The Open Web Application Security Project® (OWASP) is a nonprofit foundation that works to improve the security of software.
          </p>
          <p className="text-sm md:text-base text-gray-300 mb-6 bg-[#121212] p-4 neo-border">
            Our scanner is built on OWASP Top 10 principles, the standard awareness document for developers and web application security.
          </p>
          <a href="https://owasp.org/" target="_blank" rel="noopener noreferrer" className="neo-btn inline-block text-base md:text-xl w-full md:w-auto text-center">
            Learn more about OWASP <i className="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-[#121212] p-6 md:p-8 neo-border shadow-[4px_4px_0_0_#00FF9C] md:shadow-[8px_8px_0_0_#00FF9C]">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white break-words">> OWASP Top 10</h3>
            <ul className="space-y-3 md:space-y-4">
              {[
                'Broken Access Control',
                'Cryptographic Failures',
                'Injection',
                'Insecure Design',
                'Security Misconfiguration'
              ].map((item, index) => (
                <li key={index} className="flex items-start bg-[#1A1A1A] p-2 neo-border">
                  <i className="fas fa-terminal text-[#00FF9C] mt-1 mr-3"></i>
                  <span className="text-[#00FF9C] font-bold">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t-2 border-[#00FF9C]">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#00FF9C] animate-pulse mr-2 border-2 border-black"></div>
                <span className="text-sm text-gray-300 font-bold">Scanner initialized to check these patterns.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwaspInfo;
