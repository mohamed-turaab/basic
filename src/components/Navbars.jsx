import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-black text-white h-56 flex justify-center items-center">

      <div className="flex gap-32 text-6xl font-bold">

        <NavLink
          to="/home"
          className="hover:text-gray-300 transition duration-300"
        >
          Home
        </NavLink>

        <NavLink
          to="/contact"
          className="hover:text-gray-300 transition duration-300"
        >
          Contact
        </NavLink>

        <NavLink
          to="/about"
          className="hover:text-gray-300 transition duration-300"
        >
          About
        </NavLink>

        <NavLink
          to="/footer"
          className="hover:text-gray-300 transition duration-300"
        >
          Footer
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;