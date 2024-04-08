import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="bg-green-500 p-4 text-center text-3xl">
        This is main page.
      </h1>
      <div className="grid grid-cols-12">
        <div className="bg-red-400 p-2 col-start-1 col-end-13">1</div>
        <div className="bg-pink-600 p-2 col-span-3 ">2</div>
        <div className="bg-yellow-700 p-2 col-span-9">3</div>
        <div className="bg-blue-600 p-2 col-span-12">4</div>
        <div className="auto-row-max bg-cyan-900">5</div>
      </div>

      <div className="my-10  grid grid-col-4 gap-4 bg-purple-600">
        <div className="bg-red-500 col-span-3">01</div>
        <div className="bg-red-500">02</div>
        <div className="bg-red-500">03</div>
        <div className="bg-red-500">04</div>
        <div className="bg-red-500">05</div>
        <div className="grid grid-cols-subgrid gap-4 col-span-3">
          <div className="col-start-2 bg-green-300">06</div>
        </div>
        <div className="bg-red-500">07</div>
        <div className="bg-red-500">08</div>
        <div className="bg-red-500">09</div>
      </div>
    </div>
  );
}
