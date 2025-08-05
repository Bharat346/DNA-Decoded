import React from "react";

const DNAToProtein = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-900 text-gray-100 flex justify-center">
      <div>
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          DNA to Protein
        </h1>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">
              DNA Sequencing
            </h2>

            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-gray-900 md:w-1/2 mb-6 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 300"
                  className="w-full h-auto"
                >
                  {/* DNA sequencing illustration */}
                  <path
                    d="M50,150 Q100,100 150,150 T250,150 T350,150"
                    stroke="#3B82F6"
                    strokeWidth="6"
                    fill="none"
                  />
                  <path
                    d="M50,170 Q100,120 150,170 T250,170 T350,170"
                    stroke="#8B5CF6"
                    strokeWidth="6"
                    fill="none"
                  />

                  {/* Base letters */}
                  <text
                    x="50"
                    y="140"
                    textAnchor="middle"
                    fill="#EF4444"
                    fontSize="20"
                  >
                    A
                  </text>
                  <text
                    x="50"
                    y="190"
                    textAnchor="middle"
                    fill="#EF4444"
                    fontSize="20"
                  >
                    T
                  </text>
                  <text
                    x="150"
                    y="140"
                    textAnchor="middle"
                    fill="#10B981"
                    fontSize="20"
                  >
                    C
                  </text>
                  <text
                    x="150"
                    y="190"
                    textAnchor="middle"
                    fill="#10B981"
                    fontSize="20"
                  >
                    G
                  </text>
                  <text
                    x="250"
                    y="140"
                    textAnchor="middle"
                    fill="#F59E0B"
                    fontSize="20"
                  >
                    G
                  </text>
                  <text
                    x="250"
                    y="190"
                    textAnchor="middle"
                    fill="#F59E0B"
                    fontSize="20"
                  >
                    C
                  </text>
                  <text
                    x="350"
                    y="140"
                    textAnchor="middle"
                    fill="#3B82F6"
                    fontSize="20"
                  >
                    T
                  </text>
                  <text
                    x="350"
                    y="190"
                    textAnchor="middle"
                    fill="#3B82F6"
                    fontSize="20"
                  >
                    A
                  </text>

                  {/* Sequencing machines */}
                  <rect
                    x="400"
                    y="50"
                    width="80"
                    height="60"
                    fill="#6B7280"
                    rx="5"
                  />
                  <text
                    x="440"
                    y="85"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                  >
                    Sequencer
                  </text>

                  <text
                    x="250"
                    y="250"
                    textAnchor="middle"
                    fill="#4B5563"
                    fontSize="14"
                  >
                    Figure: DNA Sequencing Process
                  </text>
                </svg>
              </div>
              <div className="md:w-1/2 md:pl-6">
                <p className="mb-4">
                  DNA sequencing is the process of determining the precise order
                  of nucleotides (A, T, C, G) in a DNA molecule. Modern
                  sequencing technologies can sequence an entire human genome in
                  hours.
                </p>
                <div className="bg-gray-900 p-4 rounded-lg mb-4">
                  <p className="text-blue-500">
                    <span className="font-semibold">Key Methods:</span>
                  </p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Sanger Sequencing (1st generation)</li>
                    <li>Next-Generation Sequencing (NGS)</li>
                    <li>Third-Generation Sequencing (Nanopore)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-800  p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-indigo-500">
              Transcription: DNA → mRNA
            </h3>
            <p className="mb-4">
              The process where a DNA sequence is copied into mRNA by RNA
              polymerase:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Initiation: RNA polymerase binds to promoter</li>
              <li>Elongation: RNA synthesis along DNA template</li>
              <li>Termination: RNA polymerase detaches</li>
            </ol>
            <div className="mt-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 150"
                className="w-full h-auto"
              >
                <text x="20" y="30" fill="#ffffffff" fontSize="14">
                  DNA: A T C G G C A T A (Template Strand)
                </text>
                <text x="20" y="60" fill="#f3f5f8ff" fontSize="14">
                  mRNA: U A G C C G U A U (Complementary)
                </text>
                <text x="20" y="90" fill="#EF4444" fontSize="14">
                  Note: Thymine (T) replaced by Uracil (U) in RNA
                </text>
              </svg>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-blue-500">
              RNA Splicing
            </h3>
            <p className="mb-4">
              Pre-mRNA contains both exons (coding) and introns (non-coding).
              Splicing removes introns and joins exons:
            </p>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 100"
                className="bg-gray-900 w-full h-auto"
              >
                <rect x="50" y="40" width="300" height="20" fill="#6B7280" />
                <rect x="70" y="30" width="60" height="40" fill="#3B82F6" />
                <rect x="170" y="30" width="60" height="40" fill="#3B82F6" />
                <rect x="270" y="30" width="60" height="40" fill="#3B82F6" />
                <path d="M130,50 L170,50" stroke="#F59E0B" strokeWidth="8" />
                <path d="M230,50 L270,50" stroke="#F59E0B" strokeWidth="8" />
                <text
                  x="200"
                  y="90"
                  textAnchor="middle"
                  fill="#4B5563"
                  fontSize="12"
                >
                  Pre-mRNA with Exons (blue) and Introns (yellow)
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Translation: mRNA → Protein
            </h2>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 300"
                  className="bg-gray-900 w-full h-auto"
                >
                  {/* Ribosome illustration */}
                  <ellipse
                    cx="250"
                    cy="150"
                    rx="120"
                    ry="60"
                    fill="#ffa200ff"
                    opacity="0.3"
                  />
                  <text
                    x="250"
                    y="150"
                    textAnchor="middle"
                    fill="#c99c79ff"
                    fontSize="16"
                  >
                    Ribosome
                  </text>

                  {/* mRNA */}
                  <path
                    d="M50,100 L450,100"
                    stroke="#3B82F6"
                    strokeWidth="4"
                    strokeDasharray="5,5"
                  />
                  <text
                    x="250"
                    y="90"
                    textAnchor="middle"
                    fill="#3B82F6"
                    fontSize="14"
                  >
                    mRNA
                  </text>

                  {/* Codons */}
                  <rect
                    x="100"
                    y="80"
                    width="40"
                    height="40"
                    fill="#10B981"
                    opacity="0.5"
                  />
                  <text
                    x="120"
                    y="105"
                    textAnchor="middle"
                    fill="#065F46"
                    fontSize="14"
                  >
                    AUG
                  </text>

                  <rect
                    x="180"
                    y="80"
                    width="40"
                    height="40"
                    fill="#10B981"
                    opacity="0.5"
                  />
                  <text
                    x="200"
                    y="105"
                    textAnchor="middle"
                    fill="#065F46"
                    fontSize="14"
                  >
                    GCC
                  </text>

                  <rect
                    x="260"
                    y="80"
                    width="40"
                    height="40"
                    fill="#10B981"
                    opacity="0.5"
                  />
                  <text
                    x="280"
                    y="105"
                    textAnchor="middle"
                    fill="#065F46"
                    fontSize="14"
                  >
                    UAU
                  </text>

                  {/* tRNA */}
                  <path
                    d="M120,140 L120,200"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                  />
                  <path
                    d="M120,200 L100,220 M120,200 L140,220"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                  />
                  <text
                    x="120"
                    y="240"
                    textAnchor="middle"
                    fill="#8B5CF6"
                    fontSize="12"
                  >
                    tRNA
                  </text>

                  {/* Protein */}
                  <circle
                    cx="350"
                    cy="200"
                    r="30"
                    fill="#EF4444"
                    opacity="0.5"
                  />
                  <text
                    x="350"
                    y="200"
                    textAnchor="middle"
                    fill="#987a7aff"
                    fontSize="14"
                  >
                    Protein
                  </text>

                  <text
                    x="250"
                    y="280"
                    textAnchor="middle"
                    fill="#4B5563"
                    fontSize="14"
                  >
                    Figure: Translation Process in Ribosome
                  </text>
                </svg>
              </div>
              <div className="md:w-1/2 md:pl-6">
                <h3 className="text-xl font-semibold mb-3">
                  The Genetic Code
                </h3>
                <p className="mb-4">
                  The sequence of nucleotides in mRNA is read in groups of three
                  called codons. Each codon specifies a particular amino acid or
                  stop signal.
                </p>
                <div className="bg-gray-900 p-4 rounded-lg mb-4">
                  <p className="text-green-500">
                    <span className="font-semibold">Key Concepts:</span>
                  </p>
                  <ul className="list-disc pl-5 mt-2 ">
                    <li>64 possible codons (4³ combinations)</li>
                    <li>20 standard amino acids</li>
                    <li>Redundant code (multiple codons per amino acid)</li>
                  </ul>
                </div>
                <div className="overflow-x-auto">
                  <table className="bg-gray-900 min-w-full text-sm">
                    <thead>
                      <tr className="border">
                        <th className="px-2 py-1 text-center">Codon</th>
                        <th className="px-2 py-1 text-center">Amino Acid</th>
                        <th className="px-2 py-1 text-center">Codon</th>
                        <th className="px-2 py-1 text-center">Amino Acid</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border">
                        <td className="px-2 py-1 text-center">AUG</td>
                        <td className="px-2 py-1 text-center">Methionine (Start)</td>
                        <td className="px-2 py-1 text-center">UUU, UUC</td>
                        <td className="px-2 py-1 text-center">Phenylalanine</td>
                      </tr>
                      <tr className="border">
                        <td className="px-2 py-1 text-center">UAA, UAG, UGA</td>
                        <td className="px-2 py-1 text-center">Stop</td>
                        <td className="px-2 py-1 text-center">GGU, GGC, GGA, GGG</td>
                        <td className="px-2 py-1 text-center">Glycine</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3 text-indigo-500">
            In Genetic Analysis
          </h3>
          <p>
            When we analyze DNA variants, we pay special attention to changes
            that alter codons (missense mutations) or create premature stop
            codons (nonsense mutations), as these often have significant effects
            on protein function and health outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DNAToProtein;
