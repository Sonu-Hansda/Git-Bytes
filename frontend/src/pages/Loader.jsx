import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import LetterGlitch from '../components/LetterGlitch';
import { Navigate, useLocation, useNavigate } from 'react-router';

const scanSteps = {
  'SCANNING FOR SQL INJECTION': [
    'Looking for tautologies in queries',
    'Detecting union-based injections',
    'Inspecting input sanitization',
    'Searching for error-based SQLi',
    'Analyzing blind SQLi patterns'
  ],
  'SCANNING FOR XSS': [
    'Checking DOM manipulation vectors',
    'Looking for inline script tags',
    'Simulating stored XSS payloads',
    'Escaping unsafe HTML entities',
    'Analyzing event handler injections'
  ],
  'SCANNING FOR CSR FORGERY': [
    'Detecting state-changing requests',
    'Checking anti-CSRF tokens',
    'Simulating cross-origin calls',
    'Reviewing session management',
    'Evaluating referrer policies'
  ],
  'SCANNING FOR SSL MISCONFIGURATIONS': [
    'Auditing exposed .git directories',
    'Checking server headers',
    'Evaluating debug mode status',
    'Validating file permission settings',
    'Inspecting default credentials'
  ],
  'SCANNING FOR MISSING HEADERS': [
    'Checking for CSP implementation',
    'Validating X-Frame-Options',
    'Inspecting X-Content-Type-Options',
    'Looking for Referrer-Policy',
    'Scanning for HSTS headers'
  ]
};

const Loader = () => {
  const titles = Object.keys(scanSteps);
  const navigate = useNavigate();
  const location = useLocation();
  const {url, vulnerabilityTypes, mode, advancedSettings} = location.state || {}
  
  useEffect(() => {
    if (!url) {
      navigate('/');
    }
  }, [url, navigate]);

  const [mainIndex, setMainIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(scanSteps[titles[0]][0]);
  const [hidden, setHidden] = useState(false);

  const currentTitle = titles[mainIndex];

  // Navigate after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/Report/${encodeURIComponent(url)}`);
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    const subTimer = setInterval(() => {
      setSubIndex((prev) => {
        const next = (prev + 1) % 5;
        setCurrentWord(scanSteps[currentTitle][next]);
        return next;
      });
    }, 2000);

    return () => clearInterval(subTimer);
  }, [currentTitle]);

  useEffect(() => {
    const mainTimer = setInterval(() => {
      setHidden(true);
      setTimeout(() => {
        const nextMain = (mainIndex + 1) % titles.length;
        setMainIndex(nextMain);
        setSubIndex(0);
        setCurrentWord(scanSteps[titles[nextMain]][0]);
        setHidden(false);
      }, 400);
    }, 10000);

    return () => clearInterval(mainTimer);
  }, [mainIndex]);

  return (
    <div className="loader-container">
      <div className="loader-content">
        <LetterGlitch glitchSpeed={50} centerVignette={true} outerVignette={false} smooth={true} />

        <div className="loader-text">
          <div className={`loader-text-1 fade-text ${hidden ? 'hidden' : ''}`}>
            {currentTitle}
          </div>

          <div className="loader-text-2">
            <Typewriter
              key={currentWord}
              words={[currentWord]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={10}
              deleteSpeed={10}
              delaySpeed={400}
            />
          </div>
        </div>
      </div>
      <div className="fade-overlay"></div>
    </div>
  );
};

export default Loader;
