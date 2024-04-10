import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <header className="bg-[#2e323f] py-2">
        <nav className="w-[80%] mx-auto flex  items-center justify-between text-white">
          <Link href="/">
            <h1 className="text-4xl font-semibold">CRL</h1>
          </Link>
          <ul className="text-md uppercase flex gap-4 items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sectionOne">About</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">Sign In</Link>
            </li>
            <li className="py-1 px-4 bg-[#A59678] rounded-full">
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
