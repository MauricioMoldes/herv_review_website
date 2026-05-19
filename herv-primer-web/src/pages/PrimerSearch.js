import { useState } from "react";
import { getPrimers } from "../api/primers";
import PrimerSetCard from "../components/PrimerSetCard";

export default function PrimerSearch() {
  const [family, setFamily] = useState("");
  const [component, setComponent] = useState("");
  const [dna, setDna] = useState(false);

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getPrimers({
        family: family || undefined,
        component: component || undefined,
        dna: dna || undefined,
      });

      setResults(data);
    } catch (err) {
      setError("Failed to fetch primers");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* HEADER */}
      <h1 className="text-2xl font-semibold mb-4">
        Primer Search
      </h1>

      <p className="text-gray-600 mb-6">
        Query HERV primer sets by family, component, or biological constraints.
      </p>

      {/* FILTERS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <input
          className="border rounded p-2"
          placeholder="Family (e.g. HERV-K)"
          value={family}
          onChange={(e) => setFamily(e.target.value)}
        />

        <input
          className="border rounded p-2"
          placeholder="Component (gag / env / pol)"
          value={component}
          onChange={(e) => setComponent(e.target.value)}
        />

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={dna}
            onChange={(e) => setDna(e.target.checked)}
          />
          DNA only
        </label>
      </div>

      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>

      {loading && <p className="mt-4 text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      {/* RESULTS */}
      {/* RESULTS */}
      <div className="mt-8 space-y-4">
        {results.map((r) => (
          <PrimerSetCard key={r.set_index} r={r} />
        ))}
      </div>

    </div>
  );
}