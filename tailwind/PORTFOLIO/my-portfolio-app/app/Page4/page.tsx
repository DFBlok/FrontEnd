import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Page4 = () => {
  return (
    <>
          <div className="bg-gradient-to-r from-red-200 via-red-400 to-red-600 p-6 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-3xl p-8">
        {/* Title and Introduction */}
        <h1 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
          Contact Information
        </h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Feel free to reach out through any of the following channels. I&apos;ll get back to you as soon as possible.
        </p>

        {/* Contact Details */}
        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center gap-4">
            <span className="text-xl font-medium text-gray-700">📧 Email:</span>
            <a
              href="mailto:duwayneblok01@gmail.com"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              duwayneblok01@gmail.com
            </a>
          </div>

          {/* Phone Number */}
          <div className="flex items-center gap-4">
            <span className="text-xl font-medium text-gray-700">📱 Phone:</span>
            <a
              href="tel:+27631031668"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              +27 (63) 103-1668
            </a>
          </div>

          {/* Office Address (Optional) */}
          <div className="flex items-center gap-4">
            <span className="text-xl font-medium text-gray-700">🏢 Address:</span>
            <p className="text-gray-700">
              Gqeberha, 6059
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-6">
            <span className="text-xl font-medium text-gray-700">🌐 Connect with me:</span>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                <FaLinkedinIn size={30}/>
              </a>
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition duration-300"
              >
                <FaGithub size={30} />
              </a>
             {/*  <a
                href="https://twitter.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition duration-300"
              >
                Twitter
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Page4;
