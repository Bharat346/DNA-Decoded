import React from 'react';
import TraitCard from './TraitCard';

const PhysicalTraits = ({ traits }) => {
  if (!traits) return null;

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-indigo-400 mb-4">Physical Traits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TraitCard 
          title="Eye Color" 
          value={traits.eyeColor} 
          description="Predicted based on HERC2, OCA2 and other genes"
        />
        <TraitCard 
          title="Hair Color" 
          value={traits.hairColor} 
          description="Predicted based on MC1R and other pigmentation genes"
        />
        <TraitCard 
          title="Height" 
          value={traits.height} 
          description="Estimated based on height-associated SNPs"
        />
        <TraitCard 
          title="Lactose Tolerance" 
          value={traits.lactoseTolerance} 
          description="Based on MCM6 gene variant"
        />
      </div>
    </div>
  );
};

export default PhysicalTraits;