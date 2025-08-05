function predictEyeColorExtended(genotype) {
  const { rs12913832, rs1800407, rs1393350, rs12896399, rs16891982 } = genotype;

  let lightScore = 0;
  let greenScore = 0;

  // HERC2: rs12913832
  if (rs12913832 === 'AA') lightScore += 4;
  else if (rs12913832 === 'AG') {
    lightScore += 2;
    greenScore += 2;
  } else if (rs12913832 === 'GG') lightScore += 0;

  // OCA2: rs1800407
  if (rs1800407.includes('T')) {
    lightScore += 1;
    greenScore += 1;
  }

  // TYR: rs1393350
  if (rs1393350.includes('A')) lightScore += 1;

  // SLC24A4: rs12896399
  if (rs12896399.includes('T')) lightScore += 1;

  // SLC45A2: rs16891982
  if (rs16891982.includes('G')) lightScore += 1;

  // Decision Logic
  if (lightScore >= 7) {
    return "Gray";
  } else if (lightScore >= 5) {
    return greenScore >= 2 ? "Green" : "Blue";
  } else if (lightScore >= 3) {
    return greenScore >= 2 ? "Hazel" : "Amber";
  } else {
    return "Brown";
  }
}


// CHROM	POS	rsID	REF	ALT	GT	Genotype	Meaning
// 1	10177	rs123456	A	T	0/1	A/T	Heterozygous (one ref, one alt)
// 1	10235	rs987654	T	A	1/1	A/A	Homozygous alternate
// 2	13589	rs567890	G	C	0/0	G/G	Homozygous reference
// 3	24680	rs135792	T	C	0/1	T/C	Heterozygous
// 16	1234567	rs12913832	A	G	1/1	G/G	Homozygous alternate (common in blue eyes)
// 12	3456789	rs10427255	C	T	0/1	C/T	Heterozygous
// 8	9101112	rs4988235	T	C	0/0	T/T	Homozygous reference


// What 0, 1, 2 Mean — General Rule:
// 0 → First allele = Reference

// 1 → First alternate allele

// 2 → Second alternate allele (if ALT column = A,C)

// 0/0 → Homozygous Reference (e.g., G/G)

// 0/1 → Heterozygous (e.g., G/A)

// 1/1 → Homozygous Alternate (e.g., A/A)

// 1/2 → Heterozygous with two different alternates (e.g., A/C) — only possible if ALT column has multiple alleles like A,C
