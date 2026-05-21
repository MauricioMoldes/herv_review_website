import { API_BASE } from "../config";

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
          <h2 className="font-semibold text-gray-800">API Endpoint</h2>
          <a className="text-blue-700 hover:underline break-all"
             href={API_BASE}
             target="_blank"
             rel="noreferrer">
            {API_BASE}
          </a>
        </div>

        <div>
          <h2 className="font-semibold text-gray-800">Interactive Swagger UI</h2>
          <a className="text-blue-700 hover:underline break-all"
             href={`${API_BASE}/docs`}
             target="_blank"
             rel="noreferrer">
            {API_BASE}/docs
          </a>
        </div>

        <div>
          <h2 className="font-semibold text-gray-800">OpenAPI Specification</h2>
          <a className="text-blue-700 hover:underline break-all"
             href={`${API_BASE}/openapi.json`}
             target="_blank"
             rel="noreferrer">
            {API_BASE}/openapi.json
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
              href={`${API_BASE}/primers?family=HERV-K`}
              target="_blank"
              rel="noreferrer"
              className="block bg-gray-100 p-3 rounded text-sm text-blue-700 hover:underline"
            >
              {API_BASE}/primers?family=HERV-K
            </a>
          </div>

          {/* COMPONENT */}
          <div className="border rounded bg-white p-5">
            <h3 className="font-semibold text-blue-900 mb-2">
              Search by family and component
            </h3>

            <a
              href={`${API_BASE}/primers?family=HERV-K&component=env`}
              target="_blank"
              rel="noreferrer"
              className="block bg-gray-100 p-3 rounded text-sm text-blue-700 hover:underline"
            >
              {API_BASE}/primers?family=HERV-K&component=env
            </a>
          </div>

          {/* FORWARD */}
          <div className="border rounded bg-white p-5">
            <h3 className="font-semibold text-blue-900 mb-2">
              Forward → Reverse primer lookup
            </h3>

            <a
              href={`${API_BASE}/primers_forward?forward_seq=AGCAGGTCAGGTGCCTGTAACATT`}
              target="_blank"
              rel="noreferrer"
              className="block bg-gray-100 p-3 rounded text-sm text-blue-700 hover:underline"
            >
              {API_BASE}/primers_forward?forward_seq=AGCAGGTCAGGTGCCTGTAACATT
            </a>
          </div>

          {/* REVERSE */}
          <div className="border rounded bg-white p-5">
            <h3 className="font-semibold text-blue-900 mb-2">
              Reverse → Forward primer lookup
            </h3>

            <a
              href={`${API_BASE}/primers_reverse?reverse_seq=GCAGCCCTATTTCTTCGGACC`}
              target="_blank"
              rel="noreferrer"
              className="block bg-gray-100 p-3 rounded text-sm text-blue-700 hover:underline"
            >
              {API_BASE}/primers_reverse?reverse_seq=GCAGCCCTATTTCTTCGGACC
            </a>
          </div>

          {/* STATS */}
          <div className="border rounded bg-white p-5">
            <h3 className="font-semibold text-blue-900 mb-2">
              Dataset statistics
            </h3>

            <a
              href={`${API_BASE}/primer_stats`}
              target="_blank"
              rel="noreferrer"
              className="block bg-gray-100 p-3 rounded text-sm text-blue-700 hover:underline"
            >
              {API_BASE}/primer_stats
            </a>
          </div>

        </div>
      </div>

      <div className="mt-10 text-xs text-gray-400">
        All endpoints return JSON responses. Live testing is available via Swagger UI.
      </div>

    </div>
  );
}