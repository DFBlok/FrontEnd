import React from "react";

const Page2 = () => {
  return (
    <>
      
      
      <section className="bg-gray-100 py-12">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology.
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Introduction */}
            <div className="bg-red-500 text-white p-8 rounded-lg shadow-lg flex-1">
              <h2 className="text-3xl font-bold mb-4">Get to Know Me!</h2>
              <p className="text-lg mb-4">
                I&apos;m a <b>Full-Stack Developer</b> building and managing the
                Front-end of Websites and Web Applications that lead to the
                success of the overall product. Check out some of my work in the
                Projects section.
              </p>
              <p className="text-lg mb-4">
                I also like sharing content related to what I have learned over
                the years in Web Development so it can help others in the Dev
                Community. Feel free to connect or follow me on LinkedIn.
              </p>
              <p className="text-lg mb-6">
                I&apos;m open to job opportunities where I can contribute,
                learn, and grow. If you have a good opportunity that matches my
                skills and experience, don&apos;t hesitate to contact me.
              </p>
              <a href="/ContactPage">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300">
                  Contact
                </button>
              </a>
            </div>

            {/* Skills */}
            <div className="bg-red-500 text-white p-8 rounded-lg shadow-lg flex-1">
              <h2 className="text-2xl font-bold mb-6">My Skills</h2>
              <div className="flex flex-wrap gap-4">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TailwindCSS",
                  "Node.js",
                  "SQL",
                  "C#",
                  "Python",
                  "ASP.NET/MVC",
                  "MERN",
                  "Shadcn",
                  "Next.js",
                  "React.js",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-500 transition duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page2;
