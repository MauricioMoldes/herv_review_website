export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="bg-white border border-gray-100 rounded-lg p-8">

        <h1 className="text-2xl font-semibold mb-4">
          Terms of Use
        </h1>

        <div className="space-y-4 text-gray-700 leading-relaxed">

          <p>
            The HERV Primer Database and its associated API are provided for research
            and academic use only. This platform is designed to support exploratory
            bioinformatics analysis of human endogenous retroviral primer sets and
            should not be used as a clinical diagnostic tool.
          </p>

          <p>
            The system provides access to curated primer–locus mappings derived from
            published literature and computational alignment against the GRCh38
            reference genome. While extensive effort has been made to ensure accuracy,
            results may reflect limitations in source literature, annotation bias,
            and sequence ambiguity.
          </p>

          <ul className="list-disc ml-6 space-y-2">

            <li>
              No output from this database or API should be used for clinical decision-making.
            </li>

            <li>
              API responses represent computational mappings and may include multi-mapping
              primers or non-unique genomic alignments.
            </li>

            <li>
              Data coverage is incomplete and biased toward well-studied HERV families,
              particularly HERV-K/HML-2.
            </li>

            <li>
              The API is provided as-is, without warranty of completeness, correctness,
              or fitness for any specific scientific or clinical purpose.
            </li>

            <li>
              Users are responsible for validating results in downstream analyses and
              ensuring appropriate interpretation within their own experimental context.
            </li>

          </ul>

          <p>
            The maintainers reserve the right to update or modify the database, API
            structure, or underlying mappings without prior notice.
          </p>

        </div>

      </div>
    </div>
  );
}