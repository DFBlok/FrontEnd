import React from 'react'

const CH5 = () => {
  return (
    <>
    <header className='bg-[#23424a] text-white py-12'>
      <div className='w-[70%] mx-auto p-5 flex items-center'>
        <div className=' w-1/2'>
          <div className=''>
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
        <div className='w-1/2'>
          <div className=''>
             <img src='/asset/hero-img.jpg' alt='Description of the image' className='w-fit h-fit pl-5' /> 
          </div>
         
        </div>
      </div>  
    </header> 
    <section className='text-black py-11'>
      <div className='w-[70%] mx-auto p-5'>
        <div className='flex gap-5'>
          <div className=''>
            <h1 className='text-lg text-[teal] font-bold mb-4 mt-2 '>
              Quality design made custom, on demand, just for you
            </h1>
            <p className='mb-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maxime nostrum quidem, adipisci eum odit voluptates. Ipsum commodi esse
              odio facilis praesentium quibusdam obcaecati explicabo fuga, provident illo reprehenderit similique?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima architecto incidunt atque dolores
              facilis modi deleniti voluptates, hic corrupti quam nobis harum, neque natus eveniet numquam libero consequatur id.
            </p>
          </div>
          <div className='flex-col gap-10 text-white bg-teal-900'>
              <div className='text-center p-5'>
                <h1 className='font-bold text-2xl mb-4'>Cheap</h1>
                <p className='text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius hic dignissimos error nemo? Soluta error autem sapiente dignissimos in earum eos, ratione voluptatum quia? Excepturi aut minima aperiam vero quidem.
                </p>
              </div>
              <div className='text-center p-5'>
                <h1 className='font-bold text-2xl mb-4'>Quick</h1>
                <p className='text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque, ab corporis assumenda nisi officia. Saepe quo enim praesentium placeat eum odio perferendis similique porro autem quasi, ea sunt nam?
                </p>
              </div>
              <div className='text-center p-5'>
                <h1 className=' font-bold text-2xl mb-4'>Quality</h1>
                <p className='text-center'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde officiis quis commodi accusamus iste vero debitis saepe nam! Quos nisi perspiciatis dolore tempore! Unde doloribus repudiandae perferendis minima totam blanditiis.
                </p>
              </div>
          </div>          
        </div>

      </div>

    </section>
    <section className='bg-[teal] text-white py-12'>
      <div className='w-[70%] mx-auto p-5 flex items-center'>
        <div className='flex gap-10'>
          <div className='text-center'>
            <h1 className='font-bold text-4xl mb-5'>Cheap</h1>
            <p className='text-sm'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, doloremque! Nostrum maiores, quo doloribus, quae accusamus ipsa fugit neque,
              ea repellendus veritatis a aut laboriosam nulla enim voluptate eaque assumenda!</p>
          </div>
          <div className='text-center'>
            <h1 className='font-bold text-4xl mb-5'>Quick</h1>
            <p className='text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam exercitationem quae voluptatibus, veniam iusto hic ducimus vero,
              est assumenda sed accusantium aspernatur dignissimos magnam minus esse porro quisquam vel eos!
            </p>
        </div>
       
        </div>

      </div>

    </section>
  </>
  )
}

export default CH5