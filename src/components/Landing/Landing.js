"use client"

import React, { useState, useEffect } from 'react';
import style from './Landing.module.css'
import Link from 'next/link';
const Landing = () => {
    const [textIndex, setTextIndex] = useState(0);
    const textArray = ['I am Meta Certified Mern Stack Developer mainly focused on Node, express js', 'I have some 3 months experience of working with next js framework ', 'I have completed graduation in bachelors of CS from FUUAST, Karachi'];
    const images = [
      '/Assets/Landing/1.jpg',
      '/Assets/Landing/2.jpg',
      '/Assets/Landing/3.jpg'
  ];
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }, 6000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
        <div className='relative w-full'>
            <img src={images[textIndex]} alt='landing logo' className={`opacity-70 ${style.image}`} />
          
           <div className={`absolute w-full flex flex-col items-start ${style.textDiv}  p-4 rounded-lg`}>
           {textArray.map((text, index) => (
            
            <h1 className={`text-xs w-9/12 left-0 ${style.textItem} transform transition-opacity ${index=== 1 || index === 3?'text-gray-50 bg-gray-700  bg-opacity-50':'text-gray-700  bg-gray-50 bg-opacity-50'}  duration-500  text-center px-4 py-4 rounded-md 2xl:text-xl 2xl:w-4/12 xl:text-3xl xl:w-8/12 lg:text-2xl lg:w-8/12 sm:text-xl sm:w-8/12 font-bold mb-4 ${style.textItem} ${index === textIndex ? style.active : ''}`} key={index}>
            {text}
          </h1>
          ))}
          <div className={` flex flex-row items-center ${style.socials}  p-4 rounded-lg`}>
  <Link href={'https://www.linkedin.com/in/saim-shahzad-476bba25b/'}>
                            <img className={`bg-gray-50 h-6 w-6 2xl:h-16 2xl:w-16 xl:h-8 xl:w-8 lg:h-8 lg:w-8 sm:h-8 sm:w-8  sm:flex sm:h-4 w-4 rounded-full cursor-pointer mr-3 2xl:mr-8 xl:mr-5 lg:mr-6 sm:mr-6  transition-transform transform hover:scale-105 ${style.icon1}`} src="/Assets/socials/linkedin.png" alt="Facebook" />
                        </Link>
                        <Link href={'https://github.com/saimshahzad2030'}>
                            <img className={`bg-gray-50 h-6 w-6 2xl:h-16 2xl:w-16 xl:h-8 xl:w-8 lg:h-8 lg:w-8 sm:h-8 sm:w-8  sm:flex h-4 w-4 rounded-full cursor-pointer mr-3 2xl:mr-8 xl:mr-5 lg:mr-6  sm:mr-6 transition-transform transform hover:scale-105 ${style.icon2}`} src="/Assets/socials/github.png" alt="Facebook" />
                        </Link>
                        <Link href={'https://www.facebook.com/sheikh.saim.10'}>
                            <img className={`bg-gray-50 h-6 w-6 2xl:h-16 2xl:w-16 xl:h-8 xl:w-8 lg:h-8 lg:w-8 sm:h-8 sm:w-8  sm:flex h-4 w-4 rounded-full cursor-pointer  mr-3 2xl:mr-8 xl:mr-5 lg:mr-6  sm:mr-6 transition-transform transform hover:scale-105 ${style.icon3}`} src="/Assets/socials/facebook.png" alt="Facebook" />
                        </Link>
                        <Link href={'https://twitter.com/saimshehzad10'}>
                            <img className={`bg-gray-50 h-6 w-6 2xl:h-16 2xl:w-16 xl:h-8 xl:w-8 lg:h-8 lg:w-8 sm:h-8 sm:w-8 sm:flex h-4 w-4 rounded-full cursor-pointer mr-3 2xl:mr-8 xl:mr-5 lg:mr-6  sm:mr-6 transition-transform transform hover:scale-105 ${style.icon4}`} src="/Assets/socials/twitter.png" alt="Facebook" />
                        </Link>
                      </div>
          </div>
        </div>
    );
}

export default Landing