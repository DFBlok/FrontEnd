import React from "react";

const CH7 = () => {
  return (
    <div>
      <section className="bg-[rgb(243,238,217)] py-12">
        <div className="w-[70%] mx-auto flex-col text-center items-center justify-center gap-1">
          <h3 className="uppercase text-sm font">Lorem ipsum dolor</h3>
          <h1 className="text-3xl text-yellow-500 px-10 font-semibold">
            Responsive layouts dont have to be stuggle
          </h1>
        </div>
      </section>
      <section>
        <div className="py-12">
          <div className="w-[70%] mx-auto">
            <h1 className="text-center text-xl text-yellow-500 p-5 font-semibold">
              Quailty Designs
            </h1>
            <div className="flex gap-5">
              <p className="px-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                voluptatem accusamus sapiente veniam similique ipsa, rem facilis
                ipsum, quae distinctio amet a dignissimos ex error. Cum voluptas
                modi in quia?
              </p>

              <p className="px-10">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                itaque nostrum veritatis, nisi pariatur dignissimos laboriosam
                aspernatur totam repellat laudantium earum recusandae officiis
                debitis rem placeat magni! Itaque, modi minima.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#222c2a] text-white py-12">
        <div className=" w-[70%] mx-auto flex item-center gap-3 ">
          <div className="">
            <h1 className="mb-5 ">Made custom for you</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              deleniti vitae aperiam, rem, sunt in corporis reiciendis velit
              optio labore est saepe possimus amet quos animi non vel
              praesentium laborum.
            </p>
          </div>
          <div className="w-fit h-max py-10">
            <img src="./asset/image-01.jpg" alt="sunrise" />
          </div>
        </div>
      </section>
      <section className="bg-[#824936] text-white py-12">
        <div className="w-[70%] mx-auto flex gap-5 p-5">
          <div>
            <div className="w-fit h-max py-10">
              <img src="./asset/image-02.jpg" alt="sunrise2" />
            </div>
          </div>
          <div>
            <h1>Create with care</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              sunt asperiores dolorum libero corrupti quas, animi tenetur iure
              accusamus maiores sint? Recusandae quas expedita accusamus
              suscipit ut porro nisi! Tenetur.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CH7;
