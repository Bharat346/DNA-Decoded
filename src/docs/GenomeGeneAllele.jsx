import React from 'react';

const GenomeGeneAllele = () => {
  return (
    <div className="bg-gray-900 mx-auto px-4 py-8 text-gray-100 flex justify-center">
      <div className='max-w-4xl'>
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        Genome, Gene & Allele: Understanding the Differences
      </h1>

      <div className="rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Genetic Hierarchy</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Genome Card */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-indigo-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-500">Genome</h3>
              <p className="mb-3">
                The complete set of genetic material in an organism. It includes all genes and non-coding sequences.
              </p>
              <div className="text-sm bg-gray-900 text-indigo-500 p-2 rounded">
                <span className="font-semibold">Human genome:</span> ~3 billion base pairs, ~20,000 genes
              </div>
            </div>

            {/* Gene Card */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-blue-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-500">Gene</h3>
              <p className="mb-3">
                A specific sequence of DNA that codes for a protein or functional RNA molecule.
              </p>
              <div className="text-sm bg-gray-900 text-blue-500 p-2 rounded">
                <span className="font-semibold">Example:</span> The HBB gene encodes beta-globin in hemoglobin
              </div>
            </div>

            {/* Allele Card */}
            <div className="bg-gray-800 p-6 rounded-lg  hover:shadow-md transition-shadow">
              <div className="text-indigo-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-500">Allele</h3>
              <p className="mb-3">
                Different versions of the same gene that can result in variations in the trait controlled by that gene.
              </p>
              <div className="text-sm bg-gray-900 text-indigo-500 p-2 rounded">
                <span className="font-semibold">Example:</span> Different alleles of the MC1R gene affect hair color
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Visual Comparison</h2>
          
          <div className="flex justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" className="bg-gray-900 w-full max-w-2xl h-auto">
              {/* Genome */}
              <rect x="50" y="50" width="500" height="40" fill="#10B981" rx="5" />
              <text x="300" y="80" textAnchor="middle" fill="white" fontSize="16">Genome (Complete DNA)</text>
              
              {/* Genes */}
              <rect x="70" y="120" width="80" height="40" fill="#3B82F6" rx="5" />
              <rect x="180" y="120" width="80" height="40" fill="#3B82F6" rx="5" />
              <rect x="290" y="120" width="80" height="40" fill="#3B82F6" rx="5" />
              <rect x="400" y="120" width="80" height="40" fill="#3B82F6" rx="5" />
              <text x="300" y="145" textAnchor="middle" fill="white" fontSize="14">Genes (Functional Units)</text>
              
              {/* Alleles */}
              <rect x="70" y="190" width="80" height="30" fill="#8B5CF6" rx="3" />
              <rect x="70" y="230" width="80" height="30" fill="#8B5CF6" rx="3" />
              <text x="110" y="215" textAnchor="middle" fill="white" fontSize="12">Allele 1</text>
              <text x="110" y="255" textAnchor="middle" fill="white" fontSize="12">Allele 2</text>
              
              <rect x="290" y="190" width="80" height="30" fill="#8B5CF6" rx="3" />
              <rect x="290" y="230" width="80" height="30" fill="#8B5CF6" rx="3" />
              <text x="330" y="215" textAnchor="middle" fill="white" fontSize="12">Allele A</text>
              <text x="330" y="255" textAnchor="middle" fill="white" fontSize="12">Allele B</text>
              
              <text x="300" y="280" textAnchor="middle" fill="#4B5563" fontSize="14">Figure: Relationship between Genome, Genes, and Alleles</text>
            </svg>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-blue-500">
              <span className="font-semibold">Key Concept:</span> While the genome is the entire library, genes are individual books, 
              and alleles are different editions of the same book with slight variations in content.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-indigo-500">Genotype vs Phenotype</h3>
          <p className="mb-4">
            <span className="font-semibold">Genotype:</span> The genetic makeup of an organism (e.g., BB, Bb, bb)
          </p>
          <p className="mb-4">
            <span className="font-semibold">Phenotype:</span> The observable characteristics (e.g., brown eyes, blue eyes)
          </p>
          <div className="flex justify-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150" className="bg-gray-900 w-full h-auto">
              <rect x="50" y="50" width="100" height="50" fill="#10B981" rx="5" />
              <text x="100" y="80" textAnchor="middle" fill="white">Genotype</text>
              <path d="M150,75 L200,75" stroke="#4B5563" strokeWidth="2" markerEnd="url(#arrow)" />
              <rect x="200" y="50" width="100" height="50" fill="#3B82F6" rx="5" />
              <text x="250" y="80" textAnchor="middle" fill="white">Phenotype</text>
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#4B5563" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-blue-500">Allele Interactions</h3>
          <p className="mb-4">
            <span className="font-semibold">Dominant:</span> Expressed when at least one copy is present (B)
          </p>
          <p className="mb-4">
            <span className="font-semibold">Recessive:</span> Only expressed when two copies are present (b)
          </p>
          <div className="bg-gray-900 p-3 rounded-md text-blue-500 text-sm">
            Example: In eye color, brown (B) is dominant over blue (b). BB and Bb both result in brown eyes, while bb results in blue eyes.
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-3 text-indigo-500">In Genetic Analysis</h3>
        <p>
          When we analyze your DNA, we examine specific alleles at various gene locations to determine 
          your genetic predispositions for traits, health conditions, and ancestry.
        </p>
      </div>
      </div>
    </div>
  );
};

export default GenomeGeneAllele;