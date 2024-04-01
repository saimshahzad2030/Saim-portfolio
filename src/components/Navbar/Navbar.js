"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import style from './Navbar.module.css';

const Navbar = ({ selectedLink }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuLinksVisible, setMenuLinksVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            setTimeout(() => {
                setMenuLinksVisible(true);
            }, 100);
        } else {
            setMenuLinksVisible(false);
        }
    }, [isMenuOpen]);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth <= 768) { // Adjust the width as needed
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        if (window.scrollY > 4) {
            setScrolled(true)
        }
    }, [])
    return (
        <>

            <nav className={` ${isMobile || selectedLink !== 'home' ? 'sticky' : 'fixed'} top-0 left-0 w-full ${scrolled || isMobile ? 'bg-gray-100' : 'bg-transparent'} p-4 2xl:p-8 xl:p-4 lg:p-4 z-10 transition-all duration-300 ease-in-out`}>
                <div className={`flex items-center justify-between `}>
                    <div className={`flex items-center justify-between flex-shrink-0 sm:w-full lg:w-full 2xl:w-full  `}>
                        <Link href={'/'} className={`flex-row items-center`}>
                            <img className={`h-16 w-auto sm:h-10 lg:h-14 md:h-12 xl:h-20 2xl:h-32`} src={`/Assets/Logo/${scrolled ? 'logo' : 'logo-no-bg'}.png`} alt="Logo" />
                        </Link>
                        <div className={`hidden sm:flex flex-grow flex flex-row items-center justify-end space-x-4 sm:space-x-1 lg:space-x-2 2xl:space-x-1 2xl:ml-4 xl:ml-4 lg:ml-4 md:ml-2 sm:ml-1`}>
                            <Link href="/" className={`lg:text-lg 2xl:text-2xl xl:text-xl sm:text-md ${selectedLink === 'home' ? ' text-gray-100 bg-gray-700' : 'text-gray-700 bg-gray-100  hover:bg-gray-700 hover:text-gray-100'} 2xl:py-4  2xl:px-8  text-gray-50 rounded-md px-3 py-2 text-sm font-medium transition-transform transform hover:scale-105 ${style.link}`} aria-current="page">Home</Link>
                            <Link href="/expertise" className={`lg:text-lg 2xl:text-2xl xl:text-xl sm:text-md ${selectedLink === 'expertise' ? ' text-gray-100 bg-gray-700' : 'text-gray-700 bg-gray-100  hover:bg-gray-700 hover:text-gray-100'}   rounded-md px-3 2xl:py-4 py-2 2xl:px-8 lg:px-2 sm:px-1 lg:text-lg hover:text-gray-100 hover:bg-gray-700  transition-transform transform hover:scale-105 ${style.link}`}>Expertise</Link>
                            <Link href="/portfolio" className={`lg:text-lg 2xl:text-2xl xl:text-xl sm:text-md ${selectedLink === 'portfolio' ? ' text-gray-100 bg-gray-700' : 'text-gray-700 bg-gray-100  hover:bg-gray-700 hover:text-gray-100 hover:bg-gray-700 hover:text-gray-50'}  rounded-md px-3 2xl:py-4 py-2 2xl:px-8 lg:px-2 sm:px-1 lg:text-lg hover:text-gray-100 hover:bg-gray-700  transition-transform transform hover:scale-105 ${style.link}`}>Portfolio</Link>
                        </div>

                    </div>



                    <div className={`flex flex-row items-center ${style.socials}`}>


                        <div className={`sm:hidden`}>
                            <button onClick={toggleMenu} className={`text-gray-700`}>
                                <svg className={`h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className={`sm:hidden mt-4 bg-gray-100`}>
                        <div className={`flex flex-col items-center`}>
                            <Link href="/" className={`${menuLinksVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} text-xl text-gray-700 w-full ${style.link} text-center mt-4 transition-opacity duration-500 ease-in-out transform`}>Home</Link>
                            <Link href="/expertise" className={`${menuLinksVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} text-xl text-gray-700 ${style.link} mt-4 transition-opacity duration-500 ease-in-out transform`}>Expertise</Link>
                            <Link href="/portfolio" className={`${menuLinksVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} text-xl text-gray-700 ${style.link} mt-4 transition-opacity duration-500 ease-in-out transform`}>Portfolio</Link>
                          
                        </div>
                    </div>

                )}
            </nav>
        </>
    );
};

export default Navbar;
