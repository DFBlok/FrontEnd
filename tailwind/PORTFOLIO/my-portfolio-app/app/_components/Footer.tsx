import React from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa"


const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          {/**Footer Text */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2024 Duwayne Portfolio. All rights reserved.
          </p>
          {/**Social Media Icons */}
          <div className="flex gap-6 mt-4 md:mt-0">
            <a 
            href="https://github.com/DFBlok"
            target="_blank"
            rel="nonopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300">
            <FaGithub size={24} />
            </a>
            <a 
            href="https://www.linkedin.com/in/duwayne-blok"
            target="_blank"
            rel="nonopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300">
            <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
