import { useEffect, useState } from "react";
import api from "../api/client";

export default function Stats() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("/primer_stats");
        setData(res.data);
      } catch (err) {
        setError("Failed to load statistics");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-gray-500">
        Loading statistics...
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* HEADER */}
      <h1 className="text-2xl font-semibold mb-2">
        Primer Set Statistics
      </h1>

      <p className="text-gray-600 mb-6">
        Distribution of primer sets across HERV families, subgroups, and components.
      </p>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

        <div className="border rounded p-4 bg-white">
          <div className="text-sm text-gray-500">Total Groups</div>
          <div className="text-2xl font-semibold">
            {data.length}
          </div>
        </div>

        <div className="border rounded p-4 bg-white">
          <div className="text-sm text-gray-500">Total Forward Primers</div>
          <div className="text-2xl font-semibold">
            {data.reduce((acc, d) => acc + d.forward_count, 0)}
          </div>
        </div>

        <div className="border rounded p-4 bg-white">
          <div className="text-sm text-gray-500">Total Reverse Primers</div>
          <div className="text-2xl font-semibold">
            {data.reduce((acc, d) => acc + d.reverse_count, 0)}
          </div>
        </div>

      </div>

      {/* TABLE */}
      <div className="border rounded bg-white overflow-hidden">

        <table className="w-full text-sm">

          {/* HEADER */}
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="p-3">Family</th>
              <th className="p-3">Subgroup</th>
              <th className="p-3">Component</th>
              <th className="p-3 text-right">Primer Sets</th>
              <th className="p-3 text-right">Forward</th>
              <th className="p-3 text-right">Reverse</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-3 font-medium">
                  {row.family_name}
                </td>

                <td className="p-3 text-gray-700">
                  {row.subgroup_name}
                </td>

                <td className="p-3 text-gray-700">
                  {row.component_name}
                </td>

                <td className="p-3 text-right">
                  {row.primer_set_count}
                </td>

                <td className="p-3 text-right">
                  {row.forward_count}
                </td>

                <td className="p-3 text-right">
                  {row.reverse_count}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}
