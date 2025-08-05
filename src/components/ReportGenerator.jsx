// components/ReportGenerator.jsx
import React from 'react';

const ReportGenerator = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-indigo-400 mb-4">Report Generation</h2>
      <p className="text-gray-300 mb-4">
        PDF report generation is currently unavailable. We're working to restore this feature.
      </p>
      <button 
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
        disabled
      >
        Coming Soon
      </button>
    </div>
  );
};

export default ReportGenerator;