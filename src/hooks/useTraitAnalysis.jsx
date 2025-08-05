import { useState, useEffect } from 'react';
import traitMap from '../data/traitMap.json';

const useTraitAnalysis = (dnaData) => {
  // State management
  const [analysis, setAnalysis] = useState({
    traits: null,
    diseases: [],
    strengths: [],
    weaknesses: [],
    geneInfo: [],
    loading: false,
    error: null
  });

  // Process VCF JSON data
  const processVcfData = (data) => {
    if (!data || !data.variants) return {};
    
    const genotypeMap = {};
    data.variants.forEach(variant => {
      const gt = variant.samples?.[0]?.GT || '0/0';
      genotypeMap[variant.rsid] = convertGenotype(variant.ref, variant.alt, gt);
    });
    return genotypeMap;
  };

  // Convert genotype format
  const convertGenotype = (ref, alt, gt) => {
    if (gt === '0/0') return `${ref}${ref}`;
    if (gt === '0/1') return `${ref}${alt}`;
    if (gt === '1/1') return `${alt}${alt}`;
    return '--';
  };

  // Predict physical traits using traitMap
  const predictTraits = (genotype) => {
    const traits = {};
    
    // Eye color prediction
    if (genotype.rs12913832 && traitMap.rs12913832) {
      const eyeColorVariant = traitMap.rs12913832.variant[genotype.rs12913832];
      if (eyeColorVariant) {
        traits.eyeColor = {
          prediction: getEyeColorPrediction(genotype.rs12913832),
          description: eyeColorVariant.description,
          effect: eyeColorVariant.effect
        };
      }
    }

    // Hair color prediction
    if ((genotype.rs1805007 || genotype.rs1805008) && traitMap.rs1805007) {
      traits.hairColor = {
        prediction: getHairColorPrediction(genotype),
        description: "Predicted based on pigmentation genes",
        effect: "Genetic influence on melanin production"
      };
    }

    // Height prediction
    if (genotype.rs10427255 && traitMap.rs10427255) {
      const heightVariant = traitMap.rs10427255.variant[genotype.rs10427255];
      if (heightVariant) {
        traits.height = {
          prediction: getHeightPrediction(genotype),
          description: heightVariant.description,
          effect: heightVariant.effect
        };
      }
    }

    // Lactose tolerance
    if (genotype.rs4988235 && traitMap.rs4988235) {
      const lactoseVariant = traitMap.rs4988235.variant[genotype.rs4988235];
      if (lactoseVariant) {
        traits.lactoseTolerance = {
          prediction: getLactosePrediction(genotype.rs4988235),
          description: lactoseVariant.description,
          effect: lactoseVariant.effect
        };
      }
    }

    return traits;
  };

  // Helper prediction functions
  const getEyeColorPrediction = (genotype) => {
    if (genotype === 'AA') return 'Blue';
    if (genotype === 'AG') return 'Green/Hazel';
    if (genotype === 'GG') return 'Brown';
    return 'Unknown';
  };

  const getHairColorPrediction = (genotype) => {
    // Simplified prediction based on MC1R variants
    if ((genotype.rs1805007 && genotype.rs1805007.includes('T')) ){
      return 'Red';
    }
    if (genotype.rs12913832 === 'AA') return 'Blonde';
    if (genotype.rs12913832 === 'GG') return 'Dark Brown/Black';
    return 'Brown';
  };

  const getHeightPrediction = (genotype) => {
    // Simplified height calculation
    let height = 170; // Average baseline
    if (genotype.rs10427255 === 'CT') height += 0.5;
    if (genotype.rs10427255 === 'TT') height += 1;
    return `${height.toFixed(1)} cm`;
  };

  const getLactosePrediction = (genotype) => {
    if (genotype === 'CC') return 'Tolerant';
    if (genotype === 'TC') return 'Partially Tolerant';
    if (genotype === 'TT') return 'Intolerant';
    return 'Unknown';
  };

  // Analyze disease risks
  const analyzeDiseases = (genotype) => {
    const diseases = [];
    
    // Check for celiac disease risk
    if (genotype.rs2187668 === 'TT') {
      diseases.push({
        name: "Celiac Disease",
        gene: "HLA-DQ2",
        risk: "High",
        description: "High risk for celiac disease (gluten intolerance)"
      });
    }

    // Check for lactose intolerance
    if (genotype.rs4988235 === 'TT') {
      diseases.push({
        name: "Lactose Intolerance", 
        gene: "MCM6",
        risk: "High",
        description: "Likely lactose intolerant"
      });
    }

    return diseases;
  };

  // Analyze strengths and weaknesses
  const analyzeStrengthsWeaknesses = (genotype) => {
    const strengths = [];
    const weaknesses = [];

    // Eye color strengths
    if (genotype.rs12913832 === 'GG') {
      strengths.push({
        trait: "Eye Protection",
        description: "Dark eye color provides natural UV protection",
        gene: "HERC2"
      });
    }

    // Lactose tolerance
    if (genotype.rs4988235 === 'CC') {
      strengths.push({
        trait: "Lactose Tolerance",
        description: "Can digest dairy products effectively",
        gene: "MCM6"
      });
    } else if (genotype.rs4988235 === 'TT') {
      weaknesses.push({
        trait: "Lactose Intolerance",
        description: "May experience digestive issues with dairy",
        gene: "MCM6"
      });
    }

    return { strengths, weaknesses };
  };

  // Fetch gene information from APIs
  const fetchGeneInfo = async (genotype) => {
    const genes = new Set();
    
    // Collect unique genes from the genotype
    Object.keys(genotype).forEach(rsid => {
      if (traitMap[rsid] && traitMap[rsid].gene) {
        genes.add(traitMap[rsid].gene);
      }
    });

    const geneInfo = [];
    
    for (const gene of genes) {
      try {
        // Try NCBI Gene API first
        const ncbiResponse = await fetch(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=gene&term=${gene}[gene]+AND+human[orgn]&retmode=json`);
        const ncbiData = await ncbiResponse.json();
        
        if (ncbiData.result && ncbiData.result.uids && ncbiData.result.uids.length > 0) {
          const geneId = ncbiData.result.uids[0];
          const geneData = ncbiData.result[geneId];
          
          geneInfo.push({
            symbol: gene,
            name: geneData.name || gene,
            description: geneData.description || 'No description available',
            summary: geneData.summary || '',
            location: geneData.genomicinfo?.[0]?.chrloc || 'Unknown',
            source: 'NCBI Gene'
          });
          continue;
        }

        // Fallback to UniProt API
        const uniprotResponse = await fetch(`https://rest.uniprot.org/uniprotkb/search?query=gene:${gene}+AND+organism_id:9606&fields=gene_names,protein_name,cc_function`);
        const uniprotData = await uniprotResponse.json();
        
        if (uniprotData.results && uniprotData.results.length > 0) {
          const protein = uniprotData.results[0];
          geneInfo.push({
            symbol: gene,
            name: protein.proteinName?.value || gene,
            description: protein.genes?.[0]?.geneName?.value || '',
            function: protein.function?.texts?.[0]?.value || '',
            source: 'UniProt'
          });
          continue;
        }

        // If no API data, use basic info from traitMap
        geneInfo.push({
          symbol: gene,
          name: gene,
          description: 'No detailed information available',
          source: 'Local Database'
        });

      } catch (error) {
        console.error(`Error fetching data for gene ${gene}:`, error);
        geneInfo.push({
          symbol: gene,
          name: gene,
          description: 'Error fetching gene information',
          source: 'Error'
        });
      }
    }

    return geneInfo;
  };

  // Main analysis function
  const analyzeData = async () => {
    setAnalysis(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // Process the raw data
      const genotype = processVcfData(dnaData);
      
      // Perform all analyses
      const traits = predictTraits(genotype);
      const diseases = analyzeDiseases(genotype);
      const { strengths, weaknesses } = analyzeStrengthsWeaknesses(genotype);
      const geneInfo = await fetchGeneInfo(genotype);

      setAnalysis({
        traits,
        diseases,
        strengths,
        weaknesses,
        geneInfo,
        loading: false,
        error: null
      });

    } catch (error) {
      console.error("Analysis error:", error);
      setAnalysis(prev => ({ ...prev, loading: false, error: "Failed to analyze DNA data" }));
    }
  };

  // Run analysis when dnaData changes
  useEffect(() => {
    if (dnaData) {
      analyzeData();
    }
  }, [dnaData]);

  return analysis;
};

export default useTraitAnalysis;