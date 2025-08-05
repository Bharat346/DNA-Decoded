import React from "react";

const TraitGenes = () => {
  return (
    <div className="mx-auto px-4 py-8 text-gray-100 bg-gray-900 flex justify-center">
      <div className="max-w-4xl">
        <h1 className="max-w-4xl text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
          Genes That Affect Physical Traits
        </h1>

        <div className="bg-gray-800 rounded-xl overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">
              How Genes Influence Your Appearance
            </h2>

            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-gray-900 md:w-1/2 mb-6 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 300"
                  className="w-full h-auto"
                >
                  {/* Human silhouette with gene markers */}
                  <path
                    d="M250,50 Q275,100 250,150 Q225,200 250,250"
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="2"
                  />
                  <path
                    d="M250,70 L300,70"
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="2"
                  />
                  <path
                    d="M250,100 L300,90"
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="2"
                  />
                  <path
                    d="M250,130 L300,110"
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="2"
                  />
                  <path
                    d="M250,160 L300,130"
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="2"
                  />
                  <path
                    d="M250,190 L300,150"
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="2"
                  />
                  <path
                    d="M250,220 L300,170"
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="2"
                  />

                  {/* Gene markers */}
                  <circle cx="320" cy="70" r="15" fill="#3B82F6" />
                  <text
                    x="320"
                    y="75"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                  >
                    OCA2
                  </text>

                  <circle cx="320" cy="110" r="15" fill="#8B5CF6" />
                  <text
                    x="320"
                    y="115"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                  >
                    MC1R
                  </text>

                  <circle cx="320" cy="150" r="15" fill="#10B981" />
                  <text
                    x="320"
                    y="155"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                  >
                    FGF5
                  </text>

                  <circle cx="320" cy="190" r="15" fill="#EF4444" />
                  <text
                    x="320"
                    y="195"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                  >
                    SLC24A5
                  </text>

                  <text
                    x="250"
                    y="280"
                    textAnchor="middle"
                    fill="#4B5563"
                    fontSize="14"
                  >
                    Figure: Key Genes Influencing Physical Traits
                  </text>
                </svg>
              </div>
              <div className="md:w-1/2 md:pl-6">
                <p className="mb-4">
                  Many physical traits are polygenic - influenced by multiple
                  genes working together. However, some genes have particularly
                  strong effects on specific characteristics.
                </p>
                <div className="bg-gray-900 p-4 rounded-lg mb-4">
                  <p className="text-orange-500">
                    <span className="font-semibold">Key Concept:</span> While
                    genes influence traits, environmental factors (sun exposure,
                    nutrition) also play important roles in many cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-blue-500">
              Eye Color
            </h3>
            <p className="mb-4">
              Primarily influenced by the{" "}
              <span className="font-semibold">OCA2</span> and{" "}
              <span className="font-semibold">HERC2</span> genes on chromosome
              15:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>OCA2: Melanin production in iris</li>
              <li>HERC2: Regulates OCA2 expression</li>
              <li>Other genes (SLC24A4, TYR) have minor effects</li>
            </ul>
            <div className="mt-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 100"
                className="w-full h-auto"
              >
                <circle cx="70" cy="50" r="30" fill="#7C3AED" />
                <circle cx="70" cy="50" r="15" fill="#1E40AF" />
                <circle cx="80" cy="40" r="5" fill="white" />
                <text
                  x="70"
                  y="95"
                  textAnchor="middle"
                  fill="#4B5563"
                  fontSize="12"
                >
                  Blue
                </text>

                <circle cx="150" cy="50" r="30" fill="#10B981" />
                <circle cx="150" cy="50" r="15" fill="#065F46" />
                <circle cx="160" cy="40" r="5" fill="white" />
                <text
                  x="150"
                  y="95"
                  textAnchor="middle"
                  fill="#4B5563"
                  fontSize="12"
                >
                  Green
                </text>

                <circle cx="230" cy="50" r="30" fill="#92400E" />
                <circle cx="230" cy="50" r="15" fill="#451A03" />
                <circle cx="240" cy="40" r="5" fill="white" />
                <text
                  x="230"
                  y="95"
                  textAnchor="middle"
                  fill="#4B5563"
                  fontSize="12"
                >
                  Brown
                </text>
              </svg>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-indigo-500">
              Hair Color & Texture
            </h3>
            <p className="mb-4">
              Key genes influencing hair characteristics:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">MC1R</span>: Red hair, fair skin
              </li>
              <li>
                <span className="font-semibold">IRF4</span>: Blonde hair
              </li>
              <li>
                <span className="font-semibold">FGF5</span>: Hair length
              </li>
              <li>
                <span className="font-semibold">EDAR</span>: Hair thickness
              </li>
            </ul>
            <div className="mt-4 p-3 bg-gray-900 rounded-md text-purple-500 text-sm">
              <span className="font-semibold">Note:</span> Over 100 genes
              contribute to hair color variation.
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Skin Pigmentation
            </h2>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 400 200"
                  className="bg-gray-900 w-full h-auto"
                >
                  <rect
                    x="50"
                    y="50"
                    width="300"
                    height="100"
                    fill="#FCD34D"
                    rx="10"
                  />
                  <text
                    x="200"
                    y="80"
                    textAnchor="middle"
                    fill="#92400E"
                    fontSize="16"
                  >
                    Skin Tone Variation
                  </text>

                  <rect
                    x="70"
                    y="100"
                    width="60"
                    height="30"
                    fill="#F59E0B"
                    rx="3"
                  />
                  <text
                    x="100"
                    y="120"
                    textAnchor="middle"
                    fill="#92400E"
                    fontSize="12"
                  >
                    SLC24A5
                  </text>

                  <rect
                    x="150"
                    y="100"
                    width="60"
                    height="30"
                    fill="#F59E0B"
                    rx="3"
                  />
                  <text
                    x="180"
                    y="120"
                    textAnchor="middle"
                    fill="#92400E"
                    fontSize="12"
                  >
                    SLC45A2
                  </text>

                  <rect
                    x="230"
                    y="100"
                    width="60"
                    height="30"
                    fill="#F59E0B"
                    rx="3"
                  />
                  <text
                    x="260"
                    y="120"
                    textAnchor="middle"
                    fill="#92400E"
                    fontSize="12"
                  >
                    TYR
                  </text>
                </svg>
              </div>
              <div className="md:w-1/2 md:pl-6">
                <p className="mb-4">
                  Skin color is influenced by melanin production and
                  distribution. Key genes include:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">SLC24A5</span>: Accounts for
                    25-40% of European-African skin tone difference
                  </li>
                  <li>
                    <span className="font-semibold">SLC45A2</span>: Affects
                    melanosome maturation
                  </li>
                  <li>
                    <span className="font-semibold">TYR</span>: Encodes
                    tyrosinase, key enzyme in melanin production
                  </li>
                </ul>
                <div className="mt-4 bg-gray-900 p-3 rounded-md text-blue-500 text-sm">
                  <span className="font-semibold">Evolutionary note:</span> Skin
                  pigmentation adaptations correlate with UV radiation levels in
                  different geographic regions.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-indigo-500">
              Height
            </h3>
            <p className="mb-4">
              One of the most polygenic traits, with over 700 identified
              variants:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">HMGA2</span>: Strong association
                with height
              </li>
              <li>
                <span className="font-semibold">GDF5</span>: Bone growth
                regulation
              </li>
              <li>
                <span className="font-semibold">FGFR3</span>: Skeletal
                development
              </li>
            </ul>
            <div className="mt-4 p-3 bg-gray-900 rounded-md text-blue-500 text-sm">
              <span className="font-semibold">Heritability:</span> ~80% of
              height variation is genetic, 20% environmental (nutrition, health)
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-200">
              Other Notable Traits
            </h3>
            <p className="mb-4">
              Genes influencing various characteristics:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">ABCC11</span>: Earwax type
                (wet/dry)
              </li>
              <li>
                <span className="font-semibold">ACTN3</span>: Muscle performance
              </li>
              <li>
                <span className="font-semibold">ALDH2</span>: Alcohol flush
                reaction
              </li>
              <li>
                <span className="font-semibold">TAS2R38</span>: Bitter taste
                perception
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3 text-indigo-500">
            In Genetic Analysis
          </h3>
          <p>
            Our DNA analysis examines key variants in these trait-associated
            genes to predict your likely physical characteristics. Remember that
            most traits are influenced by multiple genes and environmental
            factors, so predictions are probabilistic rather than deterministic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TraitGenes;
