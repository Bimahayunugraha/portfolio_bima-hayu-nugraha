import React from "react";
import { Link } from "react-scroll";

const MobileNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 h-16 w-full border-t border-gray-200 bg-white bg-opacity-90 shadow-4 backdrop-blur-sm sm:block md:block lg:hidden">
      <div className="grid h-full grid-cols-3 gap-4 lg:grid-cols-3">
        <Link
          activeClass="active-link-mobile"
          spy
          smooth
          offset={50}
          duration={500}
          to="home"
          className="p-2">
          <div className="mx-auto cursor-pointer">
            <div className="mx-auto flex h-8 w-8 max-w-[48px] items-center justify-center rounded-full bg-gray-50 transition-all duration-300 ease-in-out">
              <i className="fa-light fa-grid-2 inline text-xs"></i>
            </div>
            <div className="text-center text-xs font-normal">Home</div>
          </div>
        </Link>
        <Link
          activeClass="active-link-mobile"
          spy
          smooth
          offset={50}
          duration={500}
          to="tentang"
          className="p-2">
          <div className="mx-auto cursor-pointer">
            <div className="mx-auto flex h-8 w-8 max-w-[48px] items-center justify-center rounded-full bg-gray-50 transition-all duration-300 ease-in-out">
              <i className="fa-light fa-user-magnifying-glass inline text-xs"></i>
            </div>
            <div className="text-center text-xs font-normal">Tentang Saya</div>
          </div>
        </Link>
        <Link
          activeClass="active-link-mobile"
          spy
          smooth
          offset={50}
          duration={500}
          to="project"
          className="p-2">
          <div className="mx-auto cursor-pointer">
            <div className="mx-auto flex h-8 w-8 max-w-[48px] items-center justify-center rounded-full bg-gray-50 transition-all duration-300 ease-in-out">
              <i className="fa-light fa-rectangle-history-circle-user inline text-xs"></i>
            </div>
            <div className="text-center text-xs font-normal">Project</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
