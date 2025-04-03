import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About Me", href: "/Page2" },
    { id: 3, label: "Projects", href: "/Page3" },
    //updated contact page
    { id: 4, label: "Contact", href: "/ContactPage" },
  ];

  return (
    <div>
      <header className="bg-gray-800 py-4 shadow-md">
        <nav className="w-[80%] mx-auto flex items-center justify-between flex-wrap gap-8">
          {/*LOGO OR BRAND NAME */}
          <div className="text-white text-2xl font-bold">Duwayne's Portfolio</div>

          {/**NAVIGATION LINKS */}
          <ul className="flex items-center gap-6">
            {links.map((link) => (
            <li key={link.id} className="list-none">
              <Link href={link.href} className="text-white font-medium text-lg hover:text-red-400 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
          </ul>
          
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
