export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="bg-white border border-gray-100 rounded-lg p-8">

        <h1 className="text-2xl font-semibold mb-4">
          About the HERV Primer Database
        </h1>

        <div className="space-y-4 text-gray-700 leading-relaxed">

          <p>
            Human endogenous retroviruses (HERVs) comprise approximately 10% of the human genome,
            yet their detection, annotation, and experimental definition vary widely across studies.
            Historical nomenclature, fragmented genomic structure, polymorphism, and the absence of
            standardised analytical pipelines have resulted in a landscape where results are often
            difficult to compare across studies.
          </p>

          <p>
            This resource was developed to address these challenges by curating and harmonising
            more than 500 primer pairs from published literature spanning over 15 HERV groups.
            Each primer set is systematically mapped against the GRCh38 reference genome to
            resolve binding sites and assess specificity.
          </p>

          <p>
            Our analyses reveal strong research and detection bias toward HERV-K/HML-2,
            as well as widespread multi-mapping, with a substantial fraction of primers aligning
            to multiple genomic loci beyond their intended targets.
          </p>

          <p>
            We further observe that in many experimental studies, the operational definition of a
            HERV is effectively reduced to a specific PCR primer pair, a choice that is rarely
            explicitly stated. While most primers intersect annotated HERV regions, their combined
            coverage spans only a limited fraction of known loci, suggesting that negative findings
            may reflect assay design constraints rather than true absence of expression.
          </p>

          <p>
            The HERV Primer Database provides a structured framework to reinterpret decades of
            primer-driven and short-read–based findings. It enables systematic assay evaluation,
            improved experimental design, and locus-aware interpretation of HERV biology.
          </p>

          <p>
            We anticipate that future studies will benefit from long-read sequencing,
            phased genome assemblies, and graph-based pangenomes to enable fully
            locus-resolved and allele-aware analyses.
          </p>

        </div>

      </div>
    </div>
  );
}