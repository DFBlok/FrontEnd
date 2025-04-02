import { Container } from "postcss";
import React from "react";
import Image from "next/image";

function Page3() {
  return (
    <>
      <section className="bg-gray-200  text-white py-12">
        <div className="w-[70%] mx-auto items-center">
          <h1 className="text-center text-black font-bold text-4xl mb-5">
            Projects
          </h1>
          <p className="text-m text-center text-gray-700 mb-3 px-5">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>

          {/* NEW CONCEPT */}
          {/* -------BOOKSTORE CRUD App start ----------------------
          <div className="flex flex-col md:flex-row gap-5 border p-10 mb-10 bg-gray-100 rounded-3xl shadow-lg">
            <div className="w-full md:w-1/2 p-4">
              <Image
               
                src="/asset/BOOKSTOR-CRUD.png"
                alt="img"
                layout="responsive"
                width={900}
                height={900}
                className="rounded-md border-2 border-white shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h1 className="text-3xl text-gray-800 font-semibold mb-5">
                Title: <span className="text-blue-500">React CRUD</span>
              </h1>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                A React-based frontend project using Vite for fast development,
                styled with TailwindCSS, and featuring routing, icons,
                notifications, and HTTP requests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://bookstore-crud-7hiofn3e6-dfbloks-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
                    View Website
                  </button>
                </a>
                <a
                  href="https://github.com/DFBlok/React-Projects/tree/main/BookStoreProject-MERN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300">
                    View GitHub Code
                  </button>
                </a>
              </div>
            </div>
          </div> 
          -------------------------ENDS----------------------*/}
          {/*Project 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-5 border p-10 mb-10 bg-gray-300 rounded-3xl shadow-lg">
            <div className="w-full md:w-1/2 p-4">
              <Image
                src="/asset/velisa-landing-page.png"
                alt="velisa landing page project"
                layout="responsive"
                width={900}
                height={900}
                className="rounded-md border-2 border-white shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h1 className="text-3xl text-gray-800 font-semibold mb-5">
                Title:{" "}
                <span className="text-blue-500">Velisa Landing Page</span>
              </h1>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                This project is a responsive Landing Page for a MERN Stack
                course for Velisa Africa Academy developed using Next.js and
                Tailwind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://landing-page-k1wbyex54-dfbloks-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
                    View Website
                  </button>
                </a>
                <a
                  href="https://github.com/DFBlok/landing-page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300">
                    View GitHub Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*   </div> */}
          {/*Project 3 */}
          <div className="flex flex-col md:flex-row gap-5 border p-10 mb-10 bg-gray-100 rounded-3xl shadow-lg">
            <div className="w-full md:w-1/2 p-4">
              <Image
                /* src="https://picsum.photos/900/500" */
                src="/asset/estate-landing-page.png"
                alt="img"
                layout="responsive"
                width={900}
                height={900}
                className="rounded-md border-2 border-white shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h1 className="text-3xl text-gray-800 font-semibold mb-5">
                Title:{" "}
                <span className="text-blue-500">Real Estate Landing Page</span>
              </h1>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                This project is a responsive Real Estate Landing Page developed
                using Next.js, emphasizing performance and user experience. The
                landing page is designed with a modern aesthetic, utilizing
                TailwindCSS for styling, ensuring that it is both visually
                appealing and easy to navigate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://real-estate-project-5l2ob3sbw-dfbloks-projects.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
                    View Website
                  </button>
                </a>
                <a
                  href="https://github.com/DFBlok/real-estate-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300">
                    View GitHub Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Projext 4*/}
          <div className="flex flex-col md:flex-row-reverse gap-5 border p-10 mb-10 bg-gray-300 rounded-3xl shadow-lg">
            <div className="w-full md:w-1/2 p-4">
              <Image
                src="/asset/jaysolution-home.png"
                alt="img"
                layout="responsive"
                width={900}
                height={900}
                className="rounded-md border-2 border-white shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h1 className="text-3xl text-gray-800 font-semibold mb-5">
                Title:{" "}
                <span className="text-blue-500">
                  Jay&apos;s Solution - Landing Page
                </span>
              </h1>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                This project is a responsive landing page for Jay&apos;s
                Facilities Services, developed using Next.js with a focus on
                performance, user experience, and a modern aesthetic. The page
                is designed to showcase a wide range of facility management
                services, such as general maintenance, plumbing, HVAC, and more.
                It is built with TailwindCSS for rapid, utility-first styling,
                ensuring an intuitive and visually appealing layout. This
                project utilizes several modern tools, including Lucide-react
                icons and React components, to deliver a seamless user
                experience across devices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://jays-facilities-services-ifivot4ak-dfbloks-projects.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
                    View Website
                  </button>
                </a>
                <a
                  href="https://github.com/DFBlok/jays-facilities-services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300">
                    View GitHub Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Project 5 */}
          <div className="flex flex-col md:flex-row gap-5 border p-10 mb-10 bg-gray-100 rounded-3xl shadow-lg">
            <div className="w-full md:w-1/2 p-4">
              <Image
                /* src="https://picsum.photos/900/500" */
                src="/asset/Todo-App.PNG"
                alt="img"
                layout="responsive"
                width={900}
                height={900}
                className="rounded-md border-2 border-white shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h1 className="text-3xl text-gray-800 font-semibold mb-5">
                Title:{" "}
                <span className="text-blue-500">To Do List App</span>
              </h1>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                This project is a responsive To do list developed
                using Next.js, emphasizing performance and user experience. The
                landing page is designed with a modern aesthetic, utilizing
                TailwindCSS for styling, ensuring that it is both visually
                appealing and easy to navigate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://to-do-app-2025-tau.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
                    View Website
                  </button>
                </a>
                <a
                  href="https://github.com/DFBlok/To-Do-App-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300">
                    View GitHub Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page3;
