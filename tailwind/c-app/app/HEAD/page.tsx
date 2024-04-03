import React from 'react'

const HEAD = () => {
  return (
    <>
      <header className='bg-[#23424a] text-white py-12'>
        <div className='w-[80%] mx-auto p-5'>
          <div className=' w-1/2'>
            <h1 className='text-4xl font-semibold mb-5'>Responsive design don&apos;t have to be a stuggle</h1>
            <p className='text-lg mb-2'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus saepe esse impedit dolorem repellat provident eligendi voluptates ipsum dicta
               voluptate cupiditate vero incidunt deleniti illo, sed, beatae est alias in!
            </p>
            <button className="px-3 py-2 bg-purple-600 rounded-full uppercase font-semibold text-black" >
              I want to learn
            </button>
          </div>
        </div>  
      </header> 
    </>
  )
}

export default HEAD