import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const links = [{id:1, label:'Home', href:'/'},
     {id:2, label:'About Me', href:'Page2'},
      {id:3, label:'Projects', href:'Page3'},
       {id:4, label:'Contact', href:'Page4'} 
    ]

  return (
    <div>
        <header className='bg-gray-600'>
            <nav className='w-[80%] mx-auto flex gap-6'>
                {links.map((link)=>(
                    <Link href={link.href} key={link.id}
                    className='text-white font-medium text-lg'>
                        {link.label}</Link>
                ))}
            </nav>
        </header>
        
        
    </div>
  )
}

export default Navbar