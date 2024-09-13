import React from "react";

const Page4 = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        integrity="sha512-n/oxZ8T0nKjv9cnhHq4pVT1gVtx5GP+MQp7Q0LkIV+u+dhBOpZNX0Dbqn1MRbDp1OSInWti+XpxjQQxjb63h9w=="
        crossOrigin="anonymous"
      />

      {/* <section className="bg-gray-200 text-white py-12 ">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="w-full md:w-[70%] mx-auto p-5 bg-gray-700 rounded-3xl">
            <h1 className="text3xl font-bold mb-8">Contact Me </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-bold mb-2">
                  <i className="fas fa-map-marker-alt mr-2"></i> Address
                </h2>
                <p>123 Main Street</p>
                <p>Port Elizabeth, 6059</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Phone</h2>
                <p>033 251 5556</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Email</h2>
                <p>duwayne@gmail.com</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Social Media</h2>
                <ul>
                  <li>
                    Facebook:{" "}
                    <a href="#" className="text-red-500 font-bold">
                      <i className="fab fa-facebook"></i>Duwayne
                    </a>
                  </li>
                  <li>
                    Twitter:{" "}
                    <a href="#" className="text-red-500 font-bold">
                      Duwayne
                    </a>
                  </li>
                  <li>
                    LinkedIn:{" "}
                    <a
                      href="https://www.linkedin.com/in/duwayne-blok-9bb2b8184/"
                      target="blank"
                      className="text-red-500 font-bold"
                    >
                      Duwayne
                    </a>
                  </li>
                  <li>
                    Github:{" "}
                    <a
                      href="https://github.com/DFBlok?tab=overview&from=2024-04-01&to=2024-04-19"
                      target="Blank"
                      className="text-red-500 font-bold"
                    >
                      DFB
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-gray-200 text-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="w-full md:w-[70%] mx-auto p-10 bg-white rounded-3xl shadow-lg">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  <i className="fas fa-map-marker-alt mr-2 text-red-500"></i>{" "}
                  Address
                </h2>
                <p>123 Main Street</p>
                <p>Port Elizabeth, 6059</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  <i className="fas fa-phone mr-2 text-blue-500"></i> Phone
                </h2>
                <p>(033) 251 5556</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  <i className="fas fa-envelope mr-2 text-green-500"></i> Email
                </h2>
                <p>duwayne@gmail.com</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  <i className="fas fa-share-alt mr-2 text-purple-500"></i>{" "}
                  Social Media
                </h2>
                <ul>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-blue-600 font-bold hover:text-blue-800"
                    >
                      <i className="fab fa-facebook mr-2"></i>Facebook: Duwayne
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-blue-400 font-bold hover:text-blue-600"
                    >
                      <i className="fab fa-twitter mr-2"></i>Twitter: Duwayne
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.linkedin.com/in/duwayne-blok-9bb2b8184/"
                      target="_blank"
                      className="text-blue-700 font-bold hover:text-blue-900"
                    >
                      <i className="fab fa-linkedin mr-2"></i>LinkedIn: Duwayne
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/DFBlok?tab=overview&from=2024-04-01&to=2024-04-19"
                      target="_blank"
                      className="text-gray-800 font-bold hover:text-gray-900"
                    >
                      <i className="fab fa-github mr-2"></i>Github: DFB
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Optional: Add a contact form */}
            <div className="mt-10">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Send a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    /* rows="5" */
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page4;
