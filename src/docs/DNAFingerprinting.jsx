import React from 'react';

const DNAFingerprinting = () => {
  return (
    <div className=" mx-auto px-4 py-8 text-gray-100 flex justify-center bg-gray-900">
      <div className='max-w-4xl'>
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
        DNA Fingerprinting & Ancestry Analysis
      </h1>

      <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">DNA Fingerprinting</h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" className="bg-gray-900 w-full h-auto">
                {/* DNA fingerprint illustration */}
                <rect x="50" y="50" width="400" height="200" fill="#E5E7EB" rx="5" />
                
                {/* Bands */}
                <rect x="100" y="80" width="30" height="140" fill="#3B82F6" />
                <rect x="150" y="100" width="30" height="120" fill="#3B82F6" />
                <rect x="200" y="60" width="30" height="160" fill="#3B82F6" />
                <rect x="250" y="120" width="30" height="100" fill="#3B82F6" />
                <rect x="300" y="140" width="30" height="80" fill="#3B82F6" />
                <rect x="350" y="90" width="30" height="130" fill="#3B82F6" />
                
                {/* Labels */}
                <text x="115" y="240" textAnchor="middle" fill="#4B5563" fontSize="12">Sample A</text>
                <text x="165" y="240" textAnchor="middle" fill="#4B5563" fontSize="12">Sample B</text>
                <text x="215" y="240" textAnchor="middle" fill="#4B5563" fontSize="12">Sample C</text>
                <text x="250" y="280" textAnchor="middle" fill="#b1b3b5ff" fontSize="14">Figure: DNA Fingerprint Patterns</text>
              </svg>
            </div>
            <div className="md:w-1/2 md:pl-6">
              <p className="mb-4">
                DNA fingerprinting (or DNA profiling) analyzes specific regions of DNA that vary between individuals. 
                These regions contain repetitive sequences called STRs (Short Tandem Repeats) that differ in length.
              </p>
              <div className="bg-gray-900 p-4 rounded-lg mb-4">
                <p className="text-blue-500">
                  <span className="font-semibold">Key Applications:</span>
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Forensic identification</li>
                  <li>Paternity testing</li>
                  <li>Twin zygosity determination</li>
                  <li>Conservation biology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-indigo-500">How DNA Fingerprinting Works</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>DNA sample collection (blood, saliva, hair)</li>
            <li>DNA extraction and purification</li>
            <li>PCR amplification of STR regions</li>
            <li>Capillary electrophoresis to separate fragments</li>
            <li>Analysis of fragment length patterns</li>
          </ol>
          <div className="mt-4 p-3 bg-gray-900 rounded-md text-blue-500 text-sm">
            <span className="font-semibold">Accuracy:</span> The chance of two unrelated individuals having identical 
            DNA profiles is less than 1 in 1 billion when analyzing 13-20 STR markers.
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-indigo-500">STR Markers</h3>
          <p className="mb-4">
            Commonly used STR markers in forensic analysis:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>D3S1358, TH01, D21S11</li>
            <li>D18S51, Penta E, D5S818</li>
            <li>D13S317, D7S820, D16S539</li>
            <li>CSF1PO, Penta D, vWA</li>
          </ul>
          <div className="mt-4 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" className="bg-gray-900 w-full h-auto">
              <text x="20" y="30" fill="#4B5563" fontSize="14">STR Region: [GATA]<tspan fill="#EF4444">7</tspan></text>
              <text x="20" y="60" fill="#4B5563" fontSize="14">Allele 1: [GATA]<tspan fill="#EF4444">6</tspan></text>
              <text x="20" y="90" fill="#4B5563" fontSize="14">Allele 2: [GATA]<tspan fill="#EF4444">8</tspan></text>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Ancestry Analysis</h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" className="bg-gray-900 w-full h-auto">
                {/* World map with ancestry paths */}
                <circle cx="250" cy="150" r="120" fill="#E5E7EB" />
                
                {/* Continental regions */}
                <path d="M150,100 Q200,50 250,80 Q300,50 350,100 Q380,150 350,200 Q300,250 250,220 Q200,250 150,200 Q120,150 150,100 Z" fill="#3B82F6" opacity="0.3" />
                <text x="250" y="100" textAnchor="middle" fill="#1E40AF" fontSize="14">Europe</text>
                
                <path d="M50,150 Q80,100 130,120 Q150,80 200,100 L220,150 L200,200 Q150,180 130,220 Q80,200 50,150 Z" fill="#10B981" opacity="0.3" />
                <text x="130" y="150" textAnchor="middle" fill="#065F46" fontSize="14">Africa</text>
                
                <path d="M350,100 L450,80 L430,150 L450,220 L350,200 Z" fill="#EF4444" opacity="0.3" />
                <text x="400" y="150" textAnchor="middle" fill="#991B1B" fontSize="14">Asia</text>
                
                <path d="M250,220 L350,200 L330,250 L250,270 Z" fill="#F59E0B" opacity="0.3" />
                <text x="300" y="240" textAnchor="middle" fill="#92400E" fontSize="14">Oceania</text>
                
                <path d="M150,200 L50,220 L70,270 L150,250 Z" fill="#8B5CF6" opacity="0.3" />
                <text x="100" y="240" textAnchor="middle" fill="#5B21B6" fontSize="14">Americas</text>
                
                {/* Person */}
                <circle cx="250" cy="150" r="15" fill="#4B5563" />
                <text x="250" y="190" textAnchor="middle" fill="#4B5563" fontSize="14">You</text>
                
                {/* Ancestry lines */}
                <path d="M250,150 L200,130" stroke="#EF4444" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M250,150 L280,170" stroke="#10B981" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M250,150 L230,200" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,5" />
                
                <text x="250" y="280" textAnchor="middle" fill="#4B5563" fontSize="14">Figure: Ancestral Origins Mapping</text>
              </svg>
            </div>
            <div className="md:w-1/2 md:pl-6">
              <p className="mb-4">
                Ancestry analysis examines specific DNA markers that vary in frequency between populations. 
                By comparing your DNA to reference populations, we can estimate your genetic ancestry composition.
              </p>
              <div className="bg-gray-900 p-4 rounded-lg mb-4">
                <p className="text-blue-800">
                  <span className="font-semibold">Key Markers Used:</span>
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Autosomal SNPs (ancestry informative markers)</li>
                  <li>Mitochondrial DNA (maternal lineage)</li>
                  <li>Y-chromosome markers (paternal lineage)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-indigo-500">Types of Ancestry Analysis</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-semibold">Autosomal DNA:</span> Overall ancestry from both parents (last 5-7 generations)</li>
            <li><span className="font-semibold">mtDNA:</span> Direct maternal line (thousands of years)</li>
            <li><span className="font-semibold">Y-DNA:</span> Direct paternal line (males only)</li>
            <li><span className="font-semibold">X-DNA:</span> Special inheritance pattern analysis</li>
          </ul>
          <div className="mt-4 p-3 bg-gray-900 rounded-md text-blue-500 text-sm">
            <span className="font-semibold">Note:</span> Autosomal DNA tests are most common in commercial ancestry testing.
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-xl shadow-md ">
          <h3 className="text-xl font-semibold mb-3 text-indigo-500">Reference Populations</h3>
          <p className="mb-4">
            Ancestry estimates compare your DNA to these major groups:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>African (Yoruba, Luhya, etc.)</li>
            <li>European (British, Finnish, Iberian, etc.)</li>
            <li>East Asian (Han Chinese, Japanese, etc.)</li>
            <li>South Asian (Indian, Pakistani, etc.)</li>
            <li>Native American (various indigenous groups)</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Haplogroups</h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" className="bg-gray-900 w-full h-auto">
                {/* Haplogroup tree */}
                <path d="M200,50 L200,80 M200,80 L150,120 M200,80 L250,120 M150,120 L120,160 M150,120 L180,160 M250,120 L220,160 M250,120 L280,160" stroke="#6B7280" strokeWidth="2" fill="none" />
                
                {/* Nodes */}
                <circle cx="200" cy="50" r="15" fill="#3B82F6" />
                <text x="200" y="45" textAnchor="middle" fill="white" fontSize="12">A</text>
                
                <circle cx="200" cy="80" r="12" fill="#8B5CF6" />
                <text x="200" y="85" textAnchor="middle" fill="white" fontSize="10">BT</text>
                
                <circle cx="150" cy="120" r="12" fill="#8B5CF6" />
                <text x="150" y="125" textAnchor="middle" fill="white" fontSize="10">B</text>
                
                <circle cx="250" cy="120" r="12" fill="#8B5CF6" />
                <text x="250" y="125" textAnchor="middle" fill="white" fontSize="10">CT</text>
                
                <circle cx="120" cy="160" r="10" fill="#10B981" />
                <text x="120" y="165" textAnchor="middle" fill="white" fontSize="8">B1</text>
                
                <circle cx="180" cy="160" r="10" fill="#10B981" />
                <text x="180" y="165" textAnchor="middle" fill="white" fontSize="8">B2</text>
                
                <circle cx="220" cy="160" r="10" fill="#10B981" />
                <text x="220" y="165" textAnchor="middle" fill="white" fontSize="8">DE</text>
                
                <circle cx="280" cy="160" r="10" fill="#10B981" />
                <text x="280" y="165" textAnchor="middle" fill="white" fontSize="8">CF</text>
                
                <text x="200" y="200" textAnchor="middle" fill="#ffffffff" fontSize="12">Figure: Simplified Y-DNA Haplogroup Tree</text>
                <text x="200" y="220" textAnchor="middle" fill="#d9e1ecff" fontSize="10">Each letter represents a haplogroup defined by specific mutations</text>
              </svg>
            </div>
            <div className="md:w-1/2 md:pl-6">
              <p className="mb-4">
                Haplogroups are genetic populations that share a common ancestor. They are defined by specific 
                mutations in mitochondrial DNA (mtDNA) or the Y chromosome.
              </p>
              <div className="bg-gray-900 p-4 rounded-lg mb-4">
                <p className="text-blue-500">
                  <span className="font-semibold">Examples:</span>
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Y-DNA: R1b (Western Europe), Q (Native American)</li>
                  <li>mtDNA: H (Europe), L (Africa), A (Native American)</li>
                </ul>
              </div>
              <p>
                Haplogroups can reveal ancient migration patterns of your ancestors tens of thousands of years ago.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-3 text-indigo-500">In Genetic Analysis</h3>
        <p>
          Our ancestry analysis examines hundreds of thousands of SNPs across your genome to compare with global 
          reference populations. We provide both percentage estimates of your ancestral composition and 
          information about your haplogroups when possible.
        </p>
      </div>
      </div>
    </div>
  );
};

export default DNAFingerprinting;