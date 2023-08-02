import React, { useEffect, useState } from "react";
import icon from "../assets/img/svg/logo.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);

    return () => window.removeEventListener("scroll", stickyNavbar);
  });

  const stickyNavbar = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <>
      <nav
        className={
          scroll
            ? "nav-container active absolute top-0 left-0 right-0 z-20 w-full border-b border-gray-200 px-0 py-2.5 sm:px-4 md:px-2"
            : "gradient-1 fixed top-0 left-0 z-20 w-full bg-white px-0 py-2.5 sm:px-4 md:px-2"
        }>
        <div className="container mx-auto">
          <div className="relative flex flex-wrap items-center justify-between">
            <Link to="home" className="flex cursor-pointer items-center">
              <img src={icon} className="mr-3 h-6 sm:h-6" alt="Logo" />
              <span className="self-center whitespace-nowrap text-lg font-semibold md:text-xl">
                Portfolio
              </span>
            </Link>
            <div className="flex md:order-2">
              <div>
                <Link
                  activeClass="active-link"
                  spy
                  smooth
                  offset={50}
                  duration={500}
                  to="home"
                  className="mx-8 hidden cursor-pointer rounded-lg px-2 py-2.5 text-center text-sm font-semibold text-neutral-80 transition-all duration-150 ease-in-out hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary lg:flex">
                  Home
                </Link>
              </div>
              <div>
                <Link
                  activeClass="active-link"
                  spy
                  smooth
                  offset={50}
                  duration={500}
                  to="tentang"
                  className="mx-8 hidden cursor-pointer rounded-lg px-2 py-2.5 text-center text-sm font-semibold text-neutral-80 transition-all duration-150 ease-in-out hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary lg:flex">
                  Tentang Saya
                </Link>
              </div>
              <div>
                <Link
                  activeClass="active-link"
                  spy
                  smooth
                  offset={50}
                  duration={500}
                  to="project"
                  className="mx-8 hidden cursor-pointer rounded-lg px-2 py-2.5 text-center text-sm font-semibold text-neutral-80 transition-all duration-150 ease-in-out hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary lg:flex">
                  Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
