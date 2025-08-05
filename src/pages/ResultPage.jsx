// App.jsx
import React from 'react';
import { AppContext } from '../hooks/AppContext';
import useTraitAnalysis from '../hooks/useTraitAnalysis';
import PhysicalTraits from '../components/PhysicalTraits';
import DiseaseRisk from '../components/DiseaseRisk';
import StrengthsWeaknesses from '../components/StrengthsWeaknesses';
import GeneInfo from '../components/GeneInfo';
import ReportGenerator from '../components/ReportGenerator';

const App = () => {
  const { dnaData } = React.useContext(AppContext);
  const { traits, diseases, strengths, weaknesses, geneInfo, loading } = useTraitAnalysis(dnaData);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-indigo-400">Analyzing your DNA data...</h2>
          <p className="text-gray-400 mt-2">This may take a moment</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-400 mb-2">Genetic Trait Analyzer</h1>
          <p className="text-gray-400">Discover what your DNA reveals about you</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <PhysicalTraits traits={traits} />
            <DiseaseRisk diseases={diseases} />
            <StrengthsWeaknesses strengths={strengths} weaknesses={weaknesses} />
            <GeneInfo geneInfo={geneInfo} loading={loading} />
          </div>
          
          <div className="space-y-8">
            <ReportGenerator />
            
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-indigo-400 mb-4">About Your Data</h2>
              <p className="text-gray-300 mb-4">
                This analysis is based on your raw DNA data. While these predictions can provide interesting insights, 
                they are not medical diagnoses.
              </p>
              <p className="text-gray-400 text-sm">
                Note: Genetic predictions are probabilistic and may not account for all environmental factors.
                Data sources: NCBI Gene, UniProt
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;