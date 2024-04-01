import Copyright from '@/components/Copyright/Copyright'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Potfolio from '@/components/Portfolio/Potfolio'
import React from 'react'

const portfolioPage = () => {
  return (
    <>
        <Navbar selectedLink={'portfolio'}/>
        <Potfolio/>
        <Footer/>
        <Copyright/>
    </>
  )
}

export default portfolioPage