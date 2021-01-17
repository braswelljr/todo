import React from "react";

const Navbar = ({ appname }) => {
  return (
    <nav className="fixed z-20 w-screen px-4 py-3 bg-trueGray-800 text-trueGray-100">
      <div className="text-2xl font-semibold text-center uppercase">
        {appname}
      </div>
    </nav>
  );
};

export default Navbar;
