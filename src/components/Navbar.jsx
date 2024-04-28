import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" glass  text-gray-300 p-8 h-[96px] max-w-[1200px] flex justify-between items-center mx-auto">
      <div className="flex justify-center items-center gap-4">
        <img className="w-14" src="src\assets\logo.png" alt="" />
        <h1 className="text-xl font-jersey   ">Ciudad Vorágine</h1>
      </div>

      <ul className="hidden md:flex gap-6 text-xl">
        <li>
          <Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="Tracks" spy={true} smooth={true} offset={50} duration={500}>
            Tracks
          </Link>
        </li>
        <li>
          <Link to="Videos" spy={true} smooth={true} offset={50} duration={500}>
            Videos
          </Link>
        </li>
        <li>
          <Link
            to="Eventos"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Eventos
          </Link>
        </li>
        <li>
          <Link
            to="Contacto"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contacto
          </Link>
        </li>
      </ul>

      <div
        onClick={handleNav}
        className="block md:hidden text-gray-300 fixed right-10 top-10 z-50"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? "text-gray-300 z-40 fixed left-0 top-0 w-full bg-[#232323] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="p-8 text-4xl ml-20 z-10 ">
          <li className="p-2">
            <Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="Tracks"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Tracks
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="Videos"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Videos
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="Eventos"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Eventos
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="Contacto"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
