import { Link, useLocation } from "react-router-dom";

// Remembers the last visited URL for stateful pages so navigating back restores results.
let lastSearchUrl = "/search";
let lastLookupUrl = "/lookup";

const NavLink = ({ to, children }) => {
  const location = useLocation();

  if (location.pathname === "/search") {
    lastSearchUrl = location.pathname + location.search;
  }
  if (location.pathname === "/lookup") {
    lastLookupUrl = location.pathname + location.search;
  }

  const href =
    to === "/search" ? lastSearchUrl :
    to === "/lookup" ? lastLookupUrl :
    to;
  const active = location.pathname === to;

  return (
    <Link
      to={href}
      className={`hover:text-blue-700 transition ${
        active ? "text-blue-700 font-medium" : "text-gray-700"
      }`}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  return (
    <header className="border-b border-blue-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center text-sm">

        {/* LOGO */}
        <div className="flex items-center gap-2 mr-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/37/Rigshospitalet_logo.svg"
            alt="Rigshospitalet"
            className="h-10"
          />
        </div>

        {/* PRIMARY NAV */}
        <nav className="flex gap-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Primer Search</NavLink>
          <NavLink to="/lookup">Primer Lookup</NavLink>
          <NavLink to="/loci">Loci</NavLink>
          <NavLink to="/api">API</NavLink>
          <NavLink to="/stats">Stats</NavLink>
        </nav>

        {/* RIGHT SIDE */}
        <div className="ml-auto flex gap-4 text-gray-500">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/terms">Terms</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/citation">Citation</NavLink>
        </div>

      </div>
    </header>
  );
};

export default Header;