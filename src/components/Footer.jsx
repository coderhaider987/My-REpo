import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-y-6 px-8 md:px-16 lg:px-24">
                {/* Logo and Description */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="logo font-bold text-2xl">
                        <span className="text-green-500">&lt;</span>
                        <span>Pass</span><span className="text-green-500">Manager/&gt;</span>
                    </div>
                    <p className="text-sm mt-2 text-center md:text-left">
                        Securely manage your passwords with ease.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col items-center md:flex-row md:gap-10">
                    <a href="/Home" className="hover:text-green-400 transition-colors mb-2 md:mb-0">Home</a>
                    <a href="/About" className="hover:text-green-400 transition-colors mb-2 md:mb-0">About</a>
                    <a href="/Contact" className="hover:text-green-400 transition-colors mb-2 md:mb-0">Contact</a>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-4">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors">
                        <img src="./icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors">
                        <img src="./icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors">
                        <img src="./icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                    </a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-sm text-gray-400 mt-6">
                &copy; {new Date().getFullYear()} PassManager. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
