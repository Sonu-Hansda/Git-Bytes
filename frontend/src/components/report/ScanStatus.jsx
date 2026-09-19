import React from 'react';
import { useNavigate } from 'react-router';

const ScanStatus = ({ url, date }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 p-6 neo-card bg-[#1A1A1A]">
      <div className="flex items-center mb-4 md:mb-0">
        <div className="bg-[#00FF9C] p-3 neo-border mr-4">
          <i className="fas fa-check text-[#121212] text-xl font-bold"></i>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">> Scan_Completed</h2>
          <p className="text-[#00FF9C] text-sm font-bold mt-1">
            TARGET: <span className="text-white bg-[#121212] px-2 py-1 neo-border">{url || 'UNKNOWN'}</span>
          </p>
          <p className="text-gray-400 text-sm mt-2 font-bold">
            DATE: <span>{date || new Date().toLocaleDateString()}</span>
          </p>
        </div>
      </div>
      <div className="flex space-x-3 w-full md:w-auto mt-4 md:mt-0">
        <button
          onClick={() => navigate('/')}
          className="neo-btn-outline w-full md:w-auto text-center px-6 py-3 font-bold"
        >
          <i className="fas fa-search mr-2"></i>
          NEW_SCAN
        </button>
      </div>
    </div>
  );
};

export default ScanStatus;
