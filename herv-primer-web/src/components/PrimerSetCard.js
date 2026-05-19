import { safeParsePrimerList } from "../utils/parsePrimers";

export default function PrimerSetCard({ r }) {
  return (
    <div className="border rounded p-4 bg-white">

      {/* HEADER */}
      <div className="flex justify-between">
        <h2 className="font-semibold">
          {r.family_name} / {r.subgroup_name} / {r.component_name}
        </h2>

        <span className="text-sm text-gray-500">
          Set #{r.set_index}
        </span>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

        {/* FORWARD */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Forward primers
          </h3>

          {safeParsePrimerList(r.forward_primers).length > 0 ? (
            <ul className="space-y-1 text-sm font-mono">
              {safeParsePrimerList(r.forward_primers).map((p, i) => (
                <li key={i} className="bg-gray-50 p-2 rounded border">
                  <div className="text-xs text-gray-500">
                    {p.name || "unnamed"}
                  </div>
                  <div className="break-all">{p.sequence}</div>
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

          {safeParsePrimerList(r.reverse_primers).length > 0 ? (
            <ul className="space-y-1 text-sm font-mono">
              {safeParsePrimerList(r.reverse_primers).map((p, i) => (
                <li key={i} className="bg-gray-50 p-2 rounded border">
                  <div className="text-xs text-gray-500">
                    {p.name || "unnamed"}
                  </div>
                  <div className="break-all">{p.sequence}</div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-sm">None</p>
          )}
        </div>
      </div>

      {/* REFERENCES */}
      {safeParsePrimerList(r.references).length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          <strong>References:</strong>{" "}
          {safeParsePrimerList(r.references).map((ref, i) => (
            <span key={i}>
              {ref.title} ({ref.year})
              {i < safeParsePrimerList(r.references).length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}