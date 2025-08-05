import React from "react";

const WhatIsDNA = () => {
  return (
    <div className="mx-auto px-4 py-8 bg-gray-900 text-gray-100 flex justify-center">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          What is DNA?
        </h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in ">
          <div className="md:flex">
            <div className="bg-gray-800 md:w-1/2 p-6 flex items-center justify-center bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 300"
                className="bg-gray-900 w-full h-auto"
              >
                <path
                  d="M100,150 Q150,100 200,150 T300,150 T400,150"
                  stroke="#3B82F6"
                  strokeWidth="8"
                  fill="none"
                />
                <path
                  d="M100,170 Q150,120 200,170 T300,170 T400,170"
                  stroke="#8B5CF6"
                  strokeWidth="8"
                  fill="none"
                />
                <line
                  x1="100"
                  y1="150"
                  x2="100"
                  y2="170"
                  stroke="#10B981"
                  strokeWidth="4"
                />
                <line
                  x1="200"
                  y1="150"
                  x2="200"
                  y2="170"
                  stroke="#10B981"
                  strokeWidth="4"
                />
                <line
                  x1="300"
                  y1="150"
                  x2="300"
                  y2="170"
                  stroke="#10B981"
                  strokeWidth="4"
                />
                <line
                  x1="400"
                  y1="150"
                  x2="400"
                  y2="170"
                  stroke="#10B981"
                  strokeWidth="4"
                />
                <text
                  x="250"
                  y="250"
                  textAnchor="middle"
                  fill="#4B5563"
                  fontSize="16"
                >
                  Figure: DNA Double Helix Structure
                </text>
              </svg>
            </div>
            <div className=" bg-gray-800 md:w-1/2 p-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                The Blueprint of Life
              </h2>
              <p className="mb-4 text-gray-100">
                DNA (Deoxyribonucleic Acid) is the hereditary material in humans
                and almost all other organisms. Nearly every cell in a person's
                body has the same DNA.
              </p>
              <p className="mb-4">
                DNA contains the biological instructions that make each species
                unique. These instructions are used to develop and direct the
                activities of all living organisms.
              </p>
              <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-blue-300">
                  <span className="font-semibold">Key Fact:</span> If stretched
                  out, the DNA in one cell would be about 2 meters long - yet
                  it's packed into a nucleus only about 6 micrometers in
                  diameter.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-purple-500">
              DNA Structure
            </h3>
            <p className="mb-4">
              DNA is made up of molecules called nucleotides. Each nucleotide
              contains:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>A phosphate group</li>
              <li>A sugar molecule (deoxyribose)</li>
              <li>A nitrogenous base (A, T, C, or G)</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-blue-500">
              Base Pairing Rules
            </h3>
            <p className="mb-4">The bases pair specifically with each other:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Adenine (A) pairs with Thymine (T)</li>
              <li>Cytosine (C) pairs with Guanine (G)</li>
            </ul>
            <div className="mt-4 p-3 bg-gray-900 rounded-md text-green-500 text-sm">
              This complementary pairing allows DNA to replicate accurately
              during cell division.
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">
              DNA Replication
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 400 200"
                  className="bg-gray-900 w-full h-auto"
                >
                  {/* Simplified DNA replication animation */}
                  <path
                    d="M50,100 Q100,50 150,100 T250,100 T350,100"
                    stroke="#3B82F6"
                    strokeWidth="6"
                    fill="none"
                  />
                  <path
                    d="M50,120 Q100,70 150,120 T250,120 T350,120"
                    stroke="#8B5CF6"
                    strokeWidth="6"
                    fill="none"
                  />
                  <path
                    d="M50,80 Q100,30 150,80"
                    stroke="#3B82F6"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M50,140 Q100,90 150,140"
                    stroke="#8B5CF6"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                  <text
                    x="200"
                    y="180"
                    textAnchor="middle"
                    fill="#4B5563"
                    fontSize="14"
                  >
                    Figure: DNA Replication Process
                  </text>
                </svg>
              </div>
              <div className="md:w-1/2 md:pl-6">
                <p className="mb-4">
                  DNA replication is the process by which DNA makes a copy of
                  itself during cell division. The double helix unwinds and each
                  strand serves as a template for a new complementary strand.
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Helicase enzyme unwinds the DNA double helix</li>
                  <li>DNA polymerase adds complementary nucleotides</li>
                  <li>Two identical DNA molecules are produced</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 ">
          <h3 className="text-xl font-semibold mb-3 text-indigo-500">
            DNA in Genetic Analysis
          </h3>
          <p>
            In genetic testing, we analyze specific regions of your DNA to
            identify variations that may affect your traits, health risks, and
            ancestry. These variations (SNPs) are like spelling differences in
            your genetic code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIsDNA;
