"use client"
import React, { useState } from 'react'
import style from './Footer.module.css'
import Link from 'next/link'
const Footer = () => {
    const [query, setQuery] = useState('')
    return (
        <>

            <div className='h-px bg-gray-700'></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full bg-gray-50 py-16'>
                <div className=' py-4 px-2  flex flex-col items-center justify-start bg-gray-50 sm:ml-4'>
                    <h1 className={`text-3xl sm:text-2xl  text-gray-700 font-bold ${style.heading}`}>About Saim</h1>
                    <p className={`text-xl sm:text-lg text-gray-700 mt-4 text-center ${style.text}`}> Saim is a passionate MERN Stack Developer primarilt working on React, Next js and Node/express as a technology stack</p>
                </div>
                <div className=' py-4  flex flex-col items-center justify-start bg-gray-50 '>
                    <h1 className={`text-3xl sm:text-2xl  text-gray-700 font-bold ${style.heading}`}>Contact Saim</h1>
                    <p className={`text-xl sm:text-lg text-gray-700 mt-4 ${style.text}`}> +92 314 2274221</p>
                    <p className={`text-xl sm:text-lg text-gray-700 ${style.text}`}>saimshehzad2030@gmail.com</p>
                </div>
                <div className=' py-4  flex flex-col items-center justify-start bg-gray-50 '>
                    <h1 className={`text-3xl sm:text-2xl  text-gray-700 font-bold ${style.heading}`}>Skills</h1>
                    <div className=' flex flex-col items-start'>

                        <div className={`flex flex-row  items-center mt-4 justify-between`}>
                            <img className='h-8 w-8 mr-4' src={`/Assets/skills/science.png`} alt='react' />
                            <p className={`text-xl sm:text-lg text-gray-700 ${style.text}`}>React js</p>
                        </div>
                        <div className={`flex flex-row  items-center mt-4`}>
                            <img className='h-8 w-8 mr-4' src={`/Assets/skills/favicon.ico`} alt='next' />

                            <p className={`text-xl sm:text-lg text-gray-700 ${style.text}`}>Next js</p>
                        </div>
                        <div className={`flex flex-row  items-center mt-4`}>
                            <img className='h-8 w-8 mr-4' src={`/Assets/skills/node-js.png`} alt='node' />

                            <p className={`text-xl sm:text-lg text-gray-700 ${style.text}`}>Node js</p>
                        </div>

                        <div className={`flex flex-row  items-center mt-4`}>
                            <img className='h-8 w-8 mr-4' src={`/Assets/skills/problem-solving.png`} alt='problem-solving' />

                            <p className={`text-xl sm:text-lg text-gray-700 ${style.text}`}>Problem solving</p>
                        </div>
                    </div>
                </div>

                <div className=' py-4  flex flex-col items-center justify-start bg-gray-50 '>
                    <h1 className={`text-3xl sm:text-2xl  text-gray-700 font-bold ${style.heading}`}>Education</h1>
                    <div className=' flex flex-col items-start'>
                        <div className={`flex flex-col items-start`}>
                            <p className={`text-xl sm:text-lg text-gray-700 mt-4 font-bold ${style.text}`}>Matriculation</p>
                            <p className={`text-xl sm:text-lg text-gray-700 ${style.text}`}>Arshi Public School</p>
                        </div>
                        <div className={`flex flex-col items-start`}>
                            <p className={`text-xl sm:text-lg text-gray-700 mt-4 font-bold ${style.text}`}>Intermediate</p>
                            <p className={`text-xl sm:text-lg text-gray-700 ${style.text}`}>Govt. College Formen</p>
                        </div>
                        <div className={`flex flex-col items-start`}>
                            <p className={`text-xl sm:text-lg text-gray-700 mt-4 font-bold ${style.text}`}>Graduation (BSCS)</p>
                            <p className={`text-xl sm:text-lg text-gray-700 ${style.text}`}>FUUAST, Khi</p>
                        </div>
                    </div>
                </div>


                <div className='py-4 flex flex-col items-center'>
                <h1 className={`text-3xl sm:text-2xl  text-gray-700 font-bold ${style.heading}`}>Socially Available</h1>
 <div className='flex flex-row items-center ml-4 mt-4'>
                        <Link href={'https://www.facebook.com/sheikh.saim.10'}>
                            <img className={`h-10 w-10 2xl:h-20 2xl:w-20 xl:h-8 xl:w-8 lg:h-6 lg:w-6 sm:h-4 sm:w-4  sm:flex rounded-full cursor-pointer  mr-3 2xl:mr-4 xl:mr-5 lg:mr-6  sm:mr-2 transition-transform transform hover:scale-105`} src="/Assets/socially-available/linkedin.png" alt="linkedin" />
                        </Link>
                        <Link href={'https://www.facebook.com/sheikh.saim.10'}>
                            <img className={`h-10 w-10 2xl:h-20 2xl:w-20 xl:h-8 xl:w-8 lg:h-6 lg:w-6 sm:h-4 sm:w-4  sm:flex rounded-full cursor-pointer  mr-3 2xl:mr-4 xl:mr-5 lg:mr-6  sm:mr-2 transition-transform transform hover:scale-105`} src="/Assets/socially-available/github.png" alt="Github" />
                        </Link>
                        <Link href={'https://www.facebook.com/sheikh.saim.10'}>
                            <img className={`h-10 w-10 2xl:h-20 2xl:w-20 xl:h-8 xl:w-8 lg:h-6 lg:w-6 sm:h-4 sm:w-4  sm:flex rounded-full cursor-pointer  mr-3 2xl:mr-4 xl:mr-5 lg:mr-6  sm:mr-2 transition-transform transform hover:scale-105`} src="/Assets/socially-available/facebook.png" alt="Facebook" />
                        </Link>

                    </div>
                </div>
            </div>
{/* 
            <div className=' py-4   w-full bg-gray-50 h-auto p-4'>
                <div className='flex flex-col items-start'>
                    <h1 className={`text-9xl sm:text-3xl  text-gray-700 font-bold ${style.heading}`}>Socially available</h1>
                    <div className='flex flex-row items-center ml-4 mt-4'>
                        <Link href={'https://www.facebook.com/sheikh.saim.10'}>
                            <img className={`hidden 2xl:h-20 2xl:w-20 xl:h-8 xl:w-8 lg:h-6 lg:w-6 sm:h-4 sm:w-4  sm:flex h-4 w-4 rounded-full cursor-pointer  mr-3 2xl:mr-4 xl:mr-5 lg:mr-6  sm:mr-2 transition-transform transform hover:scale-105`} src="/Assets/socially-available/linkedin.png" alt="linkedin" />
                        </Link>
                        <Link href={'https://www.facebook.com/sheikh.saim.10'}>
                            <img className={`hidden 2xl:h-20 2xl:w-20 xl:h-8 xl:w-8 lg:h-6 lg:w-6 sm:h-4 sm:w-4  sm:flex h-4 w-4 rounded-full cursor-pointer  mr-3 2xl:mr-4 xl:mr-5 lg:mr-6  sm:mr-2 transition-transform transform hover:scale-105`} src="/Assets/socially-available/github.png" alt="Github" />
                        </Link>
                        <Link href={'https://www.facebook.com/sheikh.saim.10'}>
                            <img className={`hidden 2xl:h-20 2xl:w-20 xl:h-8 xl:w-8 lg:h-6 lg:w-6 sm:h-4 sm:w-4  sm:flex h-4 w-4 rounded-full cursor-pointer  mr-3 2xl:mr-4 xl:mr-5 lg:mr-6  sm:mr-2 transition-transform transform hover:scale-105`} src="/Assets/socially-available/facebook.png" alt="Facebook" />
                        </Link>

                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Footer