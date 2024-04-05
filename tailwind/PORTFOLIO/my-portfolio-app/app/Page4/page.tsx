import React from 'react'

const Page4 =()=> {
  return (
    <>
      <section className='bg-gray-200 text-white py-12 '>
        <div className='w-[70%] mx-auto p-5 bg-gray-700 rounded-3xl'>
          <h1 className='text3xl font-bold mb-8'>Contact Me </h1>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <h2 className='text-xl font-bold mb-2'>Address</h2>
              <p>123 Main Street</p>
              <p>Port Elizabeth, 6059</p>
            </div>
            <div >
                <h2 className='text-xl font-bold mb-2'>Phone</h2>
                <p>00 788 667678 0</p>
            </div>
            <div>
              <h2 className='text-xl font-bold mb-2'>Email</h2>
              <p>info@example.com</p>
            </div>
            <div>
              <h2 className='text-xl font-bold mb-2'>Social Media</h2>
              <ul>
                <li>Facebook: <a href='#'>example</a></li>
                <li>Twitter: <a href='#'>example</a></li>
                <li>Instagram: <a href='#'>example</a></li>
              </ul>
            </div>
          </div>
              
        </div>

      </section>

    </>
  )
}

export default Page4