import React from "react";

const Page2 = () => {
  return (
    <>
      <section className="bg-gray-200 py-12">
        <div className="w-[70%] mx-auto p-5 items-center">
          <div>
            <h1 className="text-center font-bold text-4xl">About me</h1>
            <hr />
            <p className="text-m text-gray-700 text-center py-5 m-3">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-gray-700 w-1/2 p-4">
              <h2 className="text-3xl font-bold mb-3">Get to know me!</h2>
              <p className="text-m text-gray-200 mb-3">
                I&apos;m a <b>Full-Stack Developer</b> building and managing the
                Front-end of Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the
                Projects section.
              </p>
              <p className="text-m text-gray-200 mb-3">
                I also like sharing content related to the stuff that I have
                learned over the years in Web Development so it can help other
                people of the Dev Community. Feel free to Connect or Follow me
                on my Linkedin.
              </p>
              <p className="text-m text-gray-200 mb-3">
                I&apos;m open to Job opportunities where I can contribute, learn
                and grow. If you have a good opportunity that matches my skills
                and experience then don&apos;t hesitate to contact me.
              </p>
              <a href="/ContactPage">
                <button className="text-lg bg-blue-500 text-white px-8 py-2 my-5 rounded-xl font-semibold hover:bg-red-400">
                  Contact
                </button>
              </a>
            </div>
            <div className="bg-gray-700 w-1/2 p-4 md:mt-0">
              <h1 className="text-2xl font-bold mb-3">My Skills</h1>
              <div className="flex flex-wrap gap-2">
                <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold  hover:bg-red-400">
                  Html
                </button>
                <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold hover:bg-red-400">
                  CSS
                </button>
                <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold  hover:bg-red-400">
                  JavaScript
                </button>
                <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold  hover:bg-red-400">
                  Tailwindcss
                </button>
                <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold  hover:bg-red-400">
                  Node.js
                </button>
                <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold hover:bg-red-400">
                  SQL
                </button>
                <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold  hover:bg-red-400">
                  C#
                </button>
                <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold  hover:bg-red-400">
                  Python
                </button>
                <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold hover:bg-red-400">
                  ASP.Net/MVC
                </button>
                <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold hover:bg-red-400">
                  MERN
                </button>
                <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold hover:bg-red-400">
                  Shadcn
                </button>
                <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold hover:bg-red-400">
                  Next.js
                </button>
                <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold hover:bg-red-400">
                  React.js
                </button>
              </div>
            </div>
            {/* <div className="bg-green-500 w-full md:auto">
              <h1 className="text-2xl font-bold mb-3 p-4">My skils</h1>
              <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold m-2">
                Html
              </button>
              <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold m-2">
                CSS
              </button>
              <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold m-2">
                JavaScript
              </button>
              <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold m-2">
                Tailwindcss
              </button>
              <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold m-2">
                Node.js
              </button>
              <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold m-2">
                SQL
              </button>
              <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold m-2">
                C#
              </button>
              <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold m-2">
                Python
              </button>
              <button className="bg-gray-300 p-2 rounded-xl text-m font-semibold m-2">
                ASP.Net/MVC
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page2;
