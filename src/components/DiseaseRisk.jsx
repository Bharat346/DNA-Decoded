import React from 'react';

const DiseaseRisk = ({ diseases }) => {
  if (!diseases || diseases.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-indigo-400 mb-4">Disease Risks</h2>
        <p className="text-gray-300">No significant disease risks detected in your DNA data.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-indigo-400 mb-4">Disease Risks</h2>
      <div className="space-y-4">
        {diseases.map((disease, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-red-400">{disease.name}</h3>
              <span className={`px-2 py-1 rounded text-xs font-bold ${
                disease.risk === 'High' ? 'bg-red-600 text-white' : 
                disease.risk === 'Moderate' ? 'bg-yellow-600 text-white' : 
                'bg-green-600 text-white'
              }`}>
                {disease.risk} Risk
              </span>
            </div>
            <p className="text-gray-300 mt-1">{disease.description}</p>
            <p className="text-sm text-gray-400 mt-2">Related gene: {disease.gene}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiseaseRisk;