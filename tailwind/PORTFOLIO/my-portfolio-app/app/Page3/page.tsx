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
          <div className="flex flex-col md:flex-row gap-5 border p-10 mb-10 bg-gray-100 rounded-3xl shadow-lg">
            <div className="w-full md:w-1/2 p-4">
              <Image
                src="https://picsum.photos/900/500"
                alt="img"
                layout="responsive"
                width={900}
                height={900}
                className="rounded-md border-2 border-white shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h1 className="text-3xl text-gray-800 font-semibold mb-5">
                Title: <span className="text-blue-500">DOM Project</span>
              </h1>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus recusandae aliquam delectus rem quos molestiae,
                tenetur quae fugit unde excepturi a sunt odio veritatis quod
                rerum, impedit natus exercitationem beatae.
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-500 transition-all duration-300">
                Case Study
              </button>
            </div>
          </div>
          {/*Project 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-5 border p-10 mb-10 bg-gray-300 rounded-3xl shadow-lg">
            <div className="w-full md:w-1/2 p-4">
              <Image
                src="https://picsum.photos/900/500"
                alt="img"
                layout="responsive"
                width={900}
                height={900}
                className="rounded-md border-2 border-white shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h1 className="text-3xl text-gray-800 font-semibold mb-5">
                Title: <span className="text-blue-500">API Project</span>
              </h1>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus recusandae aliquam delectus rem quos molestiae,
                tenetur quae fugit unde excepturi a sunt odio veritatis quod
                rerum, impedit natus exercitationem beatae.
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-500 transition-all duration-300">
                Case Study
              </button>
            </div>
          </div>
          {/*Project 3 */}
          <div className="flex flex-col md:flex-row gap-5 border p-10 mb-10 bg-gray-100 rounded-3xl shadow-lg">
            <div className="w-full md:w-1/2 p-4">
              <Image
                src="https://picsum.photos/900/500"
                alt="Project Image"
                layout="responsive"
                width={900}
                height={500}
                className="rounded-md border-2 border-white shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h1 className="text-3xl text-gray-800 font-semibold mb-5">
                Title: <span className="text-blue-500">MERN Project</span>
              </h1>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus recusandae aliquam delectus rem quos molestiae,
                tenetur quae fugit unde excepturi a sunt odio veritatis quod
                rerum, impedit natus exercitationem beatae.
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-500 transition-all duration-300">
                Case Study
              </button>
            </div>
          </div>

          {/*Projext 4*/}
          <div className="flex flex-col md:flex-row-reverse gap-5 border p-10 mb-10 bg-gray-300 rounded-3xl shadow-lg">
            <div className="w-full md:w-1/2 p-4">
              <Image
                src="https://picsum.photos/900/500"
                alt="img"
                layout="responsive"
                width={900}
                height={900}
                className="rounded-md border-2 border-white shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h1 className="text-3xl text-gray-800 font-semibold mb-5">
                Title: <span className="text-blue-500">API Project</span>
              </h1>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus recusandae aliquam delectus rem quos molestiae,
                tenetur quae fugit unde excepturi a sunt odio veritatis quod
                rerum, impedit natus exercitationem beatae.
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-500 transition-all duration-300">
                Case Study
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page3;
