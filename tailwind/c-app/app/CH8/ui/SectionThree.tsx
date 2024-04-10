import React from "react";
import Image from "next/image";

const SectionThree = () => {
  return (
    <div>
      <section className="w-[80%] mx-auto flex flex-col gap-6 p-12">
        <div className="p-2">
          <h2 className="text-3xl mb-2 text-[#A59678]">
            It doesn&apos;t have to be so hard
          </h2>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            eaque illum expedita quam esse impedit, eius officiis mollitia
            doloribus error officia, eos harum enim. Nulla commodi harum
            dignissimos consequatur quisquam!
          </p>
          <div>
            <Image
              src="/asset/hero-img.jpg"
              alt="hero image"
              width={400}
              height={400}
            />
          </div>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos enim
            sapiente accusantium accusamus. Repellendus facilis nihil illum, vel
            unde harum sint? Quidem, magnam! Voluptates harum voluptate,
            voluptatum vero quaerat recusandae.
          </p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row lg:flex-col">
          <div className="bg-gray-800 text-white p-6 text-center">
            <h1 className="text-4xl mb-4">Break it down</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
              earum nemo, nostrum cumque repellat iure mollitia libero corporis
              voluptate voluptas hic eius autem repellendus harum. Ipsa
              aspernatur id quae ab.
            </p>
          </div>
          <div className="bg-gray-800 text-white p-6 text-center">
            <h1 className="text-4xl mb-4">Work your way up</h1>
            <p className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus officia, quae cum maxime repellat, unde,
              repudiandae provident libero nesciunt similique molestias possimus
              adipisci eum error soluta tenetur numquam ab corrupti.
            </p>
          </div>
          <div className="bg-gray-800 text-white p-6 text-center">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              assumenda nihil ut dicta expedita, doloremque voluptas?
              Cupiditate, qui quia corporis voluptatum dolores minus harum
              doloribus hic sint officiis voluptate laudantium.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionThree;
