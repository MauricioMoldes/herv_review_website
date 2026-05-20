export default function CitationPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="bg-white border border-gray-100 rounded-lg p-8">

        <h1 className="text-2xl font-semibold mb-6">
          Cite DNAtabase
        </h1>

        <p className="text-gray-600 mb-6">
          A formal publication describing DNAtabaseis forthcoming. In the meantime,
          please use the following provisional citation formats.
        </p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Preprint / Manuscript
          </h2>

          <p className="text-gray-700">
            Standardising human endogenous retrovirus analyses: Challenges and a primer-assay database.<br />
            João P. C. R. de Mendonça, Emilie Sofie Engdal, Mauricio Moldes,
            Kristoffer Staal Rohrberg, Peter Johannes Holst, Frederik Otzen Bagger.
          </p>
        </div>

        <div className="space-y-4">

          <div>
            <h3 className="font-semibold text-blue-900">APA</h3>
            <p className="text-gray-600">
              Mendonça et al. (2026). Standardising human endogenous retrovirus analyses...
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-blue-900">MLA</h3>
            <p className="text-gray-600">
              Mendonça, João P. C. R., et al. ...
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-blue-900">BibTeX</h3>

            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`@article{dnatatabase2026,
  author = {Mendonça, João P. C. R. and Engdal, Emilie Sofie and Moldes, Mauricio and others},
  title = {Standardising human endogenous retrovirus analyses: Challenges and a primer-assay database},
  year = {2026}
}`}
            </pre>
          </div>

        </div>

      </div>
    </div>
  );
}