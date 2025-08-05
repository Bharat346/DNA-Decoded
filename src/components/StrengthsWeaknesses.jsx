import React from 'react';

const StrengthsWeaknesses = ({ strengths, weaknesses }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-indigo-400 mb-4">Strengths & Weaknesses</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-green-400 mb-3">Strengths</h3>
          {strengths && strengths.length > 0 ? (
            <ul className="space-y-3">
              {strengths.map((item, index) => (
                <li key={index} className="bg-gray-700 p-3 rounded-lg">
                  <h4 className="font-medium text-green-300">{item.trait}</h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No significant strengths identified.</p>
          )}
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-red-400 mb-3">Weaknesses</h3>
          {weaknesses && weaknesses.length > 0 ? (
            <ul className="space-y-3">
              {weaknesses.map((item, index) => (
                <li key={index} className="bg-gray-700 p-3 rounded-lg">
                  <h4 className="font-medium text-red-300">{item.trait}</h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No significant weaknesses identified.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StrengthsWeaknesses;