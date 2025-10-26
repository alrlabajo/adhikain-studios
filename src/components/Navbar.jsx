import React, { useState } from "react";
import { IoIosPaw } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import { NAV_MENU_DATA } from "../data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-neutral-50 fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-18">
      <div className="flex justify-between items-center p-5 lg:px-10 relative z-20 w-full mx-auto">
        <img src="/logo1.png" alt="Logo" className="h-10" />
        {/* Hamburger menu */}
        <div className="md:hidden z-30">
          <button
            className="block focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <IoClose className="text-white" size={40} />
            ) : (
              <IoMenu className="text-neutral-900" size={40} />
            )}
          </button>
        </div>
        <nav
          className={`${
            menuOpen ? "block" : "hidden md:block"
          } fixed inset-0 backdrop-blur-lg bg-neutral-50/70 z-20 flex flex-col items-center justify-center md:relative md:bg-transparent md:backdrop-blur-none md:flex md:justify-center md:flex-row `}
        >
          <ul className="flex flex-col items-center md:flex-row md:space-y-0 gap-x-7">
            {NAV_MENU_DATA.map((item) => (
              <li
                key={item.id}
                className="mb-6 md:mb-0 relative"
                onMouseEnter={() => item.children && setDropdownOpen(true)}
                onMouseLeave={() => item.children && setDropdownOpen(false)}
              >
                <a
                  href={item.path}
                  className="hover:underline schoolbell-regular block transition ease-linear text-lg px-2 py-1 rounded-full text-neutral-900"
                  onClick={(e) => {
                    if (item.children && window.innerWidth < 768) {
                      e.preventDefault();
                      setDropdownOpen(!dropdownOpen);
                    }
                  }}
                >
                  {item.label}
                </a>
                {item.children && dropdownOpen && (
                  <ul className="absolute md:absolute left-1/2 md:left-0 top-full md:top-full transform md:translate-x-0 -translate-x-1/2 bg-neutral-900/80 backdrop-blur-2xl rounded-lg shadow-lg py-2 w-48 z-50 flex flex-col items-center">
                    {item.children.map((sub) => (
                      <li key={sub.id} className="w-full">
                        <a
                          href={sub.path}
                          className="block px-4 py-2 text-white hover:bg-orange-900/40 text-left schoolbell-regular"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
