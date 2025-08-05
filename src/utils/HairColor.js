function predictHairColor(genotype) {
  const {
    rs12913832,
    rs1805007,
    rs1805008,
    rs12821256,
    rs12203592,
    rs1426654,
  } = genotype;

  let redScore = 0;
  let lightScore = 0;
  let darkScore = 0;

  // Red hair from MC1R
  if (rs1805007.includes("T")) redScore += 2;
  if (rs1805008.includes("T")) redScore += 2;

  // Light hair markers
  if (rs12913832 === "AA") lightScore += 2;
  else if (rs12913832 === "AG") lightScore += 1;

  if (rs12821256.includes("T")) lightScore += 1;
  if (rs12203592.includes("T")) lightScore += 1;
  if (rs1426654.includes("A")) lightScore += 1;

  // Dark hair if none of the above are significant
  if (rs12913832 === "GG") darkScore += 2;

  // Final decision
  if (redScore >= 3) return "Red";
  else if (lightScore >= 4) return "Blonde";
  else if (lightScore >= 2) return "Light Brown";
  else if (darkScore >= 2) return "Black or Dark Brown";
  else return "Brown";
}


// rsID	Gene	Associated Alleles	Effect
// rs12913832	HERC2	AA → blonde/light hair	A allele reduces melanin
// rs1805007	MC1R	T allele → red hair	Red hair, fair skin
// rs1805008	MC1R	T allele → red/blonde	Alters melanin response
// rs12821256	KITLG	T allele → blond hair	Less melanin production
// rs12203592	IRF4	T allele → lighter hair	Affects pigmentation regulation
// rs1426654	SLC24A5	A allele → lighter tone	Common in Europeans