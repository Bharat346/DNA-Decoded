// components/GeneInfo.jsx
import React from 'react';

const GeneInfo = ({ geneInfo, loading }) => {
  if (loading) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-indigo-400 mb-4">Gene Information</h2>
        <p className="text-gray-300">Loading gene data...</p>
      </div>
    );
  }

  if (!geneInfo || geneInfo.length === 0) return null;

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-indigo-400 mb-4">Gene Information</h2>
      <div className="space-y-6">
        {geneInfo.map((gene, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-blue-400">{gene.symbol}</h3>
              <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded">
                {gene.source}
              </span>
            </div>
            {gene.name && gene.name !== gene.symbol && (
              <h4 className="text-lg text-blue-300 mt-1">{gene.name}</h4>
            )}
            
            {gene.description && (
              <p className="text-gray-300 mt-2">{gene.description}</p>
            )}
            
            {gene.summary && (
              <p className="text-gray-300 mt-2 text-sm">{gene.summary}</p>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {gene.location && (
                <div>
                  <h4 className="font-semibold text-gray-400">Location</h4>
                  <p className="text-gray-300">{gene.location}</p>
                </div>
              )}
              
              {gene.function && (
                <div>
                  <h4 className="font-semibold text-gray-400">Function</h4>
                  <p className="text-gray-300">{gene.function}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneInfo;