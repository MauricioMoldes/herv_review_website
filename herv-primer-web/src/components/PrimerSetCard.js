import { safeParsePrimerList } from "../utils/parsePrimers";

export default function PrimerSetCard({ r, queryPrimer }) {
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

      {/* QUERY CONTEXT (ONLY FOR LOOKUP MODE) */}
      {queryPrimer && (
        <div className="mt-3 mb-4 bg-blue-50 border border-blue-200 rounded p-3">

          <div className="text-xs text-blue-700 font-medium mb-1">
            Query primer ({queryPrimer.type})
          </div>

          <div className="font-mono text-sm break-all text-blue-900">
            {queryPrimer.sequence}
          </div>

        </div>
      )}

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
        <div className="mt-5 border-t pt-4">

          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            References
          </h3>

          <div className="space-y-3">
            {safeParsePrimerList(r.references).map((ref, i) => (
              <div
                key={i}
                className="bg-gray-50 border rounded p-3 text-sm"
              >

                <div className="font-medium text-gray-800 leading-snug">
                  {ref.title}
                </div>

                <div className="mt-1 flex flex-wrap gap-3 text-xs text-gray-500">

                  {ref.year && (
                    <span>Year: {ref.year}</span>
                  )}

                  {ref.doi && (
                    <a
                      href={`https://doi.org/${ref.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      DOI: {ref.doi}
                    </a>
                  )}

                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}