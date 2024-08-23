import React from 'react'
const Navbar = () => {
    return (
        <nav className='bg-slate-800 w-[100vw] flex justify-around h-[70px] items-center text-white font-medium'>
           <a href="/"> <div className="logo font-bold text-white text-2xl">
                <span className='text-green-500'> &lt;</span>
                <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
            </div></a>
            <ul className='flex justify-between gap-6'>
                <li><a href="/Home">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar