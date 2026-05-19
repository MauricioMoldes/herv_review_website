import { useState } from "react";
import {
  getPrimersForward,
  getPrimersReverse,
} from "../api/primers";

import PrimerSetCard from "../components/PrimerSetCard";

export default function PrimerLookup() {
  const [mode, setMode] = useState("forward");
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

      {loading && (
        <p className="text-gray-500">Searching primer relationships...</p>
      )}

      {error && (
        <p className="text-red-600">{error}</p>
      )}

      {/* RESULTS */}
      {/* RESULTS */}
      <div className="space-y-6 mt-6">
        {results.map((r) => (
          <PrimerSetCard key={r.set_index} r={r} />
        ))}
      </div>

      {!loading && results.length === 0 && sequence && (
        <p className="text-gray-400 mt-6">
          No matches found for this sequence.
        </p>
      )}
    </div>
  );
}