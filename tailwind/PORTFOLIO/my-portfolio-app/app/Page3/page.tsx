import { Container } from "postcss";
import React from "react";
import Image from "next/image";

function Page3() {
  return (
    <>
      {/*       <section className="bg-gray-200">
        <div className="w-[70%] mx-auto flex p-5 items-center flex-col">
          <div className="w-full flex justify-between">
            <div className="w-1/2 border-2 p-2 border-pink-500">
              <div className="border-2 border-black p-4 mb-2">
                <h1 className="text-xl font-bold mb-2">Project 1</h1>
                <p className="text-gray-700 mb-4">
                  This is the description for Project 1.
                </p>
                <Image
                  src="/asset/project.jpg"
                  alt="project image"
                  className="mb-4"
                  width={200}
                  height={100}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Details
                </button>
              </div>
              <div className="border-2 border-red-600 p-4 mb-2">
                <h1 className="text-xl font-bold mb-2">Project 2</h1>
                <p className="text-gray-700 mb-4">
                  This is the description for Project 1.
                </p>
                <Image
                  src="/asset/project.jpg"
                  alt="project image"
                  className="mb-4"
                  width={200}
                  height={100}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
            <div className="w-1/2 border-2 p-2 border-pink-500 ml-2">
              <div className="border-2 border-black p-4 mb-2">
                <h1 className="text-xl font-bold mb-2">Project 3</h1>
                <p className="text-gray-700 mb-4">
                  This is the description for Project 1.
                </p>
                <Image
                  src="/asset/project.jpg"
                  alt="project image"
                  className="mb-4"
                  width={200}
                  height={100}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Details
                </button>
              </div>
              <div className="border-2 border-red-600 p-4 ">
                <h1 className="text-xl font-bold mb-2">Project 4</h1>
                <p className="text-gray-700 mb-4">
                  This is the description for Project 1.
                </p>
                <Image
                  src="/asset/project.jpg"
                  alt="project image"
                  className="mb-4"
                  width={200}
                  height={100}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-gray-500 text-white py-12">
        <div className="w-[70%] mx-auto items-center">
          <h1 className="text-center font-bold text-4xl mb-5">Projects</h1>
          <p className="text-m text-center text-gray-200 mb-3 px-5">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
          <div className="flex flex-col md:flex-row gap-5 border p-5 mb-3">
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-xl font-bold mb-2">Title: </h1>
              <Image
                src="/asset/project.jpg"
                alt="img"
                width={100}
                height={100}
                className="mb-2"
              />
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus recusandae aliquam delectus rem quos molestiae,
                tenetur quae fugit unde excepturi a sunt odio veritatis quod
                rerum, impedit natus exercitationem beatae.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Case Study
              </button>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-xl font-bold mb-2">Title: </h1>
              <Image
                src="/asset/project.jpg"
                alt="img"
                width={100}
                height={100}
                className="mb-2"
              />
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus recusandae aliquam delectus rem quos molestiae,
                tenetur quae fugit unde excepturi a sunt odio veritatis quod
                rerum, impedit natus exercitationem beatae.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Case Study
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 border p-5">
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-xl font-bold mb-2">Title: </h1>
              <Image
                src="/asset/project.jpg"
                alt="img"
                width={100}
                height={100}
                className="mb-2"
              />
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus recusandae aliquam delectus rem quos molestiae,
                tenetur quae fugit unde excepturi a sunt odio veritatis quod
                rerum, impedit natus exercitationem beatae.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Case Study
              </button>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-xl font-bold mb-2">Title: </h1>
              <Image
                src="/asset/project.jpg"
                alt="img"
                width={100}
                height={100}
                className="mb-2"
              />
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus recusandae aliquam delectus rem quos molestiae,
                tenetur quae fugit unde excepturi a sunt odio veritatis quod
                rerum, impedit natus exercitationem beatae.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
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
