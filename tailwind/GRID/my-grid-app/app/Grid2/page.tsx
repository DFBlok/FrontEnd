import React from "react";

const Grid2 = () => {
  return (
    <div>
      <head>
        <body className="bg-gray-100">
          <div>
            {/*  header */}
            <div className="bg-gray-800 text-white py-4 ">
              <div className="flex items-center justify-between mx-10">
                <h1 className="text-lg font-bold mb-4">Logo</h1>
                <ul className="flex gap-4 mb-4">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-white hover:bg-gray-200 hover:text-black"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="block py-2 px-4 text-white hover:bg-gray-200 hover:text-black"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="block py-2 px-4 text-white hover:bg-gray-200 hover:text-black"
                    >
                      Project
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="block py-2 px-4 text-white hover:bg-gray-200 hover:text-black"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              {/*               <div className="flex items-center mb-4">
                <img
                  src="./asset/avi.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <div className="text-gray-800">John Doe</div>
                  <div className="text-sm text-gray-700">
                    johndow@example.com
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {/* body */}
          <div className="flex flex-grow min-h-screen grid-rows-layout">
            {/*   <!-- Sidebar --> */}
            <div className="bg-gray-200 col-span-3 p-6">
              <div>
                <div className="text-sm font-semibold mb-2">Follow Us:</div>
                <div>
                  <ul>
                    <li>
                      <a href="#" className="text-gray-800 hover:text-blue-500">
                        <i className="fab fa-facebook"> Facebook</i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-800 hover:text-blue-500">
                        <i className="fab fa-twitter"> Twitter</i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-800 hover:text-blue-500">
                        <i className="fab fa-instagram"> Instagram</i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-800 hover:text-blue-500">
                        <i className="fab fa-github"> GitHub</i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*  <!-- Main Content --> */}
            <div className="flex-grow p-4">
              <h1 className="text-2xl font-bold mb-4 p-2">The Land Of Greek</h1>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi recusandae cumque fugit ut autem dolor at accusamus
                distinctio aut deleniti id, soluta illum velit dolores tempora
                repellendus doloremque odit unde!
              </p>
              <p className="p-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo facilis dicta aliquid reiciendis fuga, iste dolore ut
                ipsa distinctio exercitationem ad, nisi officiis modi cupiditate
                aut alias est a voluptates.
              </p>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                recusandae cumque assumenda inventore, asperiores libero laborum
                ut, nostrum perspiciatis exercitationem incidunt eaque
                reprehenderit consequuntur, non illum? Iure mollitia dolorum
                sint.
              </p>
            </div>
          </div>
          <div className="bg-gray-800 text-white py-4">
            <div className="container mx-auto">
              &copy; 2024 MyWebsite. All rights reserved.
            </div>
          </div>
        </body>
      </head>
    </div>
  );
};

export default Grid2;
