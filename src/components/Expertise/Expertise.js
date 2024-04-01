import React from 'react'
import style from './Expertise.module.css'
const Expertise = () => {
    return (
        <>
            <h1 className={`text-2xl sm:text-5xl mt-4 mb-4 text-center text-gray-700 font-bold ${style.heading}`}>Main Skills</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 gap-x-8 gap-y-8 my-4'>

                <div className={`flex flex-col items-center bg-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105 cursor-pointer group`}>
                    <img className='h-16 w-16' src={`/Assets/skills/structure.png`} alt='problem-solving' />
                    <h1 className={`text-2xl sm:text-3xl mt-4 text-center font-bold ${style.heading} group-hover:text-white`}>React js</h1>
                </div>

                <div className={`flex flex-col items-center bg-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105 cursor-pointer group`}>

                    <img className='h-16 w-16 ' src={`/Assets/skills/favicon.ico`} alt='problem-solving' />
                    <h1 className={`text-2xl sm:text-3xl mt-4 text-center text-gray-700 font-bold ${style.heading}  group-hover:text-white`}>Next js</h1>
                </div>

                <div className={`flex flex-col items-center bg-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105 cursor-pointer group`}>

                    <img className='h-16 w-16 ' src={`/Assets/skills/node-js.png`} alt='problem-solving' />
                    <h1 className={`text-2xl sm:text-3xl mt-4 text-center text-gray-700 font-bold  group-hover:text-white ${style.heading}`}>Node js</h1>
                </div>

                <div className={`flex flex-col items-center bg-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105 cursor-pointer group`}>

                    <img className='h-16 w-16 ' src={`/Assets/skills/technology.png`} alt='problem-solving' />
                    <h1 className={`text-2xl sm:text-3xl mt-4 text-center text-gray-700 font-bold  group-hover:text-white ${style.heading}`}>Javascript</h1>
                </div>

                <div className={`flex flex-col items-center bg-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105 cursor-pointer group`}>

                    <img className='h-16 w-16 ' src={`/Assets/skills/db-transfer.png`} alt='problem-solving' />
                    <h1 className={`text-2xl sm:text-3xl mt-4 text-center text-gray-700 font-bold  group-hover:text-white ${style.heading}`}>Mongo db</h1>
                </div>

                <div className={`flex flex-col items-center bg-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105 cursor-pointer group`}>

                    <img className='h-16 w-16 ' src={`/Assets/skills/tailwind.png`} alt='problem-solving' />
                    <h1 className={`text-2xl sm:text-3xl mt-4 text-center text-gray-700 font-bold  group-hover:text-white ${style.heading}`}>Tailwind Css</h1>
                </div>

                <div className={`flex flex-col items-center bg-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105 cursor-pointer group`}>

<img className='h-16 w-16 ' src={`/Assets/skills/teachings.png`} alt='problem-solving' />
<h1 className={`text-2xl sm:text-3xl mt-4 text-center text-gray-700 font-bold  group-hover:text-white ${style.heading}`}>Teaching</h1>
</div>
            </div>


            <h1 className={`text-2xl sm:text-5xl mt-12 mb-4 text-center text-gray-700 font-bold ${style.heading}`}>Side Skills</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 gap-x-8 gap-y-8 my-4'>

                <div className={`flex flex-col items-center bg-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105 cursor-pointer group`}>
                    <img className='h-16 w-16' src={`/Assets/skills/amazon.png`} alt='Aws' />
                    <h1 className={`text-2xl sm:text-3xl mt-4 text-center font-bold ${style.heading} group-hover:text-white`}>AWS</h1>
                </div>

                <div className={`flex flex-col items-center bg-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105 cursor-pointer group`}>

                    <img className='h-16 w-16 ' src={`/Assets/skills/robot.png`} alt='AI' />
                    <h1 className={`text-2xl sm:text-3xl mt-4 text-center text-gray-700 font-bold ${style.heading}  group-hover:text-white`}>Machine learning</h1>
                </div>

                <div className={`flex flex-col items-center bg-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105 cursor-pointer group`}>

                    <img className='h-16 w-16 ' src={`/Assets/skills/python.png`} alt='python' />
                    <h1 className={`text-2xl sm:text-3xl mt-4 text-center text-gray-700 font-bold  group-hover:text-white ${style.heading}`}>Python</h1>
                </div>

                <div className={`flex flex-col items-center bg-gray-200 p-8 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105 cursor-pointer group`}>

                    <img className='h-16 w-16 ' src={`/Assets/skills/structure.png`} alt='react-native' />
                    <h1 className={`text-2xl sm:text-3xl mt-4 text-center text-gray-700 font-bold  group-hover:text-white ${style.heading}`}>React native</h1>
                </div>

               
            </div>
        </>
    )
}

export default Expertise