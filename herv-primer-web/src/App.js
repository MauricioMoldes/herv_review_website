import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PrimerSearch from "./pages/PrimerSearch";
import Stats from "./pages/Stats";


function Home() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-semibold mb-3">
        HERV Primer Database
      </h1>

      <p className="text-gray-600 leading-relaxed">
        A curated relational database of Human Endogenous Retrovirus (HERV)
        primer sets, biological targets, genomic loci, and supporting literature.
      </p>

      <div className="mt-6 text-sm text-gray-500">
        Use the navigation above to explore primer sets or run sequence-based queries.
      </div>
    </div>
  );
}

function PrimerLookup() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-2xl font-semibold mb-3">Primer Pair Lookup</h1>
      <p className="text-gray-600">
        (Coming next) Sequence-based forward/reverse primer resolution tool.
      </p>
    </div>
  );
}

function Loci() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-2xl font-semibold mb-3">Locus Browser</h1>
      <p className="text-gray-600">
        (Coming next) Genomic coordinate viewer for primer-associated loci.
      </p>
    </div>
  );
}


function ApiDocs() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-2xl font-semibold mb-3">API Documentation</h1>
      <p className="text-gray-600">
        FastAPI backend available at <code>/docs</code>.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-900">

        {/* NAVBAR */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex gap-6 text-sm">
            <Link className="hover:text-blue-600" to="/">Home</Link>
            <Link className="hover:text-blue-600" to="/search">Primer Search</Link>
            <Link className="hover:text-blue-600" to="/lookup">Primer Lookup</Link>
            <Link className="hover:text-blue-600" to="/loci">Loci</Link>
            <Link className="hover:text-blue-600" to="/stats">Stats</Link>
            <Link className="hover:text-blue-600" to="/api">API</Link>
          </div>
        </div>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<PrimerSearch />} />
          <Route path="/lookup" element={<PrimerLookup />} />
          <Route path="/loci" element={<Loci />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/api" element={<ApiDocs />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}
