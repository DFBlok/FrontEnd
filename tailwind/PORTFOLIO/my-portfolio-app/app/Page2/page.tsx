import React from 'react'

const Page2 = () => {
  return(
    <>
        <section className='bg-gray-200'>
          <div className='w-[70%] mx-auto p-5 items-center'>
            <div className='items-center'>
              <img src="https://placehold.co/600x400/png" alt="placeholder" />
            </div >
            <div className='mt-8 flex justify-between w-full'>
              <div className='w-1/2'>
                  <h2 className='text-center m-4'>Colum 1</h2>
                  <ul>
                    <li>Mock Data 1</li>
                    <li>mock Data 1</li>
                    <li>mock Data 1</li>
                    <li>mock Data 1</li>
                  </ul>
              </div>
              <div className='w-1/2'>
                <h2 className='text-center m-4'>Column 2</h2>
                <ul>
                  <li>Mock Data 1</li>
                  <li>mock Data 1</li>
                  <li>mock Data 1</li>
                  <li>mock Data 1</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Page2