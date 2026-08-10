import React from 'react';
import { useNavigate } from 'react-router';

const ScanStatus = ({ url, date }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <div className="bg-[#00FF9D] bg-opacity-20 p-2 rounded-full mr-3">
          <i className="fas fa-check text-[#00FF9D]"></i>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Scan Completed Successfully</h2>
          <p className="text-gray-400 text-sm">
            Scanned Site:{' '}
            <span className="font-mono text-white">
              {url || 'Unknown'}
            </span>
          </p>
          <p className="text-gray-400 text-sm">
            Date of Scan: <span>{date || new Date().toLocaleDateString()}</span>
          </p>
        </div>
      </div>
      <div className="flex space-x-3">
        <button
          onClick={() => navigate('/')}
          className="bg-[#1E1E1E] hover:bg-gray-700 text-white px-4 py-2 rounded-md flex items-center"
        >
          <i className="fas fa-search mr-2"></i>
          Scan Another Site
        </button>
      </div>
    </div>
  );
};

export default ScanStatus;
