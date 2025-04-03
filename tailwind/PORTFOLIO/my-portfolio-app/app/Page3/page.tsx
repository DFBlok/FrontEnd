import { Container } from "postcss";
import React from "react";
import Image from "next/image";

function Page3() {
  return (
    <>
      <section className="bg-gray-100 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-center text-gray-900 font-bold text-5xl mb-6">
            Projects
          </h1>
          <p className="text-lg text-center text-gray-700 mb-12 ">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>

          
          {/*PROJECT LIST */}
          <div className="grid grid-10 p-5">
            {/**PROJECT 1 - Velisa landing page */}
            <div className="grid md:grid-cols-2 items-center bg-white shadow-lg rounded-xl overflow-hidden p-6 mb-5">
              <Image 
              src="/asset/velisa-landing-page.png"
              alt="Velisa Landing Page"
              layout="responsive"
              width={900}
              height={600}
              className="rounded-lg"/>
              <div className="p-6">
                <h2 className="text-gray-600 mb-6 landing-relaxed">Velisa Africa Landing Page

                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                A responsive landing page built for a MERN Stack course 
                using Next.js and TailwindCSS.
                </p>
                <div className="flex gap-4">
                  <a href="https://landing-page-k1wbyex54-dfbloks-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                    View Website
                  </a>
                  <a 
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"> View GitHub Code</a>
                </div>
              </div>
            </div>

            {/**Project 2 - Real Estate landing Page */}
            <div className="grid md:grid-cols-2 items-center bg-white shadow-lg rounded-xl overflow-hidden p-6 mb-5">
              <Image 
                src="/asset/estate-landing-page.png"
                alt="Real Estate Landing Page"
                layout="responsive"
                width={900}
                height={600}
                className="rounded-lg"      
              />
              <div className="p-6">
                <h2 className="text-gray-600 mb-6 leading-relaxed">
                Real Estate Landing Page
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                A high-performance, responsive real estate landing page built with Next.js 
                and TailwindCSS for modern UI/UX.
                </p>
                <div className="flex gap-4">
                  <a 
                  href="https://real-estate-project-5l2ob3sbw-dfbloks-projects.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                  View Website
                  </a>
                  <a
                  href="https://github.com/DFBlok/real-estate-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
                  >
                    View GitHub Code
                  </a>
                </div>
              </div>
            </div>
          {/**Project 3 - To DO List App */}
          <div className="grid md:grid-cols-2 items-center bg-white shadow-lg rounded-xl overflow-hidden p-6 mb-5">
          <Image
              src="/asset/Todo-App.PNG"
              alt="To Do List App"
              layout="responsive"
              width={900}
              height={600}
              className="rounded-lg"
            />
            <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                To Do List App
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A responsive and modern To Do List application built with Next.js, 
                featuring a clean and user-friendly interface.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://to-do-app-2025-tau.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                  View Website
                </a>
                <a
                  href="https://github.com/DFBlok/To-Do-App-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
                >
                  View GitHub Code
                </a>
              </div>
            </div>
          </div>
          {/**Project 4 - Doctor Booking App */}
          <div className="grid md:grid-cols-2 items-center bg-white shadow-lg rounded-xl overflow-hidden p-6 mb-5">
            <Image 
              src="/asset/doctorBookingApp.PNG"
              alt="Doctor Booking App"
              layout="responsive"
              width={900}
              height={600}
              className="rounded-lg"
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Doctor Appointment App
              </h2>
              <p>
              A responsive and modern Doctor Appiontment Booking application built with Next.js, strapi and Kindle with featuring a clean, user-friendly interface and backend.
              </p>
              <div className="flex gap-4">
                <a 
                href="https://doctor-booking-gml9nru9c-dfbloks-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                  View Website
                </a>
                <a 
                href="https://github.com/DFBlok/doctor-booking-app/tree/master"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">View GitHub Code</a>
              </div>
            </div>
          </div>
        </div>
          
        </div>
      </section>
    </>
  );
}

export default Page3;
