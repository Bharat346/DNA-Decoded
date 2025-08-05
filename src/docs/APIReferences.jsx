import React from "react";

const APIReferences = () => {
  return (
    <div className=" mx-auto px-4 py-8 text-gray-100 flex justify-center bg-gray-900">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
          API References & Data Sources
        </h1>

        <div className="rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Genomic Data APIs
            </h2>

            <div className="space-y-6">
              {/* NCBI Card */}
              <div className="bg-gray-800 border border-gray-200 rounded-lg p-5">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-500">
                      NCBI APIs
                    </h3>
                    <p className="mb-3">
                      National Center for Biotechnology Information provides
                      several APIs for genomic data:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <span className="font-semibold">E-Utilities:</span>{" "}
                        Access to PubMed, Gene, SNP databases
                      </li>
                      <li>
                        <span className="font-semibold">BLAST:</span> Sequence
                        alignment tool API
                      </li>
                      <li>
                        <span className="font-semibold">ClinVar:</span> Clinical
                        variant interpretations
                      </li>
                    </ul>
                    <a
                      href="https://www.ncbi.nlm.nih.gov/home/develop/api/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-blue-500 hover:text-blue-800"
                    >
                      https://www.ncbi.nlm.nih.gov/home/develop/api/
                    </a>
                  </div>
                </div>
              </div>

              {/* Ensembl Card */}
              <div className="border border-gray-200 rounded-lg p-5 bg-gray-800">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-green-500">
                      Ensembl REST API
                    </h3>
                    <p className="mb-3">
                      Provides access to genomic features, sequences, variants,
                      and comparative genomics:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Gene information and sequences</li>
                      <li>Variant effect prediction</li>
                      <li>Orthologs and homologs</li>
                      <li>Genomic alignments</li>
                    </ul>
                    <a
                      href="https://rest.ensembl.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-green-500 hover:text-green-800"
                    >
                      https://rest.ensembl.org
                    </a>
                  </div>
                </div>
              </div>

              {/* GWAS Catalog Card */}
              <div className="border border-gray-200 rounded-lg p-5 bg-gray-800">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-500">
                      GWAS Catalog API
                    </h3>
                    <p className="mb-3">
                      Access to genome-wide association study findings and
                      trait-associated variants:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Trait-associated SNPs</li>
                      <li>Effect sizes and p-values</li>
                      <li>Risk alleles and odds ratios</li>
                      <li>Study metadata</li>
                    </ul>
                    <a
                      href="https://www.ebi.ac.uk/gwas/docs/api"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-purple-500 hover:text-purple-800"
                    >
                      https://www.ebi.ac.uk/gwas/docs/api
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Variant Annotation APIs
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* VEP Card */}
              <div className="border border-gray-200 rounded-lg p-5 bg-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-blue-500">
                  Variant Effect Predictor (VEP)
                </h3>
                <p className="mb-3">
                  Predicts functional effects of genomic variants:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Missense, nonsense, synonymous variants</li>
                  <li>Splice site effects</li>
                  <li>Regulatory consequences</li>
                  <li>Protein domain impacts</li>
                </ul>
                <a
                  href="https://rest.ensembl.org/documentation/info/vep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-500 hover:text-blue-800"
                >
                  https://rest.ensembl.org/documentation/info/vep
                </a>
              </div>

              {/* MyVariant.info Card */}
              <div className="border border-gray-200 rounded-lg p-5 bg-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-green-500">
                  MyVariant.info
                </h3>
                <p className="mb-3">
                  Aggregates variant annotations from multiple sources:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>ClinVar clinical significance</li>
                  <li>dbSNP frequencies</li>
                  <li>GWAS associations</li>
                  <li>Drug responses</li>
                </ul>
                <a
                  href="https://myvariant.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-green-500 hover:text-green-800"
                >
                  https://myvariant.info
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Ancestry & Trait APIs
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* SNPedia Card */}
              <div className="border border-gray-200 rounded-lg p-5 bg-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-purple-500">
                  SNPedia API
                </h3>
                <p className="mb-3">
                  Crowd-sourced database of SNP effects on traits:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Trait associations</li>
                  <li>Genotype risks</li>
                  <li>Magnitude effects</li>
                  <li>Research references</li>
                </ul>
                <a
                  href="https://www.snpedia.com/index.php/SNPedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-purple-500 hover:text-purple-800"
                >
                  https://www.snpedia.com
                </a>
              </div>

              {/* OpenSNP Card */}
              <div className="border border-gray-200 rounded-lg p-5 bg-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-indigo-500">
                  OpenSNP API
                </h3>
                <p className="mb-3">
                  Crowd-sourced genetic and phenotypic data:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>User-shared genotype data</li>
                  <li>Trait self-reports</li>
                  <li>Ancestry information</li>
                  <li>Research participation</li>
                </ul>
                <a
                  href="https://opensnp.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-indigo-500 hover:text-indigo-800"
                >
                  https://opensnp.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl shadow-lg overflow-hidden mb-8 animate-fade-in">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Data Formats & Standards
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-blue-500">VCF</h3>
                <p className="text-sm">
                  Variant Call Format - Standard for DNA variants with
                  genotypes, quality scores, and annotations.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2 text-green-500">BED</h3>
                <p className="text-sm">
                  Browser Extensible Data - Format for genomic regions and
                  annotations.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2 text-purple-500">FASTA</h3>
                <p className="text-sm">
                  Text-based format for nucleotide or peptide sequences.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2 text-red-500">GFF/GTF</h3>
                <p className="text-sm">
                  General Feature Format - For gene annotations and features.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2 text-yellow-500">SAM/BAM</h3>
                <p className="text-sm">
                  Sequence Alignment/Map - For aligned sequencing reads.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2 text-indigo-500">JSON</h3>
                <p className="text-sm">
                  Common format for API responses with structured data.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3 text-indigo-500">
            Implementation Notes
          </h3>
          <p>
            Our DNA analysis platform integrates with several of these APIs to
            provide comprehensive reports. We cache frequently accessed data to
            improve performance while ensuring we use the most up-to-date
            information from primary sources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default APIReferences;
