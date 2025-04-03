'use client'
import Link from "next/link";
import React, { useState }  from "react";
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
  /* const links = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About Me", href: "/Page2" },
    { id: 3, label: "Projects", href: "/Page3" },
    //updated contact page
    { id: 4, label: "Contact", href: "/ContactPage" },
  ]; */
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      {/* <header className="bg-gray-800 py-4 shadow-md">
        <nav className="w-[80%] mx-auto flex items-center justify-between flex-wrap gap-8"> */}
          {/*LOGO OR BRAND NAME */}
          {/* <div className="text-white text-2xl font-bold">Duwayne's Portfolio</div> */}

          {/**NAVIGATION LINKS */}
          {/* <ul className="flex items-center gap-6">
            {links.map((link) => (
            <li key={link.id} className="list-none">
              <Link href={link.href} className="text-white font-medium text-lg hover:text-red-400 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
          </ul>
          
        </nav>
      </header> */}
      {/**NEW NAVBAR */}
      <nav className="bg-gray-900 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/**LOGO  */}
          <Link href="/" className="text-4xl font-bold text-red-400">Duwayne
          </Link>

          {/**DESKTOP MENU */}
          <div className="hidden md:flex space-x-6 text-2xl">
            <Link href="/" className="hover:text-red-400 transition">Home</Link>
            <Link href="/Page2" className="hover:text-red-400 transition">About</Link>
            <Link href="/Page3" className="hover:text-red-400 transition">Projects</Link>
            <Link href="/Page4" className="hover:text-red-400 transition">Contact</Link>
            
          </div>

          {/**MOBILE MENU BUTTON */}
          <button className="md:hidden text-gray-400 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24}/>: <FaBars size={24}/>}
          </button>
        </div>
        {/**MOBILE DROPDOWN MENU */}
        {menuOpen && (
          <div>
            <Link href="/" className="block text-center py-2 text-gray-300 hover:text-blue-400">Home</Link>
            <Link href="/Page2" className="block text-center py-2 text-gray-300 hover:text-blue-400">About</Link>
            <Link href="/Page3" className="block text-center py-2 text-gray-300 hover:text-blue-400">Projects</Link>
            <Link href="/Page4" className="block text-center py-2 text-gray-300 hover:text-blue-400">Contact</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
