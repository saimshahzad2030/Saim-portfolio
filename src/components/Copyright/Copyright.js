import React from 'react'
import style from './Copyright.module.css'
const Copyright = () => {
  return (
   <>
   <div className='bg-gray-700 h-px w-full'></div>
    <div className={`flex flex-col items-center py-8 font-bold ${style.container}`}>Copyright @ Saim Shahzad</div>
   </>

  )
}

export default Copyright