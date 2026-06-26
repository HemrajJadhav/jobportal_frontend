import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 left-0 Page w-full h-20 bg-white shadow-lg shadow-mgray-100/10">
      <div className="Main flex items-center w-full h-full px-5">
        <div className="Logo ">
          <span className="font-bold text-2xl text-blue-500">JobPortal</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
