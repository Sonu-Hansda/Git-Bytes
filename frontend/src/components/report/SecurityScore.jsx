import React from 'react';

const SecurityScore = ({score}) => {
  return (
    <div className="bg-[#121212] neo-border p-6 mb-8 font-mono shadow-[6px_6px_0_0_#00FF9C]">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto mb-6 md:mb-0">
          <div className="text-center md:text-left mr-0 md:mr-8 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-[#00FF9C] uppercase tracking-widest">> Final_Score</h3>
            <p className="text-gray-400 text-sm mt-2 border-l-2 border-[#00FF9C] pl-2">Aggregate of all vulnerability vectors</p>
          </div>
          
          <div className="relative w-36 h-36 bg-[#1A1A1A] neo-border flex items-center justify-center rounded-full shadow-[0_0_15px_rgba(0,255,156,0.3)]">
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <span className="text-5xl font-bold text-white">{score ?? 7.5}</span>
              <span className="text-xl font-bold text-[#00FF9C]">/10</span>
            </div>
            {/* SVG Ring */}
            <svg viewBox="0 0 36 36" className="w-full h-full absolute -rotate-90">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#1A1A1A"
                strokeWidth="2"
                strokeDasharray="100, 100"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#00FF9C"
                strokeWidth="2"
                strokeDasharray={`${(score ?? 7.5) * 10}, 100`}
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>
        
        <div className="w-full md:w-auto bg-[#1A1A1A] p-4 neo-border">
          <h4 className="text-white font-bold mb-3 uppercase border-b-2 border-[#00FF9C] pb-1">Legend</h4>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center bg-[#121212] p-2 neo-border">
              <div className="w-4 h-4 bg-green-500 mr-3 border-2 border-black"></div>
              <span className="text-sm text-white font-bold uppercase">SAFE</span>
            </div>
            <div className="flex items-center bg-[#121212] p-2 neo-border">
              <div className="w-4 h-4 bg-yellow-500 mr-3 border-2 border-black"></div>
              <span className="text-sm text-white font-bold uppercase">MEDIUM_RISK</span>
            </div>
            <div className="flex items-center bg-[#121212] p-2 neo-border">
              <div className="w-4 h-4 bg-red-500 mr-3 border-2 border-black animate-pulse"></div>
              <span className="text-sm text-white font-bold uppercase">HIGH_RISK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityScore;
