import React from 'react';

const GeneStructure = () => {
  return (
    <div className="bg-gray-900 mx-auto px-4 py-8 text-gray-100 flex justify-center">
      <div className='max-w-4xl'>
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        Gene Structure and Variants
      </h1>

      <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">What is a Gene?</h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" className="bg-gray-900 w-full h-auto">
                {/* Gene structure diagram */}
                <rect x="50" y="120" width="400" height="20" fill="#6B7280" rx="3" />
                
                {/* Exons */}
                <rect x="100" y="110" width="80" height="40" fill="#3B82F6" rx="5" />
                <rect x="220" y="110" width="80" height="40" fill="#3B82F6" rx="5" />
                <rect x="340" y="110" width="80" height="40" fill="#3B82F6" rx="5" />
                
                {/* Introns */}
                <path d="M180,130 L220,130" stroke="#F59E0B" strokeWidth="8" />
                <path d="M300,130 L340,130" stroke="#F59E0B" strokeWidth="8" />
                
                {/* Labels */}
                <text x="140" y="100" textAnchor="middle" fill="#3B82F6" fontSize="14">Exon</text>
                <text x="140" y="170" textAnchor="middle" fill="#3B82F6" fontSize="14">Coding</text>
                <text x="260" y="100" textAnchor="middle" fill="#F59E0B" fontSize="14">Intron</text>
                <text x="260" y="170" textAnchor="middle" fill="#F59E0B" fontSize="14">Non-coding</text>
                <text x="250" y="250" textAnchor="middle" fill="#4B5563" fontSize="14">Figure: Gene Structure with Exons and Introns</text>
              </svg>
            </div>
            <div className="md:w-1/2 md:pl-6">
              <p className="mb-4">
                A gene is a specific sequence of DNA that contains the instructions to make proteins or functional RNA molecules. 
                Genes are the basic physical and functional units of heredity.
              </p>
              <div className="bg-gray-900 p-4 rounded-lg mb-4">
                <p className="text-blue-500">
                  <span className="font-semibold">Key Features:</span>
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Average human gene: ~10,000 base pairs</li>
                  <li>Contains both coding (exons) and non-coding (introns) regions</li>
                  <li>Located at specific positions on chromosomes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-indigo-500">Gene Position (Locus)</h3>
          <p className="mb-4">
            Each gene has a specific location (locus) on a chromosome. This is typically denoted by:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Chromosome number (1-22, X, Y)</li>
            <li>Arm (p or q)</li>
            <li>Band number (e.g., 11.2)</li>
          </ul>
          <div className="mt-4 p-3 bg-gray-900 rounded-md text-purple-500 text-sm">
            <span className="font-semibold">Example:</span> The CFTR gene is located at 7q31.2 (Chromosome 7, q arm, band 31.2)
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-blue-500">Gene Variants</h3>
          <p className="mb-4">
            Variations in gene sequences that can affect function:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>SNPs (Single Nucleotide Polymorphisms)</li>
            <li>Insertions/Deletions</li>
            <li>Copy Number Variations</li>
          </ul>
          <div className="mt-4 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" className="w-full h-auto">
              <text x="20" y="30" fill="#ffffffff" fontSize="14">Reference: A T C G G C A T A</text>
              <text x="20" y="60" fill="#ffffffff" fontSize="14">Variant 1: A T C G <tspan fill="#EF4444">A</tspan> C A T A (SNP)</text>
              <text x="20" y="90" fill="#ffffffff" fontSize="14">Variant 2: A T C <tspan fill="#EF4444">- -</tspan> G C A T A (Deletion)</text>
              <text x="20" y="120" fill="#ffffffff" fontSize="14">Variant 3: A T C G G C <tspan fill="#EF4444">T T A</tspan> A T A (Insertion)</text>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Types of Genetic Variants</h2>
          
          <div className="overflow-x-auto">
            <table className="bg-gray-900 min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Variant Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Effect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Silent</td>
                  <td className="px-6 py-4 text-sm">DNA change doesn't affect protein</td>
                  <td className="px-6 py-4 text-sm">No functional impact</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Missense</td>
                  <td className="px-6 py-4 text-sm">Changes one amino acid</td>
                  <td className="px-6 py-4 text-sm">May affect protein function</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Nonsense</td>
                  <td className="px-6 py-4 text-sm">Creates a stop codon</td>
                  <td className="px-6 py-4 text-sm">Truncated protein</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Frameshift</td>
                  <td className="px-6 py-4 text-sm">Insertion/deletion not divisible by 3</td>
                  <td className="px-6 py-4 text-sm">Completely altered protein</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6 ">From Gene to Protein</h2>
          
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" className="bg-gray-900 w-full h-auto mb-6">
              <rect x="50" y="50" width="100" height="40" fill="#3B82F6" rx="5" />
              <text x="100" y="75" textAnchor="middle" fill="white">Gene</text>
              <path d="M150,70 L200,70" stroke="#4B5563" strokeWidth="2" markerEnd="url(#arrow)" />
              
              <rect x="200" y="50" width="100" height="40" fill="#F59E0B" rx="5" />
              <text x="250" y="75" textAnchor="middle" fill="white">mRNA</text>
              <path d="M300,70 L350,70" stroke="#4B5563" strokeWidth="2" markerEnd="url(#arrow)" />
              
              <rect x="350" y="50" width="100" height="40" fill="#10B981" rx="5" />
              <text x="400" y="75" textAnchor="middle" fill="white">Protein</text>
              
              <text x="300" y="150" textAnchor="middle" fill="#4B5563" fontSize="14">Figure: Central Dogma of Molecular Biology</text>
              
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#4B5563" />
                </marker>
              </defs>
            </svg>
            
            <div className="grid md:grid-cols-3 gap-6 w-full">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-500 mb-2">1. Transcription</h4>
                <p className="text-blue-500 text-sm">DNA → mRNA (in nucleus)</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-500 mb-2">2. Splicing</h4>
                <p className="text-yellow-500 text-sm">Introns removed, exons joined</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-semibold text-green-500 mb-2">3. Translation</h4>
                <p className="text-green-500 text-sm">mRNA → Protein (in ribosome)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-3 text-blue-500">In Genetic Analysis</h3>
        <p>
          When analyzing your DNA, we identify variants in specific genes that may affect protein function, 
          leading to differences in traits or disease risk. The location and type of variant determine its potential impact.
        </p>
      </div>
      </div>
    </div>
  );
};

export default GeneStructure;