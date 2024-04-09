import React from "react";
import Image from "next/image";

const CH6 = () => {
  return (
    <>
      {/*  <div >
        <section className='bg-green-800 py-8'>
            <div className='w-[70%] mx-auto'>
                <div className='flex gap-6'>
                    <div className='flex-1 text-white'>
                        <h1 className='text-6xl mb-4'>Respinve Lorem ipsum dolor sit amet consectetur.</h1>
                        <p className='text-sm sm:text-lg md:text-xl lg:text-2xl lg:hover:text-red-500'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis totam minus ullam repellat. Fugit provident placeat
                            cupiditate dolorem at nemo animi, vel doloribus nulla est autem ex possimus fugiat quos.
                        </p>
                        <button className='px-4 py-2 bg-blue-500 rounded-full uppercase mt-4 font-semibold hover:opacity-20'>I want to learn</button>
                    </div>
                    <div className='flex-1'>
                        <Image src="/asset/hero-img.jpg" alt="hero image" width={400} height={400} />
                    </div>
                </div>
            </div>
        </section>
        
    </div> */}
      <header className="bg-[#23424a] text-white py-12">
        <div className="w-[70%] mx-auto p-5 flex items-center">
          <div className=" w-1/2">
            <div className="">
              <h1 className="text-4xl font-semibold mb-5">
                Responsive design don&apos;t have to be a stuggle
              </h1>
              <p className="text-lg mb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus saepe esse impedit dolorem repellat provident eligendi
                voluptates ipsum dicta voluptate cupiditate vero incidunt
                deleniti illo, sed, beatae est alias in!
              </p>
              <a href="#nextSection">
                <button className="px-3 py-2 bg-purple-600 rounded-full uppercase font-semibold text-black hover:opacity-50 hover:bg-red-400">
                  I want to learn
                </button>
              </a>
            </div>
          </div>
          <div className="w-1/2">
            <div className="">
              <img
                src="/asset/hero-img.jpg"
                alt="Description of the image"
                className="w-fit h-fit pl-5"
              />
            </div>
          </div>
        </div>
      </header>
      <section className="text-black py-8">
        <div id="nextSection" className="w-[70%] mx-auto p-5">
          <div className="flex gap-5">
            <div className="flex-initial w-3/4">
              <h1 className="text-purple-600 text-3xl mb-6">
                Quality design made custom, on demand, just for you
              </h1>
              <p className="text-lg mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                maxime nostrum quidem, adipisci eum odit voluptates. Ipsum
                commodi esse odio facilis praesentium quibusdam obcaecati
                explicabo fuga, provident illo reprehenderit similique?
              </p>
              <p className="text-lg mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                minima architecto incidunt atque dolores facilis modi deleniti
                voluptates, hic corrupti quam nobis harum, neque natus eveniet
                numquam libero consequatur id.
              </p>
              <p className="text-lg mb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
                odit quo corporis alias itaque quisquam suscipit beatae tempore,
                fuga vel quaerat eveniet sit illum libero, et molestiae ex quos
                dolor?
              </p>
            </div>
            <div className="flex-initial w-1/4 bg-green-900 text-white p-4">
              <div>
                <div>
                  <div className="text-center p-5">
                    <h1 className="font-bold text-2xl mb-4">Cheap</h1>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius hic dignissimos error nemo? Soluta error autem
                      sapiente dignissimos in earum eos, ratione voluptatum
                      quia? Excepturi aut minima aperiam vero quidem.
                    </p>
                  </div>
                  <div className="text-center p-5">
                    <h1 className="font-bold text-2xl mb-4">Quick</h1>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos doloremque, ab corporis assumenda nisi
                      officia. Saepe quo enim praesentium placeat eum odio
                      perferendis similique porro autem quasi, ea sunt nam?
                    </p>
                  </div>
                  <div className="text-center p-5">
                    <h1 className=" font-bold text-2xl mb-4">Quality</h1>
                    <p className="text-center">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Unde officiis quis commodi accusamus iste vero debitis
                      saepe nam! Quos nisi perspiciatis dolore tempore! Unde
                      doloribus repudiandae perferendis minima totam blanditiis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[teal] text-white py-12">
        <div className="w-[70%] mx-auto p-5 flex items-center">
          <div className="flex gap-10">
            <div className="text-center">
              <h1 className="font-bold text-4xl mb-5">Cheap</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur, doloremque! Nostrum maiores, quo doloribus, quae
                accusamus ipsa fugit neque, ea repellendus veritatis a aut
                laboriosam nulla enim voluptate eaque assumenda!
              </p>
            </div>
            <div className="text-center">
              <h1 className="font-bold text-4xl mb-5">Quick</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                exercitationem quae voluptatibus, veniam iusto hic ducimus vero,
                est assumenda sed accusantium aspernatur dignissimos magnam
                minus esse porro quisquam vel eos!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CH6;
