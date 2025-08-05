import React from 'react';

const TraitCard = ({ title, value, description }) => {
  return (
    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition duration-200">
      <h3 className="text-lg font-semibold text-blue-400">{title}</h3>
      <p className="text-2xl font-bold text-white my-2">{value}</p>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default TraitCard;