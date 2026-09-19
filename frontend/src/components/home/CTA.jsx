import React from 'react';

const CTA = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-16 mb-12 md:mb-20 font-mono">
      <div className="neo-card bg-[#121212] border-4 p-6 md:p-16 text-center max-w-5xl mx-auto break-words">
        <h2 className="text-2xl md:text-5xl font-bold mb-6 text-white uppercase tracking-widest">> Ready to secure?</h2>
        <p className="text-base md:text-xl text-[#00FF9C] mb-8 md:mb-10 max-w-2xl mx-auto font-bold bg-[#1A1A1A] inline-block px-4 py-2 neo-border">
          Start scanning now and get actionable security insights in minutes.
        </p>
        <div>
          <button className="neo-btn text-base md:text-xl px-6 md:px-12 py-4 md:py-5 uppercase w-full md:w-auto">
            Initialize_Free_Scan
          </button>
        </div>
        <p className="mt-6 text-gray-500 font-bold">
          [ No registration required for basic scans ]
        </p>
      </div>
    </section>
  );
};

export default CTA;
