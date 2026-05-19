import { useState } from "react";
import {
  getPrimersForward,
  getPrimersReverse,
} from "../api/primers";

export default function PrimerLookup() {
  const [mode, setMode] = useState("forward"); 
  // forward | reverse

  const [sequence, setSequence] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!sequence.trim()) return;

    setLoading(true);
    setError(null);
    setResults([]);

    try {
      let data;

      if (mode === "forward") {
        data = await getPrimersForward(sequence);
      } else {
        data = await getPrimersReverse(sequence);
      }

      setResults(data);
    } catch (err) {
      setError("Lookup failed. Check sequence or API connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* TITLE */}
      <h1 className="text-2xl font-semibold mb-2">
        Primer Pair Lookup
      </h1>

      <p className="text-gray-600 mb-6">
        Resolve forward ↔ reverse primer relationships using exact sequence matching.
      </p>

      {/* MODE SWITCH */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode("forward")}
          className={`px-3 py-1 border rounded text-sm ${
            mode === "forward"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white"
          }`}
        >
          Forward → Reverse
        </button>

        <button
          onClick={() => setMode("reverse")}
          className={`px-3 py-1 border rounded text-sm ${
            mode === "reverse"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white"
          }`}
        >
          Reverse → Forward
        </button>
      </div>

      {/* INPUT */}
      <div className="flex gap-3 mb-4">
        <input
          className="flex-1 border rounded p-2 font-mono text-sm"
          placeholder={
            mode === "forward"
              ? "Paste forward primer sequence..."
              : "Paste reverse primer sequence..."
          }
          value={sequence}
          onChange={(e) => setSequence(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
        >
          Lookup
        </button>
      </div>

      {/* STATES */}
      {loading && (
        <p className="text-gray-500">Searching primer relationships...</p>
      )}

      {error && (
        <p className="text-red-600">{error}</p>
      )}

      {/* RESULTS */}
      <div className="space-y-6 mt-6">

        {results.map((r) => (
          <div
            key={r.set_index}
            className="border rounded p-4 bg-white"
          >

            {/* HEADER */}
            <div className="flex justify-between">
              <h2 className="font-semibold">
                {r.family_name} / {r.subgroup_name} / {r.component_name}
              </h2>

              <span className="text-sm text-gray-500">
                Set #{r.set_index}
              </span>
            </div>

            {/* BIDIRECTIONAL DISPLAY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

              {/* FORWARD */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Forward primers
                </h3>

                {r.forward_primers?.length > 0 ? (
                  <ul className="space-y-1 text-sm font-mono">
                    {r.forward_primers.map((p, i) => (
                      <li
                        key={i}
                        className="bg-gray-50 p-2 rounded border"
                      >
                        <div className="text-xs text-gray-500">
                          {p.name}
                        </div>
                        <div className="break-all">
                          {p.sequence}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-sm">None</p>
                )}
              </div>

              {/* REVERSE */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Reverse primers
                </h3>

                {r.reverse_primers?.length > 0 ? (
                  <ul className="space-y-1 text-sm font-mono">
                    {r.reverse_primers.map((p, i) => (
                      <li
                        key={i}
                        className="bg-gray-50 p-2 rounded border"
                      >
                        <div className="text-xs text-gray-500">
                          {p.name}
                        </div>
                        <div className="break-all">
                          {p.sequence}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-sm">None</p>
                )}
              </div>
            </div>

            {/* REFERENCES */}
            {r.references?.length > 0 && (
              <div className="mt-4 text-sm text-gray-600">
                <strong>References:</strong>{" "}
                {r.references.map((ref, i) => (
                  <span key={i}>
                    {ref.title} ({ref.year})
                    {i < r.references.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {!loading && results.length === 0 && sequence && (
        <p className="text-gray-400 mt-6">
          No matches found for this sequence.
        </p>
      )}
    </div>
  );
}
