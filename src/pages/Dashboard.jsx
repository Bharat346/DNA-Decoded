import { useState, useEffect } from 'react';
import SequenceInput from '../components/SequenceInput';
import ProteinResult from '../components/ProteinResult';
import TraitsAnalysis from '../components/TraitsAnalysis';
import DiseaseRisk from '../components/DiseaseRisk';
import MutationAnalysis from '../components/MutationAnalysis';
import AnalysisCard from '../components/AnalysisCard';
import ProteinDetails from '../components/ProteinDetails';
import { 
  translateDNAToProtein, 
  fetchUniProtData,
  fetchPhysicalTraits 
} from '../services/api';

export default function Dashboard() {
  const [dnaSequence, setDnaSequence] = useState('');
  const [analysisData, setAnalysisData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [geneName, setGeneName] = useState('');

  const analyzeSequence = async () => {
    if (!dnaSequence) {
      setError('Please enter a DNA sequence');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Step 1: Translate DNA to Protein
      const proteinSequence = await translateDNAToProtein(dnaSequence);
      
      // Step 2: Fetch protein data from UniProt
      const uniprotData = await fetchUniProtData(proteinSequence);
      
      // Extract gene name for physical traits
      const primaryGene = uniprotData.genes?.[0]?.geneName?.value || '';
      setGeneName(primaryGene);
      
      // Step 3: Fetch physical traits if gene is available
      let physicalTraits = {};
      if (primaryGene) {
        physicalTraits = await fetchPhysicalTraits(primaryGene);
      }

      // Step 4: Compile all results
      setAnalysisData({
        protein: {
          sequence: proteinSequence,
          uniprotData,
          dnaSequence
        },
        diseaseRisk: extractDiseaseData(uniprotData),
        traits: {
          ...extractTraitData(uniprotData),
          physical: {
            ...extractTraitData(uniprotData).physical,
            ...physicalTraits  // Merge API physical traits
          }
        },
        mutations: analyzeMutations(dnaSequence)
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Extract disease data from UniProt comments
  const extractDiseaseData = (uniprotData) => {
    const diseaseComments = uniprotData.comments?.filter(c => c.commentType === "DISEASE") || [];
    return diseaseComments.map(comment => ({
      name: comment.disease?.diseaseName || "Unknown disease",
      description: comment.texts?.[0]?.value || "No description available",
      evidence: comment.texts?.[0]?.evidences?.[0]?.evidenceCode || "No evidence",
      association: comment.disease?.associationType || "Unknown"
    }));
  };

  // Extract various trait data
  const extractTraitData = (uniprotData) => {
    const functionComments = uniprotData.comments?.filter(c => c.commentType === "FUNCTION") || [];
    const subcellularLocations = uniprotData.comments?.find(c => c.commentType === "SUBCELLULAR LOCATION");
    
    return {
      physical: {
        molecularWeight: uniprotData.sequence?.molWeight,
        length: uniprotData.sequence?.length,
        location: subcellularLocations?.subcellularLocations?.[0]?.location?.value || "Unknown"
      },
      functional: functionComments.map(f => f.texts?.[0]?.value),
      health: extractDiseaseData(uniprotData).slice(0, 3)
    };
  };

  // Simple mutation analysis (would be more complex in real app)
  const analyzeMutations = (sequence) => {
    const mutations = [];
    for (let i = 0; i < sequence.length - 3; i += 3) {
      if (Math.random() < 0.05) { // Simulate 5% mutation rate
        mutations.push({
          position: i,
          original: sequence.substr(i, 3),
          mutation: "SNP", // Simplified for demo
          type: ["Missense", "Silent", "Nonsense"][Math.floor(Math.random() * 3)]
        });
      }
    }
    return {
      count: mutations.length,
      details: mutations,
      summary: {
        missense: mutations.filter(m => m.type === "Missense").length,
        silent: mutations.filter(m => m.type === "Silent").length,
        nonsense: mutations.filter(m => m.type === "Nonsense").length
      }
    };
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">DNA Sequence Analyzer</h1>
        
        <SequenceInput 
          dnaSequence={dnaSequence}
          setDnaSequence={setDnaSequence}
          analyzeSequence={analyzeSequence}
          isLoading={isLoading}
          error={error}
        />

        {isLoading && (
          <div className="mt-8 p-4 bg-blue-50 rounded-lg flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-blue-600">Analyzing sequence for gene {geneName}...</p>
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
            Error: {error}
          </div>
        )}

        {analysisData && (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnalysisCard title="Protein Details" className="md:col-span-2">
              <ProteinDetails data={analysisData.protein} geneName={geneName} />
            </AnalysisCard>

            <AnalysisCard title="Protein Analysis">
              <ProteinResult data={analysisData.protein} />
            </AnalysisCard>

            <AnalysisCard title="Physical & Functional Traits">
              <TraitsAnalysis data={analysisData.traits} geneName={geneName} />
            </AnalysisCard>

            <AnalysisCard title="Disease Associations">
              <DiseaseRisk data={analysisData.diseaseRisk} />
            </AnalysisCard>

            <AnalysisCard title="Mutation Analysis">
              <MutationAnalysis data={analysisData.mutations} />
            </AnalysisCard>
          </div>
        )}
      </div>
    </div>
  );
}