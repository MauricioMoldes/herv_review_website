export default function ApiDocs() {
  return (
    <div className="max-w-4xl mx-auto p-10">

      <h1 className="text-2xl font-semibold mb-3">
        API Documentation
      </h1>

      <p className="text-gray-600 mb-6">
        FastAPI backend provides programmatic access to primer sets,
        sequence lookup, loci, and statistics.
      </p>

      {/* MAIN LINKS CARD */}
      <div className="border rounded p-4 bg-white space-y-3">

        <div>
          <h2 className="font-semibold">Interactive Swagger UI</h2>
          <a
            className="text-blue-600 hover:underline"
            href="http://10.62.55.108:8001/docs"
            target="_blank"
            rel="noreferrer"
          >
            http://10.62.55.108:8001/docs
          </a>
        </div>

        <div>
          <h2 className="font-semibold">OpenAPI JSON</h2>
          <a
            className="text-blue-600 hover:underline"
            href="http://10.62.55.108:8001/openapi.json"
            target="_blank"
            rel="noreferrer"
          >
            http://10.62.55.108:8001/openapi.json
          </a>
        </div>

      </div>

      {/* QUICK ENDPOINT SUMMARY */}
      <div className="mt-8 space-y-3">

        <h2 className="text-lg font-semibold">Endpoints</h2>

        <ul className="text-sm text-gray-700 space-y-2">

          <li><code>/families</code> — list HERV families</li>

          <li><code>/primer_sets</code> — filtered primer sets</li>

          <li><code>/primers</code> — unified forward/reverse query</li>

          <li><code>/primers_forward</code> — forward sequence lookup</li>

          <li><code>/primers_reverse</code> — reverse sequence lookup</li>

          <li><code>/primer_loci</code> — genomic coordinates</li>

          <li><code>/primer_stats</code> — dataset statistics</li>

        </ul>
      </div>

      {/* SMALL NOTE */}
      <div className="mt-8 text-xs text-gray-400">
        Tip: Use the Swagger UI for live testing and schema inspection.
      </div>

    </div>
  );
}