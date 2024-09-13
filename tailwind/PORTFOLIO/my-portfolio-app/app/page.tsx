import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <header className="bg-gray-200 text-white py-12 w-full ">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-5 md:flex-row items-center">
            <div className="w-1/2 md:mb-5">
              <h1 className="text-4xl font-semibold text-red-400 py-3 md:py-0 md:text-left mb-4">
                Hello, I&apos;m Duwayne Blok
              </h1>
              <p className="text-black text-center md:text-left italic ">
                I&apos;m a Software Developer based in South Africa, Gqeberha,
                formerly known as Port Elizabeth.
              </p>
            </div>
            <div className="w-1/2 md:ml-8 ">
              <div className="w-full md:w-96 mx-auto">
                <Image
                  src="/asset/profile_avatar.jpg"
                  alt="profile"
                  width={400}
                  height={300}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        
      </header> */}
      <header className="bg-gray-200 h-full text-gray-900 py-12 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-semibold text-red-500 mb-4">
                Hello, I&apos;m Duwayne Blok
              </h1>
              <p className="text-lg italic text-gray-700">
                I&apos;m a Software Developer based in South Africa, Gqeberha,
                formerly known as Port Elizabeth.
              </p>
            </div>

            {/* Profile Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="w-48 h-48 md:w-64 md:h-64 relative">
                <Image
                  src="/asset/profile_avatar.jpg"
                  alt="profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-red-500 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
