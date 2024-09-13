import { Container } from "postcss";
import React from "react";
import Image from "next/image";

function Page3() {
  return (
    <>
      <section className="bg-gray-200 text-white py-12">
        <div className="w-[70%] mx-auto items-center">
          <h1 className="text-center text-black font-bold text-4xl mb-5">
            Projects
          </h1>
          <p className="text-m text-center text-gray-700 mb-3 px-5">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>

          {/* NEW CONCEPT */}
          <div className="flex flex-col md:flex-row gap-5 border p-10 mb-3 bg-gray-500 rounded-3xl">
            <div className="w-full md:w-1/2 p-4">
              <Image
                src="https://picsum.photos/900/500"
                alt="img"
                layout="responsive"
                width={900}
                height={900}
                className="mb-2 rounded-md border-[5px] border-white transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h1 className="text-4xl  text-gray-700 font-bold mb-5">
                Title: <span className="text-red-500">DOM Project</span>
              </h1>

              <p className="text-gray-700 mb-10 text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus recusandae aliquam delectus rem quos molestiae,
                tenetur quae fugit unde excepturi a sunt odio veritatis quod
                rerum, impedit natus exercitationem beatae.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-400">
                Case Study
              </button>
            </div>
          </div>
          {/*Project 2 */}
          <div className="flex flex-col md:flex-row gap-5 border p-10 mb-3 bg-gray-300 rounded-3xl">
            {" "}
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h1 className="text-4xl  text-gray-700 font-bold mb-5">
                Title: <span className="text-red-500">DOM Project</span>
              </h1>

              <p className="text-gray-700 mb-10 text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus recusandae aliquam delectus rem quos molestiae,
                tenetur quae fugit unde excepturi a sunt odio veritatis quod
                rerum, impedit natus exercitationem beatae.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-400">
                Case Study
              </button>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <Image
                src="https://picsum.photos/900/500"
                alt="img"
                layout="responsive"
                width={900}
                height={900}
                className="mb-2 rounded-md border-[5px] border-white transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
          </div>
          {/*Project 3 */}
          <div className="flex flex-col md:flex-row gap-5 border p-10 mb-3 bg-gray-500 rounded-3xl">
            {" "}
            <div className="w-full md:w-1/2 p-4">
              <Image
                src="https://picsum.photos/900/500"
                alt="img"
                layout="responsive"
                width={900}
                height={900}
                className="mb-2 rounded-md border-[5px] border-white transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h1 className="text-4xl  text-gray-700 font-bold mb-5">
                Title: <span className="text-red-500">DOM Project</span>
              </h1>

              <p className="text-gray-700 mb-10 text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus recusandae aliquam delectus rem quos molestiae,
                tenetur quae fugit unde excepturi a sunt odio veritatis quod
                rerum, impedit natus exercitationem beatae.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-400">
                Case Study
              </button>
            </div>
          </div>

          {/*Projext 4*/}
          <div className="flex flex-col md:flex-row gap-5 border p-10 mb-3 bg-gray-300 rounded-3xl">
            {" "}
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h1 className="text-4xl  text-gray-700 font-bold mb-5">
                Title: <span className="text-red-500">DOM Project</span>
              </h1>

              <p className="text-gray-700 mb-10 text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus recusandae aliquam delectus rem quos molestiae,
                tenetur quae fugit unde excepturi a sunt odio veritatis quod
                rerum, impedit natus exercitationem beatae.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-400">
                Case Study
              </button>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <Image
                src="https://picsum.photos/900/500"
                alt="img"
                layout="responsive"
                width={900}
                height={900}
                className="mb-2 rounded-md border-[5px] border-white transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page3;
