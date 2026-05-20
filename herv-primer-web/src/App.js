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
import Citations from "./pages/CitationPage";

function Home() {
  return (
    <div>

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 border-b border-blue-100">
        <div className="max-w-5xl mx-auto px-10 py-20">

          <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 leading-tight">
            HERV Primer Database
          </h1>

          <p className="mt-5 text-lg text-gray-700 max-w-3xl leading-relaxed">
            A curated database of Human Endogenous Retrovirus (HERV) PCR primer
            assays, genomic targets, and literature-derived annotations across
            more than 15 HERV groups mapped against GRCh38.
          </p>

          <p className="mt-3 text-gray-600 max-w-3xl leading-relaxed">
            Designed to support reproducible HERV detection, assay interpretation,
            and locus-resolved genomic analysis in retrovirology and genomic medicine.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/search" className="bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800">
              Search Primers
            </a>

            <a href="/lookup" className="border border-blue-200 text-blue-700 px-5 py-2 rounded hover:bg-blue-50">
              Sequence Lookup
            </a>

            <a href="/api" className="border border-blue-200 text-blue-700 px-5 py-2 rounded hover:bg-blue-50">
              API
            </a>

            <a href="/stats" className="border border-blue-200 text-blue-700 px-5 py-2 rounded hover:bg-blue-50">
              Statistics
            </a>
          </div>
        </div>
      </div>

      {/* 📊 REPLACE THE EMPTY GAP WITH MEANING */}
      <div className="max-w-5xl mx-auto px-10 py-14">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Database overview
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div className="p-4 border rounded">
            <div className="text-2xl font-semibold text-blue-900">500+</div>
            <div className="text-sm text-gray-600">Primer pairs</div>
          </div>

          <div className="p-4 border rounded">
            <div className="text-2xl font-semibold text-blue-900">15+</div>
            <div className="text-sm text-gray-600">HERV groups</div>
          </div>

          <div className="p-4 border rounded">
            <div className="text-2xl font-semibold text-blue-900">GRCh38</div>
            <div className="text-sm text-gray-600">Reference genome</div>
          </div>

          <div className="p-4 border rounded">
            <div className="text-2xl font-semibold text-blue-900">62%</div>
            <div className="text-sm text-gray-600">Multi-mapping primers</div>
          </div>

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
       <main className="flex-1 flex flex-col justify-between">
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
            <Route path="/citation" element={<Citations />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />

      </div>

    </BrowserRouter>
  );
}