import React from 'react'
import style from './Portfolio.module.css'
import Link from 'next/link'
const Potfolio = () => {
    return (
        <>
            <h1 className={`text-2xl sm:text-5xl mt-4 mb-4 text-center text-gray-700 font-bold ${style.heading}`}>Portfolio Projects</h1>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 p-4 gap-x-8 gap-y-8 my-4'>

                <div className={`flex flex-col justify-center items-center bg-gray-200 p-8 transition-all duration-300 hover:bg-gray-700 hover:scale-105 cursor-pointer group`}>
                    <img src={`/Assets/portfolios/crs.jpg`} alt='problem-solving' />
                </div>

                <div className={`flex flex-col items-start bg-gray-200 p-8 rounded-lg  `}>

                    <h1 className={`text-2xl sm:text-3xl mt-4 text-center text-gray-700 font-bold ${style.heading}  group-hover:text-white`}>Campus Recruitment System</h1>
                    <h1 className={`text-md sm:text-md mt-4 text-left text-gray-700 ${style.heading}  group-hover:text-white`}>Campus recruitment system is a realtime full-stack recruitment application which is holding a portal for companies, campus students and an admin. </h1>
                    <h1 className={`text-md sm:text-md mt-4 text-left text-gray-700 ${style.heading}  group-hover:text-white`}>Companies can view student infos and marks and can hire those students. Student can directly apply for the jobs posted by companies. Companies can approve or reject those applications. Admin can see all comapnies, their jobs and student details.</h1>
                    <div className={`flex flex-col items-start justify-between sm:flex-row sm:items-center sm:justify-start w-full  mt-4`}>


                        <Link href={'https://campus-recruitment-system-olive.vercel.app/'}>
                            <button className='flex flex-row items-center  border border-gray-600 transition-colors duration-300 hover:bg-gray-600 text-gray-600 hover:text-white font-bold py-2 px-4 rounded'> <img className='h-6 w-6 mr-2' src={`/Assets/skills/global.png`} alt='problem-solving' />
                                View Webapp</button>
                        </Link>

                        <Link href={'https://github.com/saimshahzad2030/Campus-recruitment-system'}>
                        <button className='mt-4 sm:mt-0 flex flex-row items-center   sm:ml-8  border border-gray-600 transition-colors duration-300 hover:bg-gray-600 text-gray-600 hover:text-white font-bold py-2 px-4 rounded'> <img className='h-6 w-6 mr-2' src={`/Assets/socially-available/github.png`} alt='problem-solving' />
                                      Github</button>
                        </Link>


                    </div>
                    <div className={`flex flex-row items-center w-full  mt-4`}>

                        <h1 className={`text-xl sm:text-xl text-left text-gray-700 ${style.heading}  group-hover:text-white`}>Stack Used: </h1>
                        <img className='h-8 w-8 ml-4' src={`/Assets/skills/favicon.ico`} alt='problem-solving' />
                        <img className='h-8 w-8 ml-4' src={`/Assets/skills/node-js.png`} alt='problem-solving' />
                        <img className='h-8 w-8 ml-4' src={`/Assets/skills/technology.png`} alt='problem-solving' />
                        <img className='h-8 w-8 ml-4' src={`/Assets/skills/db-transfer.png`} alt='problem-solving' />


                    </div>
                </div>

                <div className={`flex flex-col  justify-center items-center bg-gray-200 p-8 transition-all duration-300 hover:bg-yellow-400 hover:scale-105 cursor-pointer group`}>
                    <img src={`/Assets/portfolios/restaurant.jpg`} alt='restaurant' />
                </div>

                <div className={`flex flex-col items-start bg-gray-200 p-8 rounded-lg  `}>

                    <h1 className={`text-2xl sm:text-3xl mt-4 text-center text-gray-700 font-bold ${style.heading}  group-hover:text-white`}>Restaurant Application</h1>
                    <h1 className={`text-md sm:text-md mt-4 text-left text-gray-700 ${style.heading}  group-hover:text-white`}>This restaurant appplication holds the restaurant data and displays their hot deals, meals and many mpopre things to customers </h1>
                    <h1 className={`text-md sm:text-md mt-4 text-left text-gray-700 ${style.heading}  group-hover:text-white`}>Customers can view restaurant deals and foods and instead of physically asking for the present dishes they can just simply check what is available and what&apos;s not</h1>
                    <div className={`flex flex-col items-start justify-between sm:flex-row sm:items-center sm:justify-start w-full  mt-4`}>


                        <Link href={'https://restaurant-beige-eight.vercel.app/'}>
                            <button className='flex flex-row items-center  border border-gray-600 transition-colors duration-300 hover:bg-gray-600 text-gray-600 hover:text-white font-bold py-2 px-4 rounded'> <img className='h-6 w-6 mr-2' src={`/Assets/skills/global.png`} alt='problem-solving' />
                                View Webapp</button>
                        </Link>

                        <Link href={'https://github.com/saimshahzad2030/restaurant'}>
                        <button className='mt-4 sm:mt-0 flex flex-row items-center   sm:ml-8  border border-gray-600 transition-colors duration-300 hover:bg-gray-600 text-gray-600 hover:text-white font-bold py-2 px-4 rounded'> <img className='h-6 w-6 mr-2' src={`/Assets/socially-available/github.png`} alt='problem-solving' />
                                Github</button>
                        </Link>


                    </div>
                    <div className={`flex flex-row items-center w-full  mt-4`}>

                        <h1 className={`text-xl sm:text-xl text-left text-gray-700 ${style.heading}  group-hover:text-white`}>Stack Used: </h1>
                        <img className='h-8 w-8 ml-4' src={`/Assets/skills/favicon.ico`} alt='problem-solving' />
                        <img className='h-8 w-8 ml-4' src={`/Assets/skills/technology.png`} alt='problem-solving' />
                        

                    </div>
                </div>



               

                <div className={`flex flex-col justify-center items-center bg-gray-200 p-8 transition-all duration-300 hover:bg-purple-700 hover:scale-105 cursor-pointer group`}>
                    <img src={`/Assets/portfolios/parkify.jpg`} alt='parkify' />
                </div>

                <div className={`flex flex-col items-start bg-gray-200 p-8 rounded-lg  `}>

                    <h1 className={`text-2xl sm:text-3xl mt-4 text-center text-gray-700 font-bold ${style.heading}  group-hover:text-white`}>Parkify Application</h1>
                    <h1 className={`text-md sm:text-md mt-4 text-left text-gray-700 ${style.heading}  group-hover:text-white`}>Parkify is a realtime full-stack parking slot booking application allows user to book parking slots in 3 specific parking areas. </h1>
                    <h1 className={`text-md sm:text-md mt-4 text-left text-gray-700 ${style.heading}  group-hover:text-white`}>Once a specifi parking slot is booked, no other user can book that slot at that given date and time </h1>
                    <div className={`flex flex-col items-start justify-between sm:flex-row sm:items-center sm:justify-start w-full  mt-4`}>


                        <Link href={'https://parkify-frontend.vercel.app/'}>
                            <button className='flex flex-row items-center  border border-gray-600 transition-colors duration-300 hover:bg-gray-600 text-gray-600 hover:text-white font-bold py-2 px-4 rounded'> <img className='h-6 w-6 mr-2' src={`/Assets/skills/global.png`} alt='problem-solving' />
                                View Webapp</button>
                        </Link>

                        <Link href={'https://github.com/saimshahzad2030/parkify-frontend'}>
                            <button className='mt-4 sm:mt-0 flex flex-row items-center   sm:ml-8  border border-gray-600 transition-colors duration-300 hover:bg-gray-600 text-gray-600 hover:text-white font-bold py-2 px-4 rounded'> <img className='h-6 w-6 mr-2' src={`/Assets/socially-available/github.png`} alt='problem-solving' />
                                Github</button>
                        </Link>


                    </div>
                    <div className={`flex flex-row items-center w-full  mt-4`}>

                        <h1 className={`text-xl sm:text-xl text-left text-gray-700 ${style.heading}  group-hover:text-white`}>Stack Used: </h1>
                        <img className='h-8 w-8 ml-4' src={`/Assets/skills/favicon.ico`} alt='problem-solving' />
                        <img className='h-8 w-8 ml-4' src={`/Assets/skills/node-js.png`} alt='problem-solving' />
                        <img className='h-8 w-8 ml-4' src={`/Assets/skills/technology.png`} alt='problem-solving' />
                        <img className='h-8 w-8 ml-4' src={`/Assets/skills/db-transfer.png`} alt='problem-solving' />


                    </div>
                </div>



                {/* <div className={`flex flex-col items-center bg-gray-200 p-8 transition-all duration-300 hover:bg-gray-700 hover:scale-105 cursor-pointer group`}>
                    <img src={`/Assets/Landing/1.jpg`} alt='problem-solving' />
                </div> */}

                {/* <div className={`flex flex-col items-start bg-gray-200 p-8 rounded-lg  `}>

                    <h1 className={`text-2xl sm:text-3xl mt-4 text-center text-gray-700 font-bold ${style.heading}  group-hover:text-white`}>Personal Portfolio App</h1>
                    <h1 className={`text-md sm:text-md mt-4 text-left text-gray-700 ${style.heading}  group-hover:text-white`}>Campus recruitment system is a realtime recruitment application which is holding a portal for companies, campus students and an admin. </h1>
                    <h1 className={`text-md sm:text-md mt-4 text-left text-gray-700 ${style.heading}  group-hover:text-white`}>Companies can view student infos and marks and can hire those students. Student can directly apply for the jobs posted by companies. Companies can approve or reject those applications. Admin can see all comapnies, their jobs and student details.</h1>
                    <div className={`flex flex-row items-center w-full  mt-4`}>


                        <Link href={'/'}>
                            <button className='flex flex-row items-center  border border-gray-600 transition-colors duration-300 hover:bg-gray-600 text-gray-600 hover:text-white font-bold py-2 px-4 rounded'> <img className='h-6 w-6 mr-2' src={`/Assets/skills/global.png`} alt='problem-solving' />
                                View Webapp</button>
                        </Link>

                        <Link href={'/'}>
                            <button className='flex flex-row items-center   ml-8  border border-gray-600 transition-colors duration-300 hover:bg-gray-600 text-gray-600 hover:text-white font-bold py-2 px-4 rounded'> <img className='h-6 w-6 mr-2' src={`/Assets/socially-available/github.png`} alt='problem-solving' />
                                Github</button>
                        </Link>


                    </div>
                    <div className={`flex flex-row items-center w-full  mt-4`}>

                        <h1 className={`text-xl sm:text-xl text-left text-gray-700 ${style.heading}  group-hover:text-white`}>Stack Used: </h1>
                        <img className='h-8 w-8 ml-4' src={`/Assets/skills/favicon.ico`} alt='problem-solving' />
                        <img className='h-8 w-8 ml-4' src={`/Assets/skills/node-js.png`} alt='problem-solving' />
                        <img className='h-8 w-8 ml-4' src={`/Assets/skills/technology.png`} alt='problem-solving' />
                        <img className='h-8 w-8 ml-4' src={`/Assets/skills/db-transfer.png`} alt='problem-solving' />


                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Potfolio