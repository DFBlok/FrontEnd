import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    const links = [{id:1, label:'Home', href:'/'}, {id:2, label:'CH1',href:'/CH1'},
                {id:3, label:'CH2', href:'/'}, {id:4, label:'CH3', href:'/CH3'}, 
                {id:5, label:'ABOUT', href:'/about'}]
    return (
    <header className='bg-green-500 py-2'>
        <nav className='w-[80%] mx-auto flex gap-6'>
            {links.map((link)=>(
                <Link href={link.href} key={link.id} className='text-white font-medium text-lg'>
                    {link.label}</Link>
            ))}
        </nav>
    </header>
  )
}

export default Navbar