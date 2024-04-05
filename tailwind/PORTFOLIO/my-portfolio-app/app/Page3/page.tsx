import { Container } from 'postcss'
import React from 'react'

function Page3() {
  return (
    <>
      <section className='bg-gray-200'>
  <div className='w-[70%] mx-auto flex p-5 items-center flex-col'>

    <div className='w-full flex justify-between'>
      <div className='w-1/2 border-2 p-2 border-pink-500'>
        <div className='border-2 border-black p-4 mb-2'>
        <h1 className="text-xl font-bold mb-2">Project 1</h1>
          <p className="text-gray-700 mb-4">
            This is the description for Project 1.
          </p>
          <img src="https://placehold.co/100x100" alt="project image" className="mb-4" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</button>
        </div>
        <div className='border-2 border-red-600'>
        <h1 className="text-xl font-bold mb-2">Project 2</h1>
          <p className="text-gray-700 mb-4">This is the description for Project 1.</p>
          <img src="https://placehold.co/100x100" alt="project image" className="mb-4" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</button>
        </div>
      </div>
      <div className='w-1/2 border-2 p-2 border-pink-500 ml-2'>
        <div className='border-2 border-black p-4 mb-2'>
        <h1 className="text-xl font-bold mb-2">Project 3</h1>
          <p className="text-gray-700 mb-4">This is the description for Project 1.</p>
          <img src="https://placehold.co/100x100" alt="project image" className="mb-4" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</button>
        </div>
        <div className='border-2 border-red-600'>
        <h1 className="text-xl font-bold mb-2">Project 4</h1>
          <p className="text-gray-700 mb-4">This is the description for Project 1.</p>
          <img src="https://placehold.co/100x100" alt="project image" className="mb-4" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</button>
        </div>
      </div>
    </div>

   {/*  <div className='w-full flex justify-between mt-8'>
      <div className='w-1/2 border-2 p-2 border-pink-500'>
        <div className='border-2 border-black'>
          <h1>This is Project Page.</h1>
        </div>
        <div className='border-2 border-red-600'>
          <h1>This is Project Page.</h1>
        </div>
      </div>
      <div className='w-1/2 border-2 p-2 border-pink-500'>
        <div className='border-2 border-black'>
          <h1>This is Project Page.</h1>
        </div>
        <div className='border-2 border-red-600'>
          <h1>This is Project Page.</h1>
        </div>
      </div>
    </div>
 */}
  </div>
</section>
    </>
  )
}

export default Page3