import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About Me", href: "Page2" },
    { id: 3, label: "Projects", href: "Page3" },
    //updated contact page
    { id: 4, label: "Contact", href: "ContactPage" },
  ];

  return (
    <div>
      <header className="bg-gray-800 py-4">
        <nav className="w-[80%] mx-auto flex flex-wrap gap-6">
          {/* {links.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className="text-white font-medium text-lg"
            >
              {link.label}
            </Link>
          ))} */}
          {links.map((link) => (
            <li key={link.id} className="list-none">
              <Link href={link.href} className="text-white font-medium text-lg">
                {link.label}
              </Link>
            </li>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
