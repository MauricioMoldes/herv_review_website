import { useState } from "react";
import { getPrimers } from "../api/primers";

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

      {/* FILTER PANEL */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        {/* Family */}
        <div>
          <label className="text-sm text-gray-600">Family</label>
          <input
            className="w-full border rounded p-2"
            placeholder="e.g. HERV-K"
            value={family}
            onChange={(e) => setFamily(e.target.value)}
          />
        </div>

        {/* Component */}
        <div>
          <label className="text-sm text-gray-600">Component</label>
          <input
            className="w-full border rounded p-2"
            placeholder="gag / pol / env / LTR"
            value={component}
            onChange={(e) => setComponent(e.target.value)}
          />
        </div>

        {/* DNA checkbox */}
        <div className="flex items-end">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={dna}
              onChange={(e) => setDna(e.target.checked)}
            />
            DNA only
          </label>
        </div>
      </div>

      {/* BUTTON */}
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>

      {/* STATES */}
      {loading && (
        <p className="mt-4 text-gray-500">Loading primers...</p>
      )}

      {error && (
        <p className="mt-4 text-red-600">{error}</p>
      )}

      {/* RESULTS */}
      <div className="mt-8 space-y-4">
        {results.map((r) => (
          <div
            key={r.set_index}
            className="border rounded p-4 hover:shadow-sm"
          >

            {/* HEADER */}
            <div className="flex justify-between">
              <h2 className="font-semibold text-lg">
                {r.family_name}_{r.subgroup_name}_{r.component_name}
              </h2>

              <span className="text-sm text-gray-500">
                Set #{r.set_index}
              </span>
            </div>

            {/* PRIMERS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">

              {/* forward */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700">
                  Forward primers
                </h3>
                <ul className="text-sm font-mono text-gray-800">
                  {r.forward_primers?.map((p, i) => (
                    <li key={i}>
                      {p.name}: {p.sequence}
                    </li>
                  ))}
                </ul>
              </div>

              {/* reverse */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700">
                  Reverse primers
                </h3>
                <ul className="text-sm font-mono text-gray-800">
                  {r.reverse_primers?.map((p, i) => (
                    <li key={i}>
                      {p.name}: {p.sequence}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* REFERENCES */}
            {r.references?.length > 0 && (
              <div className="mt-3 text-sm text-gray-600">
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
    </div>
  );
}
