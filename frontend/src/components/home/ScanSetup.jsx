import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const ScanSetup = () => {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();
  const [vulnerabilityTypes, setVulnerabilityTypes] = useState({
    xss: true,
    sqlInjection: true,
    csrf: true,
    sslMisconfigurations: true
  });
  const [mode, setMode] = useState('beginner');
  const [advancedSettings, setAdvancedSettings] = useState({
    requestDelay: 200,
    customHeaders: ''
  });
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);

  const handleVulnerabilityToggle = (type) => {
    setVulnerabilityTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleAdvancedSettingsChange = (setting, value) => {
    setAdvancedSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

const handleScan = (e) =>{
    e.preventDefault();
    navigate('/Loader', {
      state: {
        url,
        vulnerabilityTypes,
        mode,
        advancedSettings
      }
    }); 
}

  return (
    <section id='scan-setup' className="container mx-auto px-6 py-16 neo-card font-mono text-white mb-20 max-w-4xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#00FF9C] uppercase tracking-widest">>> Security Scan Init</h2>

      {/* URL Input */}
      <div className="mb-8 p-4 neo-border bg-[#121212]">
        <label htmlFor="url" className="block text-[#00FF9C] font-bold mb-2">> Target_URL</label>
        <div className="relative">
          <i className="fas fa-globe absolute left-4 top-1/2 transform -translate-y-1/2 text-[#00FF9C]"></i>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://..."
            className="w-full bg-[#121212] border-2 border-[#00FF9C] py-3 pl-12 pr-4 text-white focus:outline-none focus:shadow-[4px_4px_0_0_#00FF9C] transition-all font-mono"
          />
        </div>
      </div>

      {/* Vulnerability Types */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-[#00FF9C]">> Select_Vectors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries({
            xss: 'XSS',
            sqlInjection: 'SQL_INJ',
            csrf: 'CSRF',
            sslMisconfigurations: 'SSL_MISC'
          }).map(([key, label]) => (
            <div key={key} className="flex items-center bg-[#121212] p-4 neo-border hover:shadow-[4px_4px_0_0_#00FF9C] transition-all">
              <button
                onClick={() => handleVulnerabilityToggle(key)}
                className={`relative inline-flex items-center h-6 border-2 border-[#00FF9C] w-11 transition-colors focus:outline-none ${
                  vulnerabilityTypes[key] ? 'bg-[#00FF9C]' : 'bg-[#121212]'
                } cursor-pointer rounded-none`}
              >
                <span
                  className={`inline-block w-4 h-4 transform transition-transform border-2 border-[#121212] bg-[#121212] ${
                    vulnerabilityTypes[key] ? 'translate-x-6' : 'translate-x-0'
                  } rounded-none`}
                />
              </button>
              <span className="ml-3 text-sm font-bold text-gray-200">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Settings */}
      <div className="mb-8">
        <div className="flex items-center justify-between bg-[#121212] p-4 neo-border cursor-pointer" onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}>
          <h3 className="text-xl font-bold text-[#00FF9C]">> Advanced_Config</h3>
          <button
            className="text-[#00FF9C] font-bold transition-colors cursor-pointer"
          >
            [{showAdvancedSettings ? '-' : '+'}]
          </button>
        </div>

        {showAdvancedSettings && (
          <div className="mt-4 p-6 bg-[#121212] neo-border border-t-0">
            <div className="mb-4">
              <label htmlFor="requestDelay" className="block text-[#00FF9C] mb-2 font-bold">
                Request_Delay (ms)
              </label>
              <input
                type="range"
                id="requestDelay"
                min="0"
                max="1000"
                step="50"
                value={advancedSettings.requestDelay}
                onChange={(e) =>
                  handleAdvancedSettingsChange('requestDelay', parseInt(e.target.value))
                }
                className="w-full h-2 bg-[#00FF9C] appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-[#00FF9C] mt-2 font-bold">
                <span>0ms</span>
                <span>{advancedSettings.requestDelay}ms</span>
                <span>1000ms</span>
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="customHeaders" className="block text-[#00FF9C] mb-2 font-bold">
                Custom_Headers (JSON)
              </label>
              <textarea
                id="customHeaders"
                value={advancedSettings.customHeaders}
                onChange={(e) => handleAdvancedSettingsChange('customHeaders', e.target.value)}
                placeholder='{"Authorization": "Bearer token"}'
                className="w-full bg-[#1A1A1A] border-2 border-[#00FF9C] p-4 text-white focus:outline-none focus:shadow-[4px_4px_0_0_#00FF9C] transition-all font-mono text-sm h-24"
              ></textarea>
            </div>
          </div>
        )}
      </div>

      {/* Run Scan Button */}
      <div className="text-center mt-12">
        <button onClick={handleScan } className="neo-btn text-xl px-12 py-4 w-full md:w-auto uppercase tracking-widest">
          <i className="fas fa-bolt mr-2"></i> Execute_Scan
        </button>
        <p className="mt-4 text-[#00FF9C] text-sm animate-pulse">
          > ETA: 45-60 seconds...
        </p>
      </div>
    </section>
  );
};

export default ScanSetup;
