import Image from "next/image";

export default function Home() {
  return (
    <>
     
      <header className="bg-gray-200 min-h-screen flex items-center justify-center w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-10 w-full ">
          
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left max-w-lg">
              <h1 className="text-5xl font-bold text-red-600 mb-6">
                Hello, I&apos;m Duwayne Blok
              </h1>
              <p className="text-lg italic text-gray-800 leading-relaxed">
              A passionate <span className="font-semibold text-red-500">Software Developer </span> 
            based in <span className="font-semibold">Gqeberha, South Africa</span>. 
            I love building modern, user-friendly applications that solve real-world problems.
              </p>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-block bg-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-red-600 transition-all"
                  >Contact Me</a>
                
              </div>
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
      </header>
    </>
  );
}
