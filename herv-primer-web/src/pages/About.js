export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-2xl font-semibold mb-3">About</h1>

      <p className="text-gray-600 leading-relaxed">
        The HERV Primer Database is a curated resource for Human Endogenous Retrovirus
        primer sets, genomic loci, and associated biological targets.
      </p>

      <p className="text-gray-600 mt-4">
        It is developed for research use in genomic medicine and bioinformatics,
        supporting reproducible analysis of HERV transcriptional and structural variation.
      </p>
    </div>
  );
}