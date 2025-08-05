import codonTable from '../data/codon.json';

export async function translateDNAToProtein(dna) {
  // Validate DNA sequence
  if (!/^[ATGC]+$/i.test(dna)) {
    throw new Error('Invalid DNA sequence - must contain only A, T, G, C characters');
  }

  // Convert to uppercase and remove whitespace
  const cleanDNA = dna.toUpperCase().replace(/\s/g, '');

  // Check length is divisible by 3
  if (cleanDNA.length % 3 !== 0) {
    throw new Error('DNA sequence length must be a multiple of 3');
  }

  let protein = '';
  for (let i = 0; i < cleanDNA.length; i += 3) {
    const codon = cleanDNA.substr(i, 3);
    const aminoAcid = codonTable[codon] || '?';
    if (aminoAcid === 'Stop') break;
    protein += aminoAcid;
  }

  return protein;
}

export async function fetchProteinData(proteinSequence) {
  // This is now an alias for fetchUniProtData for backward compatibility
  return fetchUniProtData(proteinSequence);
}

export async function fetchUniProtData(proteinSequence, accession = null) {
  try {
    let url;
    if (accession) {
      url = `https://rest.uniprot.org/uniprotkb/${accession}.json`;
    } else {
      // In a real app, you would search UniProt with the protein sequence
      // For demo, we'll use a mock accession number
      url = `https://rest.uniprot.org/uniprotkb/P12345.json`;
    }
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`UniProt API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching UniProt data:", error);
    return getMockUniProtData(proteinSequence);
  }
}

export async function fetchPhysicalTraits(geneName) {
  try {
    // Mock API for physical traits - in a real app, you'd use a genomics API
    const mockTraits = {
      "GOT2": {
        height: { value: "175-185 cm", confidence: "high" },
        eyeColor: { value: "brown", confidence: "medium" },
        hairColor: { value: "black", confidence: "high" },
        skinPigmentation: { value: "medium", confidence: "medium" }
      },
      "default": {
        height: { value: "165-180 cm", confidence: "low" },
        eyeColor: { value: "variable", confidence: "low" },
        hairColor: { value: "variable", confidence: "low" },
        skinPigmentation: { value: "variable", confidence: "low" }
      }
    };

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockTraits[geneName] || mockTraits.default);
      }, 500);
    });
  } catch (error) {
    console.error("Error fetching physical traits:", error);
    return null;
  }
}

function getMockUniProtData(proteinSequence) {
  return {
    primaryAccession: "P12345",
    organism: {
      scientificName: "Homo sapiens",
      commonName: "Human",
      taxonId: 9606,
      lineage: ["Eukaryota", "Metazoa", "Chordata", "Mammalia", "Primates", "Hominidae"]
    },
    proteinDescription: {
      recommendedName: {
        fullName: {
          value: "Aspartate aminotransferase, mitochondrial"
        },
        shortNames: [
          { value: "mAspAT" }
        ],
        ecNumbers: [
          { value: "2.6.1.1" },
          { value: "2.6.1.7" }
        ]
      },
      alternativeNames: [
        { fullName: { value: "Glutamate oxaloacetate transaminase 2" } },
        { fullName: { value: "Kynurenine aminotransferase 4" } }
      ]
    },
    sequence: {
      value: proteinSequence,
      length: proteinSequence.length,
      molWeight: proteinSequence.length * 110, // Approximate
      crc64: "12F54284974D27A5",
      md5: "CF84DAC1BDDD05632A89E4C1F186D0D3"
    },
    comments: [
      {
        commentType: "FUNCTION",
        texts: [{
          value: "Catalyzes the irreversible transamination of the L-tryptophan metabolite L-kynurenine to form kynurenic acid."
        }]
      },
      {
        commentType: "DISEASE",
        disease: {
          diseaseName: "Hyperprolinemia",
          diseaseId: "DI-12345"
        },
        texts: [{
          value: "Defects in this gene may be a cause of hyperprolinemia."
        }]
      },
      {
        commentType: "SUBCELLULAR LOCATION",
        subcellularLocations: [{
          location: {
            value: "Mitochondrion matrix",
            id: "SL-0170"
          }
        }]
      }
    ],
    features: [
      { 
        type: "Active site", 
        description: "Pyridoxal phosphate binding",
        location: {
          start: 123,
          end: 123
        }
      }
    ],
    genes: [
      { 
        geneName: { 
          value: "GOT2" 
        },
        synonyms: [
          { value: "ASPAT" }
        ]
      }
    ],
    extraAttributes: {
      countByCommentType: {
        "FUNCTION": 1,
        "DISEASE": 1,
        "SUBCELLULAR LOCATION": 1
      },
      countByFeatureType: {
        "Active site": 1,
        "Binding site": 2,
        "Modified residue": 3
      },
      uniParcId: "UPI0001C61C61"
    }
  };
}