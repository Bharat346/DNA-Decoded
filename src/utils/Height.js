function predictHeight(genotype) {
  let heightCm = 170; // average baseline height

  const heightSnps = [
    { rsid: "rs1042725", effect: 0.4, heightAllele: "T" },
    { rsid: "rs143384", effect: 0.3, heightAllele: "A" },
    { rsid: "rs724016", effect: 0.2, heightAllele: "G" },
    { rsid: "rs6905272", effect: 0.15, heightAllele: "C" },
    { rsid: "rs7856617", effect: 0.25, heightAllele: "T" },
  ];

  for (const snp of heightSnps) {
    const genotypeValue = genotype[snp.rsid] || "";
    const alleleCount = genotypeValue.split("").filter(allele => allele === snp.heightAllele).length;
    heightCm += alleleCount * snp.effect;
  }

  return heightCm.toFixed(2) + " cm";
}
