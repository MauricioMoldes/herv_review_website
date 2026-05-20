export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="bg-white border border-gray-100 rounded-lg p-8">

        <h1 className="text-2xl font-semibold mb-6">Contact</h1>

        <div className="text-gray-700 leading-relaxed space-y-1">
          <p className="font-medium text-gray-900">MDxCore</p>
          <p>Department of Genomic Medicine</p>
          <p>Rigshospitalet</p>
          <p>Blegdamsvej 9</p>
          <p>2100 København Ø</p>
          <p>Denmark</p>
        </div>

        <div className="mt-6 text-gray-700 space-y-1">
          <p>
            Phone: <span className="text-gray-900">+45 3545 4113</span>
          </p>

          <p>
            Email:{" "}
            <span className="text-blue-700">
              genomiskmedicin.rigshospitalet@regionh.dk
            </span>
          </p>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          For general inquiries, please use the contact email above.
        </div>

      </div>
    </div>
  );
}