import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-slate-800 w-full flex justify-between items-center h-[70px] px-8 md:px-16 lg:px-24 text-white fixed z-50'>
            {/* Logo */}
            <a href="/" className="flex items-center text-2xl font-bold hover:text-green-400 transition-colors">
                <span className='text-green-500'>&lt;</span>
                <span>Pass</span><span className='text-green-500'>Manager/&gt;</span>
            </a>

            {/* Navigation Links */}
            <ul className='hidden md:flex justify-between items-center gap-8'>
                <li>
                    <a href="/Home" className='hover:text-green-400 transition-colors'>Home</a>
                </li>
                <li>
                    <a href="/About" className='hover:text-green-400 transition-colors'>About</a>
                </li>
                <li>
                    <a href="/Contact" className='hover:text-green-400 transition-colors'>Contact</a>
                </li>
            </ul>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <button className="text-white hover:text-green-400 focus:outline-none">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
