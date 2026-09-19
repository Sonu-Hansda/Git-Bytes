import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  const words = ['security flaws', 'vulnerabilities', 'risks', 'bugs', 'threats', 'loopholes', 'backdoors'];
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseBetweenWords = 1000;
  const pauseAfterDelete = 500;

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setBlink(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBetweenWords);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, pauseAfterDelete);
    } else {
      timeout = setTimeout(() => {
        const updatedText = isDeleting
          ? currentWord.substring(0, displayText.length - 1)
          : currentWord.substring(0, displayText.length + 1);
        setDisplayText(updatedText);
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="relative container mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col md:flex-row items-center font-mono">
      <div className="md:w-1/2 z-10 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white break-words">
          Scan your website for common{' '}
          <br className="hidden md:block" />
          <span className="text-[#00FF9C] neo-border px-2 bg-[#1A1A1A] inline-block mt-2 md:mt-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
            {displayText}
            <span className={blink ? 'opacity-100' : 'opacity-0'}>_</span>
          </span>
        </h2>
        <p className="text-base md:text-xl text-gray-300 mb-8 border-l-0 md:border-l-4 border-[#00FF9C] md:pl-4">
          Get a detailed report in seconds. Identify vulnerabilities before hackers do.
        </p>

        <a href="#scan-setup" className="neo-btn inline-block text-lg md:text-xl py-3 px-8 w-full md:w-auto">
          Start Scan
        </a>

        <div className="mt-8 flex items-center text-[#00FF9C] font-bold bg-[#1A1A1A] w-fit px-4 py-2 neo-border neo-shadow-sm">
          <i className="fas fa-lock mr-2"></i>
          <span>Secure, private, and no installation required</span>
        </div>
      </div>

      <div className="md:w-1/2 mt-12 md:mt-0 z-0">
        <div className="relative p-4 bg-[#00FF9C] neo-shadow">
          <img
            src="./main_page.png"
            alt="Security scan dashboard"
            className="border-4 border-[#121212] object-cover mix-blend-luminosity hover:mix-blend-normal transition-all"
          />
          <div className="absolute -bottom-6 -right-6 neo-card p-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-[#00FF9C] mr-2 animate-pulse neo-border"></div>
              <span className="text-md font-mono text-[#00FF9C] font-bold">Real-time protection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
