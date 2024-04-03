import React from 'react'

const CH3 = () => {
  return (
    <div className='flex items-center justify-center space-x-5 space-y-10 flex-wrap'>
        <h1 className='p-5 bg-orange-500 '>Responsive layouts don't have to be stuggle</h1>
        <h2 className='border-red-800 border'>This is heading 2</h2>
{/*         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto error molestiae similique nisi labore, eaque, distinctio aliquid consequatur laudantium perferendis,
           fugit itaque recusandae dignissimos qui. Molestias totam officiis porro.
        </p> */}
        {/* <button>I want to learn</button> */}
        <ul className='flex space-x-5'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Team</li>
        </ul>
    </div>
  )
}

export default CH3