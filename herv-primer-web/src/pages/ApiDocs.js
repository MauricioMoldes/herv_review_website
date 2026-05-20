export default function ApiDocs() {
  return (
    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-2xl font-semibold mb-3">
        API Documentation
      </h1>

      <p className="text-gray-600 mb-6 leading-relaxed">
        The DNAtabase API provides programmatic access to curated HERV primer
        assays, sequence-based lookup, genomic loci, and dataset statistics.
        The API is implemented in FastAPI and returns JSON responses.
      </p>

      {/* MAIN LINKS */}
      <div className="border rounded p-5 bg-white space-y-5">

        <div>
          <h2 className="font-semibold text-gray-800">
            API Endpoint
          </h2>

          <a
            className="text-blue-700 hover:underline break-all"
            href="http://10.62.55.108:8001"
            target="_blank"
            rel="noreferrer"
          >
            http://10.62.55.108:8001
          </a>
        </div>

        <div>
          <h2 className="font-semibold text-gray-800">
            Interactive Swagger UI
          </h2>

          <a
            className="text-blue-700 hover:underline break-all"
            href="http://10.62.55.108:8001/docs"
            target="_blank"
            rel="noreferrer"
          >
            http://10.62.55.108:8001/docs
          </a>
        </div>

        <div>
          <h2 className="font-semibold text-gray-800">
            OpenAPI Specification
          </h2>

          <a
            className="text-blue-700 hover:underline break-all"
            href="http://10.62.55.108:8001/openapi.json"
            target="_blank"
            rel="noreferrer"
          >
            http://10.62.55.108:8001/openapi.json
          </a>
        </div>

      </div>

      {/* EXAMPLES */}
      <div className="mt-10">

        <h2 className="text-xl font-semibold mb-5">
          Example Queries
        </h2>

        <div className="space-y-6">

          {/* SEARCH */}
          <div className="border rounded bg-white p-5">
            <h3 className="font-semibold text-blue-900 mb-2">
              Search primer sets by family
            </h3>

            <a
              href="http://10.62.55.108:8001/primers?family=HERV-K"
              target="_blank"
              rel="noreferrer"
              className="block bg-gray-100 p-3 rounded text-sm overflow-x-auto text-blue-700 hover:underline"
            >
              http://10.62.55.108:8001/primers?family=HERV-K
            </a>

            <p className="text-sm text-gray-600 mt-2">
              Returns all curated primer sets associated with the HERV-K family.
            </p>
          </div>

          {/* COMPONENT */}
          <div className="border rounded bg-white p-5">
            <h3 className="font-semibold text-blue-900 mb-2">
              Search by family and component
            </h3>

            <a
              href="http://10.62.55.108:8001/primers?family=HERV-K&component=env"
              target="_blank"
              rel="noreferrer"
              className="block bg-gray-100 p-3 rounded text-sm overflow-x-auto text-blue-700 hover:underline"
            >
              http://10.62.55.108:8001/primers?family=HERV-K&component=env
            </a>

            <p className="text-sm text-gray-600 mt-2">
              Filters primer sets targeting the env component of HERV-K/HML-2.
            </p>
          </div>

          {/* FORWARD LOOKUP */}
          <div className="border rounded bg-white p-5">
            <h3 className="font-semibold text-blue-900 mb-2">
              Forward → Reverse primer lookup
            </h3>

            <a
              href="http://10.62.55.108:8001/primers_forward?forward_seq=AGCAGGTCAGGTGCCTGTAACATT"
              target="_blank"
              rel="noreferrer"
              className="block bg-gray-100 p-3 rounded text-sm overflow-x-auto text-blue-700 hover:underline"
            >
              http://10.62.55.108:8001/primers_forward?forward_seq=AGCAGGTCAGGTGCCTGTAACATT
            </a>

            <p className="text-sm text-gray-600 mt-2">
              Resolves matching reverse primers and associated references for a
              forward primer sequence.
            </p>
          </div>

          {/* REVERSE LOOKUP */}
          <div className="border rounded bg-white p-5">
            <h3 className="font-semibold text-blue-900 mb-2">
              Reverse → Forward primer lookup
            </h3>

            <a
              href="http://10.62.55.108:8001/primers_reverse?reverse_seq=GCAGCCCTATTTCTTCGGACC"
              target="_blank"
              rel="noreferrer"
              className="block bg-gray-100 p-3 rounded text-sm overflow-x-auto text-blue-700 hover:underline"
            >
              http://10.62.55.108:8001/primers_reverse?reverse_seq=GCAGCCCTATTTCTTCGGACC
            </a>

            <p className="text-sm text-gray-600 mt-2">
              Resolves matching forward primers linked to a reverse primer sequence.
            </p>
          </div>

          {/* STATS */}
          <div className="border rounded bg-white p-5">
            <h3 className="font-semibold text-blue-900 mb-2">
              Dataset statistics
            </h3>

            <a
              href="http://10.62.55.108:8001/primer_stats"
              target="_blank"
              rel="noreferrer"
              className="block bg-gray-100 p-3 rounded text-sm overflow-x-auto text-blue-700 hover:underline"
            >
              http://10.62.55.108:8001/primer_stats
            </a>

            <p className="text-sm text-gray-600 mt-2">
              Returns aggregate statistics across curated primer assays and loci.
            </p>
          </div>

        </div>
      </div>

      {/* FOOTNOTE */}
      <div className="mt-10 text-xs text-gray-400">
        All endpoints return JSON responses. Additional schema information and
        live endpoint testing are available through the Swagger UI.
      </div>

    </div>
  );
}