import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link
      to={to}
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

        {/* RIGHT SIDE (push) */}
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