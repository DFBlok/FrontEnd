import React from "react";

const SectionOne = () => {
  return (
    <div>
      <section className="bg-[#3b4050] py-12">
        <div className="w-[80%] mx-auto p-5 flex gap-4">
          <div>
            <h1 className="text-5xl text-white font-semibold">
              Responsive layouts{" "}
              <span className="text-[#A59678]">
                don&apos;t have to be a stuggle
              </span>
            </h1>
          </div>
          <div className="self-center">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio
              velit ipsa magni quaerat tempora deleniti porro officiis id quod
              voluptates nemo expedita aliquid, libero vero soluta
              necessitatibus neque molestias?
            </p>
            <button className="bg-[#A59678] text-white px-2 py-1 uppercase rounded-full mt-4">
              I want to learn
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionOne;
