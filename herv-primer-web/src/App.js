import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import PrimerSearch from "./pages/PrimerSearch";
import PrimerLookup from "./pages/PrimerLookup";
import Stats from "./pages/Stats";
import ApiDocs from "./pages/ApiDocs";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import References from "./pages/References";

function Home() {
  return (
    <div>

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 border-b border-blue-100">
        <div className="max-w-5xl mx-auto px-10 py-16">

          <h1 className="text-4xl font-semibold text-blue-900">
            HERV Primer Database
          </h1>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl">
            A curated genomic resource for Human Endogenous Retrovirus primer sets,
            biological targets, and genomic loci across the Danish reference dataset.
          </p>

          <p className="mt-2 text-sm text-gray-500 max-w-2xl">
            Built for reproducible research in genomic medicine and bioinformatics at Rigshospitalet.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-6 flex gap-3">
            <a
              href="/search"
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Search Primers
            </a>

            <a
              href="/lookup"
              className="border border-blue-200 text-blue-700 px-4 py-2 rounded hover:bg-blue-50"
            >
              Sequence Lookup
            </a>
          </div>

        </div>
      </div>

      {/* BODY */}
      <div className="max-w-4xl mx-auto p-10 text-gray-700">
        <div className="text-sm text-gray-500">
          Use the navigation above to explore primer sets, genomic loci, or run sequence-based queries.
        </div>
      </div>

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

export default function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen flex flex-col bg-white text-gray-900">

        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<PrimerSearch />} />
            <Route path="/lookup" element={<PrimerLookup />} />
            <Route path="/loci" element={<Loci />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/api" element={<ApiDocs />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />

      </div>

    </BrowserRouter>
  );
}