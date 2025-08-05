// src/utils/dnaParser.js

export const parseDNAData = (content, fileType) => {
  switch (fileType.toLowerCase()) {
    case "vcf":
      return parseVCF(content);
    case "txt":
    case "rawdata":
      return parseRawData(content);
    default:
      throw new Error(`Unsupported file type: ${fileType}`);
  }
};

export const parseVCF = (file) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    const content = e.target.result;
  };
  reader.onerror = (e) => {
    console.error("Error reading file:", e.target.error);
  };

  reader.readAsText(file); // Read the file as plain text
  const lines = content.split("\n");
  const variants = [];
  const metaData = {};

  // Extract metadata from headers
  lines
    .filter((line) => line.startsWith("##"))
    .forEach((metaLine) => {
      const [key, value] = metaLine.substring(2).split("=");
      if (key && value) metaData[key] = value;
    });

  // Process variant lines
  for (const line of lines) {
    if (line.startsWith("#") || !line.trim()) continue;

    const fields = line.split("\t");
    if (fields.length < 8) continue;

    variants.push({
      chr: fields[0],
      pos: fields[1],
      rsid: fields[2] === "." ? `chr${fields[0]}:${fields[1]}` : fields[2],
      ref: fields[3],
      alt: fields[4],
      qual: fields[5],
      filter: fields[6],
      info: parseInfoField(fields[7]),
      format: fields[8]?.split(":") || [],
      samples: fields.slice(9).map((sample) => {
        const values = sample.split(":");
        return fields[8]?.split(":").reduce((obj, key, i) => {
          obj[key] = values[i];
          return obj;
        }, {});
      }),
    });
  }

  return {
    metadata: metaData,
    variants,
    fileType: "vcf",
  };
};

const parseRawData = (content) => {
  const lines = content.split("\n");
  const variants = [];
  const headers = [];
  let headerLineFound = false;

  for (const line of lines) {
    if (!line.trim() || line.startsWith("#")) {
      if (line.startsWith("#rsid")) {
        // Found header line
        headers.push(...line.replace("#", "").split("\t"));
        headerLineFound = true;
      }
      continue;
    }

    const fields = line.split("\t");
    if (!headerLineFound && fields.length >= 4) {
      // No headers found, use default format
      variants.push({
        rsid: fields[0],
        chromosome: fields[1],
        position: fields[2],
        genotype: fields[3],
        ref: "N",
        alt: "N",
      });
    } else if (headers.length > 0) {
      // Use headers to map fields
      const variant = {};
      headers.forEach((header, i) => {
        variant[header.toLowerCase()] = fields[i];
      });
      variants.push(variant);
    }
  }

  return {
    variants,
    fileType: "rawdata",
  };
};

const parseInfoField = (infoString) => {
  if (!infoString || infoString === ".") return {};

  return infoString.split(";").reduce((info, field) => {
    const [key, value] = field.split("=");
    if (key) info[key] = value || true;
    return info;
  }, {});
};

let content = `##fileformat=VCFv4.2
##fileDate=20230615
##source=DNA_Trait_Finder_Sample
##reference=GRCh38
#CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO	FORMAT	SAMPLE
1	10177	rs123456	A	T	.	PASS	.	GT	0/1
1	10235	rs987654	T	A	.	PASS	.	GT	1/1
2	13589	rs567890	G	C	.	PASS	.	GT	0/0
3	24680	rs135792	T	C	.	PASS	.	GT	0/1
16	1234567	rs12913832	A	G	.	PASS	.	GT	1/1
12	3456789	rs10427255	C	T	.	PASS	.	GT	0/1
8	9101112	rs4988235	T	C	.	PASS	.	GT	0/0`;
