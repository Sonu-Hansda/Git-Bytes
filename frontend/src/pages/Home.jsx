import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import ScanSetup from '../components/home/ScanSetup';
import HowItWorks from '../components/home/HowItWorks';
import OwaspInfo from '../components/report/OwaspInfo';
import CTA from '../components/home/CTA';
import Footer from '../components/layout/Footer';
import Chatbot from '../components/Chatbot';

const App = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white font-mono selection:bg-[#00FF9C] selection:text-black">
      <Navbar />
      <Hero/>
      <ScanSetup/>
      <div id="how-it-works">
        <HowItWorks/>
      </div>
      <OwaspInfo/>
      <CTA/>
      <Footer/>
      <Chatbot/>
    </div>
  );
};

export default App;