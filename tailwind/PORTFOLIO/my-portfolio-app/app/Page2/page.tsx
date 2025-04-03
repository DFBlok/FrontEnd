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
            <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg flex-1">
              <h2 className="text-3xl font-bold mb-4">Get to Know Me!</h2>
              <p className="text-lg mb-4">
              Hello, my name is <b>Duwayne Blok</b>, and I am a passionate full-stack developer with a solid foundation in software development. I studied <b>Information Technology (Software Development) at Nelson Mandela University</b>, where I gained hands-on experience with a range of technologies, including <b>C#, .NET, JavaScript, and database management</b>.
              </p>
              <p className="text-lg mb-4">
              I have completed a full-stack developer learnership specializing in the MERN stack at Velisa Africa Academy, and I am now seeking an opportunity to apply my skills in a professional setting. My experience spans projects such as online booking systems and health care applications, using modern tools like Next.js, Prisma, Tailwind CSS, and Stripe.
              </p>
              <p className="text-lg mb-6">
              I am driven by problem-solving and eager to grow in the tech industry, continuously honing my abilities and staying updated with emerging technologies. I would love to contribute to a forward-thinking team and leverage my skills to help build innovative solutions.


              </p>
              <a href="/ContactPage">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300">
                  Contact
                </button>
              </a>
            </div>

            {/* Skills */}
            <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg flex-1">
              <h2 className="text-2xl font-bold mb-6">My Skills</h2>
              <div className="flex flex-wrap gap-4 cursor-pointer">
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
