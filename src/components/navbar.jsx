import React, { useEffect, useState } from 'react';
import {
  FaBars,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaTimes,
} from 'react-icons/fa';
import Logo from '../assets/images/logo.png';
import Bk from '../assets/images/bk.png';
import { Link } from 'react-scroll';
const Navbar = () => {
  //   const primary = '#54546e';
  const [nav, setNav] = useState(false);
  const [isScrolled, setScroll] = useState(false);
  const handleClick = () => setNav(!nav);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    // HEADER
    <div
      className={
        !isScrolled
          ? 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-[#111827] to-[#240b36] text-gray-500 z-10'
          : 'fixed w-full h-[80px] shadow-sm shadow-[#727272] flex justify-between items-center text-[#7c339c] px-4 bg-[#1b1a2b] z-10'
      }
    >
      {/* LOGO */}
      <div>
        <li className="list-none">
          <Link to="home" smooth={true} duration={500}>
            <img className="" src={Bk} alt="logo" style={{ width: '70px' }} />
          </Link>
        </li>
      </div>
      {/* Menu */}
      <ul className="hidden md:flex gap-3">
        <div className="flex items-center">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </div>
        <button className="border px-2 py-2  hover:bg-white rounded-md">
          Get In Touch
        </button>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer text-white"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-[#111827] to-[#240b36] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] duration-300 hover:ml-[-1px] bg-[#0077b5] ">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="http://"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] duration-300 hover:ml-[-1px] bg-[#2e3136]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="http://"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] duration-300 hover:ml-[-1px] bg-[#3a6e43]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="http://"
            >
              Email <FaEnvelope size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] duration-300 hover:ml-[-1px] bg-[#4867aa]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="http://"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
