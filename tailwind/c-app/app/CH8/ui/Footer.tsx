import React from "react";

const Footer = () => {
  return (
    <div>
      <h1 className="text-center">This is Footer</h1>
      <footer className="bg-[#3b4050] py-12">
        <div className="w-[80%] mx-auto">
          <h3 className="text-white text-4xl mb-6 md:text-center sm:text-center">
            Just scracthing the surface
          </h3>

          <div className="flex justify-between flex-col lg:flex-row gap-6 text-white md:flex-row">
            <div className="w-[45%]">
              <h3 className="text-[#A59678] ">About our company</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, accusamus libero fugit reiciendis delectus
                voluptates eveniet impedit repellat doloremque repellendus
                dicta, veniam nemo ipsa eaque corrupti perferendis! Incidunt,
                eum corrupti.
              </p>
            </div>
            <div className="w-[55%] flex flex-col text-white  md:flex-row sm:flex-row gap-4">
              <div className="flex-1">
                <h3 className="text-[#A59678] mb-4 text-2xl">Getting Around</h3>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-[#A59678] mb-4 text-2xl">Other things</h3>
                <ul>
                  <li>Lorem Issup</li>
                  <li>Lorem.</li>
                  <li>Lorem.</li>
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-[#A59678] mb-4 text-2xl">And more </h3>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
