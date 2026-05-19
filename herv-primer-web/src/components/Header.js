import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-blue-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-6 text-sm">

        {/* LOGO ONLY */}
        <div className="flex items-center gap-2 mr-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/37/Rigshospitalet_logo.svg"
            alt="Rigshospitalet"
            className="h-6"
          />
        </div>

        {/* NAV */}
        <Link className="hover:text-blue-700 text-gray-700" to="/">Home</Link>
        <Link className="hover:text-blue-700 text-gray-700" to="/search">Primer Search</Link>
        <Link className="hover:text-blue-700 text-gray-700" to="/lookup">Primer Lookup</Link>
        <Link className="hover:text-blue-700 text-gray-700" to="/loci">Loci</Link>
        <Link className="hover:text-blue-700 text-gray-700" to="/stats">Stats</Link>
        <Link className="hover:text-blue-700 text-gray-700" to="/api">API</Link>

        <div className="ml-auto flex gap-4 text-gray-500">
          <Link className="hover:text-blue-700" to="/about">About</Link>
          <Link className="hover:text-blue-700" to="/terms">Terms</Link>
          <Link className="hover:text-blue-700" to="/contact">Contact</Link>
          <Link className="hover:text-blue-700" to="/references">References</Link>
        </div>

      </div>
    </header>
  );
};

export default Header;